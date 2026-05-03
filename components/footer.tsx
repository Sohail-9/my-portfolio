"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { links } from "@/lib/links";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950 py-12">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-white">Let&apos;s build something great.</h2>
          <p className="text-slate-400">
            Open for collaborations on RAG pipelines, FastAPI backends, and AI infra.
          </p>
          <div className="flex justify-center gap-6 text-2xl text-slate-500">
            <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <FaLinkedin />
            </a>
            <a href={`mailto:${links.email}`} className="hover:text-white transition-colors">
              <FaEnvelope />
            </a>
          </div>
          <div className="pt-8 text-xs text-slate-600">
            © {new Date().getFullYear()} Sohail Shaik. Built with Aceternity UI and Shadcn.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
