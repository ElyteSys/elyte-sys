"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-scroll-spy";

type Particle = {
  id: number;
  size: number;
  left: number;
  duration: number;
  opacity: number;
  drift: number;
};

export function Particles() {
  const reduced = usePrefersReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);
  const travelY =
    typeof window !== "undefined" ? window.innerHeight + 20 : 800;

  useEffect(() => {
    if (reduced) return;

    let id = 0;
    const interval = setInterval(() => {
      const particle: Particle = {
        id: id++,
        size: Math.random() * 5 + 2,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 5,
        opacity: Math.random() * 0.5 + 0.3,
        drift: Math.random() * 100 - 50,
      };
      setParticles((prev) => [...prev.slice(-30), particle]);
    }, 500);

    return () => clearInterval(interval);
  }, [reduced]);

  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: -10,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -travelY],
            x: [0, p.drift],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{ duration: p.duration, ease: "linear" }}
          onAnimationComplete={() =>
            setParticles((prev) => prev.filter((x) => x.id !== p.id))
          }
        />
      ))}
    </div>
  );
}
