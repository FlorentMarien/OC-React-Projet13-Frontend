import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/index";
import SignIn from "./pages/sign-in";
import User from "./pages/user";
//import ErrorPage from "./components/errorpage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      //errorElement: <ErrorPage />
    },
    {
      path: "/sign-in",
      element: <SignIn />,
      
    },
  ]);

  return <RouterProvider router={router} />;
}
