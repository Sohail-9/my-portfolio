"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills, SkillCategory } from "@/lib/content";
import { Section } from "./section";
import { FaAws } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";
import {
  SiPython,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiOpenai,
  SiLangchain,
  SiGithubactions,
  SiApacheairflow,
  SiApachespark,
  SiDatabricks,
  SiInformatica,
} from "react-icons/si";
import {
  LuWorkflow,
  LuBrain,
  LuLayers,
  LuNetwork,
  LuDatabase,
  LuServer,
  LuBoxes,
  LuTerminal,
  LuHistory,
} from "react-icons/lu";

const iconMap: Record<string, React.ElementType> = {
  // Data Engineering
  sql: TbSql,
  informatica: SiInformatica,
  airflow: SiApacheairflow,
  spark: SiApachespark,
  databricks: SiDatabricks,
  etl: LuWorkflow,
  starschema: LuLayers,
  scd2: LuHistory,

  // AI & LLM
  rag: LuBrain,
  llmorchestration: LuLayers,
  pgvector: LuDatabase,
  mcp: LuTerminal,
  langchain: SiLangchain,
  models: SiOpenai,

  // Databases
  oracle: GrOracle,
  postgres: SiPostgresql,
  pgbouncer: LuBoxes,
  redis: SiRedis,
  mongodb: SiMongodb,

  // Cloud & Infrastructure
  python: SiPython,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  aws: FaAws,
  cicd: SiGithubactions,
  restapi: LuNetwork,
};

const categoryConfig: Record<
  SkillCategory,
  {
    iconColor: string;
    border: string;
    glow: string;
    accent: string;
    dot: string;
  }
> = {
  "Data Engineering": {
    iconColor: "text-sky-400",
    border: "border-sky-500/10 hover:border-sky-400/40",
    glow: "rgba(56,189,248,0.22)",
    accent: "#38bdf8",
    dot: "bg-sky-400",
  },
  "AI & LLM": {
    iconColor: "text-violet-400",
    border: "border-violet-500/10 hover:border-violet-400/40",
    glow: "rgba(139,92,246,0.22)",
    accent: "#a78bfa",
    dot: "bg-violet-400",
  },
  Databases: {
    iconColor: "text-emerald-400",
    border: "border-emerald-500/10 hover:border-emerald-400/40",
    glow: "rgba(52,211,153,0.22)",
    accent: "#34d399",
    dot: "bg-emerald-400",
  },
  "Cloud & Infrastructure": {
    iconColor: "text-amber-400",
    border: "border-amber-500/10 hover:border-amber-400/40",
    glow: "rgba(251,191,36,0.22)",
    accent: "#fbbf24",
    dot: "bg-amber-400",
  },
};

const categories: SkillCategory[] = [
  "Data Engineering",
  "AI & LLM",
  "Databases",
  "Cloud & Infrastructure",
];

export function Skills() {
  const grouped = categories.map((cat) => ({
    category: cat,
    config: categoryConfig[cat],
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <Section id="skills" title="Technical Skills" className="py-24">
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {grouped.map(({ category, config, items }, catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1, duration: 0.5 }}
            className={`rounded-3xl border ${config.border} p-6 sm:p-7 relative overflow-hidden backdrop-blur-xl transition-all duration-300`}
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              boxShadow: `0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)`,
            }}
          >
            {/* Ambient corner glow */}
            <div
              className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-20 pointer-events-none blur-2xl"
              style={{ background: config.accent }}
            />

            {/* Category header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${config.dot}`} />
                <h3 className="text-base font-bold text-white tracking-wide">
                  {category}
                </h3>
              </div>
              <span
                className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/5"
                style={{ color: config.accent, background: `${config.accent}12` }}
              >
                {items.length} competencies
              </span>
            </div>

            {/* Skill tiles inside category */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {items.map((skill, i) => {
                const Icon = iconMap[skill.key] ?? LuServer;

                return (
                  <motion.div
                    key={skill.key}
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                      transition: { duration: 0.15 },
                    }}
                    className={`group flex items-center gap-3 rounded-xl border border-white/5 bg-slate-950/40 p-3 backdrop-blur-sm transition-all duration-200 cursor-default hover:border-white/20`}
                    style={{
                      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.04)",
                    }}
                  >
                    <span
                      className={`text-xl ${config.iconColor} transition-transform duration-200 group-hover:scale-110 flex-shrink-0`}
                    >
                      <Icon />
                    </span>
                    <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors leading-tight">
                      {skill.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
