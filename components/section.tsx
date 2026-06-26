"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { childVariants, sectionVariants } from "@/lib/animations";

const base = "mx-auto w-full max-w-5xl px-4 sm:px-6";

export function Section({
  id,
  title,
  eyebrow,
  intro,
  children,
  className,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`relative py-10 sm:py-16 ${className ?? ""}`.trim()}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className={`${base} space-y-5`}>
        {eyebrow && (
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-slate-400"
            variants={childVariants}
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.div variants={childVariants}>
          <h2 className="section-heading font-display text-3xl font-bold text-white sm:text-4xl mb-3">
            {title}
          </h2>
          {/* Gradient accent underline */}
          <div
            className="h-0.5 w-14 rounded-full"
            style={{
              background: "linear-gradient(90deg, #38bdf8, rgba(56,189,248,0))",
            }}
          />
        </motion.div>

        {intro && (
          <motion.p
            className="text-base leading-relaxed text-slate-400"
            variants={childVariants}
          >
            {intro}
          </motion.p>
        )}

        {children && (
          <motion.div variants={childVariants}>
            {children}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
