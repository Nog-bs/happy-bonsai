import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignIn = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SignInBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        flex-direction: column;
        width: 75%;
    }
`;

export const Error = styled.p`
    text-align: center;
    padding: 6px;
    color: #fff;
    background-color: #ff7f7f;
    border-radius: 8px;
    margin: 8px;
`;

export const SignInWelcome = styled.h1`
    font-size: 2rem;
    color: #654321;
    padding: 16px;
`;

export const SignInBonsai = styled.img`
    display: none;

    @media (min-width: 768px) {
        display: block;
        height: 150px;
        width: 150px;
    }
`;

export const FormContainer = styled.form`
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    border-radius: 8px;
    width: 80%;

    @media (min-width: 768px) {
        width: 375px;
    }
`;

export const FormHead = styled.h2`
    text-align: center;
    width: 100%;
    color: #fff;
    font-size: 1.75rem;
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

export const PromptSection = styled.div`
    text-align: center;
`;

export const SignUpPrompt = styled.p``;

export const SignUpLink = styled(Link)``;
