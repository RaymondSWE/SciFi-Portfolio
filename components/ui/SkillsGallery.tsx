import React from "react";
import SkillItem from "./SkillItem";

interface Skill {
  Image: string;
  width: number;
  height: number;
  skillName: string;
}

interface SkillsGalleryProps {
  title?: string;
  skillsData: Skill[];
}

const SkillsGallery = ({ skillsData }: SkillsGalleryProps) => {
  return (
<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-4">
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
