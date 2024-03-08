import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Hero from "@/components/main/Hero";
import Image from "next/image";
import Timeline from "@/components/main/Timeline";
import { Certification } from "@/components/main/Certification";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Certification />
        <Timeline />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
