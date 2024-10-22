'use client';
import { SkillsData } from '@/data/Skills';
import React from 'react';
import SkillSection from '../ui/SkillsGallery';
import { BeakerIcon } from '@heroicons/react/24/solid';
import SectionHeader from '../ui/SectionHeader';
import { useInView } from 'react-intersection-observer';
import { infoToast } from '@/utils/Toaster';
const Skills = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        infoToast(
          'Discover My Skills!',
          'Hover over the skills icons to see the skill names!',
          'top-right',
          true,
        );
      }
    },
  });

  return (
    <section
      ref={ref}
      id="skills"
      className=" flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-4 sm:py-96"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <SectionHeader
          title="Technical Knowledge"
          subtitle="A List of My Skills"
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
