import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  // Navigation items with paths
  const navItems = [
    { path: "/", label: "Dashboard", icon: "📊" },
    { path: "/orders", label: "Orders", icon: "📋" },
    { path: "/holdings", label: "Holdings", icon: "📈" },
    { path: "/positions", label: "Positions", icon: "🎯" },
    { path: "/funds", label: "Funds", icon: "💰" },
    { path: "/apps", label: "Apps", icon: "🔧" },
  ];

  // Determine if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar-container">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <div className="logo-box">FF</div>
        <h3>FortuneFlow</h3>
      </div>

      <hr className="sidebar-divider" />

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className={`nav-link ${isActive(item.path) ? "active" : ""}`}>
                <span className="nav-icon">{item.icon}</span>
                <span className={`menu ${isActive(item.path) ? "selected" : ""}`}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <hr className="sidebar-divider" />

      {/* Profile Section */}
      <div className="sidebar-profile">
        <div className="profile-avatar">YG</div>
        <div className="profile-info">
          <p className="profile-name">User</p>
          <p className="profile-email">user@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
