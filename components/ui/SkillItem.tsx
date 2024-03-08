"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface SkillItemProps {
  src: string;
  width: number;
  height: number;
  index: number;
  skillName: string;
}

const SkillItem = ({
  src,
  width,
  height,
  index,
  skillName,
}: SkillItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        className="z-50"
        alt="skill image"
      />
    </motion.div>
  );
};

export default SkillItem;
