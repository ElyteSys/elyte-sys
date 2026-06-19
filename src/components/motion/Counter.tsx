"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-scroll-spy";

type CounterProps = {
  target: number;
  suffix?: string;
  className?: string;
};

export function Counter({ target, suffix = "+", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(reduced ? `${target}${suffix}` : "0");

  useEffect(() => {
    if (!inView || reduced) return;

    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${Math.ceil(v)}${suffix}`),
    });

    return () => controls.stop();
  }, [inView, target, suffix, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
