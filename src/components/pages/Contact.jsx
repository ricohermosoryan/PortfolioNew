import React, { useState } from "react";
import PageTransition from "../PageTransition";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <>
      <PageTransition>
        <div className="flex justify-center items-center h-screen w-screen fixed">
          <div className="w-[1200px]">
            <h1 className="text-[20px] md:text-[45px] lg:text-[50px] font-semibold text-center">
              GET IN TOUCH
            </h1>
            <p className="text-[18px] md:text-[40px] lg:text-[50px] font-normal text-center pt-5 flex justify-center gap-1">
              <FiPhone className=" mt-2" /> Phone: +639509410545
            </p>
            <p className="text-[18px] md:text-[35px] lg:text-[50px] font-normal text-center pt-5 flex justify-center gap-1">
              <AiTwotoneMail className=" mt-2" /> Email:{" "}
              <p className=" text-red-400">ricohermosoryan14344@gmail.com</p>
            </p>
            <p className="text-[18px] md:text-[35px] lg:text-[50px] font-normal text-center pt-5 flex justify-center gap-1">
              <IoLocationOutline className=" mt-2" /> Address: 23 Road 2 Project
              6 Quezon City
            </p>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
