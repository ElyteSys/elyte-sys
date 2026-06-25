"use client";

import { ProductModal } from "@/components/domain/ProductModal";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { About } from "@/components/sections/About";
import { BestSelling } from "@/components/sections/BestSelling";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Shop } from "@/components/sections/Shop";
import { Testimonials } from "@/components/sections/Testimonials";
import type { Product } from "@/lib/data/types";
import { useState } from "react";
// import { Blog } from "@/components/sections/Blog";

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
      <Services />
      <About />
      <BestSelling onProductSelect={handleProductSelect} />
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
