"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiHome } from "react-icons/fi";
import {
  LuUser,
  LuCode,
  LuBriefcase,
  LuFolder,
  LuMail,
} from "react-icons/lu";

const links = [
  { title: "Home", icon: <FiHome />, href: "#" },
  { title: "About", icon: <LuUser />, href: "#about" },
  { title: "Skills", icon: <LuCode />, href: "#skills" },
  { title: "Experience", icon: <LuBriefcase />, href: "#experience" },
  { title: "Projects", icon: <LuFolder />, href: "#projects" },
  { title: "Contact", icon: <LuMail />, href: "mailto:sohailshaik.sk7@gmail.com" },
];

export function FloatingNav() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 left-1/2 z-[100] -translate-x-1/2"
    >
      <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/40 p-2 shadow-2xl backdrop-blur-md">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-white/10 hover:text-white"
          >
            <span className="text-lg">{link.icon}</span>

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-slate-800 px-2 py-1 text-xs text-white transition-all group-hover:scale-100">
              {link.title}
            </span>

            <motion.div
              layoutId="nav-glow"
              className="absolute inset-0 -z-10 rounded-full bg-accent/20 opacity-0 blur-sm transition-opacity group-hover:opacity-100"
            />
          </a>
        ))}
      </nav>
    </motion.div>
  );
}
