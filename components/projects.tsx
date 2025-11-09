"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { buttonHover, childVariants } from "@/lib/animations";
import { Section } from "./section";
import { ProjectCard } from "./project-card";

export function Projects() {
  const initialCount = Math.min(1, projects.length);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = useMemo(
    () => (showAll ? projects : projects.slice(0, initialCount)),
    [showAll, initialCount]
  );
  const canToggle = projects.length > initialCount;

  return (
    <Section id="projects" title="Projects" intro="Traceable systems and AI platforms in production.">
      <div className="space-y-8">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        <motion.div className="flex justify-center" variants={childVariants}>
          <motion.button
            {...buttonHover}
            type="button"
            disabled={!canToggle}
            onClick={() => canToggle && setShowAll((prev) => !prev)}
            className="inline-flex items-center rounded-full border border-white/10 px-6 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:text-slate-500"
          >
            {canToggle ? (showAll ? "Show less" : "Show more") : "Show more (soon)"}
          </motion.button>
        </motion.div>
      </div>
    </Section>
  );
}
