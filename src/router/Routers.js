import React from "react";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Resume from "../pages/Resume";
import { Routes, Navigate, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      {/* default pages */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* adding routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/resume" element={<Resume />} /> */}
    </Routes>
  );
};

export default Routers;