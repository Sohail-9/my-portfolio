"use client";

import { useRef } from "react";
import type { KeyboardEvent } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGrafana,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNeo4J,
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
import { LuServer } from "react-icons/lu";
import { skills } from "@/lib/content";
import { childVariants } from "@/lib/animations";
import { Section } from "./section";

const iconMap: Record<string, IconType> = {
  python: SiPython,
  fastapi: SiFastapi,
  node: SiNodedotjs,
  typescript: SiTypescript,
  cpp: SiCplusplus,
  nextjs: SiNextdotjs,
  aws: SiAmazonwebservices,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  postgres: SiPostgresql,
  mongo: SiMongodb,
  redis: SiRedis,
  rabbitmq: SiRabbitmq,
  neo4j: SiNeo4J,
  terraform: SiTerraform,
  githubactions: SiGithubactions,
  prometheus: SiPrometheus,
  grafana: SiGrafana,
  linux: SiLinux,
  git: SiGit
};

function SkillPill({ skill }: { skill: (typeof skills)[number] }) {
  const Icon = iconMap[skill.key] ?? LuServer;
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();
  const spinning = useRef(false);

  const triggerSpin = () => {
    if (spinning.current) {
      return;
    }
    spinning.current = true;
    if (prefersReducedMotion) {
      controls
        .start({
          scale: 1.08,
          transition: { duration: 0.2, ease: "easeOut" }
        })
        .then(() =>
          controls.start({
            scale: 1,
            transition: { duration: 0.2, ease: "easeIn" }
          })
        )
        .finally(() => {
          spinning.current = false;
        });
      return;
    }
    controls
      .start({
        rotate: 360,
        transition: { duration: 0.4, ease: "easeOut" }
      })
      .finally(() => {
        controls.set({ rotate: 0 });
        spinning.current = false;
      });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      triggerSpin();
    }
  };

  return (
    <motion.button
      type="button"
      className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 shadow-card transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      whileHover={{
        backgroundColor: "rgba(15,23,42,0.65)",
        borderColor: "rgba(56,189,248,0.6)",
        boxShadow: "0 0 35px rgba(56,189,248,0.25)",
        y: -2
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={triggerSpin}
      onKeyDown={handleKeyDown}
    >
      <motion.span
        aria-hidden
        animate={prefersReducedMotion ? undefined : controls}
        className="text-lg text-white/70 transition-colors group-hover:text-white"
      >
        <Icon />
      </motion.span>
      <span className="transition-colors group-hover:text-white">{skill.label}</span>
    </motion.button>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <motion.div
        className="flex flex-wrap gap-3 rounded-3xl border border-white/5 bg-slate-900/40 p-6 shadow-card"
        variants={childVariants}
      >
        {skills.map((skill) => (
          <SkillPill key={skill.key} skill={skill} />
        ))}
      </motion.div>
    </Section>
  );
}
