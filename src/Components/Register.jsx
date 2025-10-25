import React, { useContext, useState } from "react";
import { Navigate, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import RegisterPhoto from "../assets/register.svg";

const Register = () => {
  const { setUser, registerEmailPass } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const displayName = event.target.name.value;
    const photoURL = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    registerEmailPass(email, password)
      .then((response) => {
        setUser({ ...response.user, displayName, photoURL });
        updateProfile(response.user, {
          displayName,
          photoURL,
        });
        toast.success("Account Registered");
        event.target.reset();
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
      <div className="hidden md:block">
        <img src={RegisterPhoto} alt="" className="w-full" />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <title>SkillCircle - Register</title>
        <h1 className="text-2xl font-bold">Register</h1>

        <form onSubmit={handleRegister}>
          <fieldset className="fieldset border border-gray-300 shadow-md p-5 rounded-xl">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              name="name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Link"
              name="photo"
              required
            />
            <label className="label">Password</label>
            <div className="flex items-center">
              <input
                type={show ? "input" : "password"}
                className="input"
                placeholder="Password"
                name="password"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShow(!show);
                }}
                className="btn"
              >
                {show ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </button>
            </div>

            <button className="btn bg-blue-700 text-white rounded-md border-none my-3">
              Register
            </button>
          </fieldset>
        </form>
        <p>
          Already have an account? then{" "}
          <NavLink
            to="/login"
            className="underline text-blue-400 font-semibold"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
