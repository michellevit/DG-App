import React from "react";
import Registration from "../components/auth/Registration";
import { LoggedInProps } from "../types/interfaces";
import UserDashboard from "../components/UserDashboard";


const Profile: React.FC<LoggedInProps> = ({ loggedIn }) => {
  return <div className="profile-container">
    {loggedIn ? <Registration /> : <UserDashboard />}
  </div>;
}

export default Profile;
