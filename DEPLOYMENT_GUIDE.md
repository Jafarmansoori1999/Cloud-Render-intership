# 🚀 Render Deployment Guide

> Complete step-by-step guide to deploy full-stack application on Render

## 📋 Overview

**Render** is a unified cloud platform to build and run all your apps and websites.

```
┌─────────────────────────────┐
│   Frontend (React + Vite)    │
│   Render Static Site         │
│   https://app.onrender.com   │
└──────────────┬───────────────┘
               │
         HTTP API Calls
               │
┌──────────────▼──────────────┐
│  Backend (Node.js/Express)  │
│  Render Web Service          │
│  https://api.onrender.com    │
└──────────────┬───────────────┘
               │
         Database Query
               │
┌──────────────▼──────────────┐
│ MongoDB Atlas (Cloud DB)     │
│ mongodb+srv://...            │
└─────────────────────────────┘
```

## ✅ Prerequisites

1. **GitHub Account** - https://github.com
2. **Render Account** - https://render.com (Free Plan Available)
3. **MongoDB Atlas Account** - https://mongodb.com/cloud/atlas
4. **Code pushed to GitHub repository**

## 🔧 Step 1: Setup MongoDB Atlas (Database)

### 1.1 Create MongoDB Atlas Account
```
1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up with email/GitHub
3. Create an organization
```

### 1.2 Create Free Cluster
```
1. Click "Create" button
2. Select "M0 Sandbox" (Free tier)
3. Select your preferred region (e.g., AWS - Virginia)
4. Click "Create Cluster"
5. Wait 5-10 minutes for cluster to initialize
```

### 1.3 Setup Database User
```
1. Go to "Database Access" (Left Sidebar)
2. Click "Add New Database User"
3. Authentication Method: "Username and Password"
4. Username: cloudrender
5. Password: Generate Secure Password (Copy it!)
6. Database User Privileges: "Read/Write to Database"
7. Click "Create Database User"
```

### 1.4 Setup Network Access
```
1. Go to "Network Access" (Left Sidebar)
2. Click "Add IP Address"
3. Select "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"
⚠️ Warning: This allows access from any IP. In production, restrict to Render IPs.
```

### 1.5 Get Connection String
```
1. Go to "Databases" (Left Sidebar)
2. Click "Connect" on your cluster
3. Select "Drivers" connection method
4. Select "Node.js" driver
5. Copy the connection string:
   mongodb+srv://cloudrender:<password>@cluster.mongodb.net/fullstack-app?retryWrites=true&w=majority
6. Replace <password> with your actual password
7. Keep this string safe! You'll need it for backend deployment
```

## 📦 Step 2: Prepare Code for Deployment

### 2.1 Update Backend package.json

```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "engines": {
    "node": "18.x"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "mongoose": "^7.0.0",
    "nodemon": "^2.0.0"
  }
}
```

### 2.2 Create .gitignore (Root)

```
# Dependencies
node_modules/
npm-debug.log

# Environment variables
.env
.env.local
.env.development.local

# Build outputs
dist/
.next/
build/

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db
```

### 2.3 Update Backend .env (for Production)

```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://cloudrender:<password>@cluster.mongodb.net/fullstack-app?retryWrites=true&w=majority
FRONTEND_URL=https://your-app.onrender.com
```

### 2.4 Update Frontend .env (for Production)

```env
VITE_API_URL=https://your-api.onrender.com
VITE_API_VERSION=v1
VITE_APP_NAME=Full-Stack App
```

### 2.5 Build Frontend for Production

```bash
cd frontend
npm run build
```

This creates `frontend/dist/` folder for deployment.

## 🌐 Step 3: Deploy Backend (Node.js/Express)

### 3.1 Login to Render
```
1. Go to: https://dashboard.render.com
2. Sign up with GitHub
3. Authorize Render to access your repositories
```

### 3.2 Create New Web Service
```
1. Click "New +" button (Top right)
2. Select "Web Service"
3. Select your GitHub repository
4. Click "Connect"
```

### 3.3 Configure Backend Service

| Setting | Value |
|---------|-------|
| **Name** | cloudrender-api |
| **Environment** | Node |
| **Build Command** | npm install |
| **Start Command** | npm start |
| **Region** | Oregon (or closest to you) |
| **Plan** | Free |

### 3.4 Add Environment Variables

