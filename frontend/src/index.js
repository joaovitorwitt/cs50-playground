import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import WeekOne from "./pages/WeekOne";
import WeekTwo from "./pages/WeekTwo";
import WeekThree from "./pages/WeekThree";
import MarioLess from "./pages/W1/MarioLess";
import Cash from "./pages/W1/Cash";
import Credit from "./pages/W1/Credit";
import Readability from "./pages/W2/Readability";
import Bulbs from "./pages/W2/Bulbs";
import Caesar from "./pages/W2/Caesar";
import Substitution from "./pages/W2/Substitution";

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
    path: "week-one/mario-less",
    element: <MarioLess />,
  },
  {
    path: "week-one/cash",
    element: <Cash />,
  },
  {
    path: "week-one/credit",
    element: <Credit />,
  },
  // ================================
  {
    path: "/week-two",
    element: <WeekTwo />,
  },
  {
    path: "week-two/readability",
    element: <Readability />,
  },
  {
    path: "week-two/bulbs",
    element: <Bulbs />,
  },
  {
    path: "week-two/caesar",
    element: <Caesar />,
  },
  {
    path: "week-two/substitution",
    element: <Substitution />,
  },
  // ================================
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
