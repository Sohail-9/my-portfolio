"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail, LuFileText, LuArrowUpRight } from "react-icons/lu";
import { links } from "@/lib/links";
import { soundEffects } from "@/lib/audio";

const socials = [
  { href: `mailto:${links.email}`, icon: LuMail, label: "Email" },
  { href: links.github, icon: FaGithub, label: "GitHub" },
  { href: links.linkedin, icon: FaLinkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 overflow-hidden pt-12 pb-8 border-t border-zinc-200/70">
      {/* Top subtle hairline glow */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(124,58,237,0.22), rgba(52,211,153,0.22), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand identity & copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/80 bg-white shadow-2xs flex-shrink-0">
            <Image
              src="/profile.png"
              alt="Sohail Shaik"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs font-mono text-zinc-500">
            <span className="font-heading font-bold text-zinc-900 text-sm sm:text-xs">
              © {new Date().getFullYear()} Sohail Shaik
            </span>
            <span className="hidden sm:inline text-zinc-300">•</span>
            <span>Full-Stack AI Engineer</span>
            <span className="hidden sm:inline text-zinc-300">•</span>
            <span>Remote &amp; Global</span>
          </div>
        </div>

        {/* Social connections & Resume */}
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              onClick={() => soundEffects.playPop()}
              className="neo-surface flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-white transition-all shadow-2xs cursor-pointer border border-white/80"
              title={s.label}
            >
              <s.icon className="text-sm" />
            </a>
          ))}

          <a
            href={links.cvUrl}
            download={links.cvDownloadName}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEffects.playSuccess()}
            className="glass-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-zinc-800 shadow-2xs hover:bg-white transition-all ml-1 cursor-pointer"
          >
            <LuFileText className="text-violet-600 text-xs" />
            <span>Resume</span>
            <LuArrowUpRight className="text-[10px] text-zinc-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
