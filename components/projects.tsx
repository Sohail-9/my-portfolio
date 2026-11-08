"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { links } from "@/lib/links";

const works = [
  {
    number: "01",
    title: "PrettiFlow",
    subtitle: "AI-Powered Full-Stack App Platform",
    role: "Founding Engineer · 2026 – Present",
    tag: "100k+ Users · 8k+ DAU",
    logo: "/pretti.png",
    tagClass: "glass-pill-violet text-violet-700 border-violet-300/60",
    description:
      "An AI platform that compiles natural-language prompts into fully functional, deployed web apps in minutes. Built the core architecture from scratch, created pre-warmed container sandboxes (~100ms startup), and scaled the product to over 100,000 users and 8,000+ daily active users.",
    tech: ["Next.js", "React", "Node.js", "Python", "Docker", "AWS", "Redis"],
    link: links.github,
  },
  {
    number: "02",
    title: "OmniqAI",
    subtitle: "Enterprise Knowledge & Semantic Search",
    role: "Software Engineer · 2023 – 2025",
    tag: "+40% Query Speedup",
    logo: "/Omniqai.png",
    tagClass: "glass-pill-emerald text-emerald-700 border-emerald-300/60",
    description:
      "An enterprise search and document platform that lets teams search internal documentation and get accurate, sourced answers with AI. Built backend APIs and vector search pipelines in PostgreSQL, cutting search latency by 40% and streaming live responses over WebSockets.",
    tech: ["Next.js", "TypeScript", "Python", "PostgreSQL", "pgvector", "Redis"],
    link: links.github,
  },
];

export function Projects() {
  return (
    <section id="work" className="py-24 px-4 sm:px-8 max-w-4xl mx-auto relative">
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-700 mb-4 glass-pill-violet w-fit">
          Selected Work
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-zinc-950 tracking-tight">
          What I’ve Built
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-3 max-w-xl">
          A simple overview of the production systems and platforms I have worked on.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {works.map((work) => (
          <motion.div
            key={work.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/80 bg-white/75 p-6 sm:p-8 backdrop-blur-xl shadow-lg shadow-zinc-900/5 hover:shadow-xl hover:border-violet-300/50 transition-all duration-300"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-violet-600 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100 shadow-2xs">
                  {work.number}
                </span>
                <span className="text-xs font-mono font-medium text-zinc-500">
                  {work.role}
                </span>
              </div>
              <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold ${work.tagClass}`}>
                {work.tag}
              </span>
            </div>

            {/* Title with small official company logo */}
            <div className="flex items-center gap-3 mb-1">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-white/80 bg-white/80 shadow-2xs flex-shrink-0 flex items-center justify-center">
                <Image
                  src={work.logo}
                  alt={work.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-zinc-950">
                {work.title}
              </h3>
            </div>

            <p className="font-mono text-xs text-zinc-500 mb-4 pl-11">
              {work.subtitle}
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6">
              {work.description}
            </p>

            {/* Tech Chips */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-zinc-200/60">
              <div className="flex flex-wrap gap-2">
                {work.tech.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-lg bg-zinc-100/80 px-2.5 py-1 text-xs font-mono font-medium text-zinc-600 border border-zinc-200/50"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold text-zinc-700 hover:text-violet-600 inline-flex items-center gap-1.5 transition-colors"
              >
                <FaGithub className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
                <LuArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
