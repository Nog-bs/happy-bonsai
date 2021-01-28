// MODULES
import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

// IMG
import bonsai from "../../assets/images/bonsai.png";

// STYLED COMPONENTS
import {
  SignIn,
  SignInBanner,
  Error,
  SignInWelcome,
  SignInBonsai,
  FormContainer,
  FormHead,
  InputContainer,
  InputSection,
  InputLabel,
  InputEmail,
  InputPassword,
  InputButton,
  PromptSection,
  SignUpLink,
  SignUpPrompt,
} from "./SignInPage.elements";

// AUTHENTICATION
import { useAuth } from "../../contexts/AuthContext";

const SignInPage = () => {
  // REFS
  const emailRef = useRef();
  const passwordRef = useRef();

  // AUTHENTICATION
  const { login } = useAuth();

  // HISTORY
  const history = useHistory();

  // USESTATES
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    // LOGIN ATTEMPT
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      // CATCH FAILED LOGIN
      setError("Failed to sign in, double check that password maybe?");
    }
  };

  return (
    <SignIn>
      <SignInBanner>
        <SignInWelcome>Welcome to Happy Bonsai</SignInWelcome>
        <SignInBonsai src={bonsai} alt="bonsai" />
      </SignInBanner>
      <FormContainer onSubmit={handleLogin}>
        {/* HEAD */}
        <FormHead>Sign In</FormHead>
        {error && <Error>{error}</Error>}
        {/* HEAD */}
        {/* ----------- */}
        {/* INPUT SECTION */}
        <InputContainer>
          <InputSection>
            <InputLabel>Email</InputLabel>
            <InputEmail type="email" ref={emailRef} />
          </InputSection>
          <InputSection>
            <InputLabel>Password</InputLabel>
            <InputPassword type="password" ref={passwordRef} />
          </InputSection>
        </InputContainer>
        <InputButton type="submit" disabled={loading}>
          Log in
        </InputButton>
        {/* INPUT SECTION */}
        {/* ----------- */}
        {/* SIGNUP PROMPT */}
        <PromptSection>
          <SignUpPrompt>Don't have an account?</SignUpPrompt>
          <SignUpLink to="/signup">Sign up here!</SignUpLink>
        </PromptSection>
        {/* SIGNUP PROMPT */}
      </FormContainer>
    </SignIn>
  );
};

export default SignInPage;
