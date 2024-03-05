import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import HeroContent from "@/components/main/HeroContent";
import Image from "next/image";
import Timeline from "@/components/main/Timeline";
import { Certification } from "@/components/main/Certification";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HeroContent />
        <Skills />
        <Certification />
        <Timeline />
        <Projects />
      </div>
    </main>
  );
}
