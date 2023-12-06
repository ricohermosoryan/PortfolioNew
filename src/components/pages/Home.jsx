import React from "react";
import PageTransition from "../PageTransition";

export default function Home() {
  return (
    <>
      <PageTransition>
        <div className="flex justify-center items-center h-screen w-screen fixed">
          <div className="w-[1200px]">
            <h1 className="text-[60px] font-semibold text-center">Welcome</h1>
            <p className="text-[25px] font-normal pt-8">
              I'm Ryan Ricohermoso, a versatile Full Stack Developer with a
              passion for crafting innovative web solutions. With a strong
              foundation in both front-end and back-end technologies, I bring a
              holistic approach to web development, I approach web development
              with a holistic mindset, ensuring that every aspect of a project
              is seamlessly integrated for an exceptional user experience.
            </p>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
