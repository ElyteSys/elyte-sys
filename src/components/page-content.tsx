"use client";

import { useState } from "react";
import type { Product } from "@/lib/data/types";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ProductModal } from "@/components/domain/ProductModal";
import { Hero } from "@/components/sections/Hero";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { BestSelling } from "@/components/sections/BestSelling";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Shop } from "@/components/sections/Shop";
// import { Blog } from "@/components/sections/Blog";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export function PageContent() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <BrandsMarquee />
      <BestSelling onProductSelect={handleProductSelect} />
      <About />
      <Services />
      <Shop onProductSelect={handleProductSelect} />
      {/* <Blog /> */}
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}
