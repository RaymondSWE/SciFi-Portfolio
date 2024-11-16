'use client';
import React from 'react';
import { CertificationCard } from '../ui/CertificationCard';
import SectionHeader from '../ui/SectionHeader';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { CertificationData } from '@/data/Certification';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export const Certification = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  });
  return (
    <motion.section
      id="certifications"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <SectionHeader
        title="Qualifications"
        subtitle="Certifications and Awards I Have Earned"
        Icon={<AcademicCapIcon />}
      />
      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto mt-12">
        {CertificationData.map((certification, index) => (
          <CertificationCard
            key={certification.id}
            id={certification.id}
            name={certification.name}
            date={certification.date}
            description={certification.description}
            CertificationLink={certification.CertificationLink}
            borderBackground={certification.borderBackground}
            backgroundImg={certification.backgroundImg}
          />
        ))}
      </div>
    </motion.section>
  );
};
