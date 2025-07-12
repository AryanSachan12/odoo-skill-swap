from beanie import Document, Indexed
from pydantic import EmailStr, Field
from typing import List, Optional, Annotated
from datetime import datetime
from beanie import PydanticObjectId

class User(Document):
    email: Annotated[EmailStr, Indexed(unique=True)]
    full_name: str
    password: str
    skills: List[str] = []
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Settings:
        name = "users"

class SkillSwapRequest(Document):
    requester_id: PydanticObjectId
    target_user_id: PydanticObjectId
    skill_offered: str
    skill_requested: str
    description: str
    status: str = "pending"  # pending, accepted, rejected, completed
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Settings:
        name = "skill_swap_requests"
