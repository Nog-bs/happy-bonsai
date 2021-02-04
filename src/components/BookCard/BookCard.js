// MODULES
import React, { useState } from "react";

// STYLED COMPONENTS
import {
  AddIcon,
  AddModal,
  AddModalPrompt,
  SearchCard,
  SearchInfo,
  SearchName,
  SearchAuthor,
  SearchImg,
  AddModalButtons,
  CancelModal,
  ConfirmModal,
} from "./BookCard.elements.js";

// PLACEHOLDER IMG
import placeholder from "../../assets/images/author-placeholder.png";

// FIREBASE AUTH AND DB
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";

const BookCard = ({ getData, ...item }) => {
  // USESTATE
  const [modal, setModal] = useState(false);

  // USERDATA
  const { currentUser } = useAuth();
  // HANDLEMODAL
  const handleModal = () => setModal(!modal);
  //

  // HANDLECONFIRM (WILL SEND USER DATA TO FIRESTORE)
  const handleConfirm = () => {
    // WILL CREATE KEY FOR BOOK
    const bookKey = db.ref("users/" + currentUser.uid + "/books/").push().key;
    db.ref("users/" + currentUser.uid + "/books/" + bookKey).update({
      title: item.volumeInfo.title,
      author:
        item.volumeInfo.authors === undefined
          ? ["Unknown Author"]
          : item.volumeInfo.authors,
      img:
        item.volumeInfo.imageLinks?.smallThumbnail === undefined
          ? placeholder
          : item.volumeInfo.imageLinks.smallThumbnail,
      id: bookKey,
      time: Date.now(),
    });
    getData(currentUser.uid);
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <AddModal>
          <AddModalPrompt>Would you like to add?</AddModalPrompt>
          <SearchCard>
            <SearchInfo>
              <SearchName>{item.volumeInfo?.title}</SearchName>
              <SearchAuthor>
                {item.volumeInfo?.authors === undefined
                  ? "Unknown Author"
                  : item.volumeInfo?.authors[0]}
              </SearchAuthor>
            </SearchInfo>
            <SearchImg
              src={
                item.volumeInfo?.imageLinks?.smallThumbnail === undefined
                  ? placeholder
                  : item.volumeInfo.imageLinks.smallThumbnail
              }
              alt="author"
            />
          </SearchCard>
          <AddModalButtons>
            <CancelModal onClick={handleModal}>Cancel</CancelModal>
            <ConfirmModal onClick={handleConfirm}>Confirm</ConfirmModal>
          </AddModalButtons>
        </AddModal>
      )}
      <SearchCard onClick={handleModal} key={item.id}>
        <AddIcon />
        <SearchInfo>
          <SearchName>{item.volumeInfo?.title}</SearchName>
          <SearchAuthor>
            {item.volumeInfo?.authors === undefined
              ? ""
              : item.volumeInfo?.authors[0]}
          </SearchAuthor>
        </SearchInfo>
        <SearchImg
          src={
            item.volumeInfo?.imageLinks?.smallThumbnail === undefined
              ? placeholder
              : item.volumeInfo.imageLinks.smallThumbnail
          }
          alt="author"
        />
      </SearchCard>
    </>
  );
};

export default BookCard;
