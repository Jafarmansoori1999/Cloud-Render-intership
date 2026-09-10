# ⚡ Quick Start Guide (5 Minutes)

> Get your full-stack app running in 5 minutes!

## 🎯 What You'll Have

```
✅ React Frontend (http://localhost:5173)
✅ Node.js Backend (http://localhost:5000)  
✅ MongoDB Database (Local or Cloud)
```

## Step 1: Setup Backend (2 minutes)

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example and update if needed)
cp .env.example .env

# Start backend server
npm run dev
```

**Expected Output:**
```
🚀 Server running at http://localhost:5000
✅ MongoDB connected successfully
```

## Step 2: Setup Frontend (2 minutes)

Open a **NEW TERMINAL** and run:

```bash
# Navigate to frontend
cd frontend

# Install dependencies (Vite already created package.json)
npm install

# Start frontend dev server
npm run dev
```

**Expected Output:**
```
➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

## Step 3: Open in Browser (1 minute)

```
🌐 Open: http://localhost:5173
```

Your React app is now connected to your backend API!

## 🧪 Test It Works

### Test Backend
```bash
# In any terminal
curl http://localhost:5000/health
# Should return: {"status":"OK","timestamp":"..."}
```

### Test API
```bash
# Create a user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'

# Get all users
curl http://localhost:5000/api/users
```

## 📝 Next Steps

1. ✅ Read [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed setup
2. ✅ Read [README.md](./README.md) for architecture overview
3. ✅ Read [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for deployment
4. ✅ Start building your features!

## 🔥 Common Issues

| Issue | Fix |
|-------|-----|
| **MongoDB Error** | Make sure MongoDB is running locally OR update MONGODB_URI in .env with Atlas URL |
| **Port in Use** | Change PORT in backend .env or kill the process using that port |
| **npm: command not found** | Install Node.js from https://nodejs.org |
| **Cannot find module** | Run `npm install` in the folder |

## 🚀 File Structure (Quick Reference)

```
├── frontend/              # React App
│   ├── src/
│   │   └── services/api.js  # ← API calls here
│   └── package.json
│
├── backend/               # Node.js Server  
│   ├── server.js          # ← Main file
│   ├── routes/users.js    # ← API endpoints
│   ├── models/User.js     # ← Database schema
│   └── package.json
│
├── README.md              # Overview
├── SETUP_GUIDE.md         # Detailed setup
└── DEPLOYMENT_GUIDE.md    # Deploy to Render
```

## 💡 Pro Tips

- Frontend auto-reloads when you save files (Vite magic! 🚀)
- Backend auto-reloads with Nodemon (run `npm run dev`)
- Open DevTools (F12) to debug frontend
- Check terminal output to debug backend
- Use Postman or VS Code REST Client to test API

## 🎓 Learn More

- Modify `frontend/src/App.jsx` to build your UI
- Add new endpoints in `backend/routes/users.js`
- Create new database models in `backend/models/`
- Check API docs in [backend/README.md](./backend/README.md)

## 🚀 Ready to Deploy?

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) to deploy on Render!

---

**That's it! You're all set! 🎉**

Happy coding! 💻
