"use client";
import Typewriter from "typewriter-effect";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromRight,
  slideInFromLeft,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center h-auto md:h-[75vh] lg:h-[85vh] py-4 px-4 mt-12 md:mt-0 text-white"
    >
      <div className="container mx-auto flex flex-wrap items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 flex flex-col md:items-start items-center"
          variants={slideInFromLeft(0.5)}
        >
          <div className="flex items-center sm:mb-6 mb-4">
            <motion.div
              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
              variants={slideInFromTop(0.5)}
            >
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <div className="Welcome-text italic md:text-xl text-base font-semibold ">
                <Typewriter
                  options={{
                    strings: [
                      "Hey there, I'm Raman Mohammed",
                      "I'm a Full-Stack developer",
                      "Based in Gothenburg, Sweden",
                      "You can contact me via Linkedin or Email",
                    ],
                    delay: 80,
                    deleteSpeed: 25,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </motion.div>
          </div>

          <motion.h2
            variants={slideInFromLeft(0.5)}
            className="md:text-6xl text-2xl font-bold leading-tight"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              cool stuff
            </span>{" "}
            with code
          </motion.h2>
            <TextGenerateEffect words="With over three years of development experience and a
            Bachelor&apos;s in Computer Science specializing in System
            Development, I specialize in Java, React.js, TypeScript, Node.js,
            MySQL, Azure, and more. Passionate about building scalable and
            reliable distributed systems, continuously learning to tackle new
            challenges in software infrastructure." 
            />          
          <motion.a
            variants={slideInFromRight(0.8)}
            href="#projects"
            className=" md:inline-block sm:px-8 sm:py-2 px-4 py-2 sm:text-lg text-base rounded-3xl transition-colors button-primary z-20"
          >
            Explore My Projects
          </motion.a>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(0.8)}
          className="w-full md:w-1/2 px-4 mt-6 md:mt-0 flex justify-center items-center"
        >
          <div className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden bg-[#ffffff08] backdrop-blur-[12px] border-2 border-[#645AFF] flex justify-center items-center shadow-lg shadow-blue-700/60">
            <Image
              src="/ramanbild.png"
              alt="Raman Mohammed Image"
              fill
              className=" ml-5 opacity-80 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
