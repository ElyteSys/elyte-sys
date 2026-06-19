import Image from "next/image";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ className, priority }: SiteLogoProps) {
  return (
    <Image
      src="./logo.svg"
      alt={site.name}
      width={1983}
      height={793}
      priority={priority}
      className={cn("h-8 w-auto md:h-10", className)}
    />
  );
}
