'use client';
import Typewriter from 'typewriter-effect';
import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromTop,
  slideInFromRight,
  slideInFromLeft,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

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
  return (
    <section
      id="hero"
      className="flex items-center h-auto md:min-h-[70vh] lg:min-h-[80vh] py-2 px-2 mt-12 text-white"
    >
      <div className="container mx-auto flex flex-wrap items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 flex flex-col md:items-start items-center"
          variants={slideInFromLeft(1)}
        >
          <div className="flex items-center mb-4">
            <motion.div
              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
              variants={slideInFromTop(1.2)}
            >
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <div className="Welcome-text italic md:text-xl text-base font-semibold ">
                <Typewriter
                  options={{
                    strings: [
                      "Hey there, I'm Raman Mohammed",
                      'Based in Gothenburg, Sweden',
                    ],
                    delay: 80,
                    deleteSpeed: 25,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </motion.div>
          </div>
          <motion.h2
            variants={slideInFromLeft(0.5)}
            className="md:text-5xl text-xl font-bold leading-tight"
          >
            Always{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              learning
            </span>
            , always{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              building
            </span>
          </motion.h2>
          <motion.h3
            variants={slideInFromLeft(1.2)}
            className="md:text-3xl text-lg font-semibold leading-tight mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200"
          >
            Software Engineer
          </motion.h3>

          <TextGenerateEffect
            words="I'm a self-motivated software developer with 4+ years of experience in desktop and web applications. 
            I have a Bachelor's in Computer Science and am pursuing a Master's in Software Engineering at Chalmers to keep learning new skills. I specialize in Java, React, TypeScript, Docker, MySQL, and Spring. 
            
            "
          />
          <div className="flex flex-col md:flex-row items-center mt-2 z-20">
            <a
              href="#projects"
              className=" md:inline-block sm:px-8 sm:py-2 px-4 py-2 sm:text-lg text-base rounded-xl transition-colors button-3d-primary"
            >
              Explore My Projects
            </a>
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
          <div className="relative overflow-hidden rounded-3xl bg-[#ffffff10] backdrop-blur-xl border border-gray-900 flex justify-center items-center shadow-sm shadow-gray-800 w-[200px] h-[300px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[370px]">
            <Image
              src="/happy-raman.jpg"
              alt="Raman Mohammed Image"
              className="object-cover object-bottom filter grayscale contrast-65 opacity-90"
              priority
              fill
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
