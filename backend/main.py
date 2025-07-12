from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
from dotenv import load_dotenv
import os

# Import route modules
from routes.auth import router as auth_router
from routes.skills import router as skills_router

# Import database connection
from database import connect_to_mongo, close_mongo_connection

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="Skill Swap Platform API",
    description="Backend API for the Skill Swap Platform",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Database events
@app.on_event("startup")
async def startup_event():
    await connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_event():
    await close_mongo_connection()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # Frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth_router)
app.include_router(skills_router)

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to Skill Swap Platform API", "status": "active"}

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy", "message": "API is running successfully"}

# API info endpoint
@app.get("/api/info")
async def api_info():
    return {
        "name": "Skill Swap Platform API",
        "version": "1.0.0",
        "description": "Backend API for skill swapping platform",
        "endpoints": {
            "docs": "/docs",
            "redoc": "/redoc",
            "health": "/health"
        }
    }

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )