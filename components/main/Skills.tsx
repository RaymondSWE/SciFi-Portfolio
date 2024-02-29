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

const Skills = () => {
  return (
    <section
      id="skills"
      className=" flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
        >
          Making apps with modern technologies
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
