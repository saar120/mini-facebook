import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import ROUTES from "../constants/routes";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const value = { user };
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const idTokenResult = await currentUser.getIdTokenResult();
        const { claims } = idTokenResult;
        if (claims.admin) {
          currentUser.admin = true;
        }
      }
      setUser(currentUser);
      if (!currentUser) navigate(ROUTES.HOME);

      return () => unsubscribe(); // onAuthStateChanged will unsubscribe on unmount.
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: propTypes.node.isRequired,
};

function useAuth() {
  const context = useContext(AuthContext);
  return context.user;
}

export { AuthProvider, useAuth };
