import React from "react";
import { useRoutes } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./components/HomeLayout";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function AppRoutes() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "projects",
      element: (
        <>
          <Navbar />
          <Projects />
        </>
      ),
    },
    {
      path: "contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
  ]);

  return element;
}
