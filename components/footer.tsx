"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { links } from "@/lib/links";

const socials = [
  { href: `mailto:${links.email}`, icon: LuMail, label: "Email" },
  { href: links.github, icon: FaGithub, label: "GitHub" },
  { href: links.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: links.twitter, icon: FaTwitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950 py-8">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} Sohail Shaik • Full-Stack AI Engineer
        </p>

        {/* Social / Contact icons */}
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              title={s.label}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-400 text-sm transition-all hover:border-sky-500/30 hover:bg-sky-500/10 hover:text-sky-400"
            >
              <s.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
