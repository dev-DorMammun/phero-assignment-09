import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const registerEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const authInfo = {
    user,
    loading,
    setLoading,
    setUser,
    signInWithGoogle,
    registerEmailPass,
    loginEmailPass,
    logOut,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
