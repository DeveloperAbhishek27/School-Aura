import React from "react";
import { styles } from "./All comp data/Styles";
import { motion } from "framer-motion";
import { zoomIn } from "../Utils/Motion";
const SecondSection = () => {
  return (
    <div className="max-w-[80%] w-full mx-auto pt-[70px] sm:pb-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 ">
        <div
          className="h-[110%] lg:h-[170%]"
          style={{
            width: "100%",

            position: "relative",
            overflow: "hidden",
            backgroundImage: "linear-gradient(163deg,  #101114 75%, white 25%)",
          }}
        >
          <img
            src="./Home img/lightImg.png"
            alt="img"
            className=" h-full w-full object-contain"
          />
          <ul className="flex flex-col justify-between gap-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <li className="text-[22px] font-corben">256 Courses</li>
            <li className="text-[22px] font-corben">Expert Teachers</li>
            <li className="text-[22px] font-corben">Online Education</li>
          </ul>
        </div>
        <div className=" flex flex-col gap-6">
          <h2 className={`${styles.heroHeadText}font-corben font-bold`}>
            Why Online Study With SchoolAura
          </h2>
          <p className={`${styles.sectionSubText}`}>
            The world is changing for the better. Because of the advancement of
            technology, geek minds have grown tired of doing more work, and
            carrying books, notebooks and how much to buy books?
          </p>
          <p className={`${styles.sectionSubText}`}>
            <span className="font-bold">Solution:</span> Now you can find a
            simple solution with schoolaura. In these days almost everyone has a
            Smartphone, Tab or Laptop. So just open your device and start your
            study from anywhere anytime while you are travelling, sitting in the
            park, and etc.
          </p>
          <p className={`${styles.sectionSubText}`}>
            Now Use your time and gain knowledge in every second and Use your
            device for right things not for waste your time
          </p>
        </div>
      </div>
      <motion.div
        variants={zoomIn(0.2, 0.75)}
        initial="hidden"
        animate="show"
        className=" relative"
      >
        <img src="./Home img/img-1.png" alt="img" />
      </motion.div>
    </div>
  );
};

export default SecondSection;
