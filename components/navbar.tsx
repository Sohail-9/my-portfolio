"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { LuFileText, LuMenu, LuX, LuArrowUpRight } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { links } from "@/lib/links";

const navLinks = [
  { label: "Work", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [shimmer, setShimmer] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setVisible(false);
      setMobileMenuOpen(false);
    } else {
      setVisible(true);
    }
    setScrolled(latest > 20);
  });

  const triggerShimmer = () => {
    setShimmer(true);
    setTimeout(() => setShimmer(false), 600);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -120, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="fixed left-0 right-0 top-3 z-50 flex w-full flex-col items-center px-3 md:top-6 md:px-4 pointer-events-none"
    >
      {/* ── Main Floating Glass Pill ── */}
      <motion.nav
        animate={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.70)"
            : "rgba(255, 255, 255, 0.40)",
          backdropFilter: "blur(28px) saturate(180%)",
          borderColor: scrolled
            ? "rgba(255, 255, 255, 0.75)"
            : "rgba(255, 255, 255, 0.45)",
          boxShadow: scrolled
            ? "inset 0 1px 0 rgba(255,255,255,0.85), 0 2px 16px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06)"
            : "inset 0 1px 0 rgba(255,255,255,0.60), 0 2px 8px rgba(0,0,0,0.03)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="pointer-events-auto relative flex h-14 w-full max-w-4xl items-center justify-between overflow-hidden rounded-full border px-4 md:h-16 md:px-6 [backdrop-filter:blur(28px)_saturate(180%)] [-webkit-backdrop-filter:blur(28px)_saturate(180%)]"
      >
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/35 via-transparent to-transparent" />

        {/* Logo / Brand */}
        <a
          href="#"
          className="relative z-10 flex items-center gap-3 group flex-shrink-0 cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/80 flex-shrink-0 bg-white/60 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/profile.png"
              alt="Sohail Shaik"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xs sm:text-sm text-zinc-800 group-hover:text-zinc-950 tracking-tight transition-colors">
              Sohail Shaik
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none hidden sm:inline-block">
              Full-Stack AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="relative z-10 hidden md:flex items-center gap-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold px-4 py-1.5 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-white/60 transition-all duration-200 cursor-pointer"
            >
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Right Actions: Socials + Shimmer Clay CTA */}
        <div className="relative z-10 flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-white/80 bg-white/60 text-zinc-600 hover:text-zinc-950 hover:bg-white transition-all shadow-2xs"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-white/80 bg-white/60 text-zinc-600 hover:text-zinc-950 hover:bg-white transition-all shadow-2xs"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
          </a>

          {/* Shimmer Clay CTA */}
          <a
            href={links.cvUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.span
              onHoverStart={triggerShimmer}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden flex items-center gap-2 cursor-pointer rounded-full px-4 sm:px-5 py-2 text-white text-[12px] sm:text-[13px] font-bold tracking-tight shadow-md"
              style={{
                background:
                  "linear-gradient(145deg, #c4b5fd 0%, #8b5cf6 55%, #7c3aed 100%)",
                boxShadow:
                  "0 6px 18px rgba(124,58,237,0.22), 0 2px 6px rgba(124,58,237,0.12), inset 0 2px 5px rgba(255,255,255,0.45), inset 0 -2px 5px rgba(0,0,0,0.20)",
              }}
            >
              <motion.span
                key={shimmer ? "on" : "off"}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)",
                }}
                initial={{ x: "-110%" }}
                animate={shimmer ? { x: "110%" } : { x: "-110%" }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              />
              <LuFileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <LuArrowUpRight className="w-3 h-3 -ml-0.5 opacity-80" />
            </motion.span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-white/80 bg-white/60 text-zinc-700 hover:bg-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <LuX className="w-3.5 h-3.5" /> : <LuMenu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 rounded-3xl border border-white/80 bg-white/95 p-5 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-3 border-t border-zinc-200/60 mt-1">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-950 text-sm font-medium flex items-center gap-1.5"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-950 text-sm font-medium flex items-center gap-1.5"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
