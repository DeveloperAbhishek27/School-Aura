import React, { useState } from "react";
import categories from "./All comp data/Homedata";
import { NavLink } from "react-router-dom";
import { styles } from "./All comp data/Styles";
import { motion } from "framer-motion";
import { fadeIn } from "../Utils/Motion";

const Home = () => {
  const [isStudentLogin, setIsStudentLogin] = useState(true);

  return (
    <>
      <div
        className=" w-full shadow-myshadow2 bg-transparent relative"
        style={{
          backgroundImage: `url("https://www.schoolaura.com/Content/new_assets/images/header/banner-bg.png")`,
          backgroundSize: "cover",
          backgroundColor: "#ff5202",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute left-0 bottom-[-1px] w-full h-auto sm:h-[80px] md:h-[100px] lg:h-[134px] bg-no-repeat bg-cover z-10"
          style={{
            backgroundImage: `url("./Home img/wave.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></div>

        <div className="max-w-[80%] w-full mx-auto pt-[50px] pb-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3 ">
            <motion.div
              variants={fadeIn("right", "spring", 0.2, 0.75)}
              initial="hidden"
              animate="show"
              className="gap-5 flex flex-col"
            >
              <div className="absolute left-4 bottom-20 z-[10] hidden md:block">
                <img src="./Home img/girl.png" alt="home girl" />
              </div>

              <div className="flex flex-col gap-2 justify-start">
                <h1 className={`${styles.sectionHeadText}`}>
                  <span className="text-[#ffffff]">BE A </span>SMART STUDENT
                </h1>
                <p className={`${styles.heroSubText}`}>
                  SchoolAura Is A Smart Education Platform
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="pb-7 pt-4 px-6 w-full bg-[#fffafa] rounded-[8px] border-[1px] border-[#e5e7eb;] shadow-myshadow2 text-center"
                    style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
                  >
                    <p className="text-[14px] font-bold mb-2 block text-black-600 ">
                      {category.title}
                    </p>

                    <ul className="mb-4 flex items-center flex-col gap-4 justify-center">
                      {category.options.map((option, i) => (
                        <li key={i}>
                          <NavLink
                            to={option.link}
                            className="text-[14px] font-500 w-[120px] text-center block py-1 px-2 rounded-full bg-[#ff822e] hover:bg-[#f5a43bd7] text-white hover:text-black"
                          >
                            {option.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>

                    <NavLink to={category.link} className="text-[12px]">
                      {category.button}...
                    </NavLink>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-col pt-11 items-center w-full">
              <motion.div
                variants={fadeIn("left", "spring", 0.2, 0.75)}
                initial="hidden"
                animate="show"
                className="w-[310px] shadow-myshadow2 px-4 py-10 rounded-[10px] relative border-[1px] bg-[#fff3f3]"
                style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="hidden md:block w-[80px] h-[80px] rounded-full absolute top-[-40px] right-0 left-0 m-auto bg-white p-1 shadow-myshadow">
                  <img
                    src="./Home img/loginImg.png"
                    alt="img"
                    className="w-full  object-cover rounded-full"
                  />
                </div>

                <div className="flex flex-col  items-center gap-4">
                  <div className="w-full grid grid-cols-2 gap-2">
                    <button
                      className={`text-black  shadow-myshadow2 border-b-[1px] ${
                        isStudentLogin ? "border-[#f2a90a]" : "border-b-[1px]"
                      }`}
                      onClick={() => setIsStudentLogin(true)}
                    >
                      Student Login
                    </button>
                    <button
                      className={` text-black shadow-myshadow2 border-b-[1px] ${
                        !isStudentLogin ? "border-[#f2a90a]" : "border-b-[1px]"
                      }`}
                      onClick={() => setIsStudentLogin(false)}
                    >
                      Parents Login
                    </button>
                  </div>

                  <div className="flex flex-col gap-0 w-full">
                    <p className="text-black text-[13px]">
                      {isStudentLogin
                        ? "Mobile Number or Key"
                        : "Parent ID or Key"}
                      <span className="text-red-500">*</span>
                    </p>
                    <input
                      type="tel"
                      className="px-2 py-1 shadow-myshadow2 rounded-md border border-gray-300 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-0 w-full">
                    <p className="text-black text-[13px]">
                      {isStudentLogin ? "Student Password" : "Parent Password"}
                      <span className="text-red-500">*</span>
                    </p>
                    <input
                      type="password"
                      className="px-2 py-1 shadow-myshadow2 rounded-md border border-gray-300 focus:outline-none"
                    />
                  </div>

                  <div className="flex justify-between w-full text-black text-sm">
                    <a href="#" className="text-blue-400 hover:underline">
                      Forgot Password
                    </a>
                    {isStudentLogin && (
                      <a href="#" className="text-blue-400 hover:underline">
                        Create Account
                      </a>
                    )}
                  </div>
                  <button className="px-6 py-2 bg-[#f2a90a] shadow-myshadow text-black font-bold rounded-md hover:bg-[#d88b07] transition">
                    Submit
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
