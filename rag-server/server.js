const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
require('dotenv').config();

const { ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings } = require('@langchain/google-genai');
const { TaskType } = require("@google/generative-ai");
const { RecursiveCharacterTextSplitter } = require('langchain/text_splitter');
const { MemoryVectorStore } = require('langchain/vectorstores/memory');
const { createRetrievalChain } = require('langchain/chains/retrieval');
const { createStuffDocumentsChain } = require('langchain/chains/combine_documents');
const { ChatPromptTemplate } = require('@langchain/core/prompts');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// -- Configuration --
const DOCS_DIR = path.join(__dirname, '../textbook/docs');
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

if (!GOOGLE_API_KEY) {
  console.error("❌ GOOGLE_API_KEY is missing in .env file. The chatbot will not work.");
}

let ragChain = null;

// -- Initialization --
async function initializeRAG() {
  if (!GOOGLE_API_KEY) return;

  try {
    console.log("Loading documents from:", DOCS_DIR);
    
    // 1. Load Documents
    const files = glob.sync('**/*.md', { cwd: DOCS_DIR, absolute: true });
    console.log(`Found ${files.length} markdown files.`);

    const docs = [];
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf-8');
      docs.push({ 
        pageContent: content, 
        metadata: { source: path.relative(DOCS_DIR, file) } 
      });
    }

    // 2. Split Text
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const splitDocs = await splitter.splitDocuments(docs);
    console.log(`Split into ${splitDocs.length} chunks.`);

    // 3. Create Vector Store (In-Memory)
    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: GOOGLE_API_KEY,
      taskType: TaskType.RETRIEVAL_DOCUMENT,
    });
    
    console.log("Generating embeddings (this may take a moment)...");
    const vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings);

    // 4. Create Retriever
    const retriever = vectorStore.asRetriever({ k: 3 });

    // 5. Create Chain
    const model = new ChatGoogleGenerativeAI({
      apiKey: GOOGLE_API_KEY,
      modelName: "gemini-1.5-flash", 
      temperature: 0.7,
    });

    const prompt = ChatPromptTemplate.fromTemplate(`
      Answer the user's question based strictly on the following context. 
      If the answer is not in the context, say "I don't have that information in the course materials."
      
      Context:
      {context}
      
      Question: 
      {input}
    `);

    const combineDocsChain = await createStuffDocumentsChain({
      llm: model,
      prompt,
    });

    ragChain = await createRetrievalChain({
      retriever,
      combineDocsChain,
    });

    console.log("✅ RAG System Initialized and Ready!");

  } catch (error) {
    console.error("❌ Error initializing RAG:", error);
  }
}

// Start Initialization
initializeRAG();

// -- API Endpoints --

app.post('/chat', async (req, res) => {
  if (!ragChain) {
    return res.status(503).json({ error: "RAG system is not ready or API Key is missing." });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await ragChain.invoke({
      input: message,
    });

    res.json({ reply: response.answer });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Failed to process request." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 RAG Server running at http://localhost:${PORT}`);
});
