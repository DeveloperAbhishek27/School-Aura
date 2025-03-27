import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Utils/Motion";
import { styles } from "./All comp data/Styles";
import Benifits from "./All comp data/FourSectionData.js";
import {
  FaTasks,
  FaClipboardList,
  FaBullhorn,
  FaEye,
  FaNetworkWired,
  FaLightbulb,
} from "react-icons/fa";

const featuresIcon = [
  {
    icon: <FaTasks />,
  },
  {
    icon: <FaClipboardList />,
  },
  {
    icon: <FaBullhorn />,
  },
  {
    icon: <FaEye />,
  },
  {
    icon: <FaNetworkWired />,
  },
  {
    icon: <FaLightbulb />,
  },
];

const FourSection = () => {
  return (
    <>
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
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 border-[1px]  education-section"
          style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
        >
          {Benifits.map((Benifit, i) => {
            const IconComponent = featuresIcon[i].icon;
            return (
              <div
                key={i}
                className="p-4 bg-[#ffffff]  flex flex-col justify-center gap-4 education-box"
              >
                <div className="education-box-icon">{IconComponent}</div>
                <h3>{Benifit.title}</h3>
                <p>{Benifit.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default FourSection;
