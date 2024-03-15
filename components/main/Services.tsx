"use client";
import { ServicesApps, ServicesData } from "@/data/Services";
import React from "react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import ServiceItem from "../ui/ServiceItem";
import ServiceIconItem from "../ui/ServiceIconItem";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import curve1 from "@/public/curve-1.svg";
import curve2 from "@/public/curve-2.svg";

const Services = () => {
  const totalCount = ServicesApps.length;

  return (
    <motion.section
      className="px-4 lg:px-8 xl:px-16"
      id="services"
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
    >
      <SectionHeader
        title="Galactic Development Services"
        subtitle="Engineering your software products from Coruscant to the Outer Rim."
        Icon={<ShoppingCartIcon />}
      />{" "}
      <div className="container mx-auto flex flex-col items-center lg:flex-row">
        <motion.div
          className="max-w-[25rem] lg:w-1/2"
          variants={slideInFromLeft(0.5)}
        >
          <ul className="max-w-[22rem]">
            {ServicesData.map((service) => (
              <ServiceItem
                key={service.id}
                id={service.id}
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="lg:ml-auto xl:w-[38rem] lg:w-1/2 mt-4"
          variants={slideInFromRight(0.8)}
        >
          <p className="mb-4 Welcome-text text-center md:text-left md:mb-16 lg:mb-32 italic font-semibold lg:w-[22rem] lg:mx-auto">
            Discover my array of provided services, crafted with precision and
            passion. My portfolio showcases my expertise in solving diverse
            technological challenges, from sleek web designs to robust backend
            systems.
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-gray-800 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-gray-800 rounded-full">
              <div className="w-[6rem] m-auto aspect-square p-[0.2rem] rounded-full border border-gray-800">
                <div className="flex items-center justify-center w-full h-full border-black rounded-full">
                  <Image
                    src="/baby-yoda.png"
                    width={40}
                    height={40}
                    alt="Baby yoda icon"
                  />
                </div>
              </div>
            </div>
            <ul>
              {ServicesApps.map((app, index) => (
                <ServiceIconItem
                  key={index}
                  id={app.id}
                  title={app.title}
                  icon={app.icon}
                  width={app.width}
                  height={app.height}
                  totalCount={totalCount}
                />
              ))}
            </ul>
            <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-24 xl:block">
              <Image src={curve1} width={522} height={182} alt="Curve 1" />
            </div>
            <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10  xl:block">
              <Image src={curve2} width={162} height={76} alt="Curve 2" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
