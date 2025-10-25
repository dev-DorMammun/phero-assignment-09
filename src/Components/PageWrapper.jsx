import React, { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const PageWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <>
      {loading && <LoadingScreen></LoadingScreen>}
      {children}
    </>
  );
};

export default PageWrapper;
