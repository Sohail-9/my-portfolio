"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/lib/content";
import { Section } from "./section";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { LuBinary, LuBrain, LuWorkflow } from "react-icons/lu";

const projectIcons = [
  <LuWorkflow key="0" className="h-4 w-4 text-neutral-500" />,
  <LuBrain key="1" className="h-4 w-4 text-neutral-500" />,
  <LuBinary key="2" className="h-4 w-4 text-neutral-500" />,
];

export function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Traceable systems and AI platforms in production.">
      <BentoGrid className="mx-auto md:grid-cols-2">
        {projects.map((project, i) => (
          <BentoGridItem
            key={project.title}
            title={project.subtitle}
            description={project.title}
            header={
              project.image && (
                <div className="relative h-full min-h-[6rem] w-full overflow-hidden rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )
            }
            icon={projectIcons[i % projectIcons.length]}
            bullets={project.bullets}
            tech={project.tech}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </Section>
  );
}
