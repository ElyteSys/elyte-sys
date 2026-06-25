import { GlassCard } from "@/components/domain/GlassCard";
import { SectionHeader } from "@/components/domain/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/lib/data/services";
import {
  Headset,
  Laptop,
  Monitor,
  Puzzle,
  ServerCog,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "shield-check": ShieldCheck,
  "server-cog": ServerCog,
  laptop: Laptop,
  puzzle: Puzzle,
  wrench: Wrench,
  headset: Headset,
};

export function Services() {
  return (
    <section id="services" className="section-full-bleed py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          badge="Our Services"
          title={
            <>
              <span className="text-gradient">ElyteSys</span> Solutions
            </>
          }
          subtitle="ElyteSys specializes in providing end-to-end IT and digital solutions that empower businesses to innovate, optimize operations, and achieve sustainable growth through technology."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Monitor;
            return (
              <Reveal key={service.id} delay={i * 0.1}>
                <GlassCard className="group relative overflow-hidden p-0">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative space-y-3 p-6">
                    <div className="absolute -top-6 left-6 flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="pt-4 text-lg font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
