Write-Host "Starting Humanoid Robotics Book Project..." -ForegroundColor Green

# Check for RAG Server .env
$envFile = ".\rag-server\.env"
if (-not (Test-Path $envFile)) {
    Write-Host "⚠️  WARNING: rag-server\.env not found!" -ForegroundColor Yellow
    Write-Host "   Please copy rag-server\.env.example to rag-server\.env and add your GOOGLE_API_KEY." -ForegroundColor Yellow
    Write-Host "   The chatbot will not answer questions without it." -ForegroundColor Yellow
    Start-Sleep -Seconds 3
}

# Start RAG Server in a new window
Write-Host "🚀 Starting RAG Backend Server..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd rag-server; npm start"

# Start Docusaurus in the current window (or new one)
Write-Host "🦕 Starting Docusaurus Frontend..." -ForegroundColor Cyan
cd textbook
npm start

