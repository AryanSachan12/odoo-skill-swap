from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from typing import Optional

router = APIRouter(prefix="/api/auth", tags=["Authentication"])

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
    id: int
    email: str
    full_name: str
    skills: list[str]
    is_active: bool

# Mock user database (replace with actual database later)
mock_users = []

@router.post("/register", response_model=UserResponse)
async def register_user(user_data: UserRegister):
    """Register a new user"""
    # Check if user already exists
    existing_user = next((u for u in mock_users if u["email"] == user_data.email), None)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Create new user
    new_user = {
        "id": len(mock_users) + 1,
        "email": user_data.email,
        "full_name": user_data.full_name,
        "skills": user_data.skills,
        "is_active": True,
        "password": user_data.password  # In production, hash this!
    }
    mock_users.append(new_user)
    
    # Return user without password
    return UserResponse(**{k: v for k, v in new_user.items() if k != "password"})

@router.post("/login")
async def login_user(credentials: UserLogin):
    """Login user and return access token"""
    # Find user
    user = next((u for u in mock_users if u["email"] == credentials.email), None)
    if not user or user["password"] != credentials.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # In production, generate JWT token here
    return {
        "access_token": f"mock_token_for_{user['id']}",
        "token_type": "bearer",
        "user": UserResponse(**{k: v for k, v in user.items() if k != "password"})
    }

@router.get("/me", response_model=UserResponse)
async def get_current_user():
    """Get current user profile"""
    # This is a mock implementation
    # In production, decode JWT token and get user from database
    if mock_users:
        user = mock_users[0]  # Return first user for demo
        return UserResponse(**{k: v for k, v in user.items() if k != "password"})
    else:
        raise HTTPException(status_code=404, detail="User not found")

@router.get("/users", response_model=list[UserResponse])
async def get_all_users():
    """Get all users (for development/testing)"""
    return [UserResponse(**{k: v for k, v in user.items() if k != "password"}) for user in mock_users]
