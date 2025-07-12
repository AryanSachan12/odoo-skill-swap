from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

router = APIRouter(prefix="/api/skills", tags=["Skills"])

# Pydantic models
class SkillSwapRequest(BaseModel):
    id: Optional[int] = None
    requester_id: int
    target_user_id: int
    skill_offered: str
    skill_requested: str
    description: str
    status: str = "pending"  # pending, accepted, rejected, completed
    created_at: Optional[datetime] = None

class SkillSwapResponse(BaseModel):
    id: int
    requester_id: int
    target_user_id: int
    skill_offered: str
    skill_requested: str
    description: str
    status: str
    created_at: datetime
    requester_name: Optional[str] = None
    target_user_name: Optional[str] = None

# Mock database
mock_swap_requests = []

@router.get("/swap-requests", response_model=List[SkillSwapResponse])
async def get_swap_requests():
    """Get all skill swap requests"""
    return [
        SkillSwapResponse(
            **request,
            created_at=request.get("created_at", datetime.now()),
            requester_name=f"User {request['requester_id']}",
            target_user_name=f"User {request['target_user_id']}"
        ) 
        for request in mock_swap_requests
    ]

@router.post("/swap-requests", response_model=SkillSwapResponse)
async def create_swap_request(request_data: SkillSwapRequest):
    """Create a new skill swap request"""
    new_request = {
        "id": len(mock_swap_requests) + 1,
        "requester_id": request_data.requester_id,
        "target_user_id": request_data.target_user_id,
        "skill_offered": request_data.skill_offered,
        "skill_requested": request_data.skill_requested,
        "description": request_data.description,
        "status": "pending",
        "created_at": datetime.now()
    }
    mock_swap_requests.append(new_request)
    
    return SkillSwapResponse(
        **new_request,
        requester_name=f"User {new_request['requester_id']}",
        target_user_name=f"User {new_request['target_user_id']}"
    )

@router.patch("/swap-requests/{request_id}/status")
async def update_swap_request_status(request_id: int, status: str):
    """Update the status of a swap request"""
    request = next((r for r in mock_swap_requests if r["id"] == request_id), None)
    if not request:
        raise HTTPException(status_code=404, detail="Swap request not found")
    
    if status not in ["pending", "accepted", "rejected", "completed"]:
        raise HTTPException(status_code=400, detail="Invalid status")
    
    request["status"] = status
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
async def get_user_requests(user_id: int):
    """Get all requests for a specific user"""
    user_requests = [
        request for request in mock_swap_requests 
        if request["requester_id"] == user_id or request["target_user_id"] == user_id
    ]
    
    return [
        SkillSwapResponse(
            **request,
            created_at=request.get("created_at", datetime.now()),
            requester_name=f"User {request['requester_id']}",
            target_user_name=f"User {request['target_user_id']}"
        ) 
        for request in user_requests
    ]
