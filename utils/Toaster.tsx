import Image from 'next/image';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

export const handleMissingLink = (serviceName: string) => {
  toast(
    () => (
      <div className="flex items-center p-4 bg-red-50 rounded-lg">
        <div className="ml-3">
          <p className="text-sm md:text-lg font-semibold text-gray-300">
            🚨 Error! 🚨
          </p>
          <p className="text-xs md:text-sm text-gray-300 mt-1">
            Sorry, the {serviceName} link is not available right now.
          </p>
        </div>
      </div>
    ),
    {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
      style: {
        background: 'rgba(10, 17, 25, 0.4)',
        color: '#FBBF24',
        width: 'auto',
        minHeight: '100px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        borderLeft: '5px solid #EF4444',
      },
    },
  );
};

export const infoToast = (
  header: string,
  text: string,
  position:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left' = 'top-right',
  autoClose: boolean = false,
) => {
  toast(
    () => (
      <div className="flex items-center sm:p-4 p-8">
        <div className="ml-3">
          <p className="text-sm md:text-lg font-semibold text-yellow-300">
            {header}
          </p>
          <p className="text-xs md:text-sm text-gray-300 mt-1">{text}</p>
        </div>
      </div>
    ),
    {
      position,
      autoClose: autoClose ? 5000 : false,
      closeOnClick: true,
      pauseOnHover: true,
      hideProgressBar: true,
      draggable: true,
      theme: 'dark',
      style: {
        background: 'rgba(10, 17, 25, 0.4)',
        color: '#FBBF24',
        width: 'auto',
        minHeight: '100px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        borderLeft: '5px solid #FBBF24',
      },
    },
  );
};
