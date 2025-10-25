import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="relative flex flex-col gap-20">
        <Navbar />
        <div className="max-w-[1300px] mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        draggable
        theme="colored"
      />
    </>
  );
};

export default App;
