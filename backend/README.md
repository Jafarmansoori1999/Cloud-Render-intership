# 🚀 Backend - Node.js + Express Server

> REST API server built with Express.js and MongoDB

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+
- MongoDB (Local or Atlas Cloud)

### Installation

```bash
# Install dependencies
npm install

# Create .env file
# Add your configuration (see .env.example)

# Start development server (with auto-reload)
npm run dev

# Or start production server
npm start
```

### Server Running
```
🚀 Server running at http://localhost:5000
📊 API: http://localhost:5000/api
❤️  Health Check: http://localhost:5000/health
```

## 📁 Project Structure

```
backend/
├── server.js            # Main Server File
├── .env                 # Environment Variables
├── .env.example         # Environment Template
├── package.json         # Dependencies & Scripts
├── models/              # Database Models
│   └── User.js          # User Schema & Model
├── routes/              # API Routes
│   └── users.js         # User API Endpoints
└── middleware/          # Custom Middleware (optional)
    └── auth.js          # Authentication
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start dev server with auto-reload (Nodemon) |
| `npm test` | Run tests |
| `npm install <package>` | Install new dependency |

## 📡 API Endpoints

### Health Check
```http
GET /health
Response: { "status": "OK", "timestamp": "2024-01-10T..." }
```

### Users API

#### Get All Users
```http
GET /api/users
Response: {
  "success": true,
  "count": 5,
  "data": [...]
}
```

#### Get Single User
```http
GET /api/users/:id
Response: { "success": true, "data": {...} }
```

#### Create User
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "bio": "Software Developer"
}

Response: {
  "success": true,
  "message": "User created successfully",
  "data": {...}
}
```

#### Update User
```http
PUT /api/users/:id
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com"
}

Response: { "success": true, "message": "User updated successfully", "data": {...} }
```

#### Delete User
```http
DELETE /api/users/:id
Response: { "success": true, "message": "User deleted successfully", "data": {...} }
```

## 🔐 Environment Variables

Create `.env` file:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/fullstack-app

# MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority

# CORS & Frontend
FRONTEND_URL=http://localhost:5173

# API
API_VERSION=v1
```

## 🗄️ Database Setup

### Local MongoDB
```bash
# Install MongoDB Community
# https://docs.mongodb.com/manual/installation/

# Start MongoDB
mongod

# Verify connection
mongo
```

### MongoDB Atlas (Cloud)
1. Create account: https://www.mongodb.com/cloud/atlas
2. Create cluster
3. Setup database user
4. Get connection string
5. Add to .env

## 🛡️ Security Best Practices

- ✅ Use environment variables for secrets
- ✅ Validate all user inputs
- ✅ Use CORS properly
- ✅ Implement rate limiting
- ✅ Use HTTPS in production
- ✅ Sanitize database queries
- ✅ Hash passwords with bcrypt
- ✅ Use JWT for authentication

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| **express** | Web framework |
| **cors** | CORS middleware |
| **dotenv** | Environment variables |
| **mongoose** | MongoDB ODM |
| **nodemon** | Dev auto-reload |

## 🧪 Testing API

### Using cURL
```bash
# Get all users
curl http://localhost:5000/api/users

# Create user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}'
```

### Using Postman
1. Download Postman
2. Create new requests
3. Test each endpoint
4. Save collection

### Using VS Code REST Client
```
# Install REST Client extension
# Create test.http file

GET http://localhost:5000/health

POST http://localhost:5000/api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

## 🚀 Deployment

See main [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md)

Quick steps:
1. Push to GitHub
2. Connect to Render
3. Set environment variables
4. Deploy as Web Service

## 📚 Resources

- [Express.js Docs](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Mongoose Docs](https://mongoosejs.com)
- [REST API Best Practices](https://restfulapi.net)

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Solution: Check MongoDB is running and connection string is correct
```

### CORS Error
```
Solution: Update FRONTEND_URL in .env
```

### Port Already in Use
```bash
# Find process
lsof -i :5000

# Kill process
kill -9 <PID>
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

Made with ❤️ using Express + MongoDB
