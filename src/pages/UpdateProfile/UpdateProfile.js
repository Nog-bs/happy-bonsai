// MODULES
import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

// STYLED COMPONENTS
import {
  Update,
  Error,
  FormContainer,
  FormHead,
  InputContainer,
  InputSection,
  InputLabel,
  InputEmail,
  CancelLink,
  InputPassword,
  InputButton,
} from "./UpdateProfile.elements";

// AUTHENTICATION
import { useAuth } from "../../contexts/AuthContext";

const UpdateProfile = () => {
  // REFS
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  // AUTHENTICATION
  const { currentUser, updateEmail, updatePassword } = useAuth();

  // HISTORY
  const history = useHistory();

  // USESTATES
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = (event) => {
    event.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    // PROMISES CHECK
    const promises = [];
    // BUTTON IS DISABLED
    setLoading(true);
    // CHECK IS EMAIL AND CURRENTUSER EMAIL IS BEING UPDATED
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    // CHECK IF PASSWORDREF HAS A VALUE IN FOR PASSWORD CHANGE
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    // RUNNING PROMISES
    Promise.all(promises)
      // REDIRECT USER
      .then(() => history.push("/"))
      // ERROR MESSAGE
      .catch(() => setError("Failed to update account"))
      // MAKE IT SO THE BUTTON CAN BE ENABLED AGAIN
      .finally(() => setLoading(false));

    // LOGIN ATTEMPT
    try {
      setError("");
      setLoading(true);
      history.push("/");
    } catch {
      // CATCH FAILED LOGIN
      setError("Failed to sign in, double check that password maybe?");
    }
  };

  return (
    <Update>
      <FormContainer onSubmit={handleUpdate}>
        {/* HEAD */}
        <FormHead>Update Profile</FormHead>
        {error && <Error>{error}</Error>}
        {/* HEAD */}
        {/* ----------- */}
        {/* INPUT SECTION */}
        <InputContainer>
          <InputSection>
            <InputLabel>Email</InputLabel>
            <InputEmail
              defaultValue={currentUser.email}
              type="email"
              ref={emailRef}
            />
          </InputSection>
          <InputSection>
            <InputLabel>Password</InputLabel>
            <InputPassword
              type="password"
              ref={passwordRef}
              placeholder="Leave blank to keep the same"
            />
          </InputSection>
          <InputSection>
            <InputLabel>Confirm Password</InputLabel>
            <InputPassword
              type="password"
              ref={confirmPasswordRef}
              placeholder="Leave blank to keep the same"
            />
          </InputSection>
        </InputContainer>
        <InputButton type="submit" disabled={loading}>
          Update
        </InputButton>
        <CancelLink to="/">Cancel</CancelLink>
        {/* INPUT SECTION */}
      </FormContainer>
    </Update>
  );
};

export default UpdateProfile;
