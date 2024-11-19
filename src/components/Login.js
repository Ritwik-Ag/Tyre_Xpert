import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login status
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in with", username, password);
    
    // Simulate successful login
    setIsLoggedIn(true); // Update login status
    // After successful login, redirect to the dashboard
    navigate("/");
  };

  const handleLogoClick = () => {
    console.log("Logo clicked, login triggered");
    navigate("/dashboard");
  };

  if (isLoggedIn) {
    return null; // Hide login page after login
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>
          <span onClick={handleLogoClick} className="logo">
            TyreXpert
          </span>
        </h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
