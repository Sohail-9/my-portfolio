"use client";

import React from "react";
import { projects } from "@/lib/content";
import { Section } from "./section";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Production Systems"
      eyebrow="Architectures & Platforms"
      intro="End-to-end full-stack AI platforms, autonomous multi-agent orchestration engines, and grounded pgvector RAG architectures built for production scale."
      className="py-16 sm:py-20"
    >
      <div className="mt-8 space-y-8 max-w-4xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
