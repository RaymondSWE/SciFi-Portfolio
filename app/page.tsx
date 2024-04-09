"use client";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Hero from "@/components/main/Hero";
import Timeline from "@/components/main/Timeline";
import { Certification } from "@/components/main/Certification";
import Footer from "@/components/main/Footer";
import Services from "@/components/main/Services";
import React, { useEffect } from "react";
import { WelcomeToast } from "@/utils/Toaster";
import Statistic from "@/components/main/Statistic";
import ContactMe from "@/components/ui/ContactMe";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home() {
  return (
    <main className="h-full w-full">
      <WelcomeToast />
      <div className="flex flex-col gap-14">
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
