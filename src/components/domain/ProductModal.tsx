"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import type { Product } from "@/lib/data/types";
import { formatPrice, buildProductWhatsAppUrl } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils";

type ProductModalProps = {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProductModal({
  product,
  open,
  onOpenChange,
}: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-border bg-card p-0 sm:max-w-4xl">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="space-y-4 p-6">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary/50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <a
              href={buildProductWhatsAppUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default" }), "w-full")}
            >
              Buy on WhatsApp
            </a>
          </div>
          <div className="space-y-4 p-6 pt-8 md:pt-6">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl">
                {product.name}
              </DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-2 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${i < Math.floor(product.rating) ? "fill-current" : "opacity-30"}`}
                />
              ))}
              <span className="text-muted-foreground text-sm">
                (Verified Ratings)
              </span>
            </div>
            <p className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
              {product.strikePrice && (
                <span className="text-muted-foreground ml-2 text-base line-through">
                  {formatPrice(product.strikePrice)}
                </span>
              )}
            </p>
            <Tabs defaultValue="overview">
              <TabsList className="w-full">
                <TabsTrigger value="overview" className="flex-1">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="specs" className="flex-1">
                  Specifications
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <p className="text-muted-foreground leading-relaxed">
                  {product.overview}
                </p>
              </TabsContent>
              <TabsContent value="specs" className="mt-4">
                <ul className="space-y-3">
                  {product.specs.map((spec) => (
                    <li
                      key={spec.label}
                      className="flex justify-between gap-4 border-b border-border/50 pb-2 text-sm last:border-0"
                    >
                      <strong className="text-foreground">{spec.label}</strong>
                      <span className="text-muted-foreground text-right">
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
