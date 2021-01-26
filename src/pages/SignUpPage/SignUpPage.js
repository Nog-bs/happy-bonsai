// MODULES
import React from "react";

// STYLED COMPONENTS
import {
  SignUp,
  SignUpBack,
  FormContainer,
  FormHead,
  InputContainer,
  InputSection,
  InputLabel,
  InputEmail,
  InputPassword,
  InputPasswordConfirm,
  InputButton,
  PromptSection,
  ForgotLink,
  ForgotPrompt,
} from "./SignUpPage.elements";

const SignInPage = () => {
  return (
    <SignUp>
      <FormContainer>
        <SignUpBack to="/signin">Go Back</SignUpBack>
        {/* HEAD */}
        <FormHead>Create an account</FormHead>
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
          <InputSection>
            <InputLabel>Confirm Password</InputLabel>
            <InputPasswordConfirm />
          </InputSection>
        </InputContainer>
        <InputButton>Submit</InputButton>
        {/* INPUT SECTION */}
        {/* ----------- */}
        {/* FORGOT PROMPT */}
        <PromptSection>
          <ForgotPrompt>Forgot Password?</ForgotPrompt>
          <ForgotLink to="/forgot">Yes, I forgot!</ForgotLink>
        </PromptSection>
        {/* FORGOT PROMPT */}
      </FormContainer>
    </SignUp>
  );
};

export default SignInPage;
