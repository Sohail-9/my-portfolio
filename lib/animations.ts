import type { Variants } from "framer-motion";

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.12
    }
  }
};

export const childVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const pillHover = {
  whileHover: { backgroundColor: "rgba(56, 189, 248, 0.1)", y: -1 },
  whileTap: { scale: 0.98 }
};

export const buttonHover = {
  whileHover: { scale: 1.02, boxShadow: "0 15px 30px -20px rgba(14, 165, 233, 0.7)" },
  whileTap: { scale: 0.98 }
};

export const cardHover = {
  rest: { y: 0, boxShadow: "0 1px 0 rgba(15, 23, 42, 0.4)" },
  hover: { y: -6, boxShadow: "0 30px 60px -40px rgba(15, 23, 42, 0.9)" }
};
