import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedinIn, FaRocket } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#hero"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/main.svg"
            alt="Main"
            layout="fill"
            objectFit="cover"
            className="opacity-90 z-[-10]"
          />
          <FaRocket className="text-purple-500 text-2xl mr-2 animate-bounce" />
          <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Raman Mohammed
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#hero" className="cursor-pointer hover:text-gray-400">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-gray-400">
              Skills
            </a>
            <a href="#Timeline" className="cursor-pointer hover:text-gray-400">
              Work & Education
            </a>
            <a href="#projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 ">
          <a
            href="https://github.com/RaymondSWE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transition duration-300 hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/raman-mohammed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl transition duration-300 hover:text-gray-400"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
