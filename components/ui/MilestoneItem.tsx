import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TechnologyChip } from './TechnologyChip';

interface Milestone {
  id: number;
  date: string;
  title: string;
  img: string;
  organization: string;
  location: string;
  description?: string[];
  technologies?: string[];
  gpa?: number;
}

interface MilestoneProps {
  milestones: Milestone[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MilestoneItem: React.FC<MilestoneProps> = ({ milestones }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="relative">
        <div className="absolute top-0 md:left-[20%] left-[10%] h-full w-[2px] text-transparent bg-clip bg-gradient-to-b from-[#5B0066] via-[#00204A] to-[#00204A]"></div>
        {milestones.map(
          ({
            id,
            date,
            title,
            img,
            organization,
            location,
            description,
            technologies,
            gpa,
          }) => (
            <div key={id} className="relative flex items-start my-8">
              <Image
                className="absolute top-0 md:left-[20%] sm:w-14 sm:h-14 h-10 w-10 left-[10%] transform -translate-x-1/2  border-border-custom rounded-full "
                src={img}
                alt={title + " Logo"}
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
                <div className="bg-[rgba(33,149,243,0.07)] rounded-lg shadow-lg shadow-blue-700/20 p-5 backdrop-blur-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between w-full mb-1">
                    <h3 className="md:text-xl text-base font-semibold Welcome-text">
                      {title}
                    </h3>
                    <span className="text-gray-400 sm:text-xs text-xs my-1 sm:my-0">
                      {date}
                    </span>
                  </div>
                  <p className="sm:mt-0 text-gray-300 text-xs sm:text-sm italic">
                    {organization}, {location}
                  </p>
                  {gpa && (
                    <p className="text-gray-400 text-xs sm:text-sm italic">
                      GPA: {gpa.toFixed(2)} / 5
                    </p>
                  )}
                  <ul className="my-2 text-gray-400 text-xs sm:text-sm list-disc ml-4 sm:ml-6">
                    {description?.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {technologies?.map((tech, index) => (
                      <TechnologyChip key={index} tech={tech} size="small" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default MilestoneItem;
