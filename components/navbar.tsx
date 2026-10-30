"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LuFileText, LuMail, LuMenu, LuX } from "react-icons/lu";
import { links } from "@/lib/links";

const navLinks = [
  { label: "Workstation", href: "#workspace" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-40 flex justify-center p-4 sm:p-6 pointer-events-none">
      <div
        className="pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 rounded-full border border-[#e6e6e9] bg-white/85 backdrop-blur-2xl px-5 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)] w-full max-w-3xl"
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group press">
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 bg-slate-100 shadow-sm">
            <Image src="/profile.png" alt="Sohail Shaik" fill className="object-cover" />
          </div>
          <span className="text-sm font-semibold text-[#0b0b0c] tracking-tight group-hover:text-slate-700 transition-colors">
            Sohail Shaik
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#6e6e73] border-l border-[#e6e6e9] pl-2">
            Fullstack AI
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-[#6e6e73] hover:text-[#0b0b0c] transition-colors press"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={links.cvUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="press inline-flex items-center gap-1.5 rounded-full bg-[#0b0b0c] text-white px-4 py-1.5 text-xs font-semibold shadow-sm hover:bg-slate-800 transition-all"
          >
            <LuFileText className="text-xs text-sky-400" />
            <span>Resume</span>
          </a>

          <a
            href={`mailto:${links.email}`}
            title="Send Email"
            className="press flex h-8 w-8 items-center justify-center rounded-full border border-[#e6e6e9] bg-[#f3f3f5] text-[#0b0b0c] transition-all hover:bg-[#0b0b0c] hover:text-white"
          >
            <LuMail className="text-xs" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-[#e6e6e9] bg-[#f3f3f5] text-[#0b0b0c] hover:bg-[#0b0b0c] hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <LuX className="text-xs" /> : <LuMenu className="text-xs" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 rounded-3xl border border-[#e6e6e9] bg-white/95 p-5 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#0b0b0c] hover:bg-[#f3f3f5] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
