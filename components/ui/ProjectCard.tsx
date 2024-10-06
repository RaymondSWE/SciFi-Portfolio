'use client';

import Image from 'next/image';
import React, { useState, memo } from 'react';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import { useInView } from 'react-intersection-observer';
import { handleMissingLink } from '@/utils/Toaster';

interface ProjectCardProps {
  id: number;
  src: string;
  title: string;
  description: string;
  githubUrl: string | null;
  sourceUrl: string | null;
  youtubeUrl: string | null;
  startDate: string;
  endDate: string | null;
  technologyStack: string[];
  features?: string[];
  challenges?: string[];
  accomplishments?: string[];
}

const ProjectCard = ({
  id,
  src,
  title,
  description,
  githubUrl,
  sourceUrl,
  youtubeUrl,
  startDate,
  endDate,
  technologyStack,
  features,
  challenges,
  accomplishments,
}: ProjectCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <>
      <motion.div
        data-attribute-id={id}
        className="z-[20] flex flex-col overflow-x-hidden rounded-lg bg-[#1A1A2E] backdrop-blur-[12px] border border-[#343a40] max-w-xs mx-auto"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInFromTop(0.5)}
        aria-labelledby={`project-title-${id}`}
        tabIndex={0}
      >
        <div className="w-full h-48 relative">
          <Image src={src} alt={`Image of ${title}`} fill className="object-cover" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-transparent opacity-75 rounded-b-lg" />
          {endDate === null && (
            <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md text-white text-xs font-bold py-1 px-2 rounded">
              In Progress
            </div>
          )}
        </div>

        <div className="flex-grow p-4">
          <h1 
          className="text-xl font-bold text-center Welcome-text"
          id={`project-title-${id}`}
          >
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-300 italic text-center">
            {description}
          </p>
        </div>

        {/* Icons container */}
        <div className="flex justify-around items-center p-4 bg-[#14141f]">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="text-white text-xl"
            >
              <FaGithub />
            </a>
          ) : (
            <FaGithub
              className="text-white text-xl opacity-50 cursor-not-allowed"
              onClick={() => handleMissingLink('Github')}
              aria-hidden="true"
            />
          )}

          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
              className="text-white text-xl"
            >
              <FaExternalLinkAlt />
            </a>
          ) : (
            <FaExternalLinkAlt
              className="text-white text-xl opacity-50 cursor-not-allowed"
              onClick={() => handleMissingLink('live demo')}
              aria-hidden="true"
            />
          )}

          {youtubeUrl ? (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${title} on YouTube`}
              className="text-white text-2xl "
            >
              <FaYoutube />
            </a>
          ) : (
            <FaYoutube
              className="text-white text-xl opacity-50 cursor-not-allowed"
              onClick={() => handleMissingLink('Youtube')}
              aria-hidden="true"
            />
          )}
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="text-center text-sm text-white py-2 button-primary transition-colors rounded-b-lg"
          aria-label={`View more details about ${title}`}
        >
          View Details
        </button>
      </motion.div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        id={id}
        startDate={startDate}
        endDate={endDate}
        technologyStack={technologyStack}
        description={description}
        title={title}
        imageSrc={src}
        features={features}
        challenges={challenges}
        accomplishments={accomplishments}
      />
    </>
  );
};

export default memo(ProjectCard);
