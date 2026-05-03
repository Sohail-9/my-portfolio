"use client";

import { skills } from "@/lib/content";
import { Section } from "./section";
import { HoverEffect } from "@/components/ui/card-hover-effect";
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
  SiTypescript
} from "react-icons/si";
import { LuBot, LuBrain, LuNetwork, LuServer } from "react-icons/lu";

const iconMap: Record<string, any> = {
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
  git: SiGit
};

export function Skills() {
  const categories = ["AI & LLM", "Languages", "Backend", "Infra"] as const;
  
  const grouped = categories.map(cat => ({
    category: cat,
    items: skills
      .filter(s => s.category === cat)
      .map(s => {
        const Icon = iconMap[s.key] || LuServer;
        return {
          title: s.label,
          icon: <Icon />,
        };
      })
  }));

  return (
    <Section id="skills" title="Technical Skills" className="py-20">
      <div className="space-y-12 mt-10">
        {grouped.map((group) => (
          <div key={group.category} className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500 pl-4 border-l-2 border-accent/20">
              {group.category}
            </h3>
            <HoverEffect items={group.items} className="py-0" />
          </div>
        ))}
      </div>
    </Section>
  );
}
