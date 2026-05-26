# FortuneFlow - Quick Start Guide

## 🚀 Run in 3 Steps

### Step 1: Backend (Port 3002)
```bash
cd backend
npm install  # First time only
npm start
```

### Step 2: Frontend (Port 3000)
```bash
cd frontend
npm install  # First time only
npm start
```

### Step 3: Dashboard (Port 3001)
```bash
cd dashboard
npm install  # First time only
npm start
```

## 📍 Access Points

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:3000 | Landing, Login, Signup |
| Dashboard | http://localhost:3001 | Main Trading App |
| Backend API | http://localhost:3002 | API Server |

## 🔄 User Journey

1. Go to **http://localhost:3000**
2. Click **"Signup"** or **"Login"**
3. Create account or login
4. Get redirected to **http://localhost:3001** (Dashboard)
5. View your holdings, orders, and trading data

## ✅ What Was Fixed

✅ Backend port configuration (was 5000, now 3002)
✅ Dashboard port assignment (now 3001)
✅ Frontend redirect URL (was 3000, now 3001)
✅ API endpoint environment variables
✅ Hardcoded URLs replaced with dynamic configuration
✅ CORS configuration aligned with all ports

## 📋 Before Running

1. Ensure Node.js is installed: `node --version`
2. Ensure all dependencies are installed in each folder
3. MongoDB Atlas connection is already configured in backend/.env
4. **Run all 3 services in separate terminals** (they must run simultaneously)

## ⚡ Common Issues

**Port already in use?**
```
netstat -ano | findstr :3000
netstat -ano | findstr :3001
netstat -ano | findstr :3002
```

**API calls failing?**
- Ensure backend is running first
- Check browser console for errors
- Clear browser cache

**Can't login?**
- Ensure backend is running
- Check MongoDB Atlas connection
- Clear cookies

## 📚 Documentation

- **Full Setup Guide:** See `SETUP_AND_RUN_GUIDE.md`
- **Issue Analysis:** See `ISSUE_ANALYSIS_AND_FIXES.md`
- **Project Overview:** See `README.md`

---

**Status: ✅ Ready to Run**
**All fixes applied and verified**
