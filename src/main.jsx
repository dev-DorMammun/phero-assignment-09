import { Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { router } from "./Routes/router";
import AuthProvider from "./Contexts/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import PageWrapper from "./Components/PageWrapper";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <PageWrapper>
    <AuthProvider>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  </PageWrapper>
);
