import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Home from "../Components/Home";
import ResetPassword from "../Components/ResetPassword";
import Profile from "../Components/Profile";
import DetailsPage from "../Components/DetailsPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("data.json"),
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
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
        loader: () => fetch("data.json"),
      },
    ],
  },
]);
