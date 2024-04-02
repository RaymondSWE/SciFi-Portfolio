import Image from "next/image";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export const WelcomeToast = () => {
  useEffect(() => {
    toast(
      () => (
        <div className="flex items-center">
          <div className="text-yellow-400 font-bold text-sm md:text-base">
            Welcome, and may the Force be with you!
          </div>
        </div>
      ),
      {
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
          marginTop: "100px",
          borderRadius: "20px",
          boxShadow: "0 0 10px 5px rgba(0,0,0,0.5)",
        },
      },
    );
  }, []);

  return null;
};

export const handleMissingLink = (serviceName: string) => {
  toast(
    () => (
      <div
        className="flex items-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className=" font-semibold text-sm md:text-base Welcome-text">
          Sorry, the {serviceName} link is not available right now.
        </div>
      </div>
    ),
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      style: {
        background: "rgba(0,0,0,0.4)",
        color: "#FFE81F",
        borderRadius: "20px",
        marginTop: "50px",
        marginRight: "40px",
        boxShadow: "0 0 10px 5px rgba(0,0,0,0.5)",
      },
    },
  );
};



export const hoverSkillsAlert = () => {
  toast(
    () => (
      <div
        className="flex items-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="font-semibold text-sm md:text-base Welcome-text">
          Hover over the skills logo to see their names!
        </div>
      </div>
    ),
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      style: {
        background: "rgba(0,0,0,0.4)",
        color: "#FFE81F",
        borderRadius: "20px",
        marginTop: "50px",
        marginRight: "40px",
        boxShadow: "0 0 10px 5px rgba(0,0,0,0.5)",
      },
    },
  );
};

