import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./composantes/navbar";
import Index from "./pages/index";
import SignIn from "./pages/sign-in";
import User from "./pages/user";
import ErrorPage from "./pages/errorpage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Index /></>,
      errorElement: <><Navbar /><ErrorPage /></>
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
