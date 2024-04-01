import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();
  const [imageSrc, setImageSrc] = useState("/robotnormal.png");

  return (
    <>
      <SectionHeader
        title="Contact Me"
        subtitle="Let's connect and build something amazing together!"
        Icon={<HiOutlineMail />}
      />
      <a
        href="mailto:RamanMohammed@hotmail.com"
        className="mx-auto display-block py-3 px-8 text-lg font-semibold text-white rounded-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 button-primary"
        onMouseEnter={() => setImageSrc("/robothappy.png")}
        onMouseLeave={() => setImageSrc("/robotnormal.png")}
      >
        Contact me
      </a>
      <div className="flex justify-center relative z-[-10] -mb-12">
        <Image
          src={imageSrc}
          alt="Mr. Roboto"
          width={250}
          height={250}
          className="cursor-pointer object-cover mirror"
        />
      </div>
      <footer className="w-full py-12 backdrop-blur-sm border-t border-[#645AFF] z-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center">
            <div className="text-white text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-3xl font-semibold mb-2 Welcome-text cursive">
                Raman Mohammed
              </h2>
              <p className="text-gray-400 italic">
                Fullstack Developer - Crafting Software solutions
              </p>
            </div>
            <address className="flex justify-center space-x-8 pb-4">
              <a
                href="https://github.com/RaymondSWE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-4xl hover:scale-110 transition-transform mirror"
                aria-label="Raman Mohammed on GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/raman-mohammed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-4xl hover:scale-110 transition-transform mirror"
                aria-label="Raman Mohammed on Linkedin"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:RamanMohammed@hotmail.com"
                className="text-white text-4xl hover:scale-110 transition-transform mirror"
                aria-label="Raman Mohammed on Email"
              >
                <FaEnvelope />
              </a>
            </address>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
