"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuSearch,
  LuFileText,
  LuMail,
  LuExternalLink,
  LuArrowRight,
  LuX,
  LuCheck,
  LuCpu,
  LuWorkflow,
  LuDatabase,
  LuSparkles,
  LuBriefcase,
  LuLayers,
} from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { links } from "@/lib/links";
import { soundEffects } from "@/lib/audio";

interface ActionItem {
  id: string;
  title: string;
  category: "Navigation" | "Production Systems" | "Quick Actions" | "Connect";
  icon: React.ElementType;
  shortcut?: string;
  perform: () => void;
}

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Toggle Command Palette with ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) soundEffects.playPop();
          return !prev;
        });
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, []);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(links.email);
    setCopied(true);
    soundEffects.playSuccess();
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1200);
  }, []);

  const items: ActionItem[] = useMemo(
    () => [
      // Navigation
      {
        id: "nav-hero",
        title: "Home / Overview",
        category: "Navigation",
        icon: LuSparkles,
        perform: () => {
          setIsOpen(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
      },
      {
        id: "nav-systems",
        title: "Featured Production Systems",
        category: "Navigation",
        icon: LuCpu,
        perform: () => scrollTo("projects"),
      },
      {
        id: "nav-exp",
        title: "Engineering Track Record & Experience",
        category: "Navigation",
        icon: LuBriefcase,
        perform: () => scrollTo("experience"),
      },
      {
        id: "nav-skills",
        title: "Technical Stack & Competencies",
        category: "Navigation",
        icon: LuLayers,
        perform: () => scrollTo("skills"),
      },
      {
        id: "nav-contact",
        title: "Contact & Availability",
        category: "Navigation",
        icon: LuMail,
        perform: () => scrollTo("contact"),
      },

      // Systems
      {
        id: "sys-prettiflow",
        title: "PrettiFlow — Sandboxed App Compiler (100k+ Users)",
        category: "Production Systems",
        icon: LuCpu,
        perform: () => scrollTo("experience"),
      },
      {
        id: "sys-octaclaw",
        title: "OctaClaw — Multi-Agent DAG Orchestration Engine",
        category: "Production Systems",
        icon: LuWorkflow,
        perform: () => scrollTo("projects"),
      },
      {
        id: "sys-omniqai",
        title: "OmniqAI — Enterprise pgvector RAG Platform",
        category: "Production Systems",
        icon: LuDatabase,
        perform: () => scrollTo("projects"),
      },

      // Quick Actions
      {
        id: "act-copy-email",
        title: copied ? "Copied to clipboard!" : `Copy Email (${links.email})`,
        category: "Quick Actions",
        icon: copied ? LuCheck : LuMail,
        shortcut: "⌘C",
        perform: copyEmail,
      },
      {
        id: "act-resume",
        title: "Download Resume PDF (Full-Stack AI Engineer)",
        category: "Quick Actions",
        icon: LuFileText,
        shortcut: "↓",
        perform: () => {
          setIsOpen(false);
          const a = document.createElement("a");
          a.href = links.cvUrl;
          a.download = links.cvDownloadName;
          a.click();
        },
      },

      // Connect
      {
        id: "soc-github",
        title: "GitHub Profile (@Sohail-9)",
        category: "Connect",
        icon: FaGithub,
        shortcut: "↗",
        perform: () => {
          setIsOpen(false);
          window.open(links.github, "_blank", "noreferrer");
        },
      },
      {
        id: "soc-linkedin",
        title: "LinkedIn Profile",
        category: "Connect",
        icon: FaLinkedin,
        shortcut: "↗",
        perform: () => {
          setIsOpen(false);
          window.open(links.linkedin, "_blank", "noreferrer");
        },
      },
    ],
    [scrollTo, copyEmail, copied]
  );

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
  };

  // Arrow navigation & Enter execution
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyNav = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? filteredItems.length - 1 : prev - 1
        );
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault();
        filteredItems[selectedIndex].perform();
      }
    };

    window.addEventListener("keydown", handleKeyNav);
    return () => window.removeEventListener("keydown", handleKeyNav);
  }, [isOpen, filteredItems, selectedIndex]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 px-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-md"
            />

            {/* Command Palette Glass Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl rounded-3xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] overflow-hidden z-10"
            >
              {/* Top Accent Line */}
              <div className="h-[2.5px] w-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500" />

              {/* Search Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200/80">
                <LuSearch className="text-lg text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={query}
                  onChange={handleQueryChange}
                  placeholder="Type a command or search systems, stack, resume..."
                  className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <LuX className="text-base" />
                </button>
              </div>

              {/* Items List */}
              <div className="max-h-[380px] overflow-y-auto p-2.5 space-y-1">
                {filteredItems.length === 0 ? (
                  <div className="py-10 text-center text-sm text-slate-400 font-mono">
                    No commands matching &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  filteredItems.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={item.perform}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-left transition-all duration-150 ${
                          isSelected
                            ? "bg-sky-500/10 text-sky-900 border border-sky-400/30 shadow-xs"
                            : "text-slate-700 hover:bg-slate-100/70 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3 truncate">
                          <div
                            className={`p-2 rounded-xl flex items-center justify-center text-sm ${
                              isSelected
                                ? "bg-sky-500 text-white shadow-sm"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            <Icon />
                          </div>
                          <div className="truncate">
                            <span className="text-xs sm:text-sm font-semibold block truncate">
                              {item.title}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                              {item.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          {item.shortcut && (
                            <kbd className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-100 border border-slate-200 text-slate-500">
                              {item.shortcut}
                            </kbd>
                          )}
                          {isSelected && (
                            <LuArrowRight className="text-sky-600 text-xs animate-pulse" />
                          )}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer Bar */}
              <div className="px-4 py-2.5 bg-slate-50/80 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span>
                    <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px]">
                      ↑
                    </kbd>{" "}
                    <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px]">
                      ↓
                    </kbd>{" "}
                    to navigate
                  </span>
                  <span>
                    <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px]">
                      ↵
                    </kbd>{" "}
                    to select
                  </span>
                </div>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px]">
                    ESC
                  </kbd>{" "}
                  to close
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export function CommandMenuTrigger() {
  return (
    <button
      onClick={() => {
        soundEffects.playPop();
        window.dispatchEvent(
          new KeyboardEvent("keydown", { key: "k", metaKey: true })
        );
      }}
      type="button"
      className="glass-pill inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all cursor-pointer shadow-xs"
      title="Open Command Palette (⌘K)"
    >
      <LuSearch className="text-xs text-sky-600" />
      <span className="hidden sm:inline">Quick Command</span>
      <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-600">
        ⌘K
      </kbd>
    </button>
  );
}
