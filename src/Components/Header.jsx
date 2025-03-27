import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp, FaMobileAlt, FaUser, FaSignInAlt } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative shadow-myshadow2 bg-[#ffffff]">
      <div className="bg-[#6340ff] text-white py-2 px-4">
        <div className="max-w-[1290px] mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-2 lg:gap-6 text-sm">
            <p>📞 +91-9540349392</p>
            <p>✉️ contact@schoolaura.com</p>
          </div>
          <div className="lg:flex gap-4 text-sm items-center hidden ">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              <FaMobileAlt /> Mobile App
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              <FaSignInAlt /> Login
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              <FaUser /> Registration
            </a>
          </div>
        </div>
      </div>
      <nav className="w-full relative">
        <div className="max-w-[1290px] px-[15px] mx-auto flex items-center justify-between py-8">
          <div className="flex ">
            <NavLink
              to="/"
              style={{
                backgroundImage: `url("./header img/cloud.png")`,
                backgroundSize: "cover",
              }}
              className="absolute z-20 top-0 left-[-20vw] h-[130px] w-[280px] flex items-start justify-end lg:left-[-6vw] lg:h-[150px] lg:w-[380px] pt-[20px] pr-[50px]"
            >
              <img
                src="./header img/logo_school.png"
                alt="School Aura"
                className="w-[130px] h-[44px]"
              />
            </NavLink>
          </div>

          <div className="hidden lg:flex lg:gap-x-8 transition-all">
            <NavLink
              to="/"
              className="text-[#5B3AEE] font-bold hover:text-[#000]"
            >
              Home
            </NavLink>

            <div className="relative group ">
              <NavLink
                to="/exam"
                className="text-[#5B3AEE] font-bold hover:text-[#000] flex items-center justify-center"
              >
                Exam Solution
                <MdOutlineArrowDropDown className="text-[22px]" />
              </NavLink>

              <div
                className="absolute left-0 mt-2 w-44 bg-white rounded-[2px]   shadow-myshadow2 p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col gap-1 border-[2px] "
                style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
              >
                <NavLink
                  to="/exam/1-12"
                  className="block px-4 py-2 bg-[#fffafa] border-[1px]   hover:text-blue-700 text-[14px] font-bold hover:bg-gray-100"
                >
                  1st-12th Exam
                </NavLink>
                <NavLink
                  to="/exam/competitive"
                  className="block px-4 py-2 bg-[#fffafa] border-[1px] hover:text-blue-700 text-[14px] font-bold hover:bg-gray-100"
                >
                  Competitive Exam
                </NavLink>
                <NavLink
                  to="/exam/entrance"
                  className="block px-4 py-2 bg-[#fffafa] border-[1px] hover:text-blue-700 text-[14px] font-bold hover:bg-gray-100"
                >
                  Entrance Exam
                </NavLink>
              </div>
            </div>

            <div className="relative group">
              <NavLink
                to="/exam"
                className="text-[#5B3AEE] font-bold hover:text-[#000] flex items-center justify-center"
              >
                Online Study <MdOutlineArrowDropDown className="text-[22px]" />
              </NavLink>

              <div
                className="absolute left-0 mt-2 w-44 bg-[#fefeff] rounded-[2px]  shadow-myshadow2 p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col gap-1 border-[2px] "
                style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
              >
                <NavLink
                  to="/exam/1-12"
                  className="block px-4 py-2 bg-[#fffafa] border-[1px]  hover:text-blue-700 text-[14px] font-bold hover:bg-gray-100"
                >
                  1st-12th Exam
                </NavLink>
                <NavLink
                  to="/exam/competitive"
                  className="block px-4 py-2 bg-[#fffafa] border-[1px] hover:text-blue-700 text-[14px] font-bold hover:bg-gray-100"
                >
                  Competitive Exam
                </NavLink>
                <NavLink
                  to="/exam/entrance"
                  className="block px-4 py-2 bg-[#fffafa] border-[1px] hover:text-blue-700 text-[14px] font-bold hover:bg-gray-100"
                >
                  Entrance Exam
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/tutor"
              className="text-[#5B3AEE] font-bold hover:text-[#000]"
            >
              Tutor Solution
            </NavLink>
            <NavLink
              to="/blogs"
              className="text-[#5B3AEE] font-bold hover:text-[#000]"
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              className="text-[#5B3AEE] font-bold hover:text-[#000]"
            >
              Contact Us
            </NavLink>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="text-white text-[40px]"
            >
              <Bars3Icon className="size-8 bg-orange-500 rounded-sm " />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden fixed inset-0 z-50"
          >
            <DialogPanel className="fixed inset-y-0 right-0 w-full sm:max-w-sm bg-white shadow-lg p-6">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700"
                >
                  <XMarkIcon className="size-6" />
                </button>
              </div>

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "linear" }}
                className="mt-4 flex flex-col gap-4"
              >
                <NavLink
                  to="/"
                  className="block p-2 bg-gray-200 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/exam"
                  className="block p-2 bg-gray-200 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Exam Solution
                </NavLink>
                <NavLink
                  to="/study"
                  className="block p-2 bg-gray-200 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Online Study
                </NavLink>
                <NavLink
                  to="/tutor"
                  className="block p-2 bg-gray-200 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tutor Solution
                </NavLink>
                <NavLink
                  to="/blogs"
                  className="block p-2 bg-gray-200 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block p-2 bg-gray-200 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </motion.div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
