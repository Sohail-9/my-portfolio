"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/lib/content";
import { Section } from "./section";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Badge } from "@/components/ui/badge";

const entryColors = [
  {
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    glow: "rgba(139,92,246,0.22)",
    border: "border-violet-500/20",
    bulletBg: "bg-violet-400",
  },
  {
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    glow: "rgba(52,211,153,0.22)",
    border: "border-emerald-500/20",
    bulletBg: "bg-emerald-400",
  },
  {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    glow: "rgba(56,189,248,0.22)",
    border: "border-sky-500/20",
    bulletBg: "bg-sky-400",
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Experience" className="py-24">
      <TracingBeam className="mt-10">
        <div className="max-w-2xl mx-auto space-y-8">
          {experience.map((entry, index) => {
            const colors = entryColors[index % entryColors.length];
            return (
              <motion.div
                key={`${entry.company}-${entry.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Timeframe pill */}
                <div
                  className="inline-flex items-center rounded-full border border-white/8 px-4 py-1 text-xs font-medium text-slate-400 mb-4 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  {entry.timeframe}
                </div>

                {/* Card */}
                <div
                  className={`relative overflow-hidden rounded-3xl border ${colors.border} group transition-all duration-300 hover:border-opacity-40`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                    backdropFilter: "blur(20px)",
                    boxShadow: `0 12px 60px rgba(0,0,0,0.42), 0 0 40px ${colors.glow}22, inset 0 1px 0 rgba(255,255,255,0.08)`,
                  }}
                >
                  {/* Gradient top bar */}
                  <div className={`h-[3px] w-full bg-gradient-to-r ${colors.gradient}`} />

                  {/* Hover ambient glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% -10%, ${colors.glow}, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10 p-6 sm:p-7">
                    {/* Company header */}
                    <div className="flex items-center gap-4 mb-5">
                      {entry.logo && (
                        <div
                          className="h-12 w-12 flex-shrink-0 rounded-2xl p-1.5 border border-white/10"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          <Image
                            src={entry.logo}
                            alt={entry.company}
                            width={44}
                            height={44}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-white">{entry.company}</h3>
                        <p className="text-sm text-slate-400 font-medium">{entry.role}</p>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2.5 text-sm text-slate-300 mb-5">
                      {entry.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span
                            className={`mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${colors.bulletBg}`}
                          />
                          <span className="leading-relaxed text-slate-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech pills */}
                    {entry.tech && (
                      <div className="flex flex-wrap gap-2">
                        {entry.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="rounded-full border border-white/8 bg-white/5 text-slate-400 text-[10px] uppercase tracking-wider hover:border-white/15 hover:text-slate-200 transition-colors"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </TracingBeam>
    </Section>
  );
}
