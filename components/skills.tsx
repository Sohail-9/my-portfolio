"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/content";
import { Section } from "./section";
import { FaAws } from "react-icons/fa";
import {
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGrafana,
  SiApachekafka,
  SiKubernetes,
  SiLinux,
  SiNginx,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiRabbitmq,
  SiRedis,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { LuBot, LuBrain, LuNetwork, LuServer } from "react-icons/lu";

const iconMap: Record<string, React.ElementType> = {
  python: SiPython,
  fastapi: SiFastapi,
  node: SiNodedotjs,
  typescript: SiTypescript,
  llm: LuBrain,
  rag: LuNetwork,
  agenticai: LuBot,
  orchestration: LuNetwork,
  mcp: LuNetwork,
  cpp: SiCplusplus,
  nextjs: SiNextdotjs,
  aws: FaAws,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  postgres: SiPostgresql,
  mongo: SiMongodb,
  redis: SiRedis,
  kafka: SiApachekafka,
  rabbitmq: SiRabbitmq,
  terraform: SiTerraform,
  githubactions: SiGithubactions,
  prometheus: SiPrometheus,
  grafana: SiGrafana,
  linux: SiLinux,
  nginx: SiNginx,
  git: SiGit,
};

const categoryConfig = {
  "AI & LLM": {
    iconColor: "text-violet-400",
    border: "border-violet-500/20",
    hoverBorder: "hover:border-violet-400/55",
    hoverBg: "hover:bg-violet-500/10",
    glow: "hover:shadow-[0_0_24px_rgba(139,92,246,0.32)]",
    accent: "#818cf8",
    dot: "bg-violet-400",
  },
  Languages: {
    iconColor: "text-sky-400",
    border: "border-sky-500/20",
    hoverBorder: "hover:border-sky-400/55",
    hoverBg: "hover:bg-sky-500/10",
    glow: "hover:shadow-[0_0_24px_rgba(56,189,248,0.32)]",
    accent: "#38bdf8",
    dot: "bg-sky-400",
  },
  Backend: {
    iconColor: "text-emerald-400",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-400/55",
    hoverBg: "hover:bg-emerald-500/10",
    glow: "hover:shadow-[0_0_24px_rgba(52,211,153,0.32)]",
    accent: "#34d399",
    dot: "bg-emerald-400",
  },
  Infra: {
    iconColor: "text-amber-400",
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-400/55",
    hoverBg: "hover:bg-amber-500/10",
    glow: "hover:shadow-[0_0_24px_rgba(251,191,36,0.32)]",
    accent: "#fbbf24",
    dot: "bg-amber-400",
  },
} as const;

type Category = keyof typeof categoryConfig;
const categories: Category[] = ["AI & LLM", "Languages", "Backend", "Infra"];

export function Skills() {
  const grouped = categories.map((cat) => ({
    category: cat,
    config: categoryConfig[cat],
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <Section id="skills" title="Technical Skills" className="py-24">
      <div className="mt-10 space-y-10">
        {grouped.map(({ category, config, items }) => (
          <div key={category}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <span className={`h-2 w-2 rounded-full flex-shrink-0 ${config.dot}`} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: config.accent }}
              >
                {category}
              </span>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(90deg, ${config.accent}40, transparent)`,
                }}
              />
            </div>

            {/* Skill tiles */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {items.map((skill, i) => {
                const Icon = iconMap[skill.key] ?? LuServer;
                return (
                  <motion.div
                    key={skill.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className={`group flex flex-col items-center gap-2.5 rounded-2xl border ${config.border} ${config.hoverBorder} ${config.hoverBg} ${config.glow} p-4 backdrop-blur-sm transition-all duration-200 cursor-default`}
                    style={{ background: "rgba(255,255,255,0.025)" }}
                  >
                    <span
                      className={`text-2xl ${config.iconColor} transition-transform duration-200 group-hover:scale-110`}
                    >
                      <Icon />
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-200 transition-colors text-center leading-tight">
                      {skill.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
