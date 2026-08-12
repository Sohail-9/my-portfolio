"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/content";
import { Section } from "./section";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import {
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGrafana,
  SiKubernetes,
  SiLinux,
  SiNginx,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiRedis,
  SiTerraform,
  SiCloudflare,
  SiHelm,
  SiTraefikproxy,
  SiWireguard,
} from "react-icons/si";
import {
  LuWorkflow,
  LuSettings,
  LuBell,
  LuEye,
  LuLock,
  LuTerminal,
  LuShieldCheck,
  LuNetwork,
  LuServer,
} from "react-icons/lu";

const iconMap: Record<string, React.ElementType> = {
  aws: FaAws,
  azure: FaMicrosoft,
  cloudflare: SiCloudflare,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  helm: SiHelm,
  swarm: SiDocker, // Reuse Docker icon for swarm
  terraform: SiTerraform,
  githubactions: SiGithubactions,
  cicd: LuWorkflow,
  automation: LuSettings,
  prometheus: SiPrometheus,
  grafana: SiGrafana,
  alertmanager: LuBell,
  cloudwatch: LuEye,
  traefik: SiTraefikproxy,
  tls: LuShieldCheck,
  wireguard: SiWireguard,
  secrets: LuLock,
  python: SiPython,
  bash: LuTerminal,
  linux: SiLinux,
  postgres: SiPostgresql,
  redis: SiRedis,
  git: SiGit,
};

const categoryConfig = {
  "Cloud & Containers": {
    iconColor: "text-sky-400",
    border: "border-sky-500/10 hover:border-sky-400/40",
    glow: "rgba(56,189,248,0.22)",
    accent: "#38bdf8",
    dot: "bg-sky-400",
  },
  "IaC & CI/CD": {
    iconColor: "text-emerald-400",
    border: "border-emerald-500/10 hover:border-emerald-400/40",
    glow: "rgba(52,211,153,0.22)",
    accent: "#34d399",
    dot: "bg-emerald-400",
  },
  "Observability & Security": {
    iconColor: "text-amber-400",
    border: "border-amber-500/10 hover:border-amber-400/40",
    glow: "rgba(251,191,36,0.22)",
    accent: "#fbbf24",
    dot: "bg-amber-400",
  },
  "Scripting & Data": {
    iconColor: "text-violet-400",
    border: "border-violet-500/10 hover:border-violet-400/40",
    glow: "rgba(139,92,246,0.22)",
    accent: "#818cf8",
    dot: "bg-violet-400",
  },
} as const;

type Category = keyof typeof categoryConfig;
const categories: Category[] = [
  "Cloud & Containers",
  "IaC & CI/CD",
  "Observability & Security",
  "Scripting & Data",
];

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

            {/* Skill tiles — Glass-neomorphism style */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3.5 sm:gap-4">
              {items.map((skill, i) => {
                const Icon = iconMap[skill.key] ?? LuServer;
                return (
                  <motion.div
                    key={skill.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.4 }}
                    whileHover={{ 
                      y: -4, 
                      scale: 1.02,
                      transition: { duration: 0.15 } 
                    }}
                    className={`group flex flex-col items-center gap-3 rounded-2xl border ${config.border} p-5 sm:p-5.5 backdrop-blur-md transition-all duration-200 cursor-default`}
                    style={{ 
                      background: "rgba(9, 13, 26, 0.35)",
                      boxShadow: `
                        4px 4px 12px rgba(0, 0, 0, 0.45), 
                        -3px -3px 10px rgba(255, 255, 255, 0.01), 
                        inset 0 1px 0 rgba(255, 255, 255, 0.06)
                      `
                    }}
                  >
                    {/* Hover glow effect via inline style dynamic change */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        boxShadow: `0 0 20px ${config.glow}, inset 0 0 8px ${config.glow}`
                      }}
                    />

                    <span
                      className={`text-2xl sm:text-3xl ${config.iconColor} transition-transform duration-200 group-hover:scale-110 relative z-10`}
                    >
                      <Icon />
                    </span>
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors text-center leading-tight relative z-10">
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
