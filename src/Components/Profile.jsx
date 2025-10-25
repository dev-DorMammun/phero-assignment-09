import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return <div>{user.displayName}</div>;
};

export default Profile;
