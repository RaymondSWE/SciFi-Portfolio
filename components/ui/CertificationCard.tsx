'use client';

import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import ClipPath from './ClipPath';
import {
  slideInFromRight,
  slideInFromLeft,
  slideInFromTop,
} from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { handleMissingLink } from '@/utils/Toaster';

interface CertificationCardProps {
  id: number;
  name: string;
  date: string;
  description: string;
  CertificationLink: string | null;
  backgroundImg: string;
  borderBackground: string;
}

export const CertificationCard = ({
  id,
  name,
  date,
  description,
  backgroundImg,
  borderBackground,
  CertificationLink,
}: CertificationCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <motion.article
      className="flex flex-wrap gap-10 mb-10 sm:px-2 px-6 backdrop-blur-md "
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideInFromTop(0.5)}
      ref={ref}
    >
      <div
        className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:h-[24rem] md:max-w-[24rem] h-[20rem]  "
        style={{ backgroundImage: `url(${borderBackground})` }}
      >
        <motion.div
          className="flex flex-col justify-between h-full  relative z-2 p-[2.4rem] "
          variants={slideInFromLeft(0.5)}
        >
          <header className="absolute top-4 left-6 text-sm text-white bg-gradient-to-r from-purple-500 to-indigo-500 py-1 px-2 rounded-full shadow-md opacity-80">
            {date}
          </header>
          <div>
            <h5 className="text-base md:text-xl mt-4 font-bold mb-2 Welcome-text">
              {name}
            </h5>
            <p className="text-sm md:text-base italic text-gray-300 mb-6">
              {description}
            </p>
          </div>

          <footer className="flex justify-end items-center mt-4">
            <button
              onClick={() => {
                if (!CertificationLink) {
                  handleMissingLink('');
                }
              }}
              className="z-40"
            >
              {CertificationLink ? (
                <a
                  href={CertificationLink}
                  className="flex items-center font-code text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transform hover:scale-105 transition-transform duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Certification
                  <ArrowRightCircleIcon className="h-5 w-5 ml-2 text-gray-300" />
                </a>
              ) : (
                <span className="flex items-center font-code text-xs font-bold uppercase tracking-wider text-gray-300 cursor-not-allowed">
                  Missing Certification
                  <ArrowRightCircleIcon className="h-5 w-5 ml-2 text-gray-300" />
                </span>
              )}
            </button>
          </footer>
        </motion.div>
        <div
          className="absolute inset-0.5  z-20"
          style={{ clipPath: 'url(#certification)' }}
        >
          <div className="absolute inset-0 opacity-10 transition-opacity hover:opacity-30 z-50">
            {backgroundImg && (
              <Image
                src={backgroundImg}
                width={380}
                height={362}
                alt="Certification Image"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
        <ClipPath />
      </div>
    </motion.article>
  );
};
