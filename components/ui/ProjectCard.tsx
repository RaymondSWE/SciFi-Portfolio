import Image from 'next/image';
import React, { useState, memo } from 'react';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import Modal from './Modal';
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

  return (
    <>
      <div
        data-attribute-id={id}
        className="group z-10 flex flex-col overflow-hidden rounded-lg backdrop-blur-lg border border-border-custom  transition-transform duration-300  max-w-[350px] mx-auto relative"
        aria-labelledby={`project-title-${id}`}
        tabIndex={0}
      >
        <div className="w-full h-48 relative p-2">
          <Image
            src={src}
            alt={`Image of ${title}`}
            fill
            className="object-cover z-20 cursor-pointer border-b border-border-custom"
            onClick={() => setModalOpen(true)}
          />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-transparent opacity-75 rounded-b-lg" />
          {endDate === null && (
            <div className="z-30 absolute top-2 left-2 bg-gradient-to-b from-[#3c087e1f] to-[#3c087e6b] shadow-inner text-white text-sm font-extrabold py-1 px-3 rounded-3xl flex items-center space-x-2 animate-pulse">
              <span>In Progress</span>
            </div>
          )}
        </div>
        <div className="flex-grow p-4">
          <h1
            className="text-lg font-bold text-center Welcome-text"
            id={`project-title-${id}`}
          >
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-300 italic text-center">
            {description}
          </p>
        </div>
        <div className="z-20 flex justify-around py-4 bg-gradient-to-b from-[#3c087e1f] to-[#3c087e6b] shadow-inner">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="flex items-center text-white z-20 space-x-2"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="text-xl" />
              <span className="text-xs mt-0">Github</span>
            </a>
          ) : (
            <div
              className="flex items-center text-white opacity-50 cursor-not-allowed space-x-2"
              onClick={() => handleMissingLink('Github')}
              aria-hidden="true"
            >
              <FaGithub className="text-xl" />
              <span className="text-xs mt-0">N/A</span>
            </div>
          )}

          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
              className="flex items-center text-white space-x-2"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-xl" />
              <span className="text-xs mt-0">Live Demo</span>
            </a>
          ) : (
            <div
              className="flex items-center text-white opacity-50 cursor-not-allowed space-x-2"
              onClick={() => handleMissingLink('live demo')}
              aria-hidden="true"
            >
              <FaExternalLinkAlt className="text-xl" />
              <span className="text-xs mt-0">N/A</span>
            </div>
          )}

          {youtubeUrl ? (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${title} on YouTube`}
              className="flex items-center text-white space-x-2"
              onClick={(e) => e.stopPropagation()}
            >
              <FaYoutube className="text-xl" />
              <span className="text-xs mt-0">Youtube</span>
            </a>
          ) : (
            <div
              className="flex items-center text-white opacity-50 cursor-not-allowed space-x-2"
              onClick={() => handleMissingLink('Youtube')}
              aria-hidden="true"
            >
              <FaYoutube className="text-xl" />
              <span className="text-xs mt-0">N/A</span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 flex items-start justify-center mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white bg-black bg-opacity-50 rounded-lg px-4 py-2 z-20">
            Click the image to view details
          </span>
        </div>
      </div>
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
