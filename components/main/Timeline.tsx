"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "../ui/TimelineElement";
import { ExperienceData } from "@/constants/Experience";

const Timeline = () => {
  return (
    <section id="Timeline">
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
