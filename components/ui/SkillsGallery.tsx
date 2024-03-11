import React from "react";
import SkillItem from "./SkillItem";

interface Skill {
  Image: string;
  width: number;
  height: number;
  skillName: string;
}

interface SkillsGalleryProps {
  title?: string; //Optional if i want to add title for each part, depends on the design outcome
  skillsData: Skill[];
}

const SkillsGallery = ({ skillsData }: SkillsGalleryProps) => {
  return (
    <div className="flex flex-row justify-around flex-wrap  gap-5 items-center">
      {skillsData.map((skill, index) => (
        <SkillItem
          key={`${skill.skillName}-${index}`}
          src={skill.Image}
          width={skill.width}
          height={skill.height}
          index={index}
          skillName={skill.skillName}
        />
      ))}
    </div>
  );
};

export default SkillsGallery;
