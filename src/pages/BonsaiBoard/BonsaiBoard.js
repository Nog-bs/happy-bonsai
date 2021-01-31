// MODULES
import React, { useState, useRef, useEffect } from "react";

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
  BookListHead,
  BookList,
  BonsaiSection,
  BonsaiHead,
  BonsaiContainer,
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

// USEAUTH & DB
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";

// USEHISTORY
import { useHistory } from "react-router-dom";

// AXIOS
import axios from "axios";
import { BookCard, ReadBook } from "../../components";

const BonsaiBoard = () => {
  // REF
  const searchRef = useRef();
  // USESTATES
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("Input a book title to search!");
  const [read, setRead] = useState([]);
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

  // GET DATA
  const getData = (userId) => {
    let data = db
      .ref("users/" + userId + "/books/")
      .once("value", (snapshot) => {
        setRead(
          Object.values(snapshot.val() === null ? {} : snapshot.val()).reverse()
        );
      });
    return data;
  };

  // GETS USER DATA FROM REALTIME DATABASE
  useEffect(() => getData(currentUser.uid), [currentUser]);

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
        <BookListSection>
          <BookListHead>Your reads</BookListHead>
          {/* READ BOOKS DATA */}
          <BookList>
            {read?.map((item) => (
              <ReadBook getData={getData} key={item.id} {...item} />
            ))}
          </BookList>
          {/* READ BOOKS DATA */}
        </BookListSection>
        <BonsaiSection>
          <BonsaiHead>Log your reads and see your bonsai grow</BonsaiHead>
          <BonsaiContainer>hello</BonsaiContainer>
        </BonsaiSection>
        <LogSection>
          <LogSettings onClick={handleModal} />
          <LogForm onSubmit={handleSearch}>
            <LogHead>Log your reads!</LogHead>
            <SearchBook>
              <SearchInput ref={searchRef} />
              <SearchButton type="submit">Search</SearchButton>
            </SearchBook>
            {/* SEARCHED BOOKS DATA */}
            <SearchDisplay>
              {list?.length === 0 || list === undefined ? (
                list === undefined ? (
                  <NoItems>No books under this name, sorry!</NoItems>
                ) : (
                  <NoItems>{message}</NoItems>
                )
              ) : (
                list?.map((item) => (
                  <BookCard getData={getData} key={item.id} {...item} />
                ))
              )}
            </SearchDisplay>
            {/* SEARCHED BOOKS DATA */}
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
