import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Navbar() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white ff-navbar sticky-top">
      <div className="container">
        {/* Mobile: hamburger + logo grouped together at the left edge.
            Desktop: this same block simply renders as the left-aligned brand slot. */}
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler ff-navbar-toggler me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand ff-navbar-brand d-flex align-items-center m-0" to="/">
            <img src="media/images/logo.svg" className="ff-navbar-logo" alt="FortuneFlow Logo" />
          </Link>
        </div>

        <div className="collapse navbar-collapse ff-navbar-collapse" id="navbarSupportedContent">
          {/* Centered primary navigation (desktop); stacked list (mobile) */}
          <ul className="navbar-nav mx-lg-auto text-left">

            {/* /* <li className="nav-item d-lg-none">
              <Link className="nav-link ff-nav-link" to="/">
                Home
              </Link>
            </li> */ }

            <li className="nav-item">
              <Link className="nav-link ff-nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ff-nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ff-nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ff-nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ff-nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>

          {/* Auth actions, pinned to the far right on desktop */}
          <ul className="navbar-nav ff-navbar-auth">
            {!isLoading && !isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link ff-nav-link" aria-current="page" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link ff-nav-link ff-signup-btn" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            )}

            {!isLoading && isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link ff-nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link ff-nav-link" style={{ cursor: "default", color: "#666" }}>
                    {user?.email}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link ff-nav-link btn btn-link"
                    onClick={handleLogout}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
