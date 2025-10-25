import React, { use, useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, setUser, logOut } = use(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Signed Out Successfully");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className=" sticky top-0 backdrop-blur-md z-10">
      <div className="flex justify-between items-center py-5 navbar max-w-[1300px] mx-auto">
        <NavLink
          to="/"
          className="btn shadow-none hover:bg-transparent hover:border-none hover:shadow-none bg-transparent border-none"
        >
          <img src={Logo} width={200} alt="" />
        </NavLink>
        <div className="flex gap-4 items-center buttonContainer">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className="btn hover:bg-blue-400 hover:text-white bg-transparent text-blue-700"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn hover:bg-blue-400 hover:text-white bg-transparent text-blue-700"
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <div className="text-blue-700 h-[30px] w-[30px] cursor-pointera">
                <FaRegUserCircle
                  className="w-full h-full"
                  title={`${user.displayName}`}
                ></FaRegUserCircle>
              </div>
              <button
                onClick={handleSignOut}
                className="btn hover:bg-blue-400 hover:text-white bg-transparent text-blue-700"
              >
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
