"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuServer, LuBrain, LuCloud } from "react-icons/lu";
import { about } from "@/lib/content";
import { Section } from "./section";

const specConfig = [
  {
    Icon: LuBrain,
    gradient: "from-violet-600/10 to-purple-950/5",
    border: "border-violet-500/20 hover:border-violet-500/40",
    iconColor: "text-violet-400",
    glowColor: "rgba(139,92,246,0.18)",
    shimmerColor: "rgba(139,92,246,0.08)",
  },
  {
    Icon: LuServer,
    gradient: "from-sky-600/10 to-blue-950/5",
    border: "border-sky-500/20 hover:border-sky-500/40",
    iconColor: "text-sky-400",
    glowColor: "rgba(56,189,248,0.18)",
    shimmerColor: "rgba(56,189,248,0.08)",
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
    <Section id="about" title="About Me" className="py-20">
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {about.specializations.map((spec, i) => {
          const { Icon, gradient, border, iconColor, glowColor, shimmerColor } = specConfig[i % specConfig.length];
          return (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
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

              {/* Icon bubble */}
              <div
                className={`relative z-10 mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl glass-neo-recessed ${iconColor} text-2xl border border-white/5`}
              >
                <Icon />
              </div>

              <h3 className="relative z-10 text-lg font-bold text-white mb-2">{spec.title}</h3>
              <p className="relative z-10 text-sm text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                {spec.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
