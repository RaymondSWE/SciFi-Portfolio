import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import HeroContent from "@/components/main/HeroContent";
import Image from "next/image";
import Timeline from "@/components/main/Timeline";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HeroContent />
        <Skills />
        <Timeline />
        <Projects />
      </div>
    </main>
  );
}
