"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";
import { links } from "@/lib/links";

const socials = [
  { href: `mailto:${links.email}`, icon: LuMail, label: "Email" },
  { href: `tel:${links.phone}`, icon: LuPhone, label: "Phone" },
  { href: links.github, icon: FaGithub, label: "GitHub" },
  { href: links.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: links.twitter, icon: FaTwitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#e6e6e9] bg-white py-10">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright & Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-[#6e6e73] font-mono">
          <span>© {new Date().getFullYear()} Sohail Shaik • Full-Stack AI Engineer</span>
          <span className="hidden sm:inline">•</span>
          <span>{links.phone}</span>
        </div>

        {/* Social / Contact icons */}
        <div className="flex items-center gap-2.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              title={s.label}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
              className="press flex h-9 w-9 items-center justify-center rounded-xl border border-[#e6e6e9] bg-[#f8f8fa] text-[#0b0b0c] text-sm transition-all hover:bg-[#0b0b0c] hover:text-white hover:border-[#0b0b0c] shadow-sm"
            >
              <s.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
