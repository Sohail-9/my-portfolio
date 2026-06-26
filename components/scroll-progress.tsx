"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[150] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #38bdf8, #818cf8, #f472b6)",
        boxShadow: "0 0 12px rgba(56,189,248,0.7)",
      }}
    />
  );
}
