import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaBriefcase } from 'react-icons/fa';
import Image from 'next/image';


  interface Milestone {
    id: number;
    date: string;
    title: string;
    img: string;
    organization: string;
    location: string;
    description?: string[];
  }

  interface MilestoneProps {
    milestones: Milestone[];
  }

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MilestoneItem: React.FC<MilestoneProps> = ({milestones})  => {
  return (
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="absolute top-0 md:left-[20%] left-[10%] h-full w-[2px] text-transparent bg-clip bg-gradient-to-b from-[#5B0066] via-[#00204A] to-[#00204A]"></div>
          {milestones.map(({ id, date, title, img, organization, location, description }) => (

            <div key={id} className="relative flex items-start my-8">
              <Image
              className='absolute top-5 md:left-[20%] sm:w-14 sm:h-14 h-10 w-10 left-[10%] transform -translate-x-1/2  border-border-custom rounded-full '
              src={img}
              alt='Education or Company Logo' 
              width={50}
              height={50}
              />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: id * 0.3 }}
                className="ml-[25%] w-full md:w-7/12 text-left"
              >
                <div className="bg-[rgba(33,149,243,0.07)] rounded-lg shadow-lg shadow-blue-700/20 p-6 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between w-full mb-1">
                      <h3 className="md:text-xl text-sm font-semibold Welcome-text">{title}</h3>
                      <span className="text-gray-400 sm:text-sm text-xs">{date}</span>
                    </div>
                  <p className="text-gray-300 text-xs sm:text-sm italic">{organization}, {location}</p>
                <ul className="mt-2 text-gray-400 text-xs sm:text-sm list-disc ml-4">
                  {description?.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                  </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default MilestoneItem;
