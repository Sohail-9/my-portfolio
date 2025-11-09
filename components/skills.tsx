"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/content";
import { childVariants, pillHover } from "@/lib/animations";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-6">
        {skills.map((group) => (
          <motion.div key={group.category} className="space-y-3" variants={childVariants}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  {...pillHover}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-200 shadow-card transition"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
