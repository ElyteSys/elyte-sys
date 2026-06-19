import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  badge,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-5 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-foreground">
          {badge}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground text-base md:text-lg",
            align === "center" && "mx-auto max-w-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
