"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "../ui/TimelineElement";
import { ExperienceData } from "@/data/Experience";
import { motion } from "framer-motion";
import { ScaleIcon } from "@heroicons/react/24/solid";

const Timeline = () => {
  return (
    <section id="Timeline">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 leading-tight">
      My Journey Through the Cosmos of Experience
      </h1>
      <div className="m-6 flex justify-center items-center">
        <ScaleIcon className="text-purple-400 mr-2 h-8 w-8 animate-pulse" />
        <p className="text-lg md:text-xl text-gray-300">
          From the launchpad of education to the vast expanse of professional experiences.
        </p>
      </div>
        </motion.div>      <VerticalTimeline>
        {ExperienceData.map((item) => (
          <TimelineElement
            key={item.id}
            type={item.type as "work" | "education" | undefined}
            id={item.id}
            date={item.date}
            title={item.title}
            location={item.location}
            description={item.description}
          />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
