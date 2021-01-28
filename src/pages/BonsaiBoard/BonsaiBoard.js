// MODULES
import React, { useState } from "react";

// STYLED COMPONENTS
import {
  Dashboard,
  Error,
  ProfileSection,
  ProfileHead,
  ProfileEmail,
  Button,
} from "./BonsaiBoard.elements";

// USEAUTH
import { useAuth } from "../../contexts/AuthContext";

// USEHISTORY
import { useHistory } from "react-router-dom";

const BonsaiBoard = () => {
  // USESTATES
  const [error, setError] = useState("");
  // AUTHENTICATION
  const { currentUser, logout } = useAuth();
  // USEHISTORY
  const history = useHistory();

  // HANDLE LOG OUT
  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };
  return (
    <>
      <Dashboard>
        <ProfileSection>
          <ProfileHead>Profile</ProfileHead>
          {error && <Error>{error}</Error>}
          <ProfileEmail>Email: {currentUser.email}</ProfileEmail>
          <Button>Update Profile</Button>
          <Button onClick={handleLogout}>Log out</Button>
        </ProfileSection>
      </Dashboard>
    </>
  );
};

export default BonsaiBoard;
