"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LuFileText, LuMail, LuMenu, LuX } from "react-icons/lu";
import { links } from "@/lib/links";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-5 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 rounded-full border px-4 sm:px-6 py-2.5 transition-all duration-300 w-full max-w-4xl ${
          scrolled
            ? "border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "border-white/5 bg-slate-950/40 backdrop-blur-md"
        }`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/15 flex-shrink-0 bg-slate-900">
            <Image src="/profile.png" alt="Sohail Shaik" fill className="object-cover" />
          </div>
          <span className="text-sm font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors">
            Sohail Shaik
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-wider text-slate-500 border-l border-white/10 pl-2">
            Data & AI
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href={links.cvUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-all hover:bg-white/10 hover:border-sky-500/30 hover:text-sky-300"
          >
            <LuFileText className="text-xs text-sky-400" />
            <span>Resume</span>
          </a>

          <a
            href={`mailto:${links.email}`}
            title="Send Email"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 transition-all hover:bg-sky-500/20 hover:scale-105"
          >
            <LuMail className="text-sm" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <LuX /> : <LuMenu />}
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
            className="pointer-events-auto absolute top-20 left-4 right-4 rounded-3xl border border-white/10 bg-slate-950/95 p-5 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
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
