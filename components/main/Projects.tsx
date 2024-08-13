'use client';
import React, { memo } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '@/data/Projects';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import SectionHeader from '../ui/SectionHeader';

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 space-y-8"
      id="projects"
    >
      <SectionHeader
        title="My Work Portfolio"
        subtitle="Showcasing My Projects and Contributions"
        Icon={<GlobeAltIcon />}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {projectsData.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            src={project.src}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            sourceUrl={project.sourceUrl}
            youtubeUrl={project.youtubeUrl}
            startDate={project.startDate}
            endDate={project.endDate}
            technologyStack={project.technologyStack}
            features={project.features}
            challenges={project.challenges}
            accomplishments={project.accomplishments}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Projects);
