# 🚀 Full-Stack Professional Website

> Complete end-to-end full-stack web application with React frontend, Node.js backend, and MongoDB database.

## 📋 Project Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      FRONTEND (React + Vite)                     │
│              http://localhost:5173 (Development)                 │
│  - UI Components (React)                                         │
│  - State Management                                              │
│  - API Integration                                               │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                    API Calls (HTTP)
                           │
┌──────────────────────────▼──────────────────────────────────────┐
│                   BACKEND (Node.js + Express)                    │
│              http://localhost:5000 (Development)                 │
│  - REST API Endpoints                                            │
│  - Business Logic                                                │
│  - Authentication & Authorization                                │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                    Database Queries
                           │
┌──────────────────────────▼──────────────────────────────────────┐
│                 DATABASE (MongoDB / PostgreSQL)                   │
│           Local: mongodb://localhost:27017                       │
│           Cloud: MongoDB Atlas                                   │
│  - User Data                                                     │
│  - Application Data                                              │
│  - Persistent Storage                                            │
└─────────────────────────────────────────────────────────────────┘
```

## 📁 Project Structure

```
Cloud-Render-intership/
├── frontend/                 # React + Vite Application
│   ├── src/
│   │   ├── components/      # Reusable React Components
│   │   ├── pages/           # Page Components
│   │   ├── services/        # API Service Layer
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env                 # Frontend Environment Variables
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # Node.js + Express Application
│   ├── server.js            # Main Server File
│   ├── .env                 # Backend Environment Variables
│   ├── package.json
│   └── models/              # Database Models
│
├── README.md                # This File
├── SETUP_GUIDE.md           # Complete Setup Instructions
├── DEPLOYMENT_GUIDE.md      # Render Deployment Guide
└── .gitignore
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Build Tool (Lightning Fast)
- **Tailwind CSS** - Utility-First CSS Framework
- **Axios** - HTTP Client for API Calls

### Backend
- **Node.js** - JavaScript Runtime
- **Express.js** - Web Framework
- **MongoDB** - NoSQL Database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-Origin Resource Sharing
- **Dotenv** - Environment Variable Management

### DevTools
- **Nodemon** - Auto-Restart Development Server
- **Oxlint** - Fast JavaScript Linter

## 🚀 Quick Start

### Prerequisites
```bash
# Install Node.js & npm
# Download: https://nodejs.org/

# Verify Installation
node --version
npm --version
```

### 1️⃣ Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Start development server
npm run dev

# Server running at: http://localhost:5000
```

### 2️⃣ Setup Frontend

```bash
# Navigate to frontend folder (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Application running at: http://localhost:5173
```

### 3️⃣ Setup Database

#### Option A: MongoDB Atlas (Cloud)
```
1. Go to https://www.mongodb.com/cloud/atlas
2. Create Free Cluster
3. Get Connection String
4. Update backend/.env: MONGODB_URI=<your-connection-string>
```

#### Option B: Local MongoDB
```bash
# Install MongoDB Community Edition
# https://docs.mongodb.com/manual/installation/

# Start MongoDB Service
mongod

# Connection String: mongodb://localhost:27017/fullstack-app
```

## 📡 API Documentation

### Health Check
```http
GET /health
Response: { "status": "OK", "timestamp": "2024-01-10T..." }
```

### Get All Users
```http
GET /api/users
Response: [{ "_id": "...", "name": "John", "email": "john@example.com", "createdAt": "..." }]
```

### Create New User
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}

Response: { "_id": "...", "name": "John Doe", "email": "john@example.com", "createdAt": "..." }
```

## 🌐 Deployment (Render)

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete instructions.

### Quick Deploy Steps:
1. Push code to GitHub
2. Connect GitHub to Render
3. Deploy Backend as Web Service
4. Deploy Frontend as Static Site
5. Connect with environment variables

## 📦 Build for Production

### Frontend Build
```bash
cd frontend
npm run build
# Output: dist/ folder (ready for deployment)
```

### Backend Production
```bash
cd backend
npm start
# NODE_ENV=production npm start
```

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/fullstack-app
FRONTEND_URL=http://localhost:5173
API_VERSION=v1
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
VITE_API_VERSION=v1
VITE_APP_NAME=Full-Stack App
```

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Vite Documentation](https://vitejs.dev)
- [Render Deployment](https://render.com)
- [REST API Best Practices](https://restfulapi.net)

## 🤝 Contributing

Feel free to fork and submit pull requests!

## 📝 License

MIT License - Feel free to use this project!

---

**Made with ❤️ by Cloud Render Internship**
