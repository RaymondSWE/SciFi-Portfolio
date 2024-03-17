import Image from 'next/image';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

export const WelcomeToast = () => {
  useEffect(() => {
    toast(() => (
        <div className="flex items-center">
        <div className="text-yellow-400 font-bold text-sm md:text-base">
            Welcome, and may the Force be with you! 
        </div>
      </div>
    ), {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark", 
      style: {
        background: "rgba(0,0,0,0.4)",
        color: "#FFE81F", 
        fontFamily: "'Inter', sans-serif", 
        marginTop: "100px",
        borderRadius: "20px",
        boxShadow: "0 0 10px 5px rgba(0,0,0,0.5)",
      },
    });
  }, []);

  return null;
};

