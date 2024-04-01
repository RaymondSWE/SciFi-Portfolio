"use client";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

interface TimelineItemProps {
  id: number;
  type?: "work" | "education";
  date: string;
  title: string;
  location: string;
  description: string;
}

const TimelineElement = ({
  id,
  type,
  date,
  title,
  location,
  description,
}: TimelineItemProps) => {
  //TODO: Implement the useInView hook to animate the timeline elements

  return (
    <VerticalTimelineElement
      visible={true}
      key={id}
      date={date}
      contentStyle={{
        background: "rgba(33,149,243,0.07)",
        boxShadow:
          "0 10px 15px -3px rgba(59, 130, 246, 0.2), 0 4px 6px -2px rgba(59, 130, 246, 0.2)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgba(33, 150, 243, 0.4)" }}
      iconStyle={{
        background: type === "work" ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)",
        color: "#fff",
      }}
      icon={type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
    >
      <h3 className="Welcome-text font-bold text-lg">{title}</h3>
      <h4 className="text-gray-300 text-base font-semibold mb-1">{location}</h4>
      <p className="text-gray-400 italic text-sm">{description}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
