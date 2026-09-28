"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/lib/content";
import { Section } from "./section";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Badge } from "@/components/ui/badge";
import { LuMapPin } from "react-icons/lu";

const entryColors = [
  {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    glow: "rgba(56,189,248,0.22)",
    border: "border-sky-500/20",
    bulletBg: "bg-sky-400",
  },
  {
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    glow: "rgba(139,92,246,0.22)",
    border: "border-violet-500/20",
    bulletBg: "bg-violet-400",
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Work Experience" className="py-24">
      <TracingBeam className="mt-10">
        <div className="max-w-3xl mx-auto space-y-10">
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
                {/* Timeframe & Location pill */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <div
                    className="inline-flex items-center rounded-full border border-white/8 px-4 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    {entry.timeframe}
                  </div>
                  {entry.location && (
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/8 px-3.5 py-1 text-xs text-slate-400 backdrop-blur-sm"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      <LuMapPin className="text-xs text-sky-400" />
                      <span>{entry.location}</span>
                    </div>
                  )}
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

                  <div className="relative z-10 p-6 sm:p-8">
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
                        <h3 className="text-2xl font-bold text-white">{entry.company}</h3>
                        <p className="text-sm text-sky-400 font-semibold">{entry.role}</p>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3 text-sm text-slate-300 mb-6">
                      {entry.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span
                            className={`mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${colors.bulletBg}`}
                          />
                          <span className="leading-relaxed text-slate-300 font-light">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech pills */}
                    {entry.tech && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
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
