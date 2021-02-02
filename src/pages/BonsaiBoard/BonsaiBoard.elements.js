import styled from "styled-components";
import { RiUserSettingsLine } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Dashboard = styled.section`
  height: 100vh;
  width: 100%;
  padding: 16px;
  display: flex;
`;

export const ProfileHead = styled.h3`
  font-size: 2rem;
`;

export const ProfileEmail = styled.p`
  margin: 12px;
  font-weight: 700;
`;

export const Error = styled.p`
  text-align: center;
  padding: 6px;
  color: #fff;
  background-color: #ff7f7f;
  border-radius: 8px;
  margin: 8px;
`;

export const ProfileBack = styled(GrClose)`
  height: 30px;
  width: 30px;
  position: absolute;
  right: 12px;
  top: 12px;

  &:hover {
    opacity: 0.75;
  }
`;

export const ProfileModal = styled.div`
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileSection = styled.div`
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Button = styled.button`
  margin: 12px;
  padding: 8px;
  width: 50%;
  border-radius: 20px;
  border: none;
  color: #fff;
  background: linear-gradient(to left, #8d6e63 50%, #654321 50%) right;
  background-size: 200%;
  transition: 0.5s ease-out;
  &:hover {
    background-position: left;
  }
`;

export const ProfileButton = styled(Link)`
  text-align: center;
  margin: 12px;
  padding: 8px;
  border-radius: 20px;
  text-decoration: none;
  width: 50%;
  border: none;
  color: #fff;
  background: linear-gradient(to left, #654321 50%, #8d6e63 50%) right;
  background-size: 200%;
  transition: 0.5s ease-out;
  &:hover {
    background-position: left;
  }
`;

export const LogSection = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  color: #fff;
  width: 20%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
`;

export const LogSettingsContainer = styled.div`
  align-self: flex-end;
`;

export const LogSettings = styled(RiUserSettingsLine)`
  height: 30px;
  width: 30px;

  &:hover {
    opacity: 0.75;
  }
`;

export const LogForm = styled.form`
  padding: 16px;
  width: 100%;
  height: 100%;
  color: black;
`;

export const LogHead = styled.h2`
  font-size: 2rem;
  margin-bottom: 24px;
  width: 100%;
  text-align: center;
  color: #fff;
`;

export const SearchBook = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const SearchInput = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: none;
`;

export const SearchButton = styled.button`
  margin-left: 4px;
  padding: 4px;
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const SearchDisplay = styled.div`
  width: 100%;
  height: 65vh;
  overflow: auto;
  padding: 6px;
  display: flex;
  flex-direction: column;
`;

export const SearchPrompt = styled.p`
  color: white;
  margin-top: 12px;
  font-size: 1rem;
`;

export const NoItems = styled.p`
  margin: auto 0;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  width: 100%;
  text-align: center;
`;

export const BookListSection = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 20%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const BookListHead = styled.h3`
  font-size: 2rem;
  margin-bottom: 24px;
  width: 100%;
  text-align: center;
  color: #fff;
`;

export const BookList = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 6px;
  border-radius: 12px;
`;

export const BonsaiSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BonsaiHead = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 3rem;
  width: 75%;
`;

export const BonsaiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
