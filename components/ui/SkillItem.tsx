'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { AnimatedTooltip } from './AnimatedTooltip';

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

  const skillComments = [
    'Padawan learner (Level 1)',
    'Youngling (Level 2)',
    'Jedi Knight (Level 3)',
    'Jedi Master (Level 4)',
    'Yoda level (Level 5)',
  ];

  const items = [
    {
      id: index,
      name: skillName,
      designation: skillComments[skillLevel - 1],
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      <AnimatedTooltip items={items}>
        <div>
          <Image
            src={src}
            width={width}
            height={height}
            alt={skillName}
          />
        </div>
      </AnimatedTooltip>
    </motion.div>
  );
};

export default SkillItem;
