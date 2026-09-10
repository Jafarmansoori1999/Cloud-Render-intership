# 📖 Full-Stack Project Setup Guide

> Step-by-step instructions to set up and run the full-stack application locally

## 🖥️ System Requirements

- **Node.js**: v18+ ([Download](https://nodejs.org/))
- **npm**: v9+ (comes with Node.js)
- **MongoDB**: v5+ (Local or Cloud Atlas)
- **Git**: v2.35+ ([Download](https://git-scm.com/))
- **Code Editor**: VS Code, WebStorm, or similar

## ✅ Verification

```bash
# Check Node.js
node --version
# Expected: v18.x.x or higher

# Check npm
npm --version
# Expected: v9.x.x or higher

# Check Git
git --version
# Expected: git version 2.35+
```

## 📥 Step 1: Clone Repository

```bash
# Clone the project
git clone https://github.com/your-username/Cloud-Render-intership.git

# Navigate to project
cd Cloud-Render-intership

# Check project structure
ls -la
```

Expected structure:
```
frontend/          # React Application
backend/           # Node.js Server
README.md
DEPLOYMENT_GUIDE.md
.gitignore
```

## 🗄️ Step 2: Setup Database

### Option A: MongoDB Atlas (Recommended for Cloud)

**Benefits**: Cloud-hosted, no local installation, free tier available

#### 2A.1 Create Account
```
1. Visit: https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Sign up with email or GitHub
4. Accept terms and continue
```

#### 2A.2 Create Organization & Project
```
1. Create Organization Name: "CloudRender"
2. Create Project Name: "FullStack"
3. Click "Create Project"
```

#### 2A.3 Build Database
```
1. Click "Create" (Deployment)
2. Select Free Shared Cluster
3. Choose Cloud Provider: AWS
4. Choose Region: (Virginia/Frankfurt/Singapore)
5. Click "Create Cluster"
6. Wait 5-10 minutes...
```

#### 2A.4 Create Database User
```
1. Left sidebar → Database Access
2. Add Database User
3. Username: fullstack_user
4. Password: (Use auto-generated, SAVE IT!)
5. Database Privileges: Read/Write
6. Add User
```

#### 2A.5 Setup Network Access
```
1. Left sidebar → Network Access
2. Add IP Address
3. Allow from: 0.0.0.0/0 (Allow everywhere)
4. Confirm
```

#### 2A.6 Get Connection String
```
1. Go to Clusters → Connect
2. Select "Drivers"
3. Select "Node.js"
4. Copy connection string:
   mongodb+srv://fullstack_user:<password>@cluster.mongodb.net/fullstackdb?retryWrites=true&w=majority
5. Replace <password> with your actual password
```

### Option B: Local MongoDB (For Development Only)

**Benefits**: Fast, no internet required, good for development

#### 2B.1 Install MongoDB Community
```bash
# macOS with Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Windows - Download installer
# https://www.mongodb.com/try/download/community

# Linux (Ubuntu)
sudo apt-get install mongodb
```

#### 2B.2 Start MongoDB Service
```bash
# macOS
brew services start mongodb-community

# Windows - Already running as service after installation

# Linux
sudo systemctl start mongod

# Verify it's running
mongo --version
```

#### 2B.3 Connection String
```
mongodb://localhost:27017/fullstackdb
```

## ⚙️ Step 3: Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create/Update .env file with:
# PORT=5000
# NODE_ENV=development
# MONGODB_URI=mongodb+srv://fullstack_user:<password>@cluster.mongodb.net/fullstackdb
# FRONTEND_URL=http://localhost:5173
```

### Edit backend/.env

```bash
# Using nano editor
nano .env

# Or using VS Code
code .env
```

### Content of .env:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
# Local: mongodb://localhost:27017/fullstackdb
# Atlas: mongodb+srv://username:password@cluster.mongodb.net/dbname
MONGODB_URI=mongodb+srv://fullstack_user:<YOUR_PASSWORD>@cluster.mongodb.net/fullstackdb?retryWrites=true&w=majority

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# API Configuration
API_VERSION=v1
```

### Start Backend
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Expected output:
```
🚀 Server running at http://localhost:5000
📊 API: http://localhost:5000/api
❤️  Health Check: http://localhost:5000/health
✅ MongoDB connected successfully
```

### Test Backend
```bash
# In new terminal
curl http://localhost:5000/health
# Response: {"status":"OK","timestamp":"..."}
```

## 🎨 Step 4: Setup Frontend

Open a **new terminal** and:

```bash
# From project root, navigate to frontend
cd frontend

# Install dependencies
npm install

# Create/Update .env file
nano .env
```

### Content of .env:
```env
VITE_API_URL=http://localhost:5000
VITE_API_VERSION=v1
VITE_APP_NAME=Full-Stack App
```

### Start Frontend
```bash
# Development mode
npm run dev
```

Expected output:
```
VITE v5.0.0  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

## 🌐 Step 5: Verify Everything Works

### 5.1 Check Backend is Running
```bash
# In terminal
curl http://localhost:5000/health

# Expected response:
# {"status":"OK","timestamp":"2024-01-10T..."}
```

### 5.2 Open Frontend
```
1. Open browser: http://localhost:5173
2. Should see React app running
3. Check browser console (F12) for any errors
```

### 5.3 Test API Integration
```bash
# Create a test user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}'

# Get all users
curl http://localhost:5000/api/users
```

## 📝 Project File Structure

```
Cloud-Render-intership/
│
├── frontend/
│   ├── src/
│   │   ├── components/         # React Components
│   │   ├── pages/              # Page Components
│   │   ├── services/           # API Services
│   │   │   └── api.js          # Axios Configuration
│   │   ├── App.jsx             # Main Component
│   │   ├── main.jsx            # Entry Point
│   │   └── index.css           # Global Styles
│   ├── public/                 # Static Assets
│   ├── .env                    # Environment Variables
│   ├── package.json            # Dependencies
│   ├── vite.config.js          # Vite Configuration
│   └── index.html              # HTML Template
│
├── backend/
│   ├── server.js               # Main Server File
│   ├── .env                    # Environment Variables
│   ├── package.json            # Dependencies & Scripts
│   ├── models/                 # MongoDB Models
│   │   └── User.js             # User Schema
│   └── routes/                 # API Routes
│       └── users.js            # User Routes
│
├── .gitignore                  # Git Ignore Rules
├── README.md                   # Project Documentation
├── SETUP_GUIDE.md              # This File
└── DEPLOYMENT_GUIDE.md         # Deployment Instructions
```

## 🔧 Common Commands

### Backend Commands
```bash
# Start development server (auto-reloads)
npm run dev

# Start production server
npm start

# Install new package
npm install package-name

# View installed packages
npm list
```

### Frontend Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🐛 Troubleshooting

### Problem: "Cannot find module 'express'"
**Solution:**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

### Problem: MongoDB Connection Error
**Solution:**
1. Check MongoDB is running
2. Verify connection string in .env
3. Check username/password (no special characters without encoding)
4. Ensure IP is whitelisted (Atlas)

### Problem: CORS Error
**Solution:**
```bash
# Update FRONTEND_URL in backend/.env to match your frontend URL
FRONTEND_URL=http://localhost:5173
```

### Problem: Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

### Problem: Frontend Can't Connect to Backend
```
1. Ensure backend is running: http://localhost:5000/health
2. Check VITE_API_URL in frontend/.env
3. Check browser console (F12) for error messages
4. Verify CORS is enabled in backend
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Queries](https://docs.mongodb.com/manual/crud/)
- [Vite Guide](https://vitejs.dev/guide/)
- [RESTful API Design](https://restfulapi.net)
- [JavaScript Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

## 🚀 Next Steps

1. ✅ Run application locally
2. 📝 Understand project structure
3. 🔨 Make small changes to familiarize
4. 🧪 Test API endpoints
5. 📖 Read DEPLOYMENT_GUIDE.md for Render deployment
6. 🌐 Deploy to Render

## 💡 Tips

- **Debug Frontend**: Open browser DevTools (F12)
- **Debug Backend**: Check terminal output and server logs
- **API Testing**: Use Postman or VS Code REST Client
- **Database**: Use MongoDB Compass to visualize data
- **Version Control**: Commit frequently with meaningful messages

## ❓ FAQ

**Q: Can I use a different database?**
A: Yes! Update Mongoose connection in server.js and models.

**Q: How do I add authentication?**
A: Use JWT tokens, bcrypt for passwords, and middleware verification.

**Q: Can I deploy without Render?**
A: Yes! Use Vercel (frontend), Heroku (backend), AWS, etc.

**Q: How do I handle environment secrets?**
A: Never commit .env files! Use .gitignore and Render's environment variables.

---

**Ready to build? Start with `npm run dev` in both folders! 🚀**
