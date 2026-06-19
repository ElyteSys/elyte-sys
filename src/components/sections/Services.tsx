import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryFull,
  Cpu,
  Database,
  Keyboard,
  MemoryStick,
  Monitor,
} from "lucide-react";
import { services } from "@/lib/data/services";
import { GlassCard } from "@/components/domain/GlassCard";
import { SectionHeader } from "@/components/domain/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  monitor: Monitor,
  "battery-full": BatteryFull,
  cpu: Cpu,
  database: Database,
  "memory-stick": MemoryStick,
  keyboard: Keyboard,
};

export function Services() {
  return (
    <section id="services" className="section-full-bleed py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          badge="Our Services"
          title={
            <>
              Expert Repair <span className="text-gradient">Services</span>
            </>
          }
          subtitle="Professional care for your premium devices by certified technicians."
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
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="relative space-y-3 p-6">
                    <div className="absolute -top-6 left-6 flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="pt-4 text-lg font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent-foreground"
                    >
                      Book Service <ArrowRight className="size-4" />
                    </Link>
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
