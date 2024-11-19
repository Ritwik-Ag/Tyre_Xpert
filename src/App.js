import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from './components/Layout/RootLayout';
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HeroLayout from './components/Layout/HeroLayout';
import RaceDataEntry from './components/Race/RaceDataEntry';
import Sidebar from './components/Sidebar';
import TeamSelection from './components/TeamSelection'; // Import the TeamSelection component
import TeamDetail from './components/TeamDetail';
import FeedbackForm from './components/FeedbackForm';
import './App.css';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="app-container">
        <Routes>
          {/* Root layout for the main site pages */}
          <Route path="/" element={<RootLayout />} >
            <Route index element={<HeroLayout />} />
            <Route path="tyre-info" element={<HeroLayout />} />
            <Route path="data-entry" element={<RaceDataEntry />} />
          </Route>

          {/* Additional standalone routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/insights" element={<Insights />} />
          
          {/* New Team Selection Page */}
          <Route path="/teams" element={<TeamSelection />} />
          
          {/* Team details page */}
          <Route path="/team/:teamName" element={<TeamDetail />} />
          <Route path="/feedback" element={<FeedbackForm />} />

          {/* Login and SignUp Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}export default App;
