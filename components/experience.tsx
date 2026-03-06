import Image from "next/image";
import { experience } from "@/lib/content";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((entry) => (
          <article
            key={`${entry.company}-${entry.role}`}
            className="group rounded-3xl border border-white/5 bg-slate-900/30 p-5 shadow-card transition hover:border-accent/40 hover:bg-slate-900/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  {entry.company === "OmniqAI" ? (
                    <span className="flex h-8 items-center rounded-full border border-white/10 bg-white/5 px-2">
                      <Image
                        src="/Omniqai.png"
                        alt="OmniqAI logo"
                        width={96}
                        height={32}
                        className="h-6 w-auto object-contain"
                      />
                    </span>
                  ) : null}
                  <p className="text-lg font-semibold text-white transition group-hover:text-accent">{entry.company}</p>
                </div>
                <p className="text-sm text-slate-300">{entry.role}</p>
              </div>
              <p className="text-sm text-slate-400">{entry.timeframe}</p>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
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
