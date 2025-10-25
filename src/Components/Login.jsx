import React, { useContext, useState } from "react";
import { Navigate, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import LoginPhoto from "../assets/login.svg";
import LoadingScreen from "./LoadingScreen";

const Login = () => {
  const {
    user,
    setUser,
    loginEmailPass,
    signInWithGoogle,
    loading,
    setLoading,
  } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleSignInEmailPass = async (event) => {
    event.preventDefault();
    setLoading(true);

    const email = event.target.email.value;
    const password = event.target.password.value;

    await loginEmailPass(email, password)
      .then((response) => {
        setUser(response.user);
        toast.success("Account Logged In Successfully");
        event.target.reset();
      })
      .catch((error) => toast.error(error.message));

    setLoading(false);
  };

  const handleSignInWithGoogle = async (event) => {
    event.preventDefault();
    setLoading(true);

    await signInWithGoogle()
      .then((response) => {
        setUser(response.user);
        toast.success("Account Logged In Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });

    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
      <title>SkillCircle - Login</title>
      <div data-aos="fade-right">
        <img src={LoginPhoto} alt="" className="w-full" />
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-col gap-4 justify-center items-center"
      >
        <h1 className="text-2xl font-bold">Sign In To Your Account</h1>

        <form onSubmit={handleSignInEmailPass}>
          <fieldset className="fieldset border border-gray-300 shadow-md p-5 rounded-xl">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
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
            <div>
              <NavLink to="/reset" className="link link-hover">
                Forgot password?
              </NavLink>
            </div>
            <button className="btn bg-blue-700 text-white rounded-md border-none my-3">
              Login
            </button>
            <div className=" text-gray-400 text-center">or</div>

            <button
              onClick={handleSignInWithGoogle}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
        </form>

        <p>
          New to our website? then{" "}
          <NavLink
            to="/register"
            className="underline text-blue-400 font-semibold"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
