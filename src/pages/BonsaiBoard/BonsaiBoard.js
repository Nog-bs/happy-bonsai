// MODULES
import React, { useState, useRef } from "react";

// STYLED COMPONENTS
import {
  Dashboard,
  Error,
  NoItems,
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
  SearchBook,
  SearchInput,
  SearchButton,
  SearchDisplay,
  SearchPrompt,
} from "./BonsaiBoard.elements";

// USEAUTH
import { useAuth } from "../../contexts/AuthContext";

// USEHISTORY
import { useHistory } from "react-router-dom";

// AXIOS
import axios from "axios";
import BookCard from "../../components/BookCard/BookCard";

const BonsaiBoard = () => {
  // REF
  const searchRef = useRef();
  // USESTATES
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("Input a book title to search!");
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

  // SEARCH
  const handleSearch = (event) => {
    event.preventDefault();

    if (searchRef.current.value.length === 0) {
      return setMessage("No Items Searched");
    }

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q={${searchRef.current.value}}&key=AIzaSyCypaUZpR6d9C4lYVV_rH9_ZO8Vw2xmy_o`
      )
      .then((result) => setList(result.data.items));
  };
  return (
    <>
      <Dashboard>
        {/* EDIT PROFILE MODAL  */}
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
        {/* EDIT PROFILE MODAL  */}
        <BookListSection>BOOKLIST SECTION</BookListSection>
        <BonsaiSection>PROGRESS TRACKING SECTION</BonsaiSection>
        <LogSection>
          <LogSettings onClick={handleModal} />
          <LogForm onSubmit={handleSearch}>
            <LogHead>Log your reads!</LogHead>
            <SearchBook>
              <SearchInput ref={searchRef} />
              <SearchButton type="submit">Search</SearchButton>
            </SearchBook>
            <SearchDisplay>
              {list?.length === 0 || list === undefined ? (
                list === undefined ? (
                  <NoItems>No books under this name, sorry!</NoItems>
                ) : (
                  <NoItems>{message}</NoItems>
                )
              ) : (
                list?.map((item) => <BookCard {...item} />)
              )}
            </SearchDisplay>
            <SearchPrompt>
              Tip: search for your book and then click on it
            </SearchPrompt>
          </LogForm>
        </LogSection>
      </Dashboard>
    </>
  );
};

export default BonsaiBoard;
