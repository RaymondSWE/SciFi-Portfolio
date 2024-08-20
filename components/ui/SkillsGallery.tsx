import React from 'react';
import SkillItem from './SkillItem';

interface Skill {
  id: number;
  image: string;
  width: number;
  height: number;
  skillName: string;
  skillLevel: number;
}

interface SkillsGalleryProps {
  title?: string;
  skillsData: Skill[];
}

const SkillsGallery = ({ skillsData }: SkillsGalleryProps) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
      {skillsData.map((skill) => (
        <SkillItem
          key={skill.id}
          id={skill.id}
          src={skill.image}
          width={skill.width}
          height={skill.height}
          skillName={skill.skillName}
          skillLevel={skill.skillLevel}
        />
      ))}
    </div>
  );
};

export default SkillsGallery;
