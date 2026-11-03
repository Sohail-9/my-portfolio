"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuWorkflow, LuDatabase, LuBrain } from "react-icons/lu";
import { about } from "@/lib/content";
import { Section } from "./section";

const specConfig = [
  {
    Icon: LuWorkflow,
    border: "border-sky-200 hover:border-sky-400",
    iconColor: "text-sky-600",
    glowColor: "rgba(56,189,248,0.2)",
    topGradient: "from-sky-500 via-blue-500 to-indigo-500",
  },
  {
    Icon: LuDatabase,
    border: "border-emerald-200 hover:border-emerald-400",
    iconColor: "text-emerald-600",
    glowColor: "rgba(16,185,129,0.2)",
    topGradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    Icon: LuBrain,
    border: "border-purple-200 hover:border-purple-400",
    iconColor: "text-purple-600",
    glowColor: "rgba(168,85,247,0.2)",
    topGradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
];

export function About() {
  return (
    <Section
      id="about"
      title="Engineering Focus"
      eyebrow="Core Capabilities"
      intro="Bridging cutting-edge LLM reasoning systems with high-throughput cloud infrastructure and real-time reactive user interfaces."
      className="py-16 sm:py-20"
    >
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {about.specializations.map((spec, i) => {
          const { Icon, border, iconColor, glowColor, topGradient } = specConfig[i % specConfig.length];
          return (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`glass-card relative overflow-hidden rounded-3xl ${border} p-7 group cursor-default`}
            >
              {/* Specular Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${topGradient}`} />

              {/* Ambient light on hover */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                style={{ background: glowColor }}
              />

              {/* Neumorphic Recessed Icon Pod */}
              <div
                className={`relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl glass-recessed ${iconColor} text-2xl shadow-sm`}
              >
                <Icon />
              </div>

              <h3 className="relative z-10 text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-sky-600 transition-colors">
                {spec.title}
              </h3>
              <p className="relative z-10 text-sm text-slate-600 leading-relaxed font-normal">
                {spec.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
