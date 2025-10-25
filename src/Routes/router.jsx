import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Home from "../Components/Home";
import ResetPassword from "../Components/ResetPassword";
import Profile from "../Components/Profile";
import DetailsPage from "../Components/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "reset",
        Component: ResetPassword,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "/:id",
        Component: DetailsPage,
      },
    ],
  },
]);
