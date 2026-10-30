"use client";

import React from "react";
import { projects } from "@/lib/content";
import { Section } from "./section";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      intro="Production full-stack AI platforms, autonomous multi-agent orchestration engines, and grounded pgvector RAG architectures."
    >
      <div className={`grid gap-6 mt-8 ${projects.length === 1 ? 'max-w-3xl mx-auto' : 'md:grid-cols-2'}`}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
