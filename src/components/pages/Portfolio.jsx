import React from "react";
import PageTransition from "../PageTransition";

export default function Portfolio() {
  return (
    <>
      <PageTransition>
        <div className="flex justify-center items-center h-screen w-screen fixed">
          <div className="w-[1200px]">
            <h1 className="text-[40px] font-semibold text-center">PORTFOLIO</h1>
            <p className="text-[20px] font-normal text-center pt-8 pb-4">
              My Projects
            </p>
            <div>
              <img src="/src/assets/Quantum Galaxy.PNG" alt="image" />
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
