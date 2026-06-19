"use client";

import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/domain/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import type { Product } from "@/lib/data/types";
import { formatPrice, buildProductWhatsAppUrl } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  delay?: number;
  onSelect?: (product: Product) => void;
  showRating?: boolean;
  compact?: boolean;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-3.5",
            i < Math.floor(rating)
              ? "fill-current"
              : i < rating
                ? "fill-current opacity-50"
                : "opacity-30",
          )}
        />
      ))}
    </div>
  );
}

export function ProductCard({
  product,
  delay = 0,
  onSelect,
  showRating = true,
  compact = false,
}: ProductCardProps) {
  return (
    <Reveal delay={delay}>
      <GlassCard
        className="group cursor-pointer overflow-hidden p-0"
        onClick={() => onSelect?.(product)}
      >
        <div className="relative aspect-4/3 overflow-hidden bg-secondary/50">
          {product.badge && (
            <Badge
              className={cn(
                "absolute top-3 left-3 z-10",
                product.badgeVariant === "blue" &&
                  "bg-blue-600 hover:bg-blue-600",
              )}
            >
              {product.badge}
            </Badge>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {!compact && (
            <div className="absolute top-3 right-3 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                type="button"
                className={cn(
                  buttonVariants({ size: "icon-sm", variant: "secondary" }),
                  "rounded-full",
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <Heart className="size-4" />
              </button>
            </div>
          )}
        </div>
        <div className="space-y-3 p-4">
          {showRating && (
            <div className="flex items-center gap-2">
              <StarRating rating={product.rating} />
              <span className="text-muted-foreground text-xs">
                ({product.reviewCount})
              </span>
            </div>
          )}
          <h3 className="line-clamp-2 font-semibold">{product.name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.strikePrice && (
              <span className="text-muted-foreground text-sm line-through">
                {formatPrice(product.strikePrice)}
              </span>
            )}
          </div>
          <a
            href={buildProductWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full shadow-[0_4px_15px_rgba(59,130,246,0.4)]",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            Buy on WhatsApp
          </a>
        </div>
      </GlassCard>
    </Reveal>
  );
}
