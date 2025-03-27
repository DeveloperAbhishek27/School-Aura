import React from "react";
import { styles } from "./All comp data/Styles";
import { motion } from "framer-motion";
import { fadeIn } from "../Utils/Motion";

const FiveSection = () => {
  return (
    <>
      <div className="w-full mx-auto pb-[100px]">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1.5fr_3fr] gap-6 border-[2px] bg-gray-200"
          style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="">
            <img
              src="./SectionFiveImg/img.png"
              alt="sectionFive"
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-3 p-2">
            <h1 className={`py-6 lg:text-[40px] font-bold text-[20px]`}>
              Easy to Access with{" "}
              <span className="text-orange-600">Mobile APP</span>
            </h1>
            <p className={`${styles.sectionSubText}`}>
              If you're looking for easily accessible resources for your
              classroom, then you're in the right place. Online learning with
              the Android app is very easy to access. That's why we've
              hand-curated the School Aura free app and website. Easy to use and
              learn!
            </p>
            <p className={`${styles.sectionSubText}`}>
              To learn online, you need to be reasonably comfortable with Smart
              Mobile Phone, Tab, Laptops, and the internet. The advantage of
              learning online via an android app is that you can pause the
              video/audio whenever you need to take notes or simply absorb what
              has been said. Another fantastic feature of online learning is
              that you can re-listen to different parts as needed, which is
              something you can't do in a live lecture!
            </p>
            <div className="flex items-start pb-3">
              {" "}
              <button className="bg-blue-600 p-2 hover:bg-blue-800  text-white font-bold rounded-md">
                Download Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FiveSection;
