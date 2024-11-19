import React from 'react';
import { useParams } from 'react-router-dom';

// Sample teams data
const teams = [
  {
    name: "mercedes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Mercedes_F1_logo_2020.svg",
    description: "Mercedes-AMG Petronas Formula One Team. A highly successful team with multiple world championships.",
    history: "Founded in 1954, Mercedes has been a dominant force in Formula 1 in recent years.",
  },
  {
    name: "red bull racing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Bull_Racing_logo.svg",
    description: "Red Bull Racing F1 team. Known for their dominance in recent years and their partnership with Honda engines.",
    history: "Founded in 2005, Red Bull Racing has quickly risen to prominence in Formula 1.",
  },
  {
    name: "ferrari",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Scuderia_Ferrari_logo.svg",
    description: "Scuderia Ferrari F1 team. One of the most iconic and historic teams in Formula 1.",
    history: "Ferrari is the most successful team in F1 history, with numerous world championships.",
  },
  // Add more teams as needed
];

function TeamDetail() {
  const { teamName } = useParams(); // Get the team name from the URL
  const team = teams.find((team) => team.name === teamName.toLowerCase());

  if (!team) {
    return <h2>Team not found</h2>;
  }

  return (
    <div className="team-detail">
      <h1>{team.name.charAt(0).toUpperCase() + team.name.slice(1)}</h1>
      <img src={team.logo} alt={team.name} className="team-logo" />
      <p>{team.description}</p>
      <h3>Team History</h3>
      <p>{team.history}</p>
    </div>
  );
}

export default TeamDetail;
