"use client";
import {
  SkillsData,
} from "@/data/Skills";
import React from "react";
import SkillSection from "../ui/SkillsGallery";
import { BeakerIcon } from "@heroicons/react/24/solid";
import SectionHeader from "../ui/SectionHeader";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-4 sm:py-64"
      style={{ transform: "scale(0.9" }}
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <SectionHeader
          title="Skills Nebula"
          subtitle="A cosmic cloud of abilities, where each particle is a skill honed through time and experience."
          Icon={<BeakerIcon />}
        />
      </div>
      <SkillSection skillsData={SkillsData} />
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
