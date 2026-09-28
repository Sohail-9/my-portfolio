import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

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
