import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

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

    // Redirect to dashboard on port 3001
    window.location.href = "http://localhost:3001";
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className="container p-5 text-center">
      <h2>Redirecting to your dashboard…</h2>
      <p>If you are not redirected automatically, <a href="http://localhost:3001">click here</a>.</p>
    </div>
  );
}

export default DashboardRedirect;
