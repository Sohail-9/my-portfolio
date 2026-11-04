"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { LuZap, LuUsers, LuDatabase, LuCloud } from "react-icons/lu";

function Counter({
  prefix,
  num,
  suffix,
  delay,
  decimals = 0,
}: {
  prefix: string;
  num: number;
  suffix: string;
  delay: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, num, {
      duration: 1.8,
      delay,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) {
          const formatted = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString();
          ref.current.textContent = `${prefix}${formatted}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, count, num, prefix, suffix, delay, decimals]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

const metrics = [
  {
    prefix: "",
    num: 100,
    suffix: "k+",
    label: "Platform Scale",
    sub: "PrettiFlow · 100k+ Users",
    clayClass: "clay-violet",
    icon: <LuUsers className="w-6 h-6 text-white" />,
    decimals: 0,
  },
  {
    prefix: "~",
    num: 100,
    suffix: "ms",
    label: "Sandbox Cold Start",
    sub: "was ~3s (Pre-warmed pool)",
    clayClass: "clay-emerald",
    icon: <LuZap className="w-6 h-6 text-white" />,
    decimals: 0,
  },
  {
    prefix: "<",
    num: 12,
    suffix: "ms",
    label: "Semantic Retrieval",
    sub: "pgvector HNSW Vector Search",
    clayClass: "clay-sky",
    icon: <LuDatabase className="w-6 h-6 text-white" />,
    decimals: 0,
  },
  {
    prefix: "",
    num: 99.99,
    suffix: "%",
    label: "High Availability",
    sub: "AWS EKS Rolling Deployments",
    clayClass: "clay-amber",
    icon: <LuCloud className="w-6 h-6 text-white" />,
    decimals: 2,
  },
];

export function MetricsStrip() {
  return (
    <section className="relative my-8">
      <div
        style={{
          background: "rgba(255, 255, 255, 0.60)",
          backdropFilter: "blur(32px) saturate(200%)",
          WebkitBackdropFilter: "blur(32px) saturate(200%)",
          borderTop: "1px solid rgba(255, 255, 255, 0.85)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.55)",
          boxShadow:
            "inset 0 1px 0 rgba(255, 255, 255, 1), 0 2px 24px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.09,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="flex flex-col items-center text-center gap-4 rounded-3xl p-6 neo-surface cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 320, damping: 14 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${m.clayClass} shadow-lg`}
                >
                  {m.icon}
                </motion.div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-heading text-zinc-950 tracking-tight mb-1">
                    <Counter
                      prefix={m.prefix}
                      num={m.num}
                      suffix={m.suffix}
                      delay={i * 0.12}
                      decimals={m.decimals}
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-600 block">
                    {m.label}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                    {m.sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
