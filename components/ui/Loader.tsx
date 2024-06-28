'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex items-center justify-center w-40 h-40">
        <motion.div
          className="absolute border-t-4 border-b-4 border-blue-500 rounded-full w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
        />
        <motion.div
          className="absolute border-t-4 border-b-4 border-green-500 rounded-full w-3/4 h-3/4"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
        />
        <motion.div
          className="absolute border-t-4 border-b-4 border-red-500 rounded-full w-1/2 h-1/2"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
        />
        <div className="absolute w-16 h-16">
          <Image
            src="/baby-yoda.png"
            width={64}
            height={64}
            alt="Loading icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
