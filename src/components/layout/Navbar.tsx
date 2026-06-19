"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { site } from "@/lib/data/site";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteLogo } from "@/components/layout/SiteLogo";

export function Navbar() {
  const activeSection = useScrollSpy();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });
  const backgroundColor = useTransform(
    backgroundOpacity,
    (v) => `rgb(var(--navbar-bg-rgb) / ${v * 0.95})`
  );
  const borderColor = useTransform(
    backgroundOpacity,
    (v) => `rgb(var(--navbar-border-rgb) / ${v * 0.08})`
  );

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 border-b"
      style={{
        backgroundColor,
        borderColor,
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 backdrop-blur-xl"
        style={{ opacity: backgroundOpacity }}
      />
      <div className="section-container relative flex h-16 items-center justify-between md:h-20">
        <Link href="#home" className="flex items-center">
          <SiteLogo
            priority
            className={cn(
              "transition-[filter] duration-300",
              !isScrolled && "brightness-0 invert"
            )}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled
                  ? cn(
                      "hover:text-primary",
                      activeSection === link.href.slice(1)
                        ? "text-primary"
                        : "text-muted-foreground"
                    )
                  : cn(
                      "hover:text-white",
                      activeSection === link.href.slice(1)
                        ? "text-white"
                        : "text-white/75"
                    )
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Temporarily hidden — site is light-only for now */}
          <ThemeToggle className="hidden" />
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "sm", variant: "default" }),
              "hidden sm:inline-flex shadow-[0_4px_15px_rgba(59,130,246,0.4)]"
            )}
          >
            Chat Now
          </a>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  size="icon"
                  variant="ghost"
                  className={cn(
                    "md:hidden",
                    !isScrolled &&
                      "text-white hover:bg-white/10 hover:text-white"
                  )}
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="glass-card border-border bg-card/95">
              <SheetHeader>
                <SheetTitle className="sr-only">{site.name}</SheetTitle>
                <SiteLogo />
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {site.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      activeSection === link.href.slice(1)
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "default" }), "mt-4 w-full")}
                >
                  Chat on WhatsApp
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
