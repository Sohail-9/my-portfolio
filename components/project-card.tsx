"use client";

import { motion } from "framer-motion";
import { LuArrowUpRight, LuWorkflow, LuBrain } from "react-icons/lu";
import type { Project } from "@/lib/content";

const cardConfigs = [
  {
    gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #1d4ed8 100%)",
    shimmer: "rgba(99,102,241,0.18)",
    border: "border-violet-500/25",
    icon: LuWorkflow,
  },
  {
    gradient: "linear-gradient(135deg, #b45309 0%, #dc2626 50%, #be185d 100%)",
    shimmer: "rgba(220,38,38,0.15)",
    border: "border-rose-500/25",
    icon: LuBrain,
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const config = cardConfigs[index % cardConfigs.length];
  const activeLinks = project.links.filter((l) => Boolean(l.href));
  const CardIcon = config.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group relative overflow-hidden rounded-3xl border ${config.border} flex flex-col`}
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        backdropFilter: "blur(20px)",
        boxShadow:
          "0 20px 80px rgba(0,0,0,0.42), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${config.shimmer}, transparent 65%)`,
        }}
      />

      {/* ── Gradient header ── */}
      <div
        className="relative h-44 overflow-hidden flex-shrink-0"
        style={{ background: config.gradient }}
      >
        {/* Subtle grid on header */}
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />

        {/* Project type badge */}
        <div className="absolute top-5 left-5">
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white uppercase tracking-wider"
            style={{ background: "rgba(0,0,0,0.28)", backdropFilter: "blur(10px)" }}
          >
            <CardIcon className="text-sm" />
            {project.title}
          </div>
        </div>

        {/* Large decorative index number */}
        <div
          className="absolute bottom-4 right-5 text-8xl font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.08)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="relative z-10 p-6 flex-1 flex flex-col gap-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white leading-snug">{project.subtitle}</h3>

        {/* Bullets */}
        <ul className="space-y-2 flex-1">
          {project.bullets.slice(0, 4).map((bullet, i) => (
            <li key={i} className="flex gap-2.5 items-start text-sm">
              <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
              <span className="text-slate-400 leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-400 hover:border-white/20 hover:text-slate-200 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {activeLinks.length > 0 && (
          <div className="flex gap-4">
            {activeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/75 group/link"
              >
                {link.label}
                <LuArrowUpRight className="text-xs transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
