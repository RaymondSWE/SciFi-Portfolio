"use client";

import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import ClipPath from "./ClipPath";
import { slideInFromRight, slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";

interface CertificationCardProps {
  id: number;
  name: string;
  date: string;
  description: string;
  CertificationLink: string;
  backgroundImg: string;
  borderBackground: string;
  light?: boolean;
}

export const CertificationCard = ({
  name,
  date,
  description,
  backgroundImg,
  borderBackground,
  CertificationLink,
  light,
}: CertificationCardProps) => {
  return (
    <motion.article className="flex flex-wrap gap-10 mb-10"
    initial="hidden"
    animate="visible"
    variants={slideInFromTop}

    >
      <div
        className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:h-[24rem] md:max-w-[24rem]  "
        style={{ backgroundImage: `url(${borderBackground})` }}
      >
        <motion.div className="flex flex-col justify-between h-full relative z-2 p-[2.4rem] "
        variants={slideInFromLeft(0.5)}
        >
          <header className="absolute top-0 left-0 mt-4 ml-6 text-xs text-gray-400"
          >
            {date}
          </header>
          <div>
            <h5 className="text-xl md:text-xl font-bold mb-4 Welcome-text">
              {name}
            </h5>
            <p className="text-sm md:text-base Welcome-text text-white mb-6">
              {description}
            </p>
          </div>

          <motion.footer className="flex justify-end items-center mt-4"
          variants={slideInFromRight(0.8)}>
            <a
              href={CertificationLink}
              className=" z-40 font-code text-xs font-bold text-n-1 uppercase tracking-wider Welcome-text"
            >
              See Certification
            </a>
            <ArrowRightCircleIcon className="h-5 w-5 ml-2 text-gray-100" />
          </motion.footer>
        </motion.div>
        <div
          className="absolute inset-0.5  z-20"
          style={{ clipPath: "url(#certification)" }}
        >
          <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 z-50">
            {backgroundImg && (
              <img
                src={backgroundImg}
                width={380}
                height={362}
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
