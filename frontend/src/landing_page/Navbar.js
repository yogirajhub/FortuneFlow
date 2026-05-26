import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Navbar() {
  const { isAuthenticated, user, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">
        <a className="navbar-brand" href="/">
          <img src="media/images/logo.svg" style={{ width: "50%" }} alt="FortuneFlow Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0 w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/support">
                  Support
                </a>
              </li>

              {!isLoading && !isAuthenticated && (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/login">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/signup">
                      Signup
                    </a>
                  </li>
                </>
              )}

              {!isLoading && isAuthenticated && (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link" style={{ cursor: "default", color: "#666" }}>
                      {user?.email}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn btn-link"
                      onClick={handleLogout}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
