from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from models import User, SkillSwapRequest
import os
from dotenv import load_dotenv

load_dotenv()

class Database:
    client: AsyncIOMotorClient = None
    
database = Database()

async def connect_to_mongo():
    """Create database connection"""
    database.client = AsyncIOMotorClient(os.getenv("MONGODB_URL"))
    await init_beanie(
        database=database.client[os.getenv("DATABASE_NAME")], 
        document_models=[User, SkillSwapRequest]
    )
    print("Connected to MongoDB")

async def close_mongo_connection():
    """Close database connection"""
    database.client.close()
    print("Disconnected from MongoDB")
