import React from "react";
import PageTransition from "../PageTransition";

export default function About() {
  return (
    <>
      <PageTransition>
        <div className="flex justify-center items-center h-screen w-screen fixed">
          <div className="w-[1200px]">
            <h1 className="text-[40px] font-semibold text-center">About Me</h1>
            <p className="text-[20px] font-normal text-center pt-8">
              I specialize in creating seamless user experiences by combining my
              expertise in HTML, CSS, JavaScript, and modern front-end
              frameworks like ReactJS and NodeJS with robust server-side
              programming, databases, and API integrations.
            </p>
            <div className="flex justify-between mt-10">
              <div className="w-[50%]">
                <h1 className="text-[40px] font-semibold text-center">
                  My Background
                </h1>
                <p className="text-[15px] font-normal pt-4">
                  My journey in web development has equipped me with a keen eye
                  for design, an aptitude for problem-solving, and a commitment
                  to delivering high-quality, scalable software. Whether it's
                  building responsive web applications, optimizing database
                  performance, or ensuring top-notch security, I thrive on
                  tackling challenges and turning ideas into functional,
                  user-friendly digital experiences.
                </p>{" "}
                <br />
                <p className="text-[15px] font-normal">
                  In addition to my technical skills, I am a strong collaborator
                  who enjoys working in cross-functional teams to turn concepts
                  into reality. My goal is to continually learn and adapt to
                  emerging technologies, keeping projects on the cutting edge
                  while maintaining a user-centered focus.
                </p>{" "}
                <br />
                <p className="text-[15px] font-normal">
                  Let's connect and discuss how I can contribute to your next
                  web development project.
                </p>
              </div>
              <div className="w-[50%]">
                <h1 className="text-[40px] font-semibold text-center">
                  Skills and Experties
                </h1>
                <div className=" grid grid-cols-4 text-center py-5 mx-[60px] gap-8">
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-gray-200">
                      HTML
                    </span>{" "}
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-gray-200">
                      CSS
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-gray-200">
                      JavaScript
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-gray-200">
                      Tailwind
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-gray-200">
                      Bootstrap
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-gray-200">
                      ReactJS
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-gray-200">
                      NodeJS
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-gray-200">
                      Framer
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-gray-200">
                      PHP
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-gray-200">
                      Laravel
                    </span>
                  </div>
                  <div>
                    <span className="py-1 px-4 border border-gray-400 rounded-full font-semibold shadow-lg bg-gray-200">
                      MySQL
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
