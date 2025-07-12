from beanie import Document, Indexed
from pydantic import EmailStr, Field
from typing import List, Optional
from datetime import datetime
from bson import ObjectId

class User(Document):
    email: Indexed(EmailStr, unique=True)
    full_name: str
    password: str
    skills: List[str] = []
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Settings:
        name = "users"
        
    class Config:
        json_encoders = {
            ObjectId: str
        }

class SkillSwapRequest(Document):
    requester_id: ObjectId
    target_user_id: ObjectId
    skill_offered: str
    skill_requested: str
    description: str
    status: str = "pending"  # pending, accepted, rejected, completed
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Settings:
        name = "skill_swap_requests"
        
    class Config:
        json_encoders = {
            ObjectId: str
        }
