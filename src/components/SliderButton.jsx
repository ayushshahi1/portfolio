"use client";

import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SliderButton = () => {
  const swiper = useSwiper();
  console.log("swiper", swiper);
  const btnStyle =
    "bg-[#00FF99] text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all";
  return (
    <div className=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max">
      <button
        className={btnStyle}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <PiCaretLeftBold />
      </button>
      <button
        className={btnStyle}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default SliderButton;
