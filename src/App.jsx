import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import LoadingScreen from "./Components/LoadingScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { useContext } from "react";
import { AuthContext } from "./Contexts/AuthContext";

AOS.init();

const App = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      <div className="relative bg-base-300 flex flex-col gap-7 md:gap-20">
        <LoadingScreen state={loading} />
        <Navbar />
        <div data-aos="zoom-out" className="md:max-w-[1300px] md:mx-auto px-4">
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
