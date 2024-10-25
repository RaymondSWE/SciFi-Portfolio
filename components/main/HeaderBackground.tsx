import Image from 'next/image';
import React from 'react';

const HeaderBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center z-[-10]">
      <Image
        src="/main.svg"
        alt="header light background"
        fill
        className="object-cover opacity-90"
        priority
      />
    </div>
  );
};

export default HeaderBackground;
