import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TeamSelection.css";
import { SiFerrari, SiMercedes,SiRedbull,SiMclaren,SiAstonmartin} from "react-icons/si";
import Footer from "./Footer";


// Dummy data for teams
const teams = [
  {
    name: "Mercedes",
    logo: <SiMercedes />,
    link:"https://www.mercedesamgf1.com"
  },
  {
    name: "Red Bull Racing",
    logo: <SiRedbull/>,
    link: "https://www.redbullracing.com"
  },
  {
    name: "Ferrari",
    logo: <SiFerrari />,
    link: "https://www.ferrari.com/en-EN/formula-1"
  },
  {
    name: "McLaren",
    logo: <SiMclaren/>,
    link: "https://www.mclaren.com/racing/"
  },
  {
    name: "Aston Martin",
    logo: <SiAstonmartin/>,
    link: "https://www.astonmartinf1.com"
  },
  
]

function TeamSelection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTeams, setFilteredTeams] = useState(teams);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setFilteredTeams(teams);
    } else {
      const filtered = teams.filter((team) =>
        team.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredTeams(filtered);
    }
  };

  return (
    <div className="team-selection">
      <h1 className="heading">Team View</h1>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for F1 Team"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Team List */}
      <div className="team-list">
        {filteredTeams.length === 0 ? (
          <p>No teams found</p>
        ) : (
          filteredTeams.map((team) => (
            <div key={team.name} className="team-item">
              <Link to={`${team.link}`} className="team-link">
                <div className="team-card">
                  <div className="team-logo">
                    {typeof team.logo === "string" ? (
                      <img src={team.link} alt={team.name} className="team-logo-img" />
                    ) : (
                      team.logo
                    )}
                  </div>
                  <h3>{team.name}</h3>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default TeamSelection;
