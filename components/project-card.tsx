"use client";

import { motion } from "framer-motion";
import { LuArrowUpRight, LuWorkflow, LuBrain } from "react-icons/lu";
import type { Project } from "@/lib/content";

const cardConfigs = [
  {
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #311042 50%, #082f49 100%)",
    shimmer: "rgba(99,102,241,0.14)",
    border: "border-indigo-500/20 hover:border-indigo-400/40",
    glowColor: "rgba(99,102,241,0.2)",
    icon: LuWorkflow,
    statusText: "SERVICE ACTIVE",
    statusColor: "bg-emerald-400"
  },
  {
    gradient: "linear-gradient(135deg, #2d0f0f 0%, #450a0a 50%, #3b0764 100%)",
    shimmer: "rgba(220,38,38,0.12)",
    border: "border-rose-500/20 hover:border-rose-400/40",
    glowColor: "rgba(239,68,68,0.2)",
    icon: LuBrain,
    statusText: "DEPLOYED / VERIFIED",
    statusColor: "bg-emerald-400"
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
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`group relative overflow-hidden rounded-[2.5rem] border ${config.border} flex flex-col glass-neo-card glass-neo-card-hover`}
    >
      {/* Dynamic glow overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${config.shimmer}, transparent 70%)`,
          boxShadow: `inset 0 0 20px ${config.glowColor}`,
        }}
      />

      {/* ── Gradient header ── */}
      <div
        className="relative h-44 overflow-hidden flex-shrink-0"
        style={{ background: config.gradient }}
      >
        {/* Subtle grid on header */}
        <div className="absolute inset-0 bg-grid-white/[0.04]" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />

        {/* Top Service Status Bar */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-20">
          {/* Project Type Badge */}
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-black text-white uppercase tracking-wider"
            style={{ background: "rgba(0,0,0,0.38)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <CardIcon className="text-xs text-sky-400" />
            <span>Project MODULE</span>
          </div>

          {/* System status light */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[9px] font-black text-slate-300 uppercase tracking-widest"
            style={{ background: "rgba(0,0,0,0.38)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${config.statusColor} animate-pulse`} />
            <span>{config.statusText}</span>
          </div>
        </div>

        {/* Large decorative index number */}
        <div
          className="absolute bottom-4 right-6 text-7xl font-black leading-none select-none pointer-events-none z-0"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="relative z-10 p-6 sm:p-7 flex-1 flex flex-col gap-5 bg-slate-950/20 backdrop-blur-sm rounded-b-[2.5rem]">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-sky-400 mb-1 block">{project.title}</span>
          <h3 className="text-xl font-bold text-white leading-snug">{project.subtitle}</h3>
        </div>

        {/* Bullets */}
        <ul className="space-y-3 flex-1">
          {project.bullets.slice(0, 5).map((bullet, i) => (
            <li key={i} className="flex gap-3 items-start text-sm">
              <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400/50" />
              <span className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech pills — recessed neomorphic style */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/5 bg-slate-950/50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-200 transition-colors glass-neo-recessed"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {activeLinks.length > 0 && (
          <div className="flex gap-5 pt-2">
            {activeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-sky-400 transition-colors hover:text-sky-300 group/link"
              >
                <span>{link.label}</span>
                <LuArrowUpRight className="text-sm transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
