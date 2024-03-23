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
}

const SkillItem = ({
  src,
  width,
  height,
  index,
  skillName,
}: SkillItemProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: index * 0.3 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <Tooltip content={skillName} position="top" margin={2}>
        <div className="relative w-full max-w-[150px] sm:max-w-[200px]">
          <Image src={src} width={width} height={height} alt={skillName} />
        </div>
      </Tooltip>
    </motion.div>
  );
};

export default SkillItem;
