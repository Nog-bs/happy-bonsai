// MODULES
import React, { useState, useRef } from "react";

// STYLED COMPONENTS
import {
  Forgot,
  ForgotBack,
  Error,
  Success,
  FormContainer,
  FormHead,
  InputContainer,
  InputSection,
  InputLabel,
  InputEmail,
  InputButton,
} from "./ForgotPage.elements";

// AUTHENTICATION
import { useAuth } from "../../contexts/AuthContext";

const ForgotPage = () => {
  // USEREF
  const emailRef = useRef();

  // USESTATE
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // AUTHENTICATION
  const { resetPassword } = useAuth();

  let handleForgot = async (event) => {
    event.preventDefault();

    // LOGIN ATTEMPT
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      // CATCH FAILED LOGIN
      setError("Failed to reset password!");
    }
  };

  return (
    <Forgot>
      <FormContainer onSubmit={handleForgot}>
        <ForgotBack to="/login">Go Back</ForgotBack>
        {/* HEAD */}
        <FormHead>Password Reset</FormHead>
        {error && <Error>{error}</Error>}
        {message && <Success>{message}</Success>}
        {/* HEAD */}
        {/* ----------- */}
        {/* INPUT SECTION */}
        <InputContainer>
          <InputSection>
            <InputLabel>Email</InputLabel>
            <InputEmail type="email" ref={emailRef} />
          </InputSection>
        </InputContainer>
        <InputButton type="submit" disabled={loading}>
          Reset Password
        </InputButton>
        {/* INPUT SECTION */}
        {/* ----------- */}
      </FormContainer>
    </Forgot>
  );
};

export default ForgotPage;
