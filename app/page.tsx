'use client';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';
import Hero from '@/components/main/Hero';
import Timeline from '@/components/main/Timeline';
import { Certification } from '@/components/main/Certification';
import Footer from '@/components/main/Footer';
import Services from '@/components/main/Services';
import React from 'react';
import Statistic from '@/components/main/Statistic';
import ContactMe from '@/components/ui/ContactMe';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12 md:gap-24 lg:gap-32">
        <Hero />
        <Services />
        <Statistic />
        <Skills />
        <Projects />
        <Timeline />
        <Certification />
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
