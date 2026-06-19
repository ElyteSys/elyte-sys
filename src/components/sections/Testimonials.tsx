import Image from "next/image";
import { Star } from "lucide-react";
import { testimonial } from "@/lib/data/blogPosts";
import { GlassCard } from "@/components/domain/GlassCard";
import { SectionHeader } from "@/components/domain/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials() {
  return (
    <section className="section-full-bleed py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          title={
            <>
              Client <span className="text-gradient">Reviews</span>
            </>
          }
        />
        <Reveal>
          <GlassCard className="mx-auto max-w-2xl space-y-6 text-center">
            <div className="flex justify-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <p className="text-lg leading-relaxed italic">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                width={48}
                height={48}
                unoptimized
                className="rounded-full"
              />
              <div className="text-left">
                <h4 className="font-semibold">{testimonial.author}</h4>
                <span className="text-muted-foreground text-sm">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
