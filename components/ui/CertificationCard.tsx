"use client";

import React from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import ClipPath from "./ClipPath";
import {
  slideInFromRight,
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <motion.article
      className="flex flex-wrap gap-10 mb-10 px-2"
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
    >
      <div
        className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:h-[24rem] md:max-w-[24rem]"
        style={{ backgroundImage: `url(${borderBackground})` }}
      >
        <motion.div
          className="flex flex-col justify-between h-full  relative z-2 p-[2.4rem] "
          variants={slideInFromLeft(0.5)}
        >
          <header className="absolute top-0 left-0 mt-4 ml-6 text-sm cursive text-gray-400">
            {date}
          </header>
          <div>
            <h5 className="text-xl md:text-xl font-bold my-2 Welcome-text">
              {name}
            </h5>
            <p className="text-sm md:text-base italic text-gray-400 mb-6">
              {description}
            </p>
          </div>

          <motion.footer
            className="flex justify-end items-center mt-4"
            variants={slideInFromRight(0.8)}
          >
            <button className="button-secondary rounded-xl z-40">
              <a
                href={CertificationLink}
                className=" flex items-center font-code text-xs font-bold uppercase tracking-wider text-gray-300"
                target="_blank"
                rel="noreferrer"
              >
                See Certification
              </a>
            </button>
          </motion.footer>
        </motion.div>
        <div
          className="absolute inset-0.5  z-20"
          style={{ clipPath: "url(#certification)" }}
        >
          <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20 z-50">
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
