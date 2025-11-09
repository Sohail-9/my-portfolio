"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { childVariants, sectionVariants } from "@/lib/animations";

const base = "mx-auto w-full max-w-3xl px-4 sm:px-6";

export function Section({
  id,
  title,
  eyebrow,
  intro,
  children,
  className
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
      className={`relative py-16 sm:py-24 ${className ?? ""}`.trim()}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`${base} space-y-6`}>
        {eyebrow ? (
          <motion.p className="text-sm uppercase tracking-[0.3em] text-slate-400" variants={childVariants}>
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h2
          className="section-heading font-display text-3xl font-semibold text-white sm:text-4xl"
          variants={childVariants}
        >
          {title}
        </motion.h2>
        {intro ? (
          <motion.p className="text-base leading-relaxed text-slate-300" variants={childVariants}>
            {intro}
          </motion.p>
        ) : null}
        {children ? (
          <motion.div className="space-y-6" variants={childVariants}>
            {children}
          </motion.div>
        ) : null}
      </div>
    </motion.section>
  );
}
