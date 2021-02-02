import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

export const DeleteIcon = styled(AiOutlineDelete)`
  display: none;
  position: absolute;
  height: 30px;
  width: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    opacity: 0.75;
  }
`;

export const AddModal = styled.div`
  z-index: 999;
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

export const ReadDate = styled.p`
  font-size: 0.75rem;
`;

export const ReadCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: white;
  border-radius: 12px;
  margin-bottom: 8px;
  position: relative;

  &:hover {
    opacity: 0.75;
  }

  &:hover ${DeleteIcon} {
    display: block;
  }
`;

export const ReadInfo = styled.div`
  width: 120px;
`;

export const ReadName = styled.h4`
  font-size: 0.85rem;
`;

export const ReadAuthor = styled.p`
  font-size: 0.85rem;
`;

export const ReadImg = styled.img`
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
