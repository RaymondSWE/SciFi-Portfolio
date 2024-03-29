import React from "react";
import Image from "next/image";
import { slideInFromTop } from "@/utils/motion";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceData {
  id: number;
  name: string;
  description: string;
  icon: string;
}

const ServiceItem = ({ id, name, description, icon }: ServiceData) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <motion.div 
    className="flex flex-col items-center mb-10 md:mb-14 bg-[rgba(33,149,243,0.07)] rounded-lg shadow-lg shadow-blue-700/20 p-4"
    ref={ref}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={slideInFromTop}

    >
      <li key={id} className="mb-3">
        <div className="flex items-center">
          <Image src={icon} width={24} height={24} alt="service icon" />
          <h6 className="mx-5 Welcome-text text-lg font-bold">{name}</h6>
        </div>
        <p className="text-[#a7a7a7] italic  mt-3">{description}</p>
      </li>
    </motion.div>
  );
};

export default ServiceItem;
