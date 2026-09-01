import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

function DashboardRedirect() {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!isAuthenticated) {
      navigate("/login", { replace: true });
      return;
    }

    window.location.href = DASHBOARD_URL;
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className="container p-5 text-center">
      <h2>Redirecting to your dashboard…</h2>
      <p>If you are not redirected automatically, <a href={DASHBOARD_URL}>click here</a>.</p>
    </div>
  );
}

export default DashboardRedirect;
