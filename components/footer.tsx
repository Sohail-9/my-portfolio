"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail, LuFileText, LuArrowUpRight, LuCopy, LuCheck } from "react-icons/lu";
import { links } from "@/lib/links";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 px-4 sm:px-8 max-w-4xl mx-auto relative">
      {/* Top Hairline Glow Divider */}
      <div
        className="w-full h-px mb-16"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(124,58,237,0.25), rgba(52,211,153,0.25), transparent)",
        }}
      />

      {/* Main Contact Content */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-700 mb-4 glass-pill-violet w-fit">
          Contact
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-zinc-950 tracking-tight mb-4">
          Get in Touch
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base max-w-xl mb-8">
          Whether you have an engineering role, a product to build, or just want to connect, feel free to reach out.
        </p>

        {/* Email Box Card */}
        <div className="p-6 rounded-3xl border border-white/80 bg-white/75 backdrop-blur-xl shadow-lg shadow-zinc-900/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-xl">
          <div>
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider mb-1">
              Direct Email
            </div>
            <div className="font-heading font-semibold text-zinc-900 text-base sm:text-lg">
              {links.email}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${links.email}`}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-white text-xs font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              style={{
                background: "linear-gradient(145deg, #c4b5fd 0%, #8b5cf6 55%, #7c3aed 100%)",
                boxShadow: "0 4px 12px rgba(124,58,237,0.25)",
              }}
            >
              <LuMail className="w-3.5 h-3.5" />
              <span>Send</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="neo-surface flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-white transition-all shadow-2xs border border-white/80"
              title="Copy Email"
            >
              {copied ? (
                <>
                  <LuCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied</span>
                </>
              ) : (
                <>
                  <LuCopy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Social & Resume Links */}
        <div className="flex flex-wrap items-center gap-3 mt-8">
          <a
            href={links.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-surface inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-white transition-all shadow-2xs border border-white/80"
          >
            <LuFileText className="w-3.5 h-3.5 text-violet-600" />
            <span>Download Resume PDF</span>
            <LuArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-surface inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-white transition-all shadow-2xs border border-white/80"
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <LuArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-surface inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-white transition-all shadow-2xs border border-white/80"
          >
            <FaLinkedin className="w-3.5 h-3.5 text-blue-600" />
            <span>LinkedIn</span>
            <LuArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
        <div className="flex items-center gap-2.5">
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/80 bg-white/60 shadow-2xs">
            <Image
              src="/profile.png"
              alt="Sohail Shaik"
              fill
              className="object-cover"
            />
          </div>
          <span>© {new Date().getFullYear()} Sohail Shaik · Full-Stack AI Engineer</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#work" className="hover:text-zinc-900 transition-colors">Work</a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          <a
            href={links.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 font-semibold hover:underline"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
