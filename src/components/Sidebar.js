import React from "react";
import { Link } from 'react-router-dom';
import logoimg from "../assets/images/logo-light.jpg"
import "./Sidebar.css"


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logoimg} alt="TyreXpert" className="sidebar-logo-img" />
        <h1 className="sidebar-logo-text">TyreXpert</h1>
      </div>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">Dashboard</Link>
        <Link to="/data-entry" className="sidebar-link">Data Entry</Link>
        <Link to="/teams" className="sidebar-link">Team View</Link>
        <Link to="/feedback" className="sidebar-link">Feedback</Link>
        <Link to="/aboutus" className="sidebar-link">About Us</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
