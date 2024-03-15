import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedinIn, FaRocket } from "react-icons/fa";

const navLinks = [
  { href: "#hero", label: "About me" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#Timeline", label: "Work & Education" },
  { href: "#projects", label: "Projects" },
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
    <nav className="">
      <Image
        src="/main.svg"
        alt="Main"
        fill
        className="opacity-80 z-[-10] object-cover"
      />
      <div className="flex justify-center items-center w-full px-4 py-2 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] ">
        <div className="flex justify-between items-center max-w-5xl w-full bg-[#0300145e] border border-[#7042f861] rounded-full text-gray-200 px-12 py-4 z-50 space-x-4 ">
         {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-xl transition duration-300 hover:text-gray-400"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex gap-6 ml-6 z-50 ">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-3xl transition duration-300 hover:text-gray-400"
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
