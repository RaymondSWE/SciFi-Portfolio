import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Hero from "@/components/main/Hero";
import Timeline from "@/components/main/Timeline";
import { Certification } from "@/components/main/Certification";
import Footer from "@/components/main/Footer";
import Services from "@/components/main/Services";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Services />
        <Timeline />
        <Projects />
        <Skills />
        <Certification />
        <Footer />
      </div>
    </main>
  );
}
