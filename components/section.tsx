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
      className={`relative scroll-mt-24 py-16 sm:py-20 ${className ?? ""}`.trim()}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className={`${base} space-y-4`}>
        {eyebrow && (
          <motion.p
            className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-sky-600"
            variants={childVariants}
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.div variants={childVariants}>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-2.5">
            {title}
          </h2>
          {/* Gradient accent underline */}
          <div
            className="h-1 w-12 rounded-full"
            style={{
              background: "linear-gradient(90deg, #0284c7, rgba(2, 132, 199, 0.2))",
            }}
          />
        </motion.div>

        {intro && (
          <motion.p
            className="text-base sm:text-lg leading-relaxed text-slate-600 font-normal max-w-3xl"
            variants={childVariants}
          >
            {intro}
          </motion.p>
        )}

        {children && (
          <motion.div variants={childVariants} className="pt-2">
            {children}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
