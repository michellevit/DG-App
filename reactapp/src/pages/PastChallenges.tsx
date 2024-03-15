import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";
import ChallengeCard from "../components/ChallengeCard";
import { Challenge } from "../types/interfaces";
import "./Challenges.css";


const PastChallenges = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, loading } = useUser();

  useEffect(() => {
    const fetchChallenges = async () => {
      if (!loading && user && user.id) {
        try {
          const token = localStorage.getItem('sessionToken');
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/challenges/past/${user.id}`, {
              headers: {
                Authorization: `Bearer ${token}`, 
              },
            });
          setChallenges(response.data);
        } catch (error) {
          console.error("Failed to fetch past challenges", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (loading) {
      setIsLoading(true);
    } else {
      fetchChallenges();
    }
  }, [user, loading]);

  if (isLoading) {
    return <div>Loading past challenges...</div>;
  }

  if (challenges.length === 0) {
    return (
      <div className="challenges-list">
        <p>No past challenges.</p>
      </div>
    );
  }

  return (
    <div className="challenges-list">
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
};

export default PastChallenges;
