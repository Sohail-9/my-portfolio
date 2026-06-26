"use client";

import React from "react";
import { projects } from "@/lib/content";
import { Section } from "./section";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Traceable systems and AI platforms in production."
    >
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
