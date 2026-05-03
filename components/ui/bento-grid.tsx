import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  bullets,
  tech,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  bullets?: string[];
  tech?: string[];
}) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        rotateX: 2,
        rotateY: -2,
        scale: 1.02
      }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.1] bg-slate-900/50 p-6 transition duration-200 hover:shadow-2xl hover:border-accent/40 dark:bg-black/50 dark:shadow-none backdrop-blur-sm",
        className,
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="flex flex-col gap-4">
        {header}
        <div className="transition duration-200 group-hover/bento:translate-x-1">
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <div className="text-xs font-bold uppercase tracking-widest text-accent/80">
              {description}
            </div>
          </div>
          <div className="font-display font-bold text-neutral-200 text-xl mb-2">
            {title}
          </div>

          {bullets && (
            <ul className="space-y-2 mb-4">
              {bullets.map((bullet, i) => (
                <li key={i} className="text-xs text-neutral-400 flex gap-2">
                  <span className="h-1 w-1 rounded-full bg-neutral-600 mt-1.5 flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {tech && (
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-neutral-500 uppercase tracking-tighter">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
