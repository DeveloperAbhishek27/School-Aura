import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Utils/Motion";
import { styles } from "./All comp data/Styles";
import { LuBookOpenCheck } from "react-icons/lu";
import {
  competitive,
  entrance,
  school,
} from "./All comp data/ThirdSectionData";

const ThirdSection = () => {
  const [activeCategory, setActiveCategory] = useState("school");

  const categoryData = {
    school,
    competitive,
    entrance,
  };

  return (
    <div className="max-w-[80%] w-full mx-auto pb-[100px]">
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        initial="hidden"
        animate="show"
        className="flex-[0.75] bg-black-100 py-8 rounded-2xl"
      >
        <h1 className={`py-6 lg:leading-[70px] ${styles.sectionHeadText}`}>
          <span className="text-orange-600">PROVIDE</span> <br />
          BEST EDUCATIONAL
        </h1>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_4fr] gap-6 border-[2px] py-2 pl-1 pr-4 rounded-md"
        style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
      >
        <div
          className={`${styles.sectionSubText} text-[8px] font-bold flex justify-around border-r-[2px] px-2 flex-col gap-2 h-full py-2`}
        >
          <button
            onClick={() => setActiveCategory("school")}
            className={`text-black hover:text-blue-700 py-4 w-full  px-3 bg-gray-300 ${
              activeCategory === "school" ? "bg-orange-400 text-white" : ""
            }`}
          >
            School
          </button>
          <button
            onClick={() => setActiveCategory("competitive")}
            className={`text-black hover:text-blue-700 py-4 w-full  px-3 bg-gray-300 ${
              activeCategory === "competitive" ? "bg-orange-400 text-white" : ""
            }`}
          >
            Competitive
          </button>
          <button
            onClick={() => setActiveCategory("entrance")}
            className={`text-black hover:text-blue-700 py-4 w-full  px-3 bg-gray-300 ${
              activeCategory === "entrance" ? "bg-orange-400 text-white" : ""
            }`}
          >
            Entrance
          </button>
          <button
            onClick={() => setActiveCategory("tutors")}
            className={`text-black hover:text-blue-700 py-4 w-full  px-3 bg-gray-300 ${
              activeCategory === "tutors" ? "bg-orange-400 text-white" : ""
            }`}
          >
            Tutors
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 lg:h-[300px] py-4 overflow-hidden">
          {activeCategory === "tutors" ? (
            <div className="text-2xl font-bold text-orange-600">
              Coming Soon
            </div>
          ) : (
            categoryData[activeCategory].map((item, i) => (
              <div
                key={i}
                className=" border-[2px] pr-3 flex justify-between gap-4 items-center rounded-[40px]"
              >
                <div className="bg-orange-400 rounded-full p-2">
                  <LuBookOpenCheck className=" scale-75 text-[45px] text-white  " />
                </div>
                <div>
                  <h2 className="text-[17px] font-bold text-orange-600">
                    {item.name}
                  </h2>
                  <p className="text-black text-sm">
                    Count: <span className="font-bold">{item.count}</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ThirdSection;
