import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function GlassCard({ className, ...props }: ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "glass-card border-border bg-card/60 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_20px_var(--primary-glow)]",
        className
      )}
      {...props}
    />
  );
}
