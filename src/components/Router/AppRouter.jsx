import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarTemplates from "../templates/NavbarTemplates";
import Home from "../pages/Home";
import { AnimatePresence } from "framer-motion";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

export default function AppRouter() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<NavbarTemplates />}>
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
