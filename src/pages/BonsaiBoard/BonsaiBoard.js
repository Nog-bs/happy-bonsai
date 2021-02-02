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
  LogSettingsContainer,
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
import { BookCard, ReadBook, BonsaiModel } from "../../components";

const BonsaiBoard = () => {
  // REF
  const searchRef = useRef();
  // USESTATES
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("Input a book title to search!");
  const [read, setRead] = useState([]);
  const [grow, setGrow] = useState(1);
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

  // WILL GET AND SET PROGRESS TO SCALE BONSAI
  // const getProgress = (books) => setGrow(books.length / 100 + grow);

  // GET DATA
  const getData = (userId) => {
    let data = db
      .ref("users/" + userId + "/books/")
      .once("value", (snapshot) => {
        let formatData = Object.values(
          snapshot.val() === null ? {} : snapshot.val()
        ).reverse();
        // WILL SET THE STATES FOR DATA AND TREE
        setRead(formatData);
        setGrow(formatData.length / 100 + 1);
      });
    return data;
  };

  // GETS/SETS USER DATA FROM REALTIME DATABASE
  useEffect(() => {
    getData(currentUser.uid);
  }, [currentUser]);

  // HANDLE MODAL
  const handleModal = () => setModal(!modal);

  // SEARCH
  const handleSearch = (event) => {
    event.preventDefault();

    if (searchRef.current.value.length === 0) {
      setMessage("No Items Searched");
      setList([]);
      return;
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
          <BonsaiHead>
            {read.length}
            {read.length === 1 ? " books " : " books "}
            read, get that knowledge!
          </BonsaiHead>
          <BonsaiContainer>
            <BonsaiModel grow={grow} />
          </BonsaiContainer>
        </BonsaiSection>
        <LogSection>
          <LogSettingsContainer>
            <LogSettings onClick={handleModal} />
          </LogSettingsContainer>
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
