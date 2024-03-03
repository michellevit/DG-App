import React from "react";
import "./Home.css";
import Leaderboard from "../components/Leaderboard";
import { useUser } from "../contexts/UserContext";

const Home: React.FC = () => {
  const { user } = useUser();
  return <div className="home-container">
    <h2>Home</h2>
    <p>Status: {user ? "Logged In" : "Not Logged In"}</p>
    <Leaderboard />
  </div>;
}

export default Home;
 