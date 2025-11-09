"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero } from "@/lib/content";
import { links } from "@/lib/links";
import { buttonHover, childVariants, sectionVariants } from "@/lib/animations";

const inlineLinks = [
  { label: "Email", href: `mailto:${links.email}` },
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
  links.phone ? { label: "Phone", href: `tel:${links.phone.replace(/\s+/g, "")}` } : null
].filter(Boolean) as { label: string; href: string }[];

export function Hero() {
  return (
    <motion.section
      className="relative isolate overflow-hidden py-20 sm:py-24"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12">
          <motion.div className="flex-1 space-y-6 text-center md:text-left" variants={childVariants}>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              {hero.title}
            </h1>
            <p className="text-xl text-slate-300">{hero.subtitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <motion.a
                {...buttonHover}
                href={links.cvUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-slate-900 shadow-glow transition"
              >
                {hero.ctaText}
              </motion.a>
            </div>
            <div className="text-sm text-slate-400">
              <span className="mr-2 font-semibold uppercase tracking-[0.3em] text-slate-500">Connect:</span>
              <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-2 text-slate-300 md:justify-start">
                {inlineLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="underline-offset-4 transition hover:text-accent"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end"
            variants={childVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            <div className="rounded-3xl border border-white/5 bg-slate-900/50 p-4 shadow-card">
              <Image
                src="/sohail.jpeg"
                alt="Portrait of Sohail Shaik"
                width={260}
                height={260}
                priority
                className="h-56 w-56 rounded-3xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[50rem] -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15),_transparent_55%)]" />
    </motion.section>
  );
}
