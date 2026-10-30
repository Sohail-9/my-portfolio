"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuMail, LuFileText, LuArrowUpRight } from "react-icons/lu";
import { links } from "@/lib/links";

const socials = [
  { href: `mailto:${links.email}`, icon: LuMail, label: "Email" },
  { href: links.github, icon: FaGithub, label: "GitHub" },
  { href: links.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: links.twitter, icon: FaTwitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-white">
      {/* ── High-Impact Contact CTA ── */}
      <div className="border-t border-[#e6e6e9] bg-gradient-to-b from-[#fafafc] to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e6e6e9] bg-white px-4 py-1.5 text-xs font-mono font-medium text-[#0b0b0c] shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Full-Stack AI Engineer Roles</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.04em] text-[#0b0b0c]">
            Let’s build intelligent systems <span className="font-serif italic font-normal text-[#0b0b0c]">together</span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[#6e6e73] font-light leading-relaxed">
            Specializing in production LLM orchestration, pre-warmed sandbox execution, pgvector RAG, and scalable Next.js + Node.js platforms.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${links.email}`}
              className="press inline-flex items-center gap-2 rounded-full bg-[#0b0b0c] text-white px-6 py-3 text-sm font-semibold shadow-md hover:bg-slate-800 transition-all"
            >
              <LuMail className="text-base text-sky-400" />
              <span>Email: {links.email}</span>
            </a>

            <a
              href={links.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center gap-2 rounded-full border border-[#e6e6e9] bg-white px-6 py-3 text-sm font-semibold text-[#0b0b0c] shadow-sm hover:bg-[#f3f3f5] transition-all"
            >
              <LuFileText className="text-base text-sky-600" />
              <span>Download Resume</span>
              <LuArrowUpRight className="text-xs text-[#6e6e73]" />
            </a>
          </div>

          {/* Quick Direct Links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6e6e73] font-mono">
            <a href={`mailto:${links.email}`} className="hover:text-[#0b0b0c] transition-colors flex items-center gap-1.5">
              <LuMail className="text-slate-500" /> {links.email}
            </a>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-[#0b0b0c] transition-colors flex items-center gap-1.5">
              <FaGithub className="text-slate-500" /> GitHub: Sohail-9
            </a>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#0b0b0c] transition-colors flex items-center gap-1.5">
              <FaLinkedin className="text-slate-500" /> LinkedIn
            </a>
          </div>

        </div>
      </div>

      {/* ── Sub-Footer Bar ── */}
      <div className="border-t border-[#e6e6e9] bg-white py-8">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-[#6e6e73] font-mono">
            <span>© {new Date().getFullYear()} Sohail Shaik</span>
            <span className="hidden sm:inline">•</span>
            <span>Full-Stack AI Engineer</span>
            <span className="hidden sm:inline">•</span>
            <span>Bengaluru &amp; Remote</span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.label}
                target={s.href.startsWith("mailto:") || s.href.startsWith("tel:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") || s.href.startsWith("tel:") ? undefined : "noreferrer noopener"}
                className="press flex h-8 w-8 items-center justify-center rounded-lg border border-[#e6e6e9] bg-[#f8f8fa] text-[#0b0b0c] text-xs transition-all hover:bg-[#0b0b0c] hover:text-white hover:border-[#0b0b0c] shadow-sm"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
