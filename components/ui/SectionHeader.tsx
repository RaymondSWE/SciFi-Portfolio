import React from 'react';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  Icon: ReactElement;
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  Icon,
  className = '',
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-center mt-4 ${className}`}
    >
      <h1 className="text-2xl orbitron md:text-4xl italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 leading-tight">
        {title}
      </h1>
      <div className="m-2 flex justify-center items-center ">
        {React.cloneElement(Icon, {
          className:
            'text-purple-400 mr-2 md:h-8 md:w-8 hidden md:inline-block animate-pulse',
        })}
        <p className="text-base md:text-xl roboto-condensed text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
