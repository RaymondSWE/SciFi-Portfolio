'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface SkillItemProps {
  id: number;
  src: string;
  width: number;
  height: number;
  skillName: string;
  skillLevel: number;
}

const SkillItem = ({
  id,
  src,
  width,
  height,
  skillName,
  skillLevel,
}: SkillItemProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: id * 0.2 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      <div className="flex flex-col items-center">
        <Image
          src={src}
          width={width}
          height={height}
          alt={skillName}
          className="w-16 h-16 md:w-22 md:h-22"
        />
        <p className="mt-2 text-xs md:text-sm text-gray-400">{skillName}</p>
      </div>
    </motion.div>
  );
};

export default SkillItem;
