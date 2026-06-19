import Image from "next/image";
import { brands } from "@/lib/data/brands";
import type { Brand } from "@/lib/data/types";

function BrandItem({ brand }: { brand: Brand }) {
  return (
    <div className="flex shrink-0 items-center px-10">
      <Image
        src={brand.logo}
        alt={`${brand.name} logo`}
        width={220}
        height={48}
        unoptimized
        className="h-10 max-w-[220px] object-contain"
        style={{ width: "auto" }}
      />
    </div>
  );
}

export function BrandsMarquee() {
  const loop = Array.from({ length: 8 }, () => brands).flat();

  return (
    <section className="border-y border-border/50 bg-card/30 py-8">
      <div className="overflow-hidden">
        <div className="animate-scroll-left flex w-max">
          {loop.map((brand, i) => (
            <BrandItem key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
