// MODULES
import React, { useState, useRef } from "react";

// STYLED COMPONENTS
import {
  Forgot,
  Error,
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

// USEHISTORY
import { useHistory } from "react-router-dom";

const ForgotPage = () => {
  // USEREF
  const emailRef = useRef();

  // USEHISTORY
  const history = useHistory();

  // USESTATE
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // AUTHENTICATION
  const {} = useAuth();

  let handleForgot = async (event) => {
    event.preventDefault();

    // LOGIN ATTEMPT
    try {
      setError("");
      setLoading(true);
      // await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      // CATCH FAILED LOGIN
      setError("Failed to sign in, double check that password maybe?");
    }
  };

  return (
    <Forgot>
      <FormContainer onSubmit={handleForgot}>
        {/* HEAD */}
        <FormHead>Forgot</FormHead>
        {error && <Error>{error}</Error>}
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
          Log in
        </InputButton>
        {/* INPUT SECTION */}
        {/* ----------- */}
      </FormContainer>
    </Forgot>
  );
};

export default ForgotPage;
