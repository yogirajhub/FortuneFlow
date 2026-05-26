import React from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const apiBase = process.env.REACT_APP_API_BASE || "http://localhost:3002";
  const loginUrl = process.env.REACT_APP_LOGIN_URL || "http://localhost:3000";
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: "📊" },
    { path: "/orders", label: "Orders", icon: "📋" },
    { path: "/holdings", label: "Holdings", icon: "📈" },
    { path: "/positions", label: "Positions", icon: "🎯" },
    { path: "/funds", label: "Funds", icon: "💰" },
    { path: "/apps", label: "Apps", icon: "🔧" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await axios.post(
        `${apiBase}/logout`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      // Ignore logout errors
    }

    window.location.href = `${loginUrl}/login`;
  };

  return (
    <div className="topbar-container">
      {/* Market Indices Section */}
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">18,500.25</p>
          <p className="percent">+1.2%</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">61,234.50</p>
          <p className="percent">+0.9%</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="topbar-nav">
        <ul className="topbar-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`topbar-nav-link ${isActive(item.path) ? "active" : ""}`}
              >
                <span className="topbar-nav-icon">{item.icon}</span>
                <span className="topbar-nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button Section */}
      <div className="topbar-actions">
        <button
          type="button"
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;