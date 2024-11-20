// AboutUs.js

import React from 'react';
import "./aboutus.css"
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div id="about-section">
      <h1>About Us</h1>
      <p>
        Welcome to TyreXpert, your ultimate resource for understanding the complex world of Formula 1 tyre strategy. We're dedicated to providing in-depth analysis and insights to help you stay ahead of the curve.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to demystify the science behind tyre performance and strategy. We strive to provide you with the tools and knowledge to make informed predictions, analyze race outcomes, and appreciate the details that shape the outcome of every Grand Prix.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Tyre Degradation Analysis: Our algorithms analyze real-time data to predict tyre life, optimal pit-stop strategies, and the impact of different tyre compounds on race outcomes.</li>
        <li>In-depth Tyre Comparison: We compare the performance of various tyre compounds, highlighting their strengths and weaknesses under different track conditions.</li>
        <li>F1 Team Insights: Explore detailed profiles of each F1 team, including their tyre strategies, driver performances, and historical data.</li>
      </ul>

      <h2>Our Vision</h2>
      <p>
        We envision a future where fans can delve deep into the technical aspects of F1 racing, making informed predictions and enjoying a more immersive experience. By combining cutting-edge technology with expert analysis, we aim to revolutionize the way you follow Formula 1.
      </p>


      <Footer />
    </div>
  );
};

export default AboutUs;