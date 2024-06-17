"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Tooltip from "./Tooltip";

interface SkillItemProps {
  src: string;
  width: number;
  height: number;
  index: number;
  skillName: string;
  skillLevel: number;
}

const SkillItem = ({
  src,
  width,
  height,
  index,
  skillName,
  skillLevel,
}: SkillItemProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: index * 0.2 } },
  };

  const progressBarWidth = `${(skillLevel / 5) * 100}%`;
  const skillComments = [
    "Padawan learner (Level 1)",
    "Youngling (Level 2)",
    "Jedi Knight (Level 3)",
    "Jedi Master (Level 4)",
    "Yoda level (Level 5)"
  ];

  const formattedContent = (
    <span>
      <strong>{skillName}:</strong> {skillComments[skillLevel - 1]}
    </span>
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <Tooltip content={formattedContent} position="top">
      <Image src={src} width={width} height={height} alt={skillName} className="object-contain h-[70px] w-[80px]"/>
      </Tooltip>
      <div className="w-[80px] h-[5px] bg-[#e59cff61] mt-4 rounded-full">
        <div
          className="h-full bg-[#ba9cff] rounded-full"
          style={{ width: progressBarWidth }}
        />
      </div>
    </motion.div>
  );
};

export default SkillItem;
