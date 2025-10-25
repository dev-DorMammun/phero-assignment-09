import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../Firebase/firebase.config";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const handleResetEmail = (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("E-mail sent. Please Check Your Mail");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold">Reset Password</h1>
      <form
        onSubmit={handleResetEmail}
        className="p-5 border border-gray-400 rounded-xl shadow-md flex flex-col space-y-3"
      >
        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          name="email"
          required
        />
        <button className="btn bg-blue-700 text-white rounded-md border-none my-3">
          Send E-mail
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
