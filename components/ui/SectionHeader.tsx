import React from "react";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  Icon: ReactElement;
}

const SectionHeader = ({ title, subtitle, Icon }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 leading-tight">
        {title}
      </h1>
      <div className="m-6 flex justify-center items-center">
        {React.cloneElement(Icon, {
          className: "text-purple-400 mr-2 h-8 w-8 animate-pulse",
        })}
        <p className="text-lg md:text-xl text-gray-300">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
