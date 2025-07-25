# Skill Swap Platform

A modern web application that allows users to exchange skills and expertise with each other. Built with React frontend and FastAPI backend with MongoDB integration.

## 🚀 Features

- **User Authentication**: Register and login with secure password hashing
- **Skill Management**: Add and showcase your skills
- **Skill Swapping**: Create requests to exchange skills with other users
- **Request Management**: Track and manage skill swap requests
- **Modern UI**: Beautiful and responsive interface built with React and Tailwind CSS

## 🛠 Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

### Backend
- **FastAPI** - Modern Python web framework
- **MongoDB** - NoSQL database
- **Beanie ODM** - Object Document Mapper for MongoDB
- **Pydantic** - Data validation using Python type annotations
- **Uvicorn** - ASGI server
- **Passlib** - Password hashing
- **Python-JOSE** - JWT token handling

## 📁 Project Structure

```
odoo/
├── backend/                 # FastAPI backend
│   ├── routes/             # API route handlers
│   │   ├── auth.py         # Authentication endpoints
│   │   └── skills.py       # Skill swap endpoints
│   ├── models.py           # MongoDB models
│   ├── database.py         # Database connection
│   ├── main.py             # FastAPI application
│   ├── requirements.txt    # Python dependencies
│   ├── .env               # Environment variables
│   └── .gitignore         # Git ignore file
├── src/                    # React frontend
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── assets/            # Static assets
│   └── App.jsx            # Main App component
├── public/                 # Public assets
└── package.json           # Frontend dependencies
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.11 or higher)
- **MongoDB** (local installation or MongoDB Atlas)

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment:**
   ```bash
   # Windows
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Set up environment variables:**
   - Copy `.env.example` to `.env` (if exists) or use the existing `.env`
   - Update MongoDB connection string if needed:
   ```env
   MONGODB_URL=mongodb://localhost:27017
   DATABASE_NAME=skillswap
   ```

6. **Start MongoDB:**
   - Local: Start MongoDB service
   - Atlas: Ensure connection string is correct

7. **Run the backend:**
   ```bash
   python main.py
   ```

   The API will be available at: `http://localhost:8000`
   - API Documentation: `http://localhost:8000/docs`
   - ReDoc: `http://localhost:8000/redoc`

### Frontend Setup

1. **Navigate to project root:**
   ```bash
   cd ..  # if you're in backend directory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   The frontend will be available at: `http://localhost:5173`

## 📚 API Endpoints

### Authentication (`/api/auth`)
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile
- `GET /api/auth/users` - Get all users (development)

### Skills (`/api/skills`)
- `GET /api/skills/swap-requests` - Get all skill swap requests
- `POST /api/skills/swap-requests` - Create new swap request
- `PATCH /api/skills/swap-requests/{id}/status` - Update request status
- `GET /api/skills/available-skills` - Get available skills
- `GET /api/skills/my-requests/{user_id}` - Get user's requests

## 🗄 Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  email: String (unique),
  full_name: String,
  password: String (hashed),
  skills: [String],
  is_active: Boolean,
  created_at: DateTime,
  updated_at: DateTime
}
```

### Skill Swap Request Collection
```javascript
{
  _id: ObjectId,
  requester_id: ObjectId,
  target_user_id: ObjectId,
  skill_offered: String,
  skill_requested: String,
  description: String,
  status: String, // "pending", "accepted", "rejected", "completed"
  created_at: DateTime,
  updated_at: DateTime
}
```

## 🔧 Development

### Running Tests
```bash
# Backend tests (if implemented)
cd backend
python -m pytest

# Frontend tests
npm test
```

### Building for Production

#### Frontend
```bash
npm run build
```

#### Backend
The FastAPI backend can be deployed using:
- Docker
- Heroku
- AWS Lambda
- Traditional VPS

## 🌍 Environment Variables

### Backend (.env)
```env
# Server configuration
HOST=0.0.0.0
PORT=8000
DEBUG=True

# MongoDB configuration
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=skillswap

# Security
SECRET_KEY=your-secret-key-here-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# CORS origins
CORS_ORIGINS=http://localhost:3000,http://localhost:5173
```

## 🚀 Deployment

### Backend Deployment
1. Set up production MongoDB instance
2. Update environment variables for production
3. Deploy using your preferred method (Docker, Heroku, etc.)

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Update API endpoints to point to production backend


## 👥 Authors

- **Aryan Sachan** - Initial work and frontend development
- **Ravi Garg** - Backend development


**Happy Skill Swapping! 🔄**