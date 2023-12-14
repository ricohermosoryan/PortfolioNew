import React from "react";
import PageTransition from "../PageTransition";

export default function About() {
  return (
    <>
      <PageTransition>
        <div className="flex justify-center items-center h-screen w-screen fixed">
          <div className="w-[1200px]">
            <h1 className="text-[20px] md:text-[35px] lg:text-[45px] md:pt-[50px] pt-[60px] font-semibold text-center">
              About Me
            </h1>
            <p className="text-[13px] md:text-[23px] lg:text-[23px] font-normal text-center pt-3">
              I specialize in creating seamless user experiences by combining my
              expertise in HTML, CSS, JavaScript, and modern front-end
              frameworks like ReactJS and NodeJS with robust server-side
              programming, databases, and API integrations.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
              <div className="text-center md:mx-3 md:text-center lg:text-left">
                <h1 className="text-[20px] md:text-[35px] lg:text-[45px] font-semibold text-center">
                  My Background
                </h1>
                <p className="text-[10px] md:text-[22px] lg:text-[23px] font-normal pt-2 md:pt-3">
                  My journey in web development has equipped me with a keen eye
                  for design, an aptitude for problem-solving, and a commitment
                  to delivering high-quality, scalable software. Whether it's
                  building responsive web applications, optimizing database
                  performance, or ensuring top-notch security, I thrive on
                  tackling challenges and turning ideas into functional,
                  user-friendly digital experiences.
                </p>

                <p className="text-[10px] md:text-[22px] lg:text-[23px] font-normal pt-2 md:pt-3">
                  In addition to my technical skills, I am a strong collaborator
                  who enjoys working in cross-functional teams to turn concepts
                  into reality. My goal is to continually learn and adapt to
                  emerging technologies, keeping projects on the cutting edge
                  while maintaining a user-centered focus.
                </p>

                <p className="text-[10px] md:text-[22px] lg:text-[23px] font-normal pt-2 md:pt-3">
                  Let's connect and discuss how I can contribute to your next
                  web development project.
                </p>
              </div>
              <div className="">
                <h1 className="text-[20px] md:text-[35px] lg:text-[45px] font-semibold text-center">
                  Skills and Experties
                </h1>
                <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 text-center py-5 mx-2 gap-3 md:gap-5 text-red-800 md:text-[22px] lg:mx-6 lg:gap-8">
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      HTML
                    </span>{" "}
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      CSS
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      JavaScript
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      Tailwind
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      Bootstrap
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      ReactJS
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      NodeJS
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      Framer
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      PHP
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      Laravel
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      MySQL
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-[skyblue]">
                      Git
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </>
  );
}
