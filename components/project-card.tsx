"use client";

import { motion } from "framer-motion";
import { buttonHover, cardHover, pillHover } from "@/lib/animations";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  const activeLinks = project.links.filter((link) => Boolean(link.href));

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardHover}
      className="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-6 shadow-card"
    >
      <div className="space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-accent">{project.title}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.subtitle}</h3>
        </div>
        <ul className="space-y-3 text-sm text-slate-300">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/60" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <motion.span key={tech} {...pillHover} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-slate-200">
              {tech}
            </motion.span>
          ))}
        </div>
        {activeLinks.length ? (
          <div className="flex flex-wrap gap-3 pt-2">
            {activeLinks.map((link) => (
              <motion.a
                key={link.label}
                {...buttonHover}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
