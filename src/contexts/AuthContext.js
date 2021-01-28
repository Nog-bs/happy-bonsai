import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase";

// SETTING CONTEXT API
const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

// AUTHPROVIDER
export const AuthProvider = ({ children }) => {
  // STATES
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // SIGNUP FUNCTION
  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  // LOGIN FUNCTION
  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  // LOGOUT FUNCTION
  const logout = () => auth.signOut();

  // SIGN UP -> SET NEW USER
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };
  return (
    <>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </>
  );
};
