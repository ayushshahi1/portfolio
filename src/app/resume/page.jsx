"use client";

import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// About, Experience, Education, and Skills Data
const about = {
  title: "About me",
  description:
    "Passionate MERN Stack developer, Specializing in React JS, Next Js and Typescript.",
  info: [
    { fieldName: "Name", fieldValue: "Ayush Shahi" },
    { fieldName: "Phone", fieldValue: "+977-9803342833" },
    { fieldName: "Experience", fieldValue: "6 months of experience" },
    { fieldName: "Email", fieldValue: "shahiaaayus@gmail.com" },
    { fieldName: "Language", fieldValue: "English, Nepali, Newari" },
  ],
};

const experience = {
  title: "My experience",
  description:
    "Passionate Frontend developer, Specializing in React JS, Next Js and Typescript.",
  items: [
    {
      company: "Mindrisers Institute of Technology",
      position: "Frontend Developer Intern",
      duration: "June, 2024 - Present",
    },
    {
      company: "SAS International Traders PVT LTD",
      position: "Accountant",
      duration: "October, 2022 - June, 2024",
    },
    {
      company: "Palpasa Savings And Credit Co-operative",
      position: "Cashier, Junior Accountant, Loan Officer",
      duration: "December, 2016 - September, 2022",
    },
  ],
};

const education = {
  title: "My education",
  items: [
    {
      institution: "Mindrisers Institute of Technology",
      degree: "MERN Stack",
      duration: "2024",
    },
    {
      institution: "Jubilant College",
      degree: "Bachelor in Business Studies",
      duration: "2016-2020",
    },
    {
      institution: "Jubilant College",
      degree: "plus 2",
      duration: "2014-2016",
    },
  ],
};

const skills = {
  title: "My skills",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.JS" },
    { icon: <SiNextdotjs />, name: "Next.JS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ],
};

const Resume = () => {
  const [activeSection, setActiveSection] = useState("about");

  const button = [
    { name: "About Me", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
  ];

  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-8 w-[calc(100%/3)] items-center">
        {button.map((item, index) => {
          return (
            <button
              key={index}
              className={`${
                activeSection === `${item.id}` &&
                "text-black bg-[#00FF99]  font-bold shadow-sm opacity-100 "
              } inline-flex items-center w-32 justify-center whitespace-nowrap text-white rounded-lg p-3 font-medium transition-all  opacity-50 hover:bg-[#00FF99] `}
              onClick={() => setActiveSection(`${item.id}`)}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div className="w-[calc(100%-100%/3)]">
        {activeSection === "about" && (
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold">{about.title}</h2>
            <p className="max-m-[600px] text-white/60">{about.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] ">
              {about.info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center justify-center xl:justify-start gap-4"
                  >
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {activeSection === "experience" && (
          <div>
            <h2 className="text-4xl font-bold">{experience.title}</h2>
            <p className="max-m-[600px] text-white/60 mx-auto">
              {experience.description}
            </p>
            <div className="overflow-y-auto h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experience.items.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-[#00FF99]">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {item.position}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#00FF99]"></span>
                        <p>{item.company}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        {activeSection === "education" && (
          <div>
            <h2 className="text-4xl font-bold">{education.title}</h2>
            <p className="max-m-[600px] text-white/60 mx-auto">
              {education.description}
            </p>
            <div className="overflow-y-auto h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-[#00FF99]">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#00FF99]"></span>
                        <p>{item.institution}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        {activeSection === "skills" && (
          <div className="flex flex-col gap-[30px]">
            <div className="flec flex-col gap-[30px] text-center xl:text-left">
              <h2 className="text-4xl font-bold">{skills.title}</h2>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => (
                  <li
                    key={index}
                    className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center "
                  >
                    <span className="text-6xl hover:text-[#00FF99]">
                      {skill.icon}
                    </span>
                    <span className="capitalize">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
