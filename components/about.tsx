"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuServer, LuBrain, LuCloud } from "react-icons/lu";
import { about } from "@/lib/content";
import { Section } from "./section";

const specConfig = [
  {
    Icon: LuServer,
    gradient: "from-sky-600/10 to-blue-950/5",
    border: "border-sky-500/20 hover:border-sky-500/40",
    iconColor: "text-sky-400",
    glowColor: "rgba(56,189,248,0.18)",
    shimmerColor: "rgba(56,189,248,0.08)",
  },
  {
    Icon: LuBrain,
    gradient: "from-violet-600/10 to-purple-950/5",
    border: "border-violet-500/20 hover:border-violet-500/40",
    iconColor: "text-violet-400",
    glowColor: "rgba(139,92,246,0.18)",
    shimmerColor: "rgba(139,92,246,0.08)",
  },
  {
    Icon: LuCloud,
    gradient: "from-emerald-600/10 to-teal-950/5",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.18)",
    shimmerColor: "rgba(52,211,153,0.08)",
  },
];

export function About() {
  return (
    <Section id="about" title="About Me" className="py-24">
      <div className="mt-10 space-y-6">

        {/* ── Main intro — glass-neomorphism ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl p-6 sm:p-9 glass-neo-card"
        >
          {/* Corner accent glows */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-45"
            style={{
              background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none opacity-35"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          <p className="relative z-10 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-light">
            {about.body}
          </p>
        </motion.div>

        {/* ── Specialization cards — Clay/Glass-Neomorphism ── */}
        <div className="grid gap-5 sm:grid-cols-3">
          {about.specializations.map((spec, i) => {
            const { Icon, gradient, border, iconColor, glowColor, shimmerColor } = specConfig[i];
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative overflow-hidden rounded-3xl border ${border} bg-gradient-to-br ${gradient} p-7 cursor-default group transition-all duration-300`}
                style={{
                  backdropFilter: "blur(20px)",
                  boxShadow: `
                    12px 12px 30px rgba(0,0,0,0.5), 
                    -6px -6px 20px rgba(255,255,255,0.015), 
                    inset 0 1px 0 rgba(255,255,255,0.08),
                    0 0 20px ${glowColor}
                  `,
                }}
              >
                {/* Hover shimmer */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${shimmerColor}, transparent 70%)`,
                  }}
                />

                {/* Icon bubble — recessed neomorphism */}
                <div
                  className={`relative z-10 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl glass-neo-recessed ${iconColor} text-2xl border border-white/5`}
                >
                  <Icon />
                </div>

                <h3 className="relative z-10 text-base font-bold text-white mb-3">{spec.title}</h3>
                <p className="relative z-10 text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {spec.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
