"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/lib/data/hero-slides";
import { scrollToSection } from "@/lib/utils";

const SLIDE_INTERVAL = 6000;
const SLIDE_TRANSITION = { duration: 0.8, ease: "easeInOut" } as const;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : SLIDE_TRANSITION;
  const slide = heroSlides[currentSlide];

  const startAutoplay = useCallback(() => {
    if (shouldReduceMotion) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);
  }, [shouldReduceMotion]);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    startAutoplay();
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    startAutoplay();
  };

  return (
    <section
      id="home"
      className="relative min-h-svh w-full scroll-mt-20 overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onFocus={stopAutoplay}
      onBlur={startAutoplay}
    >
      {heroSlides.map((item, index) => (
        <motion.div
          key={item.id}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${heroSlides.length}`}
          aria-hidden={index !== currentSlide}
          initial={false}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
            zIndex: index === currentSlide ? 0 : 0,
          }}
          transition={transition}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.08) 100%), url(${item.image})`,
            pointerEvents: index === currentSlide ? "auto" : "none",
          }}
        />
      ))}

      <div
        aria-hidden
        className="pointer-events-none absolute top-[45%] right-[18%] z-10 hidden h-[38%] w-px bg-white/45 md:block lg:right-[22%]"
      />

      <div className="section-container relative z-20 flex min-h-svh flex-col px-5 pb-10 pt-28 sm:px-6 md:pb-12 md:pt-32 lg:px-8">
        <motion.div
          key={slide.id}
          className="flex flex-1 items-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.55, ease: "easeOut" }
          }
        >
          <h1 className="max-w-2xl text-[1.85rem] leading-[1.12] font-extrabold tracking-tight text-white sm:max-w-3xl sm:text-4xl lg:max-w-4xl lg:text-[3rem] xl:text-[3.25rem]">
            {slide.title}
          </h1>
        </motion.div>

        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Previous slide"
            >
              <ChevronLeft className="size-5 stroke-[1.75]" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Next slide"
            >
              <ChevronRight className="size-5 stroke-[1.75]" />
            </button>
          </div>

          <motion.div
            key={`${slide.id}-cta`}
            className="flex max-w-sm flex-col items-start sm:items-end sm:text-right"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.5, ease: "easeOut", delay: 0.1 }
            }
          >
            <p className="text-sm font-medium text-white/90 sm:text-base">
              {slide.description}
            </p>
            <button
              type="button"
              onClick={() => scrollToSection(slide.targetSection)}
              className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full bg-hero-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-hero-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {slide.actionText}
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
