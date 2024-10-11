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
        className="group z-10 flex flex-col overflow-hidden rounded-lg bg-[#030014] border border-[#24282c] hover:scale-110 hover:shadow-lg  max-w-sm mx-auto relative"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInFromTop(0.5)}
        aria-labelledby={`project-title-${id}`}
        tabIndex={0}
        
      >
        
        <div className="w-full h-48 relative p-2">
          <Image
            src={src}
            alt={`Image of ${title}`}
            fill
            className="object-cover z-20 cursor-pointer"
            onClick={() => setModalOpen(true)}
          />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-transparent opacity-75 rounded-b-lg" />
          {endDate === null && (
            <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md text-white text-xs font-bold py-1 px-2 rounded">
              In Progress
            </div>
          )}
        </div>

        <div className="flex-grow p-4">
          <h1
            className="text-lg font-bold text-center text-white"
            id={`project-title-${id}`}
          >
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-300 italic text-center">
            {description}
          </p>
        </div>

        <div className="z-20 flex justify-around items-center p-4 bg-gradient-to-b from-[#3c087e1f] to-[#3c087e6b] shadow-inner">
        {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="flex flex-col items-center text-white z-20"
              onClick={(e) => e.stopPropagation()} 
            >
              <FaGithub className="text-2xl" />
              <span className="text-xs mt-1">Github Link</span>
            </a>
          ) : (
            <div
              className="flex flex-col items-center text-white opacity-50 cursor-not-allowed"
              onClick={() => handleMissingLink('Github')}
              aria-hidden="true"
            >
              <FaGithub className="text-2xl" />
              <span className="text-xs mt-1">N/A</span>
            </div>
          )}

          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
              className="flex flex-col items-center text-white"
              onClick={(e) => e.stopPropagation()} 
            >
              <FaExternalLinkAlt className="text-2xl" />
              <span className="text-xs mt-1">Live Demo</span>
            </a>
          ) : (
            <div
              className="flex flex-col items-center text-white opacity-50 cursor-not-allowed"
              onClick={() => handleMissingLink('live demo')}
              aria-hidden="true"
            >
              <FaExternalLinkAlt className="text-2xl" />
              <span className="text-xs mt-1">
                N/A
              </span>
            </div>
          )}

          {youtubeUrl ? (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${title} on YouTube`}
              className="flex flex-col items-center text-white"
              onClick={(e) => e.stopPropagation()} 
            >
              <FaYoutube className="text-2xl" />
              <span className="text-xs mt-1">Youtube Link</span>
            </a>
          ) : (
            <div
              className="flex flex-col items-center text-white opacity-50 cursor-not-allowed"
              onClick={() => handleMissingLink('Youtube')}
              aria-hidden="true"
            >
              <FaYoutube className="text-2xl" />
              <span className="text-xs mt-1">
                N/A
              </span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white bg-black bg-opacity-50 rounded-lg px-4 py-2">
        Click the image to view details
        </span>
      </div>
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
