import React, { useState } from "react";
import PageTransition from "../PageTransition";
import image1 from "../../assets/image.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const images = [image1, image2, image3];

const variants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -200,
    opacity: 0,
  },
};

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  const nextStep = () => {
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const prevStep = () => {
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  };
  return (
    <>
      <PageTransition>
        <div className="flex justify-center items-center h-screen w-screen fixed">
          <div className="w-[1200px]">
            <h1 className="text-[40px] font-semibold text-center">PORTFOLIO</h1>
            <p className="text-[20px] font-normal text-center pt-8 pb-4">
              My Projects
            </p>
            <div className="container flex">
              <div className=" m-auto aspect-[16/9] relative overflow-hidden rounded-[16px] w-[120vh]">
                <AnimatePresence>
                  <motion.img
                    variants={variants}
                    animate="animate"
                    initial="initial"
                    exit="exit"
                    key={images[index]}
                    src={images[index]}
                    alt="images"
                    className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover object-center"
                  />
                </AnimatePresence>
                <button
                  className="p-2 bg-white rounded-full hover:bg-slate-200 absolute top-[50%] left-3"
                  onClick={prevStep}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="p-2 bg-white rounded-full hover:bg-slate-200 absolute top-[50%] right-3"
                  onClick={nextStep}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
