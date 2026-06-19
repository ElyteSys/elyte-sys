import Image from "next/image";
import { Shield, Tag, Timer, Microchip } from "lucide-react";
import { site } from "@/lib/data/site";
import { GlassCard } from "@/components/domain/GlassCard";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

const aboutFeatures = [
  { icon: Microchip, title: "Genuine Parts", desc: "100% OEM guaranteed" },
  { icon: Timer, title: "Fast Repair", desc: "Same day delivery" },
  { icon: Tag, title: "Best Pricing", desc: "Affordable luxury" },
  { icon: Shield, title: "Trusted Dealer", desc: "50,000+ happy clients" },
];

export function About() {
  return (
    <section id="about" className="section-full-bleed py-20 md:py-28">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="ElyteSys repair center"
              width={600}
              height={450}
              unoptimized
              className="h-auto w-full object-cover"
            />
          </div>
          <GlassCard className="absolute -bottom-6 -right-4 px-6 py-4 text-center md:-right-8">
            <Counter
              target={site.yearsExperience}
              className="text-3xl font-bold text-primary"
            />
            <p className="text-muted-foreground text-sm">Years of Excellence</p>
          </GlassCard>
        </Reveal>

        <Reveal direction="right" className="space-y-6">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-foreground">
            About {site.name}
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            Tamil Nadu&apos;s Most Trusted{" "}
            <span className="text-gradient">Tech Hub</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We are a premium web design and tech repair agency dedicated to
            providing top-tier solutions. From high-end gaming rigs to complex
            motherboard chip-level repairs, our expert technicians deliver
            perfection.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutFeatures.map(({ icon: Icon, title, desc }) => (
              <GlassCard key={title} className="space-y-2 p-5">
                <Icon className="size-6 text-primary" />
                <h4 className="font-semibold">{title}</h4>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
