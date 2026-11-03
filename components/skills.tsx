"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills, SkillCategory } from "@/lib/content";
import { Section } from "./section";
import { FaAws } from "react-icons/fa";
import {
  SiPython,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiOpenai,
  SiGithubactions,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";
import {
  LuBrain,
  LuLayers,
  LuNetwork,
  LuDatabase,
  LuTerminal,
  LuServer,
} from "react-icons/lu";

const iconMap: Record<string, React.ElementType> = {
  // AI & LLM
  rag: LuBrain,
  agents: LuBrain,
  llmorchestration: LuLayers,
  mcp: LuTerminal,
  models: SiOpenai,

  // Backend
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  python: SiPython,
  restapi: LuNetwork,
  websockets: LuNetwork,

  // Frontend
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,

  // Cloud & DevOps
  aws: FaAws,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  cicd: SiGithubactions,

  // Databases
  postgres: SiPostgresql,
  redis: SiRedis,
  mongodb: SiMongodb,
  pgvector: LuDatabase,
};

const categoryConfig: Record<
  SkillCategory,
  {
    iconColor: string;
    border: string;
    accent: string;
    dot: string;
    gradient: string;
  }
> = {
  "AI & LLM": {
    iconColor: "text-purple-600",
    border: "border-purple-200 hover:border-purple-400",
    accent: "#9333ea",
    dot: "bg-purple-600",
    gradient: "from-purple-500 via-fuchsia-500 to-indigo-500",
  },
  Backend: {
    iconColor: "text-sky-600",
    border: "border-sky-200 hover:border-sky-400",
    accent: "#0284c7",
    dot: "bg-sky-600",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
  },
  Frontend: {
    iconColor: "text-cyan-600",
    border: "border-cyan-200 hover:border-cyan-400",
    accent: "#0891b2",
    dot: "bg-cyan-600",
    gradient: "from-cyan-500 via-teal-500 to-sky-500",
  },
  "Cloud & DevOps": {
    iconColor: "text-amber-600",
    border: "border-amber-200 hover:border-amber-400",
    accent: "#d97706",
    dot: "bg-amber-600",
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
  },
  Databases: {
    iconColor: "text-emerald-600",
    border: "border-emerald-200 hover:border-emerald-400",
    accent: "#059669",
    dot: "bg-emerald-600",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
};

const categories: SkillCategory[] = [
  "AI & LLM",
  "Backend",
  "Frontend",
  "Cloud & DevOps",
  "Databases",
];

export function Skills() {
  const grouped = categories.map((cat) => ({
    category: cat,
    config: categoryConfig[cat],
    items: skills.filter((s) => s.category === cat),
  }));

  // Top 2: Core Engineering Pillars (AI & LLM, Backend)
  const topGroup = grouped.slice(0, 2);
  // Bottom 3: Specialized Platforms (Frontend, Cloud & DevOps, Databases)
  const bottomGroup = grouped.slice(2);

  return (
    <Section
      id="skills"
      title="Technical Stack & Expertise"
      eyebrow="Specialization"
      intro="Core technologies and frameworks leveraged to engineer production-ready AI systems, reactive frontends, distributed backends, and cloud infrastructure."
      className="py-16 sm:py-20"
    >
      {/* ── Top Row: 2 Primary Core AI & Backend Pillars ── */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {topGroup.map(({ category, config, items }, catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1, duration: 0.5 }}
            className={`glass-card rounded-3xl ${config.border} p-6 sm:p-7 relative overflow-hidden group shadow-sm`}
          >
            {/* Top specular accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${config.gradient}`} />

            {/* Category header */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <span className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${config.dot}`} />
                <h3 className="text-base font-extrabold text-slate-900 tracking-wide">
                  {category}
                </h3>
              </div>
              <span
                className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full glass-recessed"
                style={{ color: config.accent }}
              >
                {items.length} competencies
              </span>
            </div>

            {/* Skill tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {items.map((skill) => {
                const Icon = iconMap[skill.key] ?? LuServer;

                return (
                  <motion.div
                    key={skill.key}
                    whileHover={{ x: 2, transition: { duration: 0.15 } }}
                    className="flex items-center gap-3 rounded-xl glass-recessed p-2.5 transition-all duration-200 cursor-default hover:bg-white hover:border-slate-300 group/item"
                  >
                    <div
                      className={`h-8 w-8 rounded-lg flex items-center justify-center text-lg ${config.iconColor} bg-white border border-slate-200 shadow-sm flex-shrink-0 group-hover/item:scale-110 transition-transform`}
                    >
                      <Icon />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 leading-tight">
                      {skill.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Bottom Row: 3 Infrastructure & Supporting Pillars ── */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bottomGroup.map(({ category, config, items }, catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + catIdx * 0.1, duration: 0.5 }}
            className={`glass-card rounded-3xl ${config.border} p-6 sm:p-7 relative overflow-hidden group shadow-sm flex flex-col justify-between`}
          >
            {/* Top specular accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${config.gradient}`} />

            <div>
              {/* Category header */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <span className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${config.dot}`} />
                  <h3 className="text-base font-extrabold text-slate-900 tracking-wide">
                    {category}
                  </h3>
                </div>
                <span
                  className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full glass-recessed"
                  style={{ color: config.accent }}
                >
                  {items.length}
                </span>
              </div>

              {/* Skill tiles */}
              <div className="grid grid-cols-1 gap-2.5">
                {items.map((skill) => {
                  const Icon = iconMap[skill.key] ?? LuServer;

                  return (
                    <motion.div
                      key={skill.key}
                      whileHover={{ x: 2, transition: { duration: 0.15 } }}
                      className="flex items-center gap-3 rounded-xl glass-recessed p-2.5 transition-all duration-200 cursor-default hover:bg-white hover:border-slate-300 group/item"
                    >
                      <div
                        className={`h-8 w-8 rounded-lg flex items-center justify-center text-lg ${config.iconColor} bg-white border border-slate-200 shadow-sm flex-shrink-0 group-hover/item:scale-110 transition-transform`}
                      >
                        <Icon />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 leading-tight">
                        {skill.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
