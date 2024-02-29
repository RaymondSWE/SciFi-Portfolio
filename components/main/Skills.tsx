"use client";
import {
  Backend_skill,
  Frontend_skill,
  Devops,
  Other_skill,
} from "@/data/Skills";
import React from "react";
import SkillSection from "../ui/SkillSection";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 leading-tight">
        Making apps with modern technologies
      </h1>
      <div className="m-6 flex justify-center items-center">
        <SparklesIcon className="text-purple-400 mr-2 h-8 w-8 animate-pulse" />
        <p className="text-lg md:text-xl text-gray-300">
          Crafting the future, one line of code at a time.
        </p>
      </div>
    </motion.div>

      </div>
      <SkillSection skillsData={Frontend_skill} />
      <SkillSection skillsData={Backend_skill} />
      <SkillSection skillsData={Devops} />
      <SkillSection skillsData={Other_skill} />
      <div className="w-full h-full absolute top-0 left-0 z-[-10] opacity-30">
        <video
          className="w-full h-full object-cover"
          preload="none"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>
    </section>
  );
};

export default Skills;
