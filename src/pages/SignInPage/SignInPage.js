// MODULES
import React from "react";

// STYLED COMPONENTS
import {
  SignIn,
  SignInBanner,
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

import bonsai from "../../assets/images/bonsai.png";

const SignInPage = () => {
  return (
    <SignIn>
      <SignInBanner>
        <SignInWelcome>Welcome to Happy Bonsai</SignInWelcome>
        <SignInBonsai src={bonsai} alt="bonsai" />
      </SignInBanner>
      <FormContainer>
        {/* HEAD */}
        <FormHead>Sign In</FormHead>
        {/* HEAD */}
        {/* ----------- */}
        {/* INPUT SECTION */}
        <InputContainer>
          <InputSection>
            <InputLabel>Email</InputLabel>
            <InputEmail />
          </InputSection>
          <InputSection>
            <InputLabel>Password</InputLabel>
            <InputPassword />
          </InputSection>
        </InputContainer>
        <InputButton>Log in</InputButton>
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
