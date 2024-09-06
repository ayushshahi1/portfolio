"use client";

import React, { useState } from "react";
import { animate, easeIn, motion } from "framer-motion";

import { BsGithub } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderButton from "../../components/SliderButton";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Ministore",
    description:
      "This is a simple store in which we can buy, add, remove, update the products.",
    stack: [
      { name: "Html" },
      { name: "Tailwind Css" },
      { name: "React JS" },
      { name: "Node JS" },
      { name: "Express" },
      { name: "Mongo Db" },
    ],
    image: "",
    github: "https://github.com/ayushshahi1/Ministore-Front",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Wikipedia Search",
    description:
      "It is a simple searching page where we can search something like google.",
    stack: [{ name: "Html" }, { name: "Tailwind Css" }, { name: "Next JS" }],
    image: "",
    github: "https://github.com/ayushshahi1/wikipedia-search",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Movie Database",
    description:
      "In this project, I imported api through TMDB website and use it in my own project.",
    stack: [{ name: "Html" }, { name: "Tailwind Css" }, { name: "React JS" }],
    image: "",
    github: "https://github.com/ayushshahi1/Movie-database/tree/movie",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className=" flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extralight">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00FF99] transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-[#00FF99]">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div>
                <Link
                  href={project.github}
                  className="relative group flex items-center"
                >
                  <BsGithub className="text-white text-3xl group-hover:text-[#00FF99]" />
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Github Repository
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* sliderbutton */}
              <SliderButton />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
