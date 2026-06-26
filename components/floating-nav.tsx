"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { LuUser, LuCode, LuBriefcase, LuFolder, LuMail } from "react-icons/lu";

const navLinks = [
  { title: "Home",       icon: FiHome,      href: "#" },
  { title: "About",      icon: LuUser,      href: "#about" },
  { title: "Skills",     icon: LuCode,      href: "#skills" },
  { title: "Experience", icon: LuBriefcase, href: "#experience" },
  { title: "Projects",   icon: LuFolder,    href: "#projects" },
  { title: "Contact",    icon: LuMail,      href: "mailto:s.suhail9849@gmail.com" },
];

export function FloatingNav() {
  return (
    /* Outer div handles fixed centering — kept separate from the animated element
       so Framer Motion's transform doesn't override translate-x-1/2 */
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", bounce: 0.3 }}
      >
        <nav
          className="flex items-center gap-1 rounded-full border border-white/10 p-1.5"
          style={{
            background: "rgba(2,6,23,0.78)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow:
              "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.09)",
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                title={link.title}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-white/10 hover:text-white"
              >
                <span className="text-base">
                  <Icon />
                </span>

                {/* Tooltip */}
                <span
                  className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 scale-75 rounded-xl border border-white/10 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
                  style={{
                    background: "rgba(2,6,23,0.92)",
                    backdropFilter: "blur(12px)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.title}
                </span>

                {/* Accent glow on hover */}
                <span className="absolute inset-0 -z-10 rounded-full bg-accent/15 opacity-0 blur-sm transition-opacity group-hover:opacity-100" />
              </a>
            );
          })}
        </nav>
      </motion.div>
    </div>
  );
}
