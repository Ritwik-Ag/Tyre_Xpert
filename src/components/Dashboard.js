import React from "react";
import tyreImage from "../assets/tyre.jpg";

function Dashboard() {
  return (
    <section id="dashboard" className="card">
      <img src={tyreImage} alt="Tyre" />
      <div>
        <h2>Dashboard</h2>
        <p>Real-time tyre degradation data and metrics.</p>
      </div>
    </section>
  );
}

export default Dashboard;
