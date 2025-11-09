"use client";

import { motion } from "framer-motion";
import { present } from "@/lib/content";
import { links } from "@/lib/links";
import { buttonHover, childVariants } from "@/lib/animations";
import { Section } from "./section";

export function Present() {
  const primaryCta = { label: present.ctaText, href: `mailto:${links.email}` };
  const secondaryCta = links.callUrl
    ? { label: "Book a call", href: links.callUrl }
    : null;

  return (
    <Section id="present" title="Present" intro={present.body}>
      <motion.div className="flex flex-wrap gap-4" variants={childVariants}>
        <motion.a
          {...buttonHover}
          href={primaryCta.href}
          className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition"
        >
          {primaryCta.label}
        </motion.a>
        {secondaryCta ? (
          <motion.a
            {...buttonHover}
            href={secondaryCta.href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90"
          >
            {secondaryCta.label}
          </motion.a>
        ) : null}
      </motion.div>
    </Section>
  );
}
