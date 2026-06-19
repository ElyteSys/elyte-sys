import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blogPosts";
import { GlassCard } from "@/components/domain/GlassCard";
import { SectionHeader } from "@/components/domain/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

export function Blog() {
  return (
    <section id="blog" className="section-full-bleed py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          title={
            <>
              Latest <span className="text-gradient">Insights</span>
            </>
          }
          subtitle="Tech tips, buying guides, and maintenance tutorials."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.1}>
              <GlassCard className="group overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-lg bg-primary px-3 py-1 text-xs font-semibold text-white">
                    {post.date}
                  </div>
                </div>
                <div className="space-y-3 p-6">
                  <span className="text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent-foreground"
                  >
                    Read Article <ArrowRight className="size-4" />
                  </Link>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
