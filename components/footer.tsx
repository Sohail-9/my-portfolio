"use client";

import { motion } from "framer-motion";
import { LuMail, LuArrowUpRight } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { links } from "@/lib/links";

const socials = [
  { href: links.github,   icon: FaGithub,   label: "GitHub" },
  { href: links.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: links.twitter,  icon: FaTwitter,  label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/5 bg-slate-950">
      {/* Aurora bottom glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-72 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(56,189,248,0.55) 0%, rgba(139,92,246,0.32) 45%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />
        <div className="absolute inset-0 bg-grid-white/[0.03]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Eyebrow */}
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent/70">
            Let&apos;s Connect
          </p>

          {/* Heading */}
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 35%, rgba(255,255,255,0.42) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let&apos;s build something great.
          </h2>

          <p className="text-slate-400 max-w-md mx-auto text-base leading-relaxed">
            Open for collaborations on cloud migrations, Kubernetes operations, CI/CD automation, and IaC architectures.
          </p>

          {/* Email CTA — glass pill */}
          <a
            href={`mailto:${links.email}`}
            className="group inline-flex items-center gap-3 rounded-2xl border border-accent/22 bg-accent/10 px-8 py-4 text-accent font-bold transition-all hover:border-accent/40 hover:bg-accent/15 backdrop-blur-sm"
            style={{ boxShadow: "0 0 32px rgba(56,189,248,0.12)" }}
          >
            <LuMail className="text-xl flex-shrink-0" />
            <span>{links.email}</span>
            <LuArrowUpRight className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Social icons */}
          <div className="flex justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.label}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 text-lg backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <s.icon />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-white/5 text-xs text-slate-600">
            © {new Date().getFullYear()} Sohail Shaik
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
