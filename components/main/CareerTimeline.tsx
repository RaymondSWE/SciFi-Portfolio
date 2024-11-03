'use client';
import React from 'react';
import { ExperienceData } from '@/data/Experience';
import { ScaleIcon } from '@heroicons/react/24/solid';
import SectionHeader from '../ui/SectionHeader';
import MilestoneItem from '../ui/MilestoneItem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { MilestoneTypes } from '@/types';

const CareerTimeline = () => {
  const filterMilestoneByTypes = (type: MilestoneTypes) => {
    return ExperienceData.filter((experience) => experience.type === type);
  };

  return (
    <section id="career-timeline">
      <SectionHeader
        title="Career Path"
        subtitle="A Chronological Overview of My Career."
        Icon={<ScaleIcon />}
      />
      <Tabs defaultValue={MilestoneTypes.Work}>
        <div className="flex justify-center">
          <TabsList className="inline-flex mb-4">
            {Object.values(MilestoneTypes).map((type) => (
              <TabsTrigger key={type} value={type}>
                {type}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Object.values(MilestoneTypes).map((type) => (
          <TabsContent key={type} value={type}>
            <MilestoneItem milestones={filterMilestoneByTypes(type)} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default CareerTimeline;
