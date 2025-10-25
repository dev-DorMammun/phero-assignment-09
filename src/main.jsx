import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { router } from "./Routes/router";
import AuthProvider from "./Contexts/AuthProvider";
import "react-toastify/dist/ReactToastify.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </AuthProvider>
);
