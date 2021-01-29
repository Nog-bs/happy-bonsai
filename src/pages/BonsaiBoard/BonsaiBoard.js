// MODULES
import React, { useState } from "react";

// STYLED COMPONENTS
import {
  Dashboard,
  Error,
  ProfileModal,
  ProfileBack,
  ProfileSection,
  ProfileHead,
  ProfileEmail,
  ProfileButton,
  Button,
  BookListSection,
  BonsaiSection,
  LogSection,
  LogSettings,
  LogForm,
  LogHead,
  LogInputContainer,
  LogLabel,
  LogInput,
} from "./BonsaiBoard.elements";

// USEAUTH
import { useAuth } from "../../contexts/AuthContext";

// USEHISTORY
import { useHistory } from "react-router-dom";

const BonsaiBoard = () => {
  // USESTATES
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
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

  // HANDLE MODAL
  const handleModal = () => setModal(!modal);
  return (
    <>
      <Dashboard>
        {/* MODAL  */}
        {modal && (
          <ProfileModal>
            <ProfileBack onClick={handleModal} />
            <ProfileSection>
              <ProfileHead>Profile</ProfileHead>
              {error && <Error>{error}</Error>}
              <ProfileEmail>Email: {currentUser.email}</ProfileEmail>
              <ProfileButton to="/update">Update Profile</ProfileButton>
              <Button onClick={handleLogout}>Log out</Button>
            </ProfileSection>
          </ProfileModal>
        )}
        {/* MODAL  */}
        <BookListSection>BOOKLIST SECTION</BookListSection>
        <BonsaiSection>PROGRESS TRACKING SECTION</BonsaiSection>
        <LogSection>
          <LogSettings onClick={handleModal} />
          <LogForm>
            <LogHead>Log a book!</LogHead>
            <LogInputContainer>
              <LogLabel>Book Name:</LogLabel>
              <LogInput type="name" name="bookname" />
            </LogInputContainer>
            <LogInputContainer>
              <LogLabel>Book Name:</LogLabel>
              <LogInput type="name" name="bookname" />
            </LogInputContainer>
            <LogInputContainer>
              <LogLabel>Book Name:</LogLabel>
              <LogInput type="name" name="bookname" />
            </LogInputContainer>
          </LogForm>
        </LogSection>
      </Dashboard>
    </>
  );
};

export default BonsaiBoard;
