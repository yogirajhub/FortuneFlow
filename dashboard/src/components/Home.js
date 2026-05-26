import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const apiBase = process.env.REACT_APP_API_BASE || "http://localhost:3002";
  const loginUrl = process.env.REACT_APP_LOGIN_URL || "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${apiBase}/profile`, {
        withCredentials: true,
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        window.location.href = `${loginUrl}/login`;
      });
  }, [apiBase, loginUrl]);

  if (loading) {
    return (
      <div className="container p-5 text-center">
        <h2>Verifying your session...</h2>
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
