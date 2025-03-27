import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Utils/Motion";
import { styles } from "./All comp data/Styles";

const SixSection = () => {
  return (
    <>
      <div className="max-w-[80%] w-full mx-auto pb-[100px] relative">
        <motion.div
          variants={fadeIn("down", "spring", 0.2, 0.75)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 pt-3 lg:grid-cols-[3fr_1.5fr] gap-6 border-[1px] relative"
          style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex flex-col gap-6 pl-3">
            <div className="relative inline-block">
              <h1 className="lg:text-[40px] font-bold text-[20px]">
                <span className="text-orange-600">Benefits of</span> <br />
                Online Education
              </h1>
              <div className="absolute left-0 bottom-[-3px] w-[200px] lg:w-[350px] h-[2px] bg-black"></div>
            </div>

            <p className={`${styles.sectionSubText}`}>
              Online Education increases engagement by adding a human element.
              Studying in the comfort of your own home is convenient, but there
              are various other advantages of online study. It's especially
              beneficial for students who aren't as self-sufficient or who are
              used to the traditional educational model of "teacher and class."
            </p>
            <ul className="list-disc pl-5">
              <li className={`${styles.sectionSubText}`}>
                Time and Location Flexibility
              </li>
              <li className={`${styles.sectionSubText}`}>
                Find Unlimited Course Category
              </li>
              <li className={`${styles.sectionSubText}`}>
                No Need to Carry Books
              </li>
              <li className={`${styles.sectionSubText}`}>
                Get Access in any mobile, Tab, Laptop with your credential
              </li>
              <li className={`${styles.sectionSubText}`}>
                Use your time when you are traveling, Outing and free time
              </li>
              <li className={`${styles.sectionSubText}`}>
                Exam Practice before exam
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="./sectionSixImg/img.png"
              alt="img"
              className="lg:h-[500px] lg:w-full h-[250px] w-[250px] object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          initial="hidden"
          animate="show"
          className="grid w-full bg-black grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 relative mt-[-50px]"
          style={{
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
            background: `linear-gradient(to bottom, rgba(16, 17, 20, 0.9) 100%, white 0%), url(./sectionSixImg/img2.png)`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col items-center">
            <span className="lg:text-[28px] font-bold text-[20px] text-white">
              10000+
            </span>
            <p className={`${styles.sectionSubText} text-orange-600`}>
              Total Exams
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="lg:text-[28px] font-bold text-[20px] text-white">
              600+
            </span>
            <p className={`${styles.sectionSubText} text-orange-600`}>
              Courses
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="lg:text-[28px] font-bold text-[20px] text-white">
              3000+
            </span>
            <p className={`${styles.sectionSubText} text-orange-600`}>
              Success Stories
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="lg:text-[28px] font-bold text-[20px] text-white">
              4.5/5
            </span>
            <p className={`${styles.sectionSubText} text-orange-600`}>Rating</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SixSection;
