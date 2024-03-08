import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./composantes/navbar";
import Index from "./pages/index";
import SignIn from "./pages/sign-in";
import User from "./pages/user";
import store from './flux';
//import ErrorPage from "./components/errorpage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Index /></>,
      //errorElement: <ErrorPage />
    },
    {
      path: "/sign-in",
      element: <><Navbar /><SignIn /></>,
    },
    {
      path: "/user",
      element: <><Navbar /><User /></>,
    },
  ]);

  return <RouterProvider router={router} />;
}
