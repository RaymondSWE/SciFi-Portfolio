"use client";
import { ServicesApps, ServicesData } from "@/data/Services";
import React from "react";
import { LeftCurve, RightCurve } from "../ui/Curves";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import ServiceItem from "../ui/ServiceItem";
import ServiceIconItem from "../ui/ServiceIconItem";

const Services = () => {
  return (
    <section className="px-4 lg:px-8 xl:px-16">
      <SectionHeader
        title="Nebula of Innovation"
        subtitle="Where ideas collide and form stars of innovation"
        Icon={<GlobeAltIcon />}
      />{" "}
      <div className="container lg:flex mx-auto">
        <div className="max-w-[25rem] lg:w-1/2">
          <h2 className="h2 mb-4 md:mb-8 text-white">Somekinda Services</h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
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
          <button className="white">idk</button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] lg:w-1/2 mt-4">
          <p className="mb-4 text-gray-500 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            SERVICE TEXT
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-gray-700 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-gray-700 rounded-full">
              <div className="w-[6rem] m-auto aspect-square p-[0.2rem] rounded-full  border border-gray-700">
                <div className="flex items-center justify-center w-full h-full border-black rounded-full">
                  <Image
                    src="/baby-yoda.png"
                    width={40}
                    height={40}
                    alt="nextjs icon"
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
                />
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
