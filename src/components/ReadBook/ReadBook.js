// MODULES
import React from "react";

// STYLED COMPONENTS
import {
  ReadCard,
  ReadInfo,
  ReadName,
  ReadAuthor,
  ReadImg,
  ReadDate,
} from "./ReadBook.elements.js";

// PLACEHOLDER IMG
import placeholder from "../../assets/images/author-placeholder.png";

// FIREBASE AUTH AND DB
// import { useAuth } from "../../contexts/AuthContext";
// import { db } from "../../firebase";

const ReadBook = ({ ...item }) => {
  // CONVERTS TIMESTAMP
  const timeStamp = (time) => {
    let seconds = Math.floor(new Date() - time);
    if (seconds < 1000) {
      return "1 second ago";
    }
    if (seconds < 60000) {
      return Math.round(seconds / 1000) + " seconds ago";
    }
    if (seconds < 3600000) {
      return Math.floor(seconds / 60000) + " minutes ago";
    }
    if (seconds < 86400000) {
      return Math.floor(seconds / 3600000) + " hour ago";
    }
    if (seconds < 2629800000) {
      return Math.floor(seconds / 86400000) + " day ago";
    }
    if (seconds < 31556952000) {
      return Math.floor(seconds / 2629800000) + " months ago";
    }
    if (seconds > 31556952000) {
      return new Date(time).toLocaleDateString();
    }
  };

  return (
    <>
      <ReadCard>
        <ReadInfo>
          <ReadName>{item.author}</ReadName>
          <ReadAuthor>{item.author[0]}</ReadAuthor>
          <ReadDate>{timeStamp(item.time)}</ReadDate>
        </ReadInfo>
        <ReadImg src={item.img ? item.img : placeholder} alt="author" />
      </ReadCard>
    </>
  );
};

export default ReadBook;
