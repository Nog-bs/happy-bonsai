// MODULES
import React, { useState } from "react";

// STYLED COMPONENTS
import {
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

const BookCard = ({ ...item }) => {
  // USESTATE
  const [modal, setModal] = useState(false);

  // HANDLEMODAL
  const handleModal = () => setModal(!modal);
  return (
    <>
      {modal && (
        <AddModal>
          <AddModalPrompt>Would you like to add?</AddModalPrompt>
          <SearchCard key={item.id}>
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
          <AddModalButtons>
            <CancelModal onClick={handleModal}>Cancel</CancelModal>
            <ConfirmModal>Confirm</ConfirmModal>
          </AddModalButtons>
        </AddModal>
      )}
      <SearchCard onClick={handleModal} key={item.id}>
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
