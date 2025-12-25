// RAG Server for Humanoid Robotics Book AI
// Setup instructions due to LangChain compatibility issues

console.log("🔧 RAG Server Setup Instructions for Humanoid Robotics Book AI");
console.log("=" .repeat(60));

console.log("\n📋 REQUIRED STEPS TO RUN THE PROJECT:");
console.log("1. Make sure you have a valid Google API Key in rag-server/.env");
console.log("2. The key should be saved as: GOOGLE_API_KEY=your_actual_key_here");
console.log("3. From the project root, run these commands in separate terminals:");

console.log("\n🖥️  Terminal 1 - Start the RAG server:");
console.log("   cd rag-server");
console.log("   npm install");  // Install dependencies
console.log("   npm start");    // Start the server

console.log("\n📖 Terminal 2 - Start the documentation site:");
console.log("   cd textbook");
console.log("   npm install");  // Install dependencies
console.log("   npm start");    // Start the website

console.log("\n🌐 The RAG server will run on http://localhost:3001");
console.log("🌐 The documentation site will run on http://localhost:3000");

console.log("\n⚠️  NOTE: Due to LangChain version compatibility issues,");
console.log("   the RAG server may require specific package versions.");
console.log("   If you get import errors, run: npm install @langchain/community");

console.log("\n💡 The chatbot functionality connects to the RAG server at startup.");
console.log("   If the RAG server is not running, the chatbot will show an error.");

console.log("\n✅ Once both servers are running, visit http://localhost:3000");
console.log("   You should see the Humanoid Robotics book with the AI chatbot in the bottom-right corner.");

console.log("\n" + "=".repeat(60));
console.log("🚀 Server setup instructions displayed. Press Ctrl+C to exit.");
console.log("   Then follow the instructions above to start the servers properly.");