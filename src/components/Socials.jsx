import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socialsPath = [
  { icon: <FaGithub />, path: "https://github.com/ayushshahi1" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ayush-shahi-57a2341b0/?trk=opento_sprofile_details",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/ayushshahi15/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/aaayus" },
];

const Socials = () => {
  return (
    <div className="flex gap-6">
      {socialsPath.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className="w-9 h-9 border border-[#00FF99]  rounded-full flex justify-center items-center text-[#00FF99] text-base hover:bg-[#00FF99] hover:text-black hover:transition-all duration-500"
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
