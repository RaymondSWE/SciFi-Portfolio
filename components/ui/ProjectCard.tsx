"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string | null;
  githubUrl: string | null;
  sourceUrl: string | null;
  youtubeUrl: string | null;
  startDate: string;
  endDate: string;
  technologyStack: string[];
}

const ProjectCard = ({
  src,
  title,
  description,
  githubUrl,
  sourceUrl,
  youtubeUrl,
  startDate,
  endDate,
  technologyStack,
}: ProjectCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleMissingLink = (serviceName: string) => {
    alert(`Sorry, the ${serviceName} link is not available for this project.`);
  };

  return (
    <>
      <motion.div
        className=" z-[20] flex flex-col overflow-hidden rounded-lg shadow-lg bg-[#1A1A2E] border border-[#2A0E61] hover:shadow-2xl transition-shadow duration-300 ease-in-out max-w-xs mx-auto"
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
      >
        <div className="w-full h-48 relative">
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-transparent opacity-75 rounded-b-lg" />
        </div>

        <div className="flex-grow p-4">
          <h1 className="text-xl font-bold text-white text-center">{title}</h1>
          <p className="mt-2 text-sm text-gray-300 text-center">
            {description}
          </p>
        </div>

        {/* Icons container */}
        <div className="flex justify-around items-center p-4 bg-[#14141f] rounded-b-lg">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white text-xl"
            >
              <FaGithub />
            </a>
          ) : (
            <FaGithub
              className="text-white text-xl opacity-50 cursor-not-allowed"
              onClick={() => handleMissingLink("GitHub")}
            />
          )}

          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source Link"
              className="text-white text-xl"
            >
              <FaExternalLinkAlt />
            </a>
          ) : (
            <FaExternalLinkAlt
              className="text-white text-xl opacity-50 cursor-not-allowed"
              onClick={() => handleMissingLink("Live Demo")}
            />
          )}

          {youtubeUrl ? (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white text-xl"
            >
              <FaYoutube />
            </a>
          ) : (
            <FaYoutube
              className="text-white text-xl opacity-50 cursor-not-allowed"
              onClick={() => handleMissingLink("YouTube")}
            />
          )}
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="text-center text-sm text-white py-2 button-primary transition-colors rounded-b-lg"
        >
          Technology Stack
        </button>
      </motion.div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        startDate={startDate}
        endDate={endDate}
        technologyStack={technologyStack}
      />
    </>
  );
};

export default ProjectCard;
