import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";

// Example Login Component
function Login() {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}

function Navbar() {
  const navigate = useNavigate(); // useNavigate hook to handle redirect
  const [currentPage] = useState(null); // Track the current page: 'login' or 'signup'

  // Handle logo click to navigate to the login page
  const handleLogoClick = () => {
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-title">Tyre Xpert</div>

        {/* Render FiLogIn icon and handle click to navigate to login page */}
        <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer', fontSize: '2rem' }}>
          <FiLogIn /> {/* Directly use the FiLogIn component */}
        </div>
      </nav>

      {/* Conditional rendering of Login based on currentPage */}
      {currentPage === 'login' && <Login />}
    </>
  );
}

export default Navbar;
