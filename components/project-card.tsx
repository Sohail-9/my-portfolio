"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuArrowUpRight, LuWorkflow, LuBrain, LuCpu, LuCheck, LuActivity, LuInfo } from "react-icons/lu";
import type { Project } from "@/lib/content";

const cardConfigs = [
  {
    headerBg: "from-sky-50 via-blue-50/60 to-indigo-50/40",
    glowColor: "rgba(56, 189, 248, 0.2)",
    borderGlow: "border-sky-200 hover:border-sky-400",
    topLine: "from-sky-500 via-blue-500 to-indigo-500",
    icon: LuCpu,
    tag: "AI PLATFORM",
    statusText: "LIVE IN PRODUCTION",
    statusPulse: "bg-emerald-500",
    activeStepBg: "bg-sky-600 text-white border-sky-600 shadow-md",
    inactiveStepBg: "bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50/50",
    inspectorBg: "bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-transparent border-sky-200",
    arrowColor: "text-sky-500",
    badgeColor: "text-sky-700 bg-sky-100 border-sky-200",
  },
  {
    headerBg: "from-purple-50 via-violet-50/60 to-pink-50/40",
    glowColor: "rgba(168, 85, 247, 0.2)",
    borderGlow: "border-purple-200 hover:border-purple-400",
    topLine: "from-purple-500 via-violet-500 to-pink-500",
    icon: LuWorkflow,
    tag: "MULTI-AGENT DAG",
    statusText: "AUTONOMOUS ORCHESTRATION",
    statusPulse: "bg-emerald-500",
    activeStepBg: "bg-purple-600 text-white border-purple-600 shadow-md",
    inactiveStepBg: "bg-white text-slate-700 border-slate-200 hover:border-purple-300 hover:bg-purple-50/50",
    inspectorBg: "bg-gradient-to-r from-purple-500/10 via-violet-500/5 to-transparent border-purple-200",
    arrowColor: "text-purple-500",
    badgeColor: "text-purple-700 bg-purple-100 border-purple-200",
  },
  {
    headerBg: "from-emerald-50 via-teal-50/60 to-cyan-50/40",
    glowColor: "rgba(16, 185, 129, 0.2)",
    borderGlow: "border-emerald-200 hover:border-emerald-400",
    topLine: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: LuBrain,
    tag: "ENTERPRISE RAG",
    statusText: "DEPLOYED & VERIFIED",
    statusPulse: "bg-emerald-500",
    activeStepBg: "bg-emerald-600 text-white border-emerald-600 shadow-md",
    inactiveStepBg: "bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50",
    inspectorBg: "bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border-emerald-200",
    arrowColor: "text-emerald-500",
    badgeColor: "text-emerald-700 bg-emerald-100 border-emerald-200",
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

  // Interactive Pipeline Inspector State (defaults to middle/key step: index 2)
  const steps = project.pipelineSteps || [];
  const [selectedStepIdx, setSelectedStepIdx] = useState(
    steps.length >= 3 ? 2 : 0
  );

  const activeStep = steps[selectedStepIdx];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className={`glass-card group relative overflow-hidden rounded-[2rem] ${config.borderGlow} flex flex-col shadow-sm`}
    >
      {/* Specular Top Gradient Line */}
      <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${config.topLine}`} />

      {/* Internal ambient illumination blob */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
        style={{ background: config.glowColor }}
      />

      {/* Card Header Surface */}
      <div className={`p-6 sm:p-8 bg-gradient-to-br ${config.headerBg} border-b border-slate-200/80 relative`}>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="glass-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-slate-800 uppercase tracking-wider">
            <CardIcon className="text-xs text-sky-600" />
            <span>{config.tag}</span>
          </div>

          <div className="glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-slate-800">
            <span className={`h-2 w-2 rounded-full ${config.statusPulse} animate-pulse`} />
            <span>{config.statusText}</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-sky-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 font-normal mt-1.5 leading-relaxed">
          {project.subtitle}
        </p>
      </div>

      {/* Card Content Surface */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
        {/* ── Interactive Architecture Pipeline Flow & Inspector ── */}
        {steps.length > 0 && (
          <div className="glass-recessed p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <LuActivity className="text-xs text-sky-600" />
                <span>Interactive Pipeline Flow</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 hidden sm:inline-flex items-center gap-1">
                <LuInfo className="text-xs" />
                <span>Click node to inspect architecture telemetry</span>
              </span>
            </div>

            {/* Clickable Pipeline Nodes */}
            <div className="flex flex-wrap items-center gap-2">
              {steps.map((s, idx) => {
                const isSelected = idx === selectedStepIdx;
                return (
                  <React.Fragment key={s.step}>
                    <button
                      onClick={() => setSelectedStepIdx(idx)}
                      type="button"
                      className={`inline-flex items-center rounded-xl border px-3 py-1.5 text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${isSelected ? config.activeStepBg : config.inactiveStepBg
                        }`}
                    >
                      <span>{s.step}</span>
                    </button>
                    {idx < steps.length - 1 && (
                      <span className={`font-mono font-bold text-sm px-0.5 ${config.arrowColor}`}>
                        →
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Telemetry Inspector Drawer */}
            {activeStep && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.step}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className={`p-3.5 rounded-xl border ${config.inspectorBg} flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-900">
                        {activeStep.step}
                      </span>
                      <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${config.badgeColor}`}>
                        {activeStep.metric}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {activeStep.detail}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-[10px] font-mono font-semibold text-slate-500 bg-white/90 border border-slate-200 px-2.5 py-1 rounded-lg">
                      {activeStep.tech}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        )}

        {/* Bullets (System Architecture & Trade-Offs) */}
        <ul className="space-y-3 flex-1">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 items-start text-sm sm:text-[15px] leading-relaxed text-slate-700">
              <LuCheck className="text-sky-600 text-base flex-shrink-0 mt-0.5 font-bold" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Chips & Action Link */}
        <div className="pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="glass-recessed rounded-lg px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-700 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Link: Tactile Clay Pill */}
          {activeLinks.length > 0 && (
            <div className="flex gap-2">
              {activeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="clay-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all"
                >
                  <span>{link.label}</span>
                  <LuArrowUpRight className="text-xs" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
