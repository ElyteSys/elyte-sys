import { site } from "@/lib/data/site";
import type { Product } from "@/lib/data/types";

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export function buildProductWhatsAppUrl(product: Product): string {
  const price = formatPrice(product.price);
  const text = `Hi, I'm interested in buying the ${product.name} (${price}).`;
  return `${site.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export function buildContactWhatsAppUrl(data: {
  name: string;
  phone: string;
  service: string;
  message: string;
}): string {
  const text =
    `*New Inquiry from ElyteSys*\n\n` +
    `*Name:* ${data.name}\n` +
    `*Phone:* ${data.phone}\n` +
    `*Service:* ${data.service}\n` +
    `*Message:* ${data.message}`;
  return `${site.whatsappUrl}?text=${encodeURIComponent(text)}`;
}
