"use client"
import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { projectsData } from "@/constants/Projects";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12">
        My Projects
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            sourceUrl={project.sourceUrl}
            youtubeUrl={project.youtubeUrl}
            startDate={project.startDate}
            endDate={project.endDate}
            technologyStack={project.technologyStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
