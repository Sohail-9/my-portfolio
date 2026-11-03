"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail, LuFileText, LuArrowUpRight, LuCopy, LuCheck } from "react-icons/lu";
import { links } from "@/lib/links";

const socials = [
  { href: `mailto:${links.email}`, icon: LuMail, label: "Email" },
  { href: links.github, icon: FaGithub, label: "GitHub" },
  { href: links.linkedin, icon: FaLinkedin, label: "LinkedIn" },
];

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative z-10 text-slate-900 overflow-hidden pt-16 pb-12">
      {/* ── High-Impact Contact Glass Card CTA on White ── */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="glass-card relative rounded-[2.5rem] border border-slate-200/90 p-8 sm:p-14 text-center overflow-hidden shadow-lg">
          {/* Specular Top Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500" />

          {/* Internal ambient pastel glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] rounded-full blur-[100px] opacity-25 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(139, 92, 246, 0.35) 100%)",
            }}
          />

          <div className="relative z-10">
            {/* Live Availability Badge */}
            <div className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono font-bold text-slate-800 mb-6 border border-emerald-200/80 bg-emerald-50/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>Available for Full-Stack AI Engineer Roles</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let’s build intelligent systems{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                together
              </span>
            </h2>

            <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Specializing in production LLM orchestration, pre-warmed sandbox execution, pgvector RAG pipelines, and scalable Next.js + Node.js platforms.
            </p>

            {/* Primary Action Buttons: Claymorphism, Copy Email & Light Glass */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {/* Mail Button with One-Click Copy */}
              <div className="inline-flex items-center rounded-full shadow-2xl">
                <a
                  href={`mailto:${links.email}`}
                  className="clay-btn inline-flex items-center gap-2 rounded-l-full px-6 py-3.5 text-sm font-bold border-r border-slate-700"
                >
                  <LuMail className="text-base text-sky-400" />
                  <span>Email: {links.email}</span>
                </a>
                <button
                  onClick={copyEmail}
                  type="button"
                  className="clay-btn inline-flex items-center gap-1.5 rounded-r-full px-4 py-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  title="Copy Email Address"
                >
                  {copied ? (
                    <>
                      <LuCheck className="text-emerald-400 text-sm" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <LuCopy className="text-xs" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={links.cvUrl}
                download={links.cvDownloadName}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow-sm"
              >
                <LuFileText className="text-base text-sky-600" />
                <span>Download Resume</span>
                <LuArrowUpRight className="text-xs text-slate-500" />
              </a>
            </div>

            {/* Quick Direct Links */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-mono font-medium">
              <button
                onClick={copyEmail}
                type="button"
                className="hover:text-sky-600 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <LuMail className="text-sky-600" />
                <span>{links.email}</span>
                {copied && <span className="text-emerald-600 font-bold ml-1">✓ Copied</span>}
              </button>
              <span className="hidden sm:inline text-slate-300">•</span>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-600 transition-colors flex items-center gap-1.5"
              >
                <FaGithub className="text-slate-800" /> github.com/Sohail-9
              </a>
              <span className="hidden sm:inline text-slate-300">•</span>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-600 transition-colors flex items-center gap-1.5"
              >
                <FaLinkedin className="text-blue-600" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sub-Footer Bar ── */}
      <div className="mt-16 border-t border-slate-200/80 pt-8 pb-4">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-slate-500 font-mono">
            <span className="font-semibold text-slate-700">© {new Date().getFullYear()} Sohail Shaik</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Full-Stack AI Engineer</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Remote &amp; Global</span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass-btn flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:text-sky-600 transition-colors shadow-sm"
              >
                <s.icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
