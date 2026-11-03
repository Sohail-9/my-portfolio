"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LuFileText, LuMenu, LuX } from "react-icons/lu";
import { links } from "@/lib/links";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Smooth Scroll-Spy Observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navLinks) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 rounded-full glass-pill px-5 py-2.5 w-full max-w-3xl transition-all duration-300">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 bg-slate-100 shadow-sm">
            <Image src="/profile.png" alt="Sohail Shaik" fill className="object-cover" priority />
          </div>
          <span className="text-sm font-bold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
            Sohail Shaik
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500 border-l border-slate-200 pl-2.5">
            Fullstack AI
          </span>
        </a>

        {/* Desktop Nav Items with Active Scroll-Spy Pill Indicator */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-slate-900 font-bold bg-slate-100/90 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button: Dark Tactile Clay Pill with target filename */}
        <div className="flex items-center gap-2">
          <a
            href={links.cvUrl}
            download={links.cvDownloadName}
            target="_blank"
            rel="noreferrer noopener"
            className="clay-btn inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-all"
          >
            <LuFileText className="text-xs text-sky-400" />
            <span>Resume</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
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
            className="pointer-events-auto absolute top-20 left-4 right-4 rounded-3xl border border-slate-200 bg-white/95 p-5 backdrop-blur-2xl shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
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
