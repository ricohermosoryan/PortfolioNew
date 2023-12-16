import React from "react";
import PageTransition from "../PageTransition";
import { AnimatePresence, motion } from "framer-motion";
import profile from "../../assets/profile2.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  const text1 = "Hi,";
  const text2 = "I'm  Ryan ";
  const text3 = "web  Developer";

  const socialMedia = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ryan.ricohermoso/",
      icons: <FaFacebook />,
    },
    {
      name: "GitHub",
      href: "https://github.com/ricohermosoryan",
      icons: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ryan-ricohermoso-25440227a/",
      icons: <FaLinkedin />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/RaiRicohermoso",
      icons: <FaSquareXTwitter />,
    },
  ];

  const spanVariants = {
    visible: { y: 0, scaleY: 1 },
    hover: {
      y: [-1, -2, -2.8, 0.9, 0],
      scaleY: [1, 1.3, 0.8, 1, 1.2],
      color: "skyblue",
    },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: {
      opacity: 1,
      y: [-1, -1.9, -2.7, 1],
      scaleY: [1, 1.3, 0.8, 1],
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <>
      <PageTransition>
        <section className="flex items-center justify-center flex-col gap-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <div className="w-full h-full flex flex-col items-center lg:items-center justify-center gap-4">
              <div className="text-left w-[300px] mt-[100px] md:w-[600px] lg:ms-[300px] lg:w-[650px] lg:mt-[150px] md:mt-[70px]">
                <motion.h1
                  className=" text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-semibold"
                  variants={list}
                  initial={"hidden"}
                  animate={"visible"}
                >
                  {text1.split("").map((letter, id) => (
                    <motion.span
                      key={id}
                      variants={item}
                      className=" relative inline-block"
                    >
                      <motion.span
                        className=" relative inline-block font-serif"
                        key={id}
                        variants={spanVariants}
                        initial={"visible"}
                        whileHover={"hover"}
                      >
                        {letter}
                      </motion.span>
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.h1
                  className=" text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-semibold"
                  variants={list}
                  initial={"hidden"}
                  animate={"visible"}
                >
                  {text2.split("").map((letter, id) => {
                    if (letter === "R")
                      return (
                        <motion.span
                          className=" relative inline-block font-serif text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem]"
                          key={id}
                          style={{ color: "skyblue" }}
                        >
                          {letter}{" "}
                          <p className=" absolute top-0 left-2 text-red-800 md:text-[4.5rem] lg:text-[5.5rem]">
                            R
                          </p>
                        </motion.span>
                      );
                    else
                      return (
                        <motion.span
                          variants={item}
                          className=" relative inline-block"
                          key={id}
                        >
                          <motion.span
                            className=" relative inline-block font-serif"
                            key={id}
                            variants={spanVariants}
                            initial={"visible"}
                            whileHover={"hover"}
                          >
                            {letter}
                          </motion.span>
                        </motion.span>
                      );
                  })}
                </motion.h1>

                <motion.h1
                  className=" text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-semibold relative inline-block"
                  variants={list}
                  initial={"hidden"}
                  animate={"visible"}
                >
                  {text3.split("").map((letter, id) => (
                    <motion.span
                      key={id}
                      variants={item}
                      className=" relative inline-block"
                    >
                      <motion.span
                        className=" relative inline-block font-serif"
                        key={id}
                        variants={spanVariants}
                        initial={"visible"}
                        whileHover={"hover"}
                      >
                        {letter}
                      </motion.span>
                    </motion.span>
                  ))}
                </motion.h1>
                {/* Introduction */}
                <div className="mt-[10px]">
                  <p className="w-[300px] md:w-[590px] text-[10px] md:text-[20px] lg:w-[1200px]">
                    I'm a versatile Full Stack Developer with a passion for
                    crafting innovative web solutions. With a strong foundation
                    in both front-end and back-end technologies, I bring a
                    holistic approach to web development, I approach web
                    development with a holistic mindset, ensuring that every
                    aspect of a project is seamlessly integrated for an
                    exceptional user experience.
                  </p>
                </div>
                {/* Social Media Icons */}
                <div className="flex gap-3 md:gap-4 pt-3 md:pt-5">
                  {socialMedia.map((item, i) => (
                    <div
                      key={i}
                      className="border border-sky-500/50 p-2 md:p-3 rounded-full group"
                    >
                      <a href={item.href} target="blank">
                        <span className=" text-[15px] md:text-[30px] hover:text-red-500">
                          {item.icons}
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[200px] h-[200px] ms-[90px] lg:ms-0 md:w-[300px] md:h-[300px] md:ms-[230px] lg:w-[830px] lg:h-[700px] flex items-start justify-center lg:items-center md:mt-[20px] rounded-full">
              <motion.img
                src={profile}
                alt="image"
                className=" w-[200px] h-[200px] md:w-[290px] md:h-[290px] lg:w-[350px] lg:h-[350px] rounded-full object-cover shadow-xl lg:absolute lg:right-[300px] lg:top-[100px] shadow-sky-500/50"
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}
