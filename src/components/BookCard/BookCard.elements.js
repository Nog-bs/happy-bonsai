import styled from "styled-components";

export const AddModal = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddModalPrompt = styled.h3`
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 8px;
`;

export const SearchCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: white;
  border-radius: 12px;
  margin-bottom: 8px;

  &:hover {
    opacity: 0.75;
  }
`;

export const SearchInfo = styled.div`
  width: 120px;
`;

export const SearchName = styled.h4`
  font-size: 0.85rem;
`;

export const SearchAuthor = styled.p`
  font-size: 0.85rem;
`;

export const SearchImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const AddModalButtons = styled.div`
  display: flex;
`;

export const CancelModal = styled.button`
  margin-right: 2px;
  padding: 12px;
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

export const ConfirmModal = styled.button`
  margin-left: 2px;
  padding: 12px;
  width: 50%;
  border-radius: 20px;
  border: none;
  color: #fff;
  background: linear-gradient(to left, #654321 50%, #8d6e63 50%) right;
  background-size: 200%;
  transition: 0.5s ease-out;
  &:hover {
    background-position: left;
  }
`;
