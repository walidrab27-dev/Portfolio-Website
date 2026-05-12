import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { CustomCursor } from "@/components/custom-cursor";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-void text-pearl">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
