import React from "react";

import { RiArrowDropRightFill } from "react-icons/ri";
import { fadeIn } from "../Utils/Motion";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" w-full mx-auto pt-[100px] mt-16 relative bg-[#160e30]">
        <div
          className="w-full max-w-[80%] py-4 px-4 mx-auto relative "
          style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
        >
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            initial="hidden"
            animate="show"
            className="absolute w-full top-[-130px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 p-6 lg:grid-cols-2 gap-8 bg-[#e0e0e0]"
          >
            <div className="w-full text-center">
              <h1 className="lg:text-[20px] font-bold text-[12px]">
                <span className="text-orange-600">SUBSCRIBE OUR</span> <br />
                NEWSLETTER
              </h1>
            </div>
            <div className="w-full flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[60%] p-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="p-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700">
                Subscribe
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 pt-6 lg:grid-cols-4 gap-8"
          >
            <div>
              <h2 className="text-orange-600">About US</h2>
              <p className="text-white">
                SchoolAura Smart Education Platform is a step towards making
                learning better and effective for the students and help to
                achieving their goals.
              </p>
            </div>

            <div>
              <h2 className="text-orange-600">Quick Links</h2>
              <ul className="mt-2 space-y-2">
                <div className="flex items-center">
                  <NavLink
                    to="/about-us"
                    className="text-white hover:text-orange-400 flex items-center"
                  >
                    <RiArrowDropRightFill className="text-[25px] text-orange-600" />
                    About Us
                  </NavLink>
                </div>
                <div className="flex items-center">
                  <NavLink
                    to="/benefits"
                    className="text-white hover:text-orange-400 flex items-center"
                  >
                    <RiArrowDropRightFill className="text-[25px] text-orange-600" />
                    Benefits
                  </NavLink>
                </div>
                <div className="flex items-center">
                  <NavLink
                    to="/blogs"
                    className="text-white hover:text-orange-400 flex items-center"
                  >
                    <RiArrowDropRightFill className="text-[25px] text-orange-600" />
                    Blogs
                  </NavLink>
                </div>
                <div className="flex items-center">
                  <NavLink
                    to="/testimonials"
                    className="text-white hover:text-orange-400 flex items-center"
                  >
                    <RiArrowDropRightFill className="text-[25px] text-orange-600" />
                    Testimonials
                  </NavLink>
                </div>
              </ul>
            </div>

            <div>
              <h2 className="text-orange-600">Services</h2>
              <ul className="mt-2 space-y-2">
                <div className="flex items-center">
                  <NavLink
                    to="/features"
                    className="text-white hover:text-orange-400 flex items-center"
                  >
                    <RiArrowDropRightFill className="text-[25px] text-orange-600" />
                    Features
                  </NavLink>
                </div>
                <div className="flex items-center">
                  <NavLink
                    to="/help-support"
                    className="text-white hover:text-orange-400 flex items-center"
                  >
                    <RiArrowDropRightFill className="text-[25px] text-orange-600" />
                    Help & Support
                  </NavLink>
                </div>
                <div className="flex items-center">
                  <NavLink
                    to="/services"
                    className="text-white hover:text-orange-400 flex items-center"
                  >
                    <RiArrowDropRightFill className="text-[25px] text-orange-600" />
                    Services
                  </NavLink>
                </div>
                <div className="flex items-center">
                  <NavLink
                    to="/support"
                    className="text-white hover:text-orange-400 flex items-center"
                  >
                    <RiArrowDropRightFill className="text-[25px] text-orange-600" />
                    Support
                  </NavLink>
                </div>
              </ul>
            </div>

            <div>
              <h2 className="text-orange-600">Terms & Policies</h2>
              <ul className="mt-2 space-y-2">
                <div className="flex items-center">
                  <NavLink
                    to="/terms-condition"
                    className="text-white hover:text-orange-400 flex items-center"
                  >
                    <RiArrowDropRightFill className="text-[25px] text-orange-600" />
                    Terms & Condition
                  </NavLink>
                </div>
                <div className="flex items-center">
                  <NavLink
                    to="/privacy-policy"
                    className="text-white hover:text-orange-400 flex items-center"
                  >
                    <RiArrowDropRightFill className="text-[25px] text-orange-600" />
                    Privacy Policy
                  </NavLink>
                </div>
                <div className="flex items-center text-center">
                  <NavLink
                    to="/sitemap"
                    className="text-white hover:text-orange-400 flex items-center"
                  >
                    <RiArrowDropRightFill className="text-[25px] text-orange-600" />
                    Sitemap
                  </NavLink>
                </div>
              </ul>
            </div>
          </motion.div>
          <div className="  w-[200px] lg:w-full mt-7 h-[2px] bg-gray-400"></div>
        </div>
        <footer className="w-full py-4 flex justify-between px-6 lg:px-24 bg-black text-white">
          <p className=" text-[8px] lg:text-[16px] font-bold">
            2021 © SchoolAura. All Right Reserved
          </p>
          <p className=" text-[8px] lg:text-[16px] font-bold">
            Design & Development by Insoftlink Software
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
