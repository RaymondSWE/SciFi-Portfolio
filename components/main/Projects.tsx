'use client';
import React, { memo, useMemo } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '@/data/Projects';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import SectionHeader from '../ui/SectionHeader';
import { ProjectCategories } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { useInView } from 'react-intersection-observer';


const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const projectsCategories = [
    ProjectCategories.WebApplication,
    ProjectCategories.DesktopApplication,
    ProjectCategories.DevOps,
  ];

  const filterProjectsByCategory = useMemo(() => {
    return projectsCategories.reduce((acc, category) => {
      acc[category] = projectsData.filter((project) => project.category === category);
      return acc;
    }, {} as Record<ProjectCategories, typeof projectsData>);
  }, [projectsCategories, projectsData]);

  return (
    <section
      className="flex flex-col items-center justify-center py-20 space-y-8"
      id="projects"
      aria-labelledby="projects-section-header"
    >
      <SectionHeader
        title="My Work Portfolio"
        subtitle="Showcasing My Projects and Contributions"
        Icon={<GlobeAltIcon />}
      />

      <Tabs defaultValue={ProjectCategories.WebApplication}>
        <div className="flex justify-center">
          <TabsList className="inline-flex mb-4 mt-[-24px]">
            {projectsCategories.map((category: ProjectCategories) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {projectsCategories.map((category) => (
          <TabsContent key={category} value={category}>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12"
              aria-label={`${category} project list`}
            >
              {filterProjectsByCategory[category]?.map((project) => (
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
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default memo(Projects);
