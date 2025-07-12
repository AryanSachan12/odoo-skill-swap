from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from models import SkillSwapRequest, User
from bson import ObjectId

router = APIRouter(prefix="/api/skills", tags=["Skills"])

# Pydantic models
class SkillSwapRequestCreate(BaseModel):
    target_user_id: str
    skill_offered: str
    skill_requested: str
    description: str

class SkillSwapRequestUpdate(BaseModel):
    requester_id: str
    target_user_id: str
    skill_offered: str
    skill_requested: str
    description: str
    status: str = "pending"

class SkillSwapResponse(BaseModel):
    id: str
    requester_id: str
    target_user_id: str
    skill_offered: str
    skill_requested: str
    description: str
    status: str
    created_at: datetime
    requester_name: Optional[str] = None
    target_user_name: Optional[str] = None
    
    class Config:
        from_attributes = True

# Mock database
async def get_user_name(user_id: str) -> str:
    """Helper function to get user name by ID"""
    try:
        user = await User.get(ObjectId(user_id))
        return user.full_name if user else f"User {user_id}"
    except:
        return f"User {user_id}"

@router.get("/swap-requests", response_model=List[SkillSwapResponse])
async def get_swap_requests():
    """Get all skill swap requests"""
    requests = await SkillSwapRequest.find_all().to_list()
    
    response_list = []
    for request in requests:
        requester_name = await get_user_name(str(request.requester_id))
        target_user_name = await get_user_name(str(request.target_user_id))
        
        response_list.append(SkillSwapResponse(
            id=str(request.id),
            requester_id=str(request.requester_id),
            target_user_id=str(request.target_user_id),
            skill_offered=request.skill_offered,
            skill_requested=request.skill_requested,
            description=request.description,
            status=request.status,
            created_at=request.created_at,
            requester_name=requester_name,
            target_user_name=target_user_name
        ))
    
    return response_list

@router.post("/swap-requests", response_model=SkillSwapResponse)
async def create_swap_request(request_data: SkillSwapRequestCreate):
    """Create a new skill swap request"""
    # For demo purposes, we'll use the first user as requester
    # In production, get requester_id from JWT token
    users = await User.find_all().to_list()
    if not users:
        raise HTTPException(status_code=400, detail="No users found")
    
    requester_id = users[0].id  # Use first user as requester for demo
    
    # Validate target user exists
    try:
        target_user = await User.get(ObjectId(request_data.target_user_id))
        if not target_user:
            raise HTTPException(status_code=404, detail="Target user not found")
    except:
        raise HTTPException(status_code=400, detail="Invalid target user ID")
    
    # Create new request
    new_request = SkillSwapRequest(
        requester_id=requester_id,
        target_user_id=ObjectId(request_data.target_user_id),
        skill_offered=request_data.skill_offered,
        skill_requested=request_data.skill_requested,
        description=request_data.description,
        status="pending"
    )
    await new_request.insert()
    
    # Get user names
    requester_name = await get_user_name(str(requester_id))
    target_user_name = await get_user_name(request_data.target_user_id)
    
    return SkillSwapResponse(
        id=str(new_request.id),
        requester_id=str(new_request.requester_id),
        target_user_id=str(new_request.target_user_id),
        skill_offered=new_request.skill_offered,
        skill_requested=new_request.skill_requested,
        description=new_request.description,
        status=new_request.status,
        created_at=new_request.created_at,
        requester_name=requester_name,
        target_user_name=target_user_name
    )

@router.patch("/swap-requests/{request_id}/status")
async def update_swap_request_status(request_id: str, status: str):
    """Update the status of a swap request"""
    try:
        request = await SkillSwapRequest.get(ObjectId(request_id))
        if not request:
            raise HTTPException(status_code=404, detail="Swap request not found")
    except:
        raise HTTPException(status_code=400, detail="Invalid request ID")
    
    if status not in ["pending", "accepted", "rejected", "completed"]:
        raise HTTPException(status_code=400, detail="Invalid status")
    
    request.status = status
    request.updated_at = datetime.utcnow()
    await request.save()
    
    return {"message": f"Request status updated to {status}"}

@router.get("/available-skills")
async def get_available_skills():
    """Get list of available skills from all users"""
    # This would typically query a database
    sample_skills = [
        "Python Programming",
        "Web Development",
        "Data Science",
        "Machine Learning",
        "Graphic Design",
        "Digital Marketing",
        "Project Management",
        "UI/UX Design",
        "Mobile App Development",
        "Photography",
        "Video Editing",
        "Content Writing",
        "Language Translation",
        "Music Production",
        "3D Modeling"
    ]
    return {"skills": sample_skills}

@router.get("/my-requests/{user_id}")
async def get_user_requests(user_id: str):
    """Get all requests for a specific user"""
    try:
        user_object_id = ObjectId(user_id)
    except:
        raise HTTPException(status_code=400, detail="Invalid user ID")
    
    # Find requests where user is either requester or target
    user_requests = await SkillSwapRequest.find(
        {"$or": [
            {"requester_id": user_object_id},
            {"target_user_id": user_object_id}
        ]}
    ).to_list()
    
    response_list = []
    for request in user_requests:
        requester_name = await get_user_name(str(request.requester_id))
        target_user_name = await get_user_name(str(request.target_user_id))
        
        response_list.append(SkillSwapResponse(
            id=str(request.id),
            requester_id=str(request.requester_id),
            target_user_id=str(request.target_user_id),
            skill_offered=request.skill_offered,
            skill_requested=request.skill_requested,
            description=request.description,
            status=request.status,
            created_at=request.created_at,
            requester_name=requester_name,
            target_user_name=target_user_name
        ))
    
    return response_list
