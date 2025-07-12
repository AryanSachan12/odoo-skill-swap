from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from typing import Optional
from passlib.context import CryptContext
from models import User
from beanie import PydanticObjectId

router = APIRouter(prefix="/api/auth", tags=["Authentication"])

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# Pydantic models for request/response
class UserRegister(BaseModel):
    email: EmailStr
    password: str
    full_name: str
    skills: Optional[list[str]] = []

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: str
    email: str
    full_name: str
    skills: list[str]
    is_active: bool
    
    class Config:
        from_attributes = True

@router.post("/register", response_model=UserResponse)
async def register_user(user_data: UserRegister):
    """Register a new user"""
    # Check if user already exists
    existing_user = await User.find_one(User.email == user_data.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Create new user
    hashed_password = hash_password(user_data.password)
    new_user = User(
        email=user_data.email,
        full_name=user_data.full_name,
        password=hashed_password,
        skills=user_data.skills or [],
        is_active=True
    )
    await new_user.insert()
    
    # Return user response
    return UserResponse(
        id=str(new_user.id),
        email=new_user.email,
        full_name=new_user.full_name,
        skills=new_user.skills,
        is_active=new_user.is_active
    )

@router.post("/login")
async def login_user(credentials: UserLogin):
    """Login user and return access token"""
    # Find user
    user = await User.find_one(User.email == credentials.email)
    if not user or not verify_password(credentials.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # In production, generate JWT token here
    return {
        "access_token": f"mock_token_for_{str(user.id)}",
        "token_type": "bearer",
        "user": UserResponse(
            id=str(user.id),
            email=user.email,
            full_name=user.full_name,
            skills=user.skills,
            is_active=user.is_active
        )
    }

@router.get("/me", response_model=UserResponse)
async def get_current_user():
    """Get current user profile"""
    # This is a mock implementation
    # In production, decode JWT token and get user from database
    users = await User.find_all().to_list()
    if users:
        user = users[0]  # Return first user for demo
        return UserResponse(
            id=str(user.id),
            email=user.email,
            full_name=user.full_name,
            skills=user.skills,
            is_active=user.is_active
        )
    else:
        raise HTTPException(status_code=404, detail="User not found")

@router.get("/users", response_model=list[UserResponse])
async def get_all_users():
    """Get all users (for development/testing)"""
    users = await User.find_all().to_list()
    return [
        UserResponse(
            id=str(user.id),
            email=user.email,
            full_name=user.full_name,
            skills=user.skills,
            is_active=user.is_active
        ) for user in users
    ]
