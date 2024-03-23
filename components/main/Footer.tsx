import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaYoutube, FaEnvelope } from "react-icons/fa";
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
      <div className="flex justify-center relative z-10 -mb-12">
        <Image
          src={imageSrc}
          alt="Mr. Roboto"
          width={250}
          height={250}
          className="cursor-pointer object-cover"
        />
      </div>
      <footer className="w-full py-12 backdrop-blur-sm border-t border-[#645AFF] z-50">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl font-semibold mb-2 Welcome-text cursive">
                Raman Mohammed
              </h2>
              <p className="text-gray-400 italic">
                Fullstack Developer - Crafting Software solutions
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/raman-mohammed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-4xl hover:scale-110 transition-transform"
              >
                <FaGithub />
              </a>
              <a
                href="https://github.com/RaymondSWE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-4xl hover:scale-110 transition-transform"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:RamanMohammed@hotmail.com"
                className="text-white text-4xl hover:scale-110 transition-transform"
              >
                <FaEnvelope />
              </a>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-gray-400 italic">
                &copy; {year} Raman Mohammed. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
