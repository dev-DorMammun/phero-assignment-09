import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user != null) return children;

  return <Navigate to="/login" />;
};

export default PrivateRoute;
