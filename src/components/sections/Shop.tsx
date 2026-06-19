"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { shopProducts } from "@/lib/data/products";
import type { Product, ShopFilter } from "@/lib/data/types";
import { ProductCard } from "@/components/domain/ProductCard";
import { SectionHeader } from "@/components/domain/SectionHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const filters: { value: ShopFilter; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "laptops", label: "Laptops" },
  { value: "parts", label: "Spare Parts" },
  { value: "accessories", label: "Accessories" },
];

type ShopProps = {
  onProductSelect: (product: Product) => void;
};

export function Shop({ onProductSelect }: ShopProps) {
  const [activeFilter, setActiveFilter] = useState<ShopFilter>("all");

  const filtered =
    activeFilter === "all"
      ? shopProducts
      : shopProducts.filter((p) => p.category === activeFilter);

  return (
    <section id="shop" className="section-full-bleed py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          title={
            <>
              Premium <span className="text-gradient">Showroom</span>
            </>
          }
          subtitle="Explore our wide range of laptops, spare parts, and accessories."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                activeFilter === filter.value &&
                  "shadow-[0_4px_15px_rgba(59,130,246,0.4)]"
              )}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  product={product}
                  onSelect={onProductSelect}
                  showRating={false}
                  compact
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
