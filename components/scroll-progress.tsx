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
      className="fixed top-0 left-0 right-0 h-[3px] z-[150] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(to right, #7c3aed, #059669)",
        boxShadow: "0 0 12px rgba(124, 58, 237, 0.4)",
      }}
    />
  );
}
