"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-scroll-spy";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "right" | "left";
  delay?: number;
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();

  const initial = {
    up: { opacity: 0, y: 40 },
    right: { opacity: 0, x: 40 },
    left: { opacity: 0, x: -40 },
  }[direction];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
