'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaCode,
} from 'react-icons/fa';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import StarsCanvas from './StarBackground';

const socialLinks = [
  {
    href: 'https://github.com/RaymondSWE',
    label: 'GitHub',
    icon: <FaGithub />,
  },
  {
    href: 'https://linkedin.com/in/raman-mohammed',
    label: 'LinkedIn',
    icon: <FaLinkedinIn />,
  },
  {
    href: 'mailto:ramanmohammed@hotmail.com',
    label: 'Email',
    icon: <FaEnvelope />,
  },
];

const Hero = () => {
  const [showStars, setShowStars] = useState(true);


  return (
    <section
      id="hero"
      className="flex items-center h-auto md:min-h-[70vh] lg:min-h-[80vh] py-2 px-2 mt-12 text-white"
    >
      <div className="container mx-auto flex flex-wrap items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(1)}
          className="w-full md:w-1/2 flex flex-col md:items-start items-center"
        >
          <div className="flex items-center mb-4">
            <div className="Welcome-box py-2 px-2 border border-[#7042f88b] opacity-[0.9]">
              <FaCode className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <div className="Welcome-text italic md:text-xl text-base px-2 ml-[-12px] font-semibold">
                Raman Mohammed - Software Engineer
              </div>
            </div>
          </div>
          <motion.h2 className="md:text-5xl text-xl font-bold leading-tight">
            Always{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              animate={{
                opacity: [1, 0.8, 1],
                transition: { repeat: Infinity, duration: 2 },
              }}
            >
              learning
            </motion.span>
            , always{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              animate={{
                opacity: [1, 0.8, 1],
                transition: { repeat: Infinity, duration: 2, delay: 1 },
              }}
            >
              building
            </motion.span>
          </motion.h2>
          <motion.h4
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.1,
                  duration: 0.6,
                },
              },
            }}
            className="md:text-xl text-lg font-medium text-gray-400 mt-3 mb-[-4px] italic flex "
          >
            <Image
              src="/sweden.png"
              alt="Sweden Flag"
              width={24}
              height={24}
              className="mr-2"
            />
            Based in Sweden
          </motion.h4>

          <TextGenerateEffect
            words="I'm a self-motivated software developer with 4+ years of experience in desktop and web applications. 
            I have a Bachelor's in Computer Science and am pursuing a Master's in Software Engineering at Chalmers to keep learning new skills. I specialize in Java, React, TypeScript, Docker, MySQL, and Spring."
          />
          <div className="flex flex-col md:flex-row items-center mt-2 z-20">
            <button
              className=" md:inline-block sm:px-8 sm:py-2 px-4 py-2 sm:text-lg text-base rounded-xl transition-colors button-3d-primary"
              onClick={() => setShowStars(!showStars)}
            >
              Toggle Background
            </button>
            <div className="flex gap-4 md:gap-6 justify-center md:justify-end items-center mt-6 md:mt-0 md:ml-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white text-2xl md:text-4xl hover:scale-110 transition-transform"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(1)}
          className="w-full md:w-1/2 px-4 mt-12 md:mt-2 flex justify-center items-center"
        >
          <div className="relative overflow-hidden rounded-3xl bg-[#ffffff10] backdrop-blur-xl border border-border-custom flex justify-center items-center shadow-sm shadow-gray-800 w-[200px] h-[300px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[370px]">
            <Image
              src="/happy-raman.jpg"
              alt="Raman Mohammed Image"
              className="object-cover object-bottom filter grayscale contrast-65 opacity-90"
              priority
              fill
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              33vw"
            />
          </div>
        </motion.div>
      </div>
      <StarsCanvas show={showStars} />
    </section>
  );
};

export default Hero;
