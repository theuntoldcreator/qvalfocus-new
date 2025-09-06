"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

export function ScrollAnimate({ children, className, delay = 0, amount = 0.2 }: ScrollAnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}