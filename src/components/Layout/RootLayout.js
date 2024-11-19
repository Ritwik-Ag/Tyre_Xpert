import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";

function RootLayout({ toggleLogin, toggleSignUp }) {
  return (
    <div className="root-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar toggleLogin={toggleLogin} toggleSignUp={toggleSignUp} />
        <main>
          <Outlet /> {/* Nested routes will render here */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
