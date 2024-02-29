"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "../ui/TimelineElement";
import { ExperienceData } from "@/data/Experience";

const Timeline = () => {
  return (
    <section id="Timeline">
    <h1 className="text-center text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12">Navigating My Career Galaxy</h1>
      <VerticalTimeline>
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
