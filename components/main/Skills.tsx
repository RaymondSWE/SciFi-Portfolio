import {
  Backend_skill,
  Frontend_skill,
  Devops,
  Other_skill,
} from "@/data/Skills";
import React from "react";
import SkillDataProvider from "../ui/SkillDataProvider";
import SkillText from "../ui/SkillText";
import SkillSection from "../ui/SkillSection";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />
      <SkillSection skillsData={Frontend_skill} />
      <SkillSection skillsData={Backend_skill} />
      <SkillSection skillsData={Devops} />
      <SkillSection skillsData={Other_skill} />
    </section>
  );
};

export default Skills;
