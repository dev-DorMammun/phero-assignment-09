import React, { use, useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, setUser, logOut, setLoading } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    setLoading(true);

    await logOut()
      .then(() => {
        setUser(null);
        toast.success("Signed Out Successfully");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));

    setLoading(false);
  };

  return (
    <div
      data-aos="fade-down"
      className="sticky border border-gray-300 top-0 backdrop-blur-md z-10"
    >
      <div className="flex flex-col md:flex-row gap-3 md:justify-between items-center py-5 navbar max-w-[1300px] mx-auto">
        <NavLink
          to="/"
          className="btn shadow-none hover:bg-transparent hover:border-none hover:shadow-none bg-transparent border-none"
        >
          <img src={Logo} loading="eager" width={200} alt="" />
        </NavLink>

        {!user ? (
          <div className="flex gap-4 items-center buttonContainer">
            <NavLink
              to="/login"
              className="btn hover:bg-blue-400 hover:text-white bg-white text-blue-700"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn hover:bg-blue-400 hover:text-white bg-white text-blue-700"
            >
              Register
            </NavLink>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <NavLink
              to="/profile"
              className="text-blue-700 h-[30px] w-[30px] cursor-pointer"
            >
              <FaRegUserCircle
                className="w-full h-full"
                title={`${user.displayName}`}
              ></FaRegUserCircle>
            </NavLink>

            <button
              onClick={handleSignOut}
              className="btn hover:bg-blue-400 hover:text-white bg-white text-blue-700"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
