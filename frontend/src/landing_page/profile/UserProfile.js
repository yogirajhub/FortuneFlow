import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

function UserProfile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  if (isLoading) {
    return (
      <div className="container p-5 text-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="mb-4">Your Profile</h2>

              <div className="row mb-4">
                <div className="col-md-3 text-center">
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      backgroundColor: "#007bff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                      color: "white",
                      fontSize: "48px",
                      fontWeight: "bold",
                    }}
                  >
                    {user?.email?.[0]?.toUpperCase() || "U"}
                  </div>
                </div>
                <div className="col-md-9">
                  <h4 className="mb-3">Account Information</h4>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Email Address</label>
                    <p className="form-control-plaintext">{user?.email}</p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Account Status</label>
                    <p className="form-control-plaintext">
                      <span className="badge bg-success">Active</span>
                    </p>
                  </div>
                </div>
              </div>

              <hr />

              <div className="row mb-4">
                <div className="col-12">
                  <h4 className="mb-3">Account Summary</h4>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card text-center">
                        <div className="card-body">
                          <h5 className="card-title">Total Holdings</h5>
                          <p className="h4">0</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card text-center">
                        <div className="card-body">
                          <h5 className="card-title">Open Positions</h5>
                          <p className="h4">0</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card text-center">
                        <div className="card-body">
                          <h5 className="card-title">Recent Orders</h5>
                          <p className="h4">0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-12">
                  <h4 className="mb-3">Quick Actions</h4>
                  <button
                    className="btn btn-primary me-2 mb-2"
                    onClick={handleGoToDashboard}
                  >
                    Go to Dashboard
                  </button>
                  <button
                    className="btn btn-outline-danger mb-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-12">
                  <h5 className="mb-3">Profile Settings</h5>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <a href="#security" style={{ textDecoration: "none" }}>
                        Security & Password
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="#notifications" style={{ textDecoration: "none" }}>
                        Notification Preferences
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="#documents" style={{ textDecoration: "none" }}>
                        Documents & Tax Information
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="#preferences" style={{ textDecoration: "none" }}>
                        Trading Preferences
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
