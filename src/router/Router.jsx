import { createBrowserRouter } from "react-router";
import Nav from "../components/Nav";
import Root from "../root/Root";
import Home from "../home/Home";
import Reg from "../home/pages/Reg";
import Login from "../home/pages/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/reg",
        Component: Reg,
      },
      {
        path: "/login",
        Component: Login
      }
    ]
  },
]);