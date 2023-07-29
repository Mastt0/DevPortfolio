import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomeLayout";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
