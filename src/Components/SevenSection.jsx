import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../Utils/Motion";
import { FaGraduationCap } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";

const SevenSection = () => {
  return (
    <>
      <div
        className="w-full mx-auto pt-[100px] bg-[#e2e2e2]"
        style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="max-w-[80%] py-10 w-full mx-auto">
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 pt-6 lg:grid-cols-[1.5fr_3fr] gap-8"
          >
            <div className=" relative  w-[230px] h-[200px] lg:h-[300px] lg:w-[300px] bg-black">
              <img
                src="./SectionSevenImg/client.png"
                alt="img"
                className=" absolute h-[266px] lg:h-[400px] bottom-0 right-[-4vh] lg:right-[-6vh]  z-50"
              />
              <div className=" absolute bottom-10 left-12   w-[230px] h-[200px] lg:h-[300px] lg:w-[300px] bg-gray-400"></div>
            </div>
            <div>
              <div className="relative inline-block">
                <h1 className="lg:text-[30px] font-bold text-[30px]">
                  <span className="text-orange-600">We</span> <br />
                  ARE SPREADING
                </h1>
                <div className="absolute left-0 bottom-[-3px] w-[200px] lg:w-[350px] h-[2px] bg-black"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 pt-6 lg:grid-cols-2 gap-8">
                <div className="pr-3 flex justify-center gap-4  rounded-[40px]">
                  <div className=" shadow-myshadow2 rounded-md bg-[#fff] p-2">
                    <FaGraduationCap className="scale-75 text-[45px] text-black" />
                  </div>
                  <div>
                    <span className="text-[30px] font-bold text-black">
                      108+
                    </span>
                    <h2 className="text-[17px] font-bold text-orange-600">
                      Happy School
                    </h2>
                  </div>
                </div>

                <div className="pr-3 flex justify-center gap-4  rounded-[40px]">
                  <div className=" shadow-myshadow2 rounded-md bg-[#fff] p-2">
                    <FaUserGraduate className="scale-75 text-[45px] text-black" />
                  </div>
                  <div>
                    <span className="text-[30px] font-bold text-black">
                      58030+
                    </span>
                    <h2 className="text-[17px] font-bold text-orange-600">
                      Students
                    </h2>
                  </div>
                </div>

                <div className=" pr-3 flex justify-center gap-4  ">
                  <div className=" shadow-myshadow2 rounded-md bg-[#fff] p-2">
                    <RiParentFill className="scale-75 text-[45px] text-black" />
                  </div>
                  <div>
                    <span className="text-[30px] font-bold text-black">
                      5360+
                    </span>
                    <h2 className="text-[17px] font-bold text-orange-600">
                      Happy Parents
                    </h2>
                  </div>
                </div>

                <div className="pr-3 flex justify-center gap-4  rounded-[40px]">
                  <div className=" shadow-myshadow2 rounded-md bg-[#fff] p-2">
                    <GiTeacher className="scale-75 text-[45px] text-black" />
                  </div>
                  <div>
                    <span className="text-[30px] font-bold text-black">
                      10+
                    </span>
                    <h2 className="text-[17px] font-bold text-orange-600">
                      Happy Tutors
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SevenSection;
