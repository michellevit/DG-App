import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";

interface LeaderboardUser {
  id: number;
  username: string;
  points: number;
}

const Leaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/leaderboard`
        );
        setLeaderboardData(response.data);
      } catch (error) {
        console.error("Failed to fetch leaderboard data:", error);
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <div className="leaderboard-container">
      <ul>
        {leaderboardData.map((leaderboardUser, index) => (
          <li
            key={index}
            style={
              user && user.id === leaderboardUser.id
                ? { fontWeight: "bold" }
                : {}
            }
          >
            {leaderboardUser.username} - {leaderboardUser.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
