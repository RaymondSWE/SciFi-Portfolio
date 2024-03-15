import React from "react";
import Image from "next/image";

interface ServiceData {
  id: number;
  name: string;
  description: string;
  icon: string;
}

const ServiceItem = ({ id, name, description, icon }: ServiceData) => {
  return (
    <div className="flex flex-col items-center mb-10 md:mb-14 bg-[rgba(33,149,243,0.07)] rounded-lg shadow-lg p-4">
      <li key={id} className="mb-3">
        <div className="flex items-center">
          <Image src={icon} width={24} height={24} alt="service icon" />
          <h6 className="mx-5 Welcome-text text-lg font-bold">{name}</h6>
        </div>
        <p className="text-[#a7a7a7] italic  mt-3">{description}</p>
      </li>
    </div>
  );
};

export default ServiceItem;
