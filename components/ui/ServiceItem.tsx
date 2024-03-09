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
    <ul className="max-w-[22rem] mb-10 md:mb-14">
      <li key={id} className="mb-3">
        <div className="flex items-center">
          <Image src={icon} width={24} height={24} alt="service icon" />
          <h6 className="mx-5 text-white">{name}</h6>
        </div>
        <p className="text-[#a7a7a7] mt-3">{description}</p>
      </li>
    </ul>
  );
};

export default ServiceItem;
