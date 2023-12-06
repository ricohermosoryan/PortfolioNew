import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col gap-10 h-screen justify-center px-5 fixed bg-transparent">
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/portfolio"}>Portfolio</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </>
  );
}
