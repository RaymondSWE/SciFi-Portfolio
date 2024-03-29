import Image from 'next/image';
import React from 'react';

interface StatisticCardProps {
  icon: string;
  number: string;
  description: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ icon, number, description }) => {

  return (
    <div className="relative p-2 md:w-1/4 sm:w-1/2 w-full">
      <div className="border-b-2 border-[#645AFF] p-4 text-center bg-[rgba(33,149,243,0.05)] rounded-lg">
        <Image src={icon} alt="Statistic Icon" className="mx-auto" width={50} height={50} />
        <h2 className="title-font font-medium text-3xl Welcome-text mt-8">{number}</h2>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default StatisticCard;
