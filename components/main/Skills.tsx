"use client";
import {
  Backend_skill,
  Frontend_skill,
  Devops,
  Other_skill,
} from "@/data/Skills";
import React from "react";
import SkillSection from "../ui/SkillsGallery";
import { motion } from "framer-motion";
import { BeakerIcon } from "@heroicons/react/24/solid";
import SectionHeader from "../ui/SectionHeader";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-80"
      style={{ transform: "scale(0.9" }}
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <SectionHeader
          title="Skills Nebula"
          subtitle="A cosmic cloud of abilities, where each particle is a skill honed through time and experience."
          Icon={<BeakerIcon />}
        />
      </div>
      <SkillSection skillsData={Frontend_skill} />
      <SkillSection skillsData={Backend_skill} />
      <SkillSection skillsData={Devops} />
      <SkillSection skillsData={Other_skill} />
      <div className="w-full h-full absolute top-0 left-0 z-[-10] opacity-30">
        <video
          className="w-full h-full object-cover opacity-40"
          preload="none"
          playsInline
          loop
          muted
          autoPlay
          src="/video/death_star.mp4"
        />
      </div>
    </section>
  );
};

export default Skills;
