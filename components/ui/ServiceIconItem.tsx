import React from "react";
import Image from "next/image";

interface ServiceIconItemProps {
  id: string;
  title: string;
  icon: string;
  width: number;
  height: number;
}

const ServiceIconItem = ({
  id,
  title,
  icon,
  width,
  height,
}: ServiceIconItemProps) => {
  return (
    <li
      key={id}
      className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
      style={{ transform: `rotate(${parseInt(id) * 45}deg)` }}
    >
      <div
        className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-gray-700 border border-n-1/15 rounded-xl"
        style={{ transform: `rotate(-${parseInt(id) * 45}deg)` }}
      >
        <Image
          className="m-auto"
          width={width}
          height={height}
          alt={title}
          src={icon}
        />
      </div>
    </li>
  );
};

export default ServiceIconItem;
