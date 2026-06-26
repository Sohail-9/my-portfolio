"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuBrain, LuServer, LuCloud } from "react-icons/lu";
import { about } from "@/lib/content";
import { Section } from "./section";

const specConfig = [
  {
    Icon: LuBrain,
    gradient: "from-violet-600/20 to-purple-900/5",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15",
    glowColor: "rgba(139,92,246,0.14)",
    shimmerColor: "rgba(139,92,246,0.1)",
  },
  {
    Icon: LuServer,
    gradient: "from-emerald-600/20 to-teal-900/5",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    glowColor: "rgba(52,211,153,0.14)",
    shimmerColor: "rgba(52,211,153,0.1)",
  },
  {
    Icon: LuCloud,
    gradient: "from-sky-600/20 to-blue-900/5",
    border: "border-sky-500/20",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/15",
    glowColor: "rgba(56,189,248,0.14)",
    shimmerColor: "rgba(56,189,248,0.1)",
  },
];

export function About() {
  return (
    <Section id="about" title="About Me" className="py-24">
      <div className="mt-10 space-y-6">

        {/* ── Main intro — glassmorphism ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/8 p-8 sm:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
            backdropFilter: "blur(24px)",
            boxShadow:
              "0 0 80px rgba(56,189,248,0.05), inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.2)",
          }}
        >
          {/* Corner accent glows */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-40"
            style={{
              background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Decorative quote */}
          <div
            className="relative z-10 text-8xl font-black leading-none mb-4 select-none"
            style={{
              background: "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(139,92,246,0.25))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            &ldquo;
          </div>
          <p className="relative z-10 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
            {about.body}
          </p>
        </motion.div>

        {/* ── Specialization cards — claymorphism ── */}
        <div className="grid gap-5 sm:grid-cols-3">
          {about.specializations.map((spec, i) => {
            const { Icon, gradient, border, iconColor, iconBg, glowColor, shimmerColor } = specConfig[i];
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative overflow-hidden rounded-3xl border ${border} bg-gradient-to-br ${gradient} p-7 cursor-default group`}
                style={{
                  backdropFilter: "blur(16px)",
                  boxShadow: `0 12px 40px rgba(0,0,0,0.32), 0 0 0 0 ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.18)`,
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
                  className={`relative z-10 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg} ${iconColor} text-2xl`}
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.12)" }}
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
