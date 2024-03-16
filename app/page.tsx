'use client';
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Hero from "@/components/main/Hero";
import Timeline from "@/components/main/Timeline";
import { Certification } from "@/components/main/Certification";
import Footer from "@/components/main/Footer";
import Services from "@/components/main/Services";
import React, { useEffect } from 'react';
import { WelcomeToast } from "@/components/ui/Toast";

export default function Home() {

  return (
    <main className="h-full w-full">
      <WelcomeToast />
      <div className="flex flex-col gap-20">
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Timeline />
        <Certification />
        <Footer />
      </div>
    </main>
  );
}
