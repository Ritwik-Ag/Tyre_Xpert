import React from "react";
import insightsIcon from "../assets/insights.jpg";
import "./Insights.css"
// import Sidebar from "./Sidebar";

function Insights() {
  return (
    <>
      {/* <Sidebar/> */}
      <section id="insights" className="card">
      <img src={insightsIcon} alt="Insights Icon" />
      <div>
        <h2>Insights & Suggestions</h2>
        <p>Recommended pit stops and tyre changes based on data.</p>
      </div>
    </section>
    </>
    
  );
}

export default Insights;
