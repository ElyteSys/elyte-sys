"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import { site } from "@/lib/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SiteLogo } from "@/components/layout/SiteLogo";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50 pt-16 pb-8">
      <div className="section-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="#home" className="inline-flex items-center">
              <SiteLogo />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tamil Nadu&apos;s premium destination for high-end laptops, genuine
              accessories, and expert chip-level repair services.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {site.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Top Services</h3>
            <ul className="space-y-2">
              {site.footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-muted-foreground text-sm transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Newsletter</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe to get the latest offers and tech updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Your Email Address" required />
              <Button type="submit" size="icon">
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p className="text-muted-foreground">
            © 2026 {site.name}. All Rights Reserved. Designed for Premium
            Experience.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
