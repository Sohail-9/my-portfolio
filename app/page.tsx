import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Present } from "@/components/present";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute right-10 top-60 h-52 w-52 rounded-full bg-indigo-500/10 blur-[140px]" />
      </div>
      <Hero />
      <About />
      <Present />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
