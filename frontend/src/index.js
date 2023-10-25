import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import WeekOne from "./pages/WeekOne";
import WeekTwo from "./pages/WeekTwo";
import WeekThree from "./pages/WeekThree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/week-one",
    element: <WeekOne />,
  },
  {
    path: "/week-two",
    element: <WeekTwo />,
  },
  {
    path: "/week-three",
    element: <WeekThree />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
