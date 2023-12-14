import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { GrContact } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isHoverred, setIsHoverred] = useState(null);

  const nav = [
    { name: "Home", href: "/home", icons: <IoHomeOutline /> },
    { name: "About", href: "/about", icons: <FaRegUser /> },
    { name: "Portfolio", href: "/portfolio", icons: <CgWebsite /> },
    { name: "Contact", href: "/contact", icons: <GrContact /> },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 lg:top-0 w-full h-auto lg:h-screen lg:w-32 flex justify-center items-end lg:items-center pb-8 lg:pb-0 z-50">
        <div className="px-2 py-3 lg:py-10 rounded-full border border-[rgba(78,78,78,0.3)] flex flex-row lg:flex-col items-center justify-center gap-10 duration-200 backdrop-blu-md">
          {nav &&
            nav.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className="w-12 h-12 rounded-full flex items-center justify-center group cursor-pointer hover:bg-gradient-to-br hover:from-[skyblue] hover:to-[lightblue]"
                onMouseEnter={() => setIsHoverred(item.href)}
                onMouseLeave={() => setIsHoverred(null)}
              >
                <div
                  className={`text-texlight group-hover:text-red-800 text-xl`}
                >
                  {item.icons}
                </div>
                <AnimatePresence>
                  {isHoverred === item.href && (
                    <motion.div
                      className=" absolute bg-white rounded-md px-6 py-2 left-[110px] after:absolute after:-left-1 after:top-4 after:w-2 after:h-2 after:bg-white after:rotate-45 shadow-2xl hidden lg:block"
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -25 }}
                    >
                      <p className=" text-black">{item?.name}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
