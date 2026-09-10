# Render.com Configuration Files
# These files help you deploy quickly to Render

## Option 1: Using Build Specifications (Recommended)

### backend/render.yaml
```yaml
services:
  - type: web
    name: cloudrender-api
    env: node
    plan: free
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 5000
```

## Option 2: Using Dashboard

See DEPLOYMENT_GUIDE.md for step-by-step instructions

## Environment Variables to Set on Render

### For Backend Service
```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fullstack-app
FRONTEND_URL=https://your-app.onrender.com
API_VERSION=v1
```

### For Frontend (during build)
```
VITE_API_URL=https://your-api.onrender.com
VITE_API_VERSION=v1
VITE_APP_NAME=Full-Stack App
```

## Deployment Commands

### Backend
- Build Command: `npm install`
- Start Command: `npm start`
- Publish Directory: (leave empty for web service)

### Frontend
- Build Command: `cd frontend && npm install && npm run build`
- Publish Directory: `frontend/dist`

## Quick Deploy Steps

1. Push code to GitHub
2. Go to https://dashboard.render.com
3. Click "New +" → Select service type
4. Connect GitHub repository
5. Configure as per above
6. Click "Deploy"
7. Get your URL and update environment variables

## Troubleshooting Deployment

- Check build logs in Render dashboard
- Verify environment variables are set
- Ensure MongoDB connection string is correct
- Check GitHub repository is public or authorized
- Verify package.json scripts are correct

See DEPLOYMENT_GUIDE.md for complete instructions!
