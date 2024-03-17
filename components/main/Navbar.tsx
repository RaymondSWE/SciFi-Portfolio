import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedinIn, FaRocket } from "react-icons/fa";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#Timeline", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
];

const socialLinks = [
  {
    href: "https://github.com/RaymondSWE",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://linkedin.com/in/raman-mohammed",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
];

const Navbar = () => {
  return (
    <nav className="flex flex-row shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] border-b-2 border-[#7042f861] w-full py-4 ">
      <Image
        src="/main.svg"
        alt="Main"
        fill
        className="opacity-80 z-[-10] object-cover"
      />
      <div className="flex justify-between w-full px-6 ">
        <div className="md:flex items-center hidden">
        <FaRocket className="text-purple-500 text-2xl mr-2" />
          <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 cursive">
            Raman Mohammed
          </span>
        </div>
        <div className="flex justify-center items-center flex-grow md:max-w-2xl md:px-2">
          <div className="flex justify-between items-center w-full bg-[#0300145e] border border-[#7042f861] rounded-full text-gray-200 px-6 py-4 space-x-2 z-50">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white md:text-lg text-xs transition duration-300 hover:text-gray-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:flex gap-6 ml-6 z-50 justify-end items-center">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-3xl transition duration-300 hover:text-gray-400"
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
