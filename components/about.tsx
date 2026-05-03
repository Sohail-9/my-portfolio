"use client";

import React from "react";
import { about } from "@/lib/content";
import { Section } from "./section";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export function About() {
  const content = [
    {
      title: "Who am I?",
      description: about.body,
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white p-10 rounded-2xl">
          Sohail Shaik
        </div>
      ),
    },
    ...about.specializations.map((spec, index) => ({
      title: spec.title,
      description: spec.description,
      content: (
        <div 
          className={`h-full w-full flex items-center justify-center text-white p-10 rounded-2xl ${
            index % 2 === 0 
              ? "bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]" 
              : "bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))]"
          }`}
        >
          {spec.title}
        </div>
      ),
    })),
  ];

  return (
    <Section id="about" title="About Me" className="py-20">
      <div className="mt-10 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
        <StickyScroll content={content} />
      </div>
    </Section>
  );
}
