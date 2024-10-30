import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
}

