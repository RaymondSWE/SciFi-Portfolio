import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideInFromTop, slideInWithDelay } from '@/utils/motion';
import CountUp from 'react-countup';

interface StatisticCardProps {
  id: number;
  icon: string;
  number: number;
  suffix?: string;
  description: string;
}

const StatisticCard = ({
  id,
  icon,
  number,
  suffix,
  description,
}: StatisticCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={slideInWithDelay(id * 0.3)}
      className="flex- flex-col  items-center p-4 md:w-1/4 sm:w-1/2 w-full backdrop-blur-sm"
    >
      <div className="border-b-2 border-[#645AFF] p-4 text-center bg-[rgba(33,149,243,0.05)] rounded-lg">
        <Image
          src={icon}
          alt="Statistic Icon"
          className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          width={50}
          height={50}
        />
        <h2 className="title-font font-bold md:text-2xl text-xl sm:text-3xl Welcome-text mt-2 sm:mt-4">
          {inView ? (
            <>
              <CountUp end={number} duration={14} />
              {suffix}
            </>
          ) : (
            0
          )}
        </h2>
        <p className="text-gray-400 mt-2 sm:text-sm md:text-base text-xs font-semibold">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default StatisticCard;
