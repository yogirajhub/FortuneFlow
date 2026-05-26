# 📈 FortuneFlow

> A modern, full-stack stock trading and portfolio management platform built with cutting-edge web technologies.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v18+-blue.svg)](https://reactjs.org/)

---

## 🎯 Overview

FortuneFlow is a comprehensive stock trading platform that enables users to:
- **Browse** real-time market data and stock information
- **Trade** securities with an intuitive interface
- **Manage** portfolios and track holdings
- **Monitor** positions and orders in real-time
- **Analyze** market trends with interactive charts and visualizations

---

## ✨ Key Features

### 📊 **Dashboard**
- Real-time portfolio overview
- Interactive doughnut charts for asset allocation
- Performance metrics and fund tracking
- Vertical graphs for trend analysis

### 🛒 **Trading Interface**
- Buy/Sell action windows
- Order management system
- Position tracking
- Holdings management

### 📱 **Responsive Design**
- Mobile-friendly interface
- Clean and intuitive UI
- Accessibility-focused components

### 📈 **Analytics**
- Visual data representation
- Performance summaries
- Watch list functionality
- Market trends and statistics

---

## � Documentation & Setup Guides

⚡ **[QUICK_START.md](QUICK_START.md)** - Fastest way to get running (3 simple steps) 

📖 **[SETUP_AND_RUN_GUIDE.md](SETUP_AND_RUN_GUIDE.md)** - Complete setup and troubleshooting guide

🔧 **[ISSUE_ANALYSIS_AND_FIXES.md](ISSUE_ANALYSIS_AND_FIXES.md)** - Technical details on all issues fixed

---

### **Frontend**
- ⚛️ **React** - UI component library
- 🎨 **CSS3** - Styling and animations
- 📦 **Node.js** - Runtime environment

### **Backend**
- 🚀 **Node.js** - Server runtime
- 📨 **Express.js** - Web framework (implied)
- 🗄️ **MongoDB** - Database (schemas included)

### **Dashboard**
- ⚛️ **React** - Interactive dashboard components
- 📊 **Data Visualization** - Chart libraries

---

## 📁 Project Structure

```
FortuneFlow/
├── frontend/              # Landing page & marketing site
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── landing_page/ # Home, pricing, about pages
│   │   ├── index.js      # Entry point
│   │   └── index.css     # Global styles
│   └── package.json
│
├── dashboard/            # User dashboard application
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # Dashboard components
│   │   ├── data/        # Mock/static data
│   │   └── index.js     # Entry point
│   └── package.json
│
├── backend/             # API server
│   ├── index.js        # Server entry point
│   ├── model/          # Data models
│   ├── schemas/        # Database schemas
│   └── package.json
│
└── README.md           # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB Atlas** (database already configured)

### ⚡ Quick Start

See **[QUICK_START.md](QUICK_START.md)** for fastest setup (3 simple steps).

### Full Installation Guide

See **[SETUP_AND_RUN_GUIDE.md](SETUP_AND_RUN_GUIDE.md)** for detailed configuration.

### Installation

#### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd FortuneFlow
```

#### 2️⃣ Backend Setup (Port 3002)
```bash
cd backend
npm install
npm start
```
Backend API runs on `http://localhost:3002`

#### 3️⃣ Frontend Setup (Port 3000)
```bash
cd frontend
npm install
npm start
```
Frontend runs on `http://localhost:3000`

#### 4️⃣ Dashboard Setup (Port 3001)
```bash
cd dashboard
npm install
npm start
```
Dashboard runs on `http://localhost:3001`

**Note:** All 3 services must run simultaneously in separate terminals.

---

## 📚 Available Routes

### **Frontend**
- `/` - Landing page
- `/home` - Home page with features
- `/about` - About the platform
- `/pricing` - Pricing information
- `/products` - Product details
- `/support` - Support & ticket creation
- `/signup` - User registration
- `/account` - Account opening

### **Dashboard**
- `/dashboard` - Main portfolio dashboard
- `/holdings` - Current holdings
- `/positions` - Open positions
- `/orders` - Order history
- `/funds` - Fund management
- `/watchlist` - Watched securities

---

## 🗄️ Database Models

### **Holdings Model**
Tracks user holdings and investments

### **Orders Model**
Manages buy/sell orders and transactions

### **Positions Model**
Tracks open positions and exposure

---

## 🎨 Components Overview

### **Core Components**
- `Menu.js` - Navigation menu
- `TopBar.js` - Header component
- `Dashboard.js` - Main dashboard view
- `Summary.js` - Portfolio summary

### **Trading Components**
- `BuyActionWindow.js` - Buy trading interface
- `Orders.js` - Order management
- `Holdings.js` - Holdings display
- `Positions.js` - Positions tracking

### **Analytics Components**
- `DoughnoutChart.js` - Asset allocation visualization
- `VerticalGraph.js` - Trend analysis charts
- `Funds.js` - Fund information

### **Utility Components**
- `GeneralContext.js` - Global state management
- `WatchList.js` - Watched securities

---

## 🔧 Configuration

Create `.env` files in backend and dashboard directories:

```env
# Backend (.env)
PORT=5000
MONGODB_URI=mongodb://localhost:27017/fortuneflow
NODE_ENV=development

# Dashboard (.env)
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENV=development
```

---

## 📖 Usage Examples

### **Viewing Dashboard**
1. Navigate to dashboard landing page
2. Login with credentials
3. View portfolio overview
4. Check holdings and positions

### **Making a Trade**
1. Click "Buy" button
2. Enter stock symbol and quantity
3. Confirm trade
4. Track order in order history

### **Monitoring Portfolio**
1. View doughnut chart for allocation
2. Check vertical graphs for trends
3. Review performance metrics
4. Update watch list

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? Create an issue in the repository with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 📞 Support

For support and inquiries:
- 📧 **Email**: support@fortuneflow.com
- 💬 **Support Page**: `/support`
- 🎫 **Create Ticket**: Support page > Create Ticket

---

## 🙏 Acknowledgments

- Built with React, Node.js, and MongoDB
- Inspired by modern fintech platforms
- Special thanks to all contributors

---

<div align="center">

**Made with ❤️ by the Yogiraj Gautam**

[⬆ back to top](#-fortuneflow)

</div>
