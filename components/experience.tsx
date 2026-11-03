"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/lib/content";
import { Section } from "./section";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { LuMapPin, LuCalendar, LuCheck, LuSparkles } from "react-icons/lu";
import { TiltCard } from "./tilt-card";

const entryColors = [
  {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    glow: "rgba(56, 189, 248, 0.22)",
    border: "border-sky-200/90 hover:border-sky-400",
    titleColor: "text-sky-600",
    checkColor: "text-sky-600",
    tag: "Founding Engineer · Scaled to 4k+ Beta Users",
  },
  {
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    glow: "rgba(139, 92, 246, 0.22)",
    border: "border-violet-200/90 hover:border-violet-400",
    titleColor: "text-purple-600",
    checkColor: "text-purple-600",
    tag: "Full-Stack AI & Distributed Systems",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      title="Engineering Experience"
      eyebrow="Track Record"
      intro="Production impact across full-stack AI platforms, sandboxed execution environments, multi-agent systems, and enterprise RAG pipelines."
      className="py-16 sm:py-20"
    >
      <TracingBeam className="mt-8">
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
                {/* Timeframe & Location glass pills */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold text-slate-800 shadow-2xs">
                      <LuCalendar className="text-xs text-sky-600" />
                      <span>{entry.timeframe}</span>
                    </div>
                    {entry.location && (
                      <div className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-medium text-slate-600 shadow-2xs">
                        <LuMapPin className="text-xs text-emerald-600" />
                        <span>{entry.location}</span>
                      </div>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
                    {colors.tag}
                  </span>
                </div>

                {/* 3D Tilt Glass Card */}
                <TiltCard glowColor={colors.glow} className="rounded-3xl">
                  <div
                    className={`glass-card relative overflow-hidden rounded-3xl ${colors.border} p-6 sm:p-8 group shadow-md`}
                  >
                    {/* Gradient top bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${colors.gradient}`}
                    />

                    {/* Company Header */}
                    <div className="flex items-center gap-4 mb-6">
                      {entry.logo && (
                        <div className="h-12 w-12 flex-shrink-0 rounded-2xl p-1.5 glass-recessed bg-white flex items-center justify-center shadow-sm border border-slate-200/80">
                          <Image
                            src={entry.logo}
                            alt={entry.company}
                            width={42}
                            height={42}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                          {entry.role}
                        </h3>
                        <p className="text-sm font-semibold text-slate-600">
                          <span className={colors.titleColor}>{entry.company}</span>
                        </p>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-3 mb-6">
                      {entry.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-3 items-start text-sm sm:text-[15px] leading-relaxed text-slate-700"
                        >
                          <LuCheck
                            className={`text-base ${colors.checkColor} flex-shrink-0 mt-0.5 font-bold`}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Recessed Well */}
                    {entry.tech && entry.tech.length > 0 && (
                      <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-1.5 items-center">
                        <span className="text-[11px] font-mono font-bold text-slate-500 mr-1 uppercase tracking-wider">
                          Stack:
                        </span>
                        {entry.tech.map((tech) => (
                          <span
                            key={tech}
                            className="glass-recessed rounded-xl px-2.5 py-1 text-[11px] font-mono font-medium text-slate-700 border border-slate-200/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </TracingBeam>
    </Section>
  );
}
