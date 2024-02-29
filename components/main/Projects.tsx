"use client";
import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { projectsData } from "@/data/Projects";
import { motion } from "framer-motion";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-8" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Galaxy of Innovations
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 0.95, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mt-4"
        >
          <GlobeAltIcon className="text-cyan-500 h-6 w-6 animate-pulse" />
          <p className="text-xl text-gray-300 ml-2">
            Exploring the universe of code
          </p>
        </motion.div>
      </motion.div>

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
