import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/login'); // Navigate to login page on click
  };

  return (
    <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer', marginBottom: '20px' }}>
      <img src="/logo.png" alt="Login Logo" style={{ width: '150px' }} /> {/* Update with your logo file path */}
    </div>
  );
}

export default Logo;
