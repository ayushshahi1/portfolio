"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+977-9803342833",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shahiaaayus@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Marudhoka, Kathmandu",
  },
];
const page = () => {
  const inputStyle =
    "flex h-[48px] rounded-md border-white/10 focus:border-[#00FF99] text-[#1c1c1c] font-light px-4 py-5 text-base placeholder:text-white/60 outline-none";
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="conatainer mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-[#00FF99]">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                neque, recusandae repudiandae doloremque odio harum quo
                doloribus laborum quos culpa.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  className={inputStyle}
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className={inputStyle}
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
