"use client";

import { featuredProducts } from "@/lib/data/products";
import type { Product } from "@/lib/data/types";
import { ProductCard } from "@/components/domain/ProductCard";
import { SectionHeader } from "@/components/domain/SectionHeader";

type BestSellingProps = {
  onProductSelect: (product: Product) => void;
};

export function BestSelling({ onProductSelect }: BestSellingProps) {
  return (
    <section id="trending" className="section-full-bleed py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          title={
            <>
              Best Selling <span className="text-gradient">Products</span>
            </>
          }
          subtitle="Discover our premium range of laptops and high-performance accessories."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={i * 0.1}
              onSelect={onProductSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
