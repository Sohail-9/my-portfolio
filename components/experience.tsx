import { experience } from "@/lib/content";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experience.map((entry) => (
          <article key={`${entry.company}-${entry.role}`} className="rounded-3xl border border-white/5 bg-slate-900/30 p-6 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-lg font-semibold text-white">{entry.company}</p>
                <p className="text-sm text-slate-300">{entry.role}</p>
              </div>
              <p className="text-sm text-slate-400">{entry.timeframe}</p>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
