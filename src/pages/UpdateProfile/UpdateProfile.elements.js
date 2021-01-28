import styled from "styled-components";
import { Link } from "react-router-dom";

export const Update = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.p`
  text-align: center;
  padding: 6px;
  color: #fff;
  background-color: #ff7f7f;
  border-radius: 8px;
  margin: 8px;
`;

export const FormContainer = styled.form`
  background-color: rgba(255, 255, 255, 0.5);
  background-color: lightblue;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const FormHead = styled.h2`
  text-align: center;
  width: 100%;
  color: #fff;
  font-size: 3rem;
  color: #8d6e63;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 1.25rem;
  margin-bottom: 4px;
`;

export const InputEmail = styled.input`
  border-radius: 12px;
  padding: 8px;
  outline: none;
  border: none;
  font-size: 1rem;
`;

export const InputPassword = styled.input`
  border-radius: 12px;
  padding: 8px;
  outline: none;
  border: none;
  font-size: 1rem;
`;

export const InputButton = styled.button`
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
export const CancelLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  margin: 12px;
  padding: 8px;
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
