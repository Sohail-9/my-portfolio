"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuArrowDown, LuArrowUpRight, LuFileText, LuMail } from "react-icons/lu";
import { links } from "@/lib/links";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-4 sm:px-8 pt-36 pb-16 max-w-4xl mx-auto">
      <div className="relative z-10 flex flex-col">
        {/* Status Pill with pulse animation */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-700 mb-6 glass-pill-violet w-fit cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <span>Full-Stack AI Engineer</span>
        </motion.div>

        {/* Headline with signature gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-5xl sm:text-7xl text-zinc-950 tracking-tight mb-6 leading-[1.04]"
        >
          Hey, I’m <span className="text-gradient">Sohail Shaik</span>
        </motion.h1>

        {/* Bio in Simple Words */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl mb-10"
        >
          I build full-stack web applications and AI-powered systems. As a founding engineer at{" "}
          <strong className="text-zinc-900 font-semibold">PrettiFlow</strong>, I built the platform from scratch and scaled it to{" "}
          <strong className="text-zinc-900 font-semibold">100,000+ users</strong> and{" "}
          <strong className="text-violet-600 font-semibold">8,000+ daily active users (8k+ DAU)</strong>.
        </motion.p>

        {/* Action Buttons with smooth hover/tap animations */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-full px-6 py-3 text-white text-sm font-bold tracking-tight shadow-md transition-all cursor-pointer"
            style={{
              background: "linear-gradient(145deg, #c4b5fd 0%, #8b5cf6 55%, #7c3aed 100%)",
              boxShadow:
                "0 8px 24px rgba(124,58,237,0.28), inset 0 2px 4px rgba(255,255,255,0.45), inset 0 -2px 4px rgba(0,0,0,0.2)",
            }}
          >
            <span>View Work</span>
            <LuArrowDown className="w-4 h-4" />
          </motion.a>

          <motion.a
            href={links.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="neo-surface flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-white transition-all shadow-sm border border-white/80 cursor-pointer"
          >
            <LuFileText className="w-4 h-4 text-violet-600" />
            <span>Resume</span>
            <LuArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="glass-pill flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-white transition-all shadow-2xs border border-white/80 cursor-pointer"
          >
            <LuMail className="w-4 h-4 text-emerald-600" />
            <span>Email Me</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