In Render dashboard:
1. Scroll down to "Environment Variables"
2. Add each variable:

```
PORT = 5000
NODE_ENV = production
MONGODB_URI = mongodb+srv://cloudrender:<password>@cluster.mongodb.net/fullstack-app?retryWrites=true&w=majority
FRONTEND_URL = https://cloudrender-app.onrender.com
```

3. Click "Deploy"
4. Wait for deployment (3-5 minutes)
5. Your API URL: `https://cloudrender-api.onrender.com`

✅ Test Backend:
```
https://cloudrender-api.onrender.com/health
```

## 📱 Step 4: Deploy Frontend (React/Vite)

### 4.1 Create New Static Site

```
1. Click "New +" button (Top right)
2. Select "Static Site"
3. Select your GitHub repository
4. Click "Connect"
```

### 4.2 Configure Frontend Service

| Setting | Value |
|---------|-------|
| **Name** | cloudrender-web |
| **Build Command** | cd frontend && npm install && npm run build |
| **Publish Directory** | frontend/dist |
| **Region** | Oregon |
| **Plan** | Free |

### 4.3 Add Environment Variables

```
VITE_API_URL = https://cloudrender-api.onrender.com
VITE_API_VERSION = v1
VITE_APP_NAME = Full-Stack App
```

### 4.4 Deploy

1. Click "Deploy"
2. Wait for build and deployment (5-10 minutes)
3. Your app URL: `https://cloudrender-web.onrender.com`

## 🔗 Step 5: Connect Frontend to Backend

### Update Frontend .env

After deployment, update frontend environment to use Render URLs:

```env
VITE_API_URL=https://cloudrender-api.onrender.com
```

### Create API Service (frontend/src/services/api.js)

```javascript
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Get all users
export const getUsers = () => api.get('/api/users');

// Create new user
export const createUser = (userData) => api.post('/api/users', userData);

// Health check
export const healthCheck = () => api.get('/health');

export default api;
```

## 🧪 Step 6: Testing

### Test Backend API

```bash
# Health check
curl https://cloudrender-api.onrender.com/health

# Get users
curl https://cloudrender-api.onrender.com/api/users

# Create user
curl -X POST https://cloudrender-api.onrender.com/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}'
```

### Test Frontend

```
1. Open: https://cloudrender-web.onrender.com
2. Test all features
3. Check browser console for errors
4. Verify API calls in Network tab
```

## 📊 Monitoring & Debugging

### View Logs
```
Render Dashboard → Service → Logs
Shows real-time server logs
```

### Common Issues

| Issue | Solution |
|-------|----------|
| **502 Bad Gateway** | Check backend logs, verify database connection |
| **CORS Error** | Update backend CORS settings with frontend URL |
| **Database Connection Fail** | Verify MongoDB credentials and IP whitelist |
| **Build Failed** | Check build logs, ensure all dependencies installed |
| **API 404** | Verify backend is running, check endpoint paths |

## 🔄 Continuous Deployment

Render automatically deploys when you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "Update features"
git push origin main

# Render will automatically redeploy!
```

## 💰 Cost Estimation (Free Plan)

| Service | Free Tier | Cost |
|---------|-----------|------|
| **Backend (Web Service)** | 750 hours/month | $0 (spins down after 15 min inactivity) |
| **Frontend (Static Site)** | Unlimited | $0 |
| **MongoDB Atlas** | 512MB storage | $0 |
| **Total** | | **$0** 🎉 |

⚠️ **Note**: Free tier includes 750 hours/month. If you exceed, services pause until next month.

## 🚀 Production Checklist

- [ ] Database credentials secured
- [ ] Environment variables configured
- [ ] CORS properly configured
- [ ] API endpoints tested
- [ ] Error handling implemented
- [ ] Logging configured
- [ ] SSL/HTTPS enabled (Render auto-enables)
- [ ] Database backups configured
- [ ] Domain name connected (optional)
- [ ] Performance monitored

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Guide](https://docs.atlas.mongodb.com)
- [Express.js Production Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
- [React Production Optimization](https://react.dev/reference/react/memo)

## 🎯 Next Steps

1. ✅ Deploy application
2. 🔍 Test all features
3. 📈 Monitor performance
4. 🚀 Share with users
5. 🔄 Iterate and improve

---

**Happy Deploying! 🎉**

For issues, check Render support or contact the team.
