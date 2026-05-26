# FortuneFlow - Complete Setup & Run Guide

## Project Architecture

```
FortuneFlow (Stock Trading Application)
├── Frontend (React) - Port 3000
│   └── Landing page, Login, Signup, Profile
├── Dashboard (React) - Port 3001
│   └── Main app: Holdings, Orders, Positions, Funds, Apps, WatchList
└── Backend (Express + MongoDB) - Port 3002
    └── API server with authentication and data management
```

## Prerequisites

Ensure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org)
- **npm** (comes with Node.js)
- **MongoDB Atlas Account** - [Create Account](https://www.mongodb.com/cloud/atlas)

## Installation Steps

### 1. Backend Setup

```bash
cd backend
npm install
```

**Backend .env file configuration:**
- `MONGO_URL` - MongoDB Atlas connection string (already configured)
- `PORT` - Set to 3002
- `SESSION_SECRET` - JWT secret (already set)

### 2. Frontend Setup

```bash
cd frontend
npm install
```

**Frontend .env file configuration:**
- `REACT_APP_API_BASE` - Backend URL: `http://localhost:3002`
- `REACT_APP_LOGIN_URL` - Frontend URL: `http://localhost:3000`

### 3. Dashboard Setup

```bash
cd dashboard
npm install
```

**Dashboard .env file configuration:**
- `REACT_APP_API_BASE` - Backend URL: `http://localhost:3002`
- `REACT_APP_LOGIN_URL` - Frontend URL: `http://localhost:3000`
- `PORT` - Set to 3001

## Running the Application

You need to run **3 separate terminals** for the three services:

### Terminal 1: Backend Server (Port 3002)

```bash
cd backend
npm start
```

Expected output:
```
App started!
DB started!
```

### Terminal 2: Frontend App (Port 3000)

```bash
cd frontend
npm start
```

The browser will automatically open to `http://localhost:3000`

### Terminal 3: Dashboard App (Port 3001)

```bash
cd dashboard
npm start
```

The browser will open to `http://localhost:3001` (when accessed from frontend after login)

## User Flow

1. **Start on Frontend** (http://localhost:3000)
   - See landing page with navigation
   - Click "Login" or "Signup"

2. **Create Account or Login**
   - Frontend authenticates with Backend (port 3002)
   - Auth token stored in cookies

3. **Access Dashboard**
   - After successful login, click "Dashboard"
   - Redirected to http://localhost:3001
   - Dashboard runs on separate port
   - Dashboard fetches data from Backend (port 3002)

4. **Dashboard Features**
   - **Summary** - View account equity and holdings
   - **Holdings** - View stock holdings with profit/loss
   - **Orders** - Manage buy/sell orders
   - **Positions** - View open positions
   - **Funds** - Manage account funds
   - **WatchList** - Monitor stocks
   - **Apps** - Additional features

## API Endpoints

### Authentication
- `POST /signup` - Create new account
- `POST /login` - Login user
- `POST /logout` - Logout user
- `GET /profile` - Get user profile (requires auth)

### Data
- `GET /allHoldings` - Get all holdings
- `GET /allPositions` - Get all positions
- `POST /newOrder` - Create new order

## Environment Configuration Summary

### Backend (.env)
```
MONGO_URL=mongodb+srv://yogirajgautam19_db_user:ouSA2MV9nwqY9kYy@fortuneflowcluster.lj81e1c.mongodb.net/fortuneflow
PORT=3002
SESSION_SECRET=your_secret_key_here_change_in_production
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_BASE=http://localhost:3002
REACT_APP_LOGIN_URL=http://localhost:3000
REACT_APP_DASHBOARD_URL=http://localhost:3001
```

### Dashboard (.env)
```
REACT_APP_API_BASE=http://localhost:3002
REACT_APP_LOGIN_URL=http://localhost:3000
PORT=3001
```

## Troubleshooting

### Backend won't start
- Ensure MongoDB Atlas connection string is correct
- Check that PORT 3002 is not in use
- Verify `.env` file exists and is properly formatted

### Frontend/Dashboard won't load
- Ensure backend is running on port 3002
- Check browser console for CORS errors
- Clear browser cache and reload

### API calls failing
- Verify backend is running (`npm start` in backend folder)
- Check that ports match (3002 for backend)
- Ensure cookies are enabled in browser for authentication

### Port already in use
```bash
# On Windows (PowerShell)
netstat -ano | findstr :3000  # Check if port 3000 is in use
netstat -ano | findstr :3001  # Check if port 3001 is in use
netstat -ano | findstr :3002  # Check if port 3002 is in use

# Kill process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

## MongoDB Database

Connected to **MongoDB Atlas**:
- Cluster: fortuneflowcluster
- Database: fortuneflow
- Collections: user, holding, position, order

### Sample Data

The backend can initialize sample data using commented endpoints:
- `/addHoldings` - Add sample holdings
- `/addPositions` - Add sample positions

## Performance Tips

1. **First Load**: Application may take 10-15 seconds to initialize all services
2. **Database**: Uses MongoDB Atlas cloud database (slight latency expected)
3. **Clear Cache**: If experiencing issues, clear browser cache and cookies
4. **Restart Services**: If ports conflict, restart all three services

## Next Steps

### To Deploy
- Move to production MongoDB Atlas with proper credentials
- Set up environment variables for production
- Deploy backend to cloud service (Heroku, AWS, Azure)
- Deploy frontend/dashboard to static hosting (Vercel, Netlify)

### To Enhance
- Add more stock data feeds
- Implement real-time price updates
- Add charting capabilities
- Implement transaction history
- Add portfolio analytics

---

**Last Updated**: May 27, 2026
**Status**: ✅ All fixes applied, ready to run
