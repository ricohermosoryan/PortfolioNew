import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

export default function NavbarTemplates() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}
