// MODULES
import React, { useState, useRef } from "react";

// STYLED COMPONENTS
import {
  SignUp,
  SignUpBack,
  Error,
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

// AUTHENTICATION
import { useAuth } from "../../contexts/AuthContext";

// USEHISTORY
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  // USEREF
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  // USEHISTORY
  const history = useHistory();

  // USESTATE
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // AUTHENTICATION
  const { signup } = useAuth();

  // ---------------------
  // HANDLESIGNUP
  const handleSignUp = async (event) => {
    event.preventDefault();

    // PASSWORD VALIDATION
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Hmmm, passwords do not seem to match");
    }
    // TRY CATCH
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      // THROW ERROR
      setError("Failed to create an account");
    }
    // WAITS FOR SIGNUP AND MAKES SURE USER DOES NOT SUBMIT MULTIPLE TIMES
    setLoading(false);
  };

  return (
    <SignUp>
      {/* FORM */}
      <FormContainer onSubmit={handleSignUp}>
        <SignUpBack to="/login">Go Back</SignUpBack>
        {/* HEAD */}
        <FormHead>Create an account</FormHead>
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
          <InputSection>
            <InputLabel>Confirm Password</InputLabel>
            <InputPasswordConfirm type="password" ref={passwordConfirmRef} />
          </InputSection>
        </InputContainer>
        <InputButton disabled={loading} type="submit">
          Submit
        </InputButton>
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

export default SignUpPage;
