import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="relative bg-slate-950">
      <Hero />
      <div className="space-y-0 pb-20">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
