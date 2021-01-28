import styled from "styled-components";

export const Dashboard = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileHead = styled.h3``;

export const ProfileEmail = styled.p``;

export const Error = styled.p`
  text-align: center;
  padding: 6px;
  color: #fff;
  background-color: #ff7f7f;
  border-radius: 8px;
  margin: 8px;
`;

export const ProfileSection = styled.div`
  border-radius: 12px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
