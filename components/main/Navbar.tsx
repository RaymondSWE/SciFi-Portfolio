import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedinIn, FaRocket } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="">
      <Image
        src="/main.svg"
        alt="Main"
        layout="fill"
        objectFit="cover"
        className="opacity-90 z-[-10]"
      />
      <div className="flex justify-center items-center w-full px-4 py-2 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] ">
        <div className="flex justify-between items-center max-w-5xl w-full bg-[#0300145e] border border-[#7042f861] rounded-full text-gray-200 px-12 py-4 z-50 space-x-4 ">
          <a
            href="#hero"
            className="cursor-pointer hover:text-gray-400 text-sm md:text-lg"
          >
            About me
          </a>
          <a
            href="#skills"
            className="cursor-pointer hover:text-gray-400 text-sm md:text-lg"
          >
            Skills
          </a>
          <a
            href="#certifications"
            className="cursor-pointer hover:text-gray-400 text-sm md:text-lg"
          >
            Certifications
          </a>
          <a
            href="#Timeline"
            className="cursor-pointer hover:text-gray-400 text-sm md:text-lg"
          >
            Work & Education
          </a>
          <a
            href="#projects"
            className="cursor-pointer hover:text-gray-400 text-sm md:text-lg"
          >
            Projects
          </a>
        </div>
        <div className="hidden md:flex gap-6 ml-6 z-50 ">
          <a
            href="https://github.com/RaymondSWE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition duration-300 hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/raman-mohammed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl transition duration-300 hover:text-gray-400"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
