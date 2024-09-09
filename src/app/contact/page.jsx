"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+977-9803342833",
    link: "tel:+977 9803342833",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shahiaaayus@gmail.com",
    link: "mailto:shahiaaayus@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Marudhoka, Kathmandu",
    link: "https://maps.app.goo.gl/CEmhk1UzGNcFAYa49",
  },
];
const page = () => {
  const inputStyle =
    "flex h-[48px] rounded-md border-white/10 focus:border-[#00FF99] font-light bg-[#1c1c1c] px-4 py-5 text-base placeholder:text-white/60 outline-none";
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="conatainer mx-auto mt-20">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-[#00FF99]">Let's work together</h3>

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
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#00FF99] rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <Link href={item.link} target="_blank">
                        <h3 className="text-xl">{item.description}</h3>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
