import { about } from "@/lib/content";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="rounded-3xl border border-white/5 bg-slate-900/30 p-5 shadow-card transition hover:border-accent/40 hover:bg-slate-900/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]">
        <p className="text-base leading-relaxed text-slate-300">{about.body}</p>
      </div>
    </Section>
  );
}
