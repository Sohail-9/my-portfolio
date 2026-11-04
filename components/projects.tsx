"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { ProjectCard } from "./project-card";

export function Projects() {
  const [prettiflow, octaclaw, omniqai] = projects;

  return (
    <section id="projects" className="py-24 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Top subtle hairline divider */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(124,58,237,0.15), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header matching octaclaw-fe FeaturesBento */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-700 mb-6 glass-pill-violet cursor-default"
          >
            Featured Architectures
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-zinc-950 tracking-tight leading-[1.08] mb-5"
          >
            Everything built for
            <br className="hidden sm:block" />
            <span className="text-gradient">production scale.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto leading-relaxed"
          >
            High-throughput production architectures built from scratch—spanning full-stack app compilers, multi-agent orchestration engines, and enterprise RAG pipelines.
          </motion.p>
        </div>

        {/* ── CARD 1: Full-Width Hero Bento Card (PrettiFlow) ── */}
        {prettiflow && (
          <div className="mb-6">
            <ProjectCard project={prettiflow} index={0} />
          </div>
        )}

        {/* ── SECONDARY 2-COLUMN BENTO GRID: OctaClaw & OmniqAI ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {octaclaw && <ProjectCard project={octaclaw} index={1} />}
          {omniqai && <ProjectCard project={omniqai} index={2} />}
        </div>
      </div>
    </section>
  );
}
