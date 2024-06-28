import Image from 'next/image';
import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import SectionHeader from '../ui/SectionHeader';

const ContactMe = () => {
  const [imageSrc, setImageSrc] = useState('/robotnormal.png');

  return (
    <>
      <SectionHeader
        title="Contact Me"
        subtitle="Let's connect and build something amazing together!"
        Icon={<HiOutlineMail />}
        className="md:-mb-16"
      />
      <div className="flex flex-col items-center -mt-12">
        <a
          href="mailto:RamanMohammed@hotmail.com"
          className="py-3 px-10 text-lg font-semibold text-white rounded-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 button-3d-primary"
          onMouseEnter={() => setImageSrc('/robothappy.png')}
          onMouseLeave={() => setImageSrc('/robotnormal.png')}
        >
          Hover over me!
        </a>
        <div className="relative z-10 mt-8 md:-mb-32 -mb-12 mirror">
          <Image
            src={imageSrc}
            alt="Mr. Roboto"
            width={250}
            height={250}
            className="cursor-pointer object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ContactMe;
