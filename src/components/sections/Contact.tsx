"use client";

import { useState } from "react";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "@/lib/data/site";
import { buildContactWhatsAppUrl } from "@/lib/utils/whatsapp";
import { GlassCard } from "@/components/domain/GlassCard";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState("repair");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    const url = buildContactWhatsAppUrl({
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      service,
      message: data.get("message") as string,
    });

    setTimeout(() => {
      window.open(url, "_blank");
      setSubmitting(false);
      form.reset();
    }, 800);
  };

  return (
    <section id="contact" className="section-full-bleed py-20 md:py-28">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-6">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-foreground">
              Get In Touch
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">
              Visit Our <span className="text-gradient">Showroom</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Have an issue with your laptop or looking to buy a new one? Visit
              our service center or drop us a message.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Our Location",
                  text: site.address,
                },
                { icon: Phone, title: "Call Us", text: site.phone },
                { icon: Mail, title: "Email Us", text: site.email },
              ].map(({ icon: Icon, title, text }) => (
                <GlassCard key={title} className="flex items-start gap-4 p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">{title}</h4>
                    <p className="text-muted-foreground text-sm">{text}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right">
            <GlassCard className="p-6 md:p-8">
              <h3 className="mb-6 text-xl font-semibold">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Required</Label>
                  <Select
                    value={service}
                    onValueChange={(value) => setService(value ?? "repair")}
                  >
                    <SelectTrigger id="service" className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="repair">Laptop Repair</SelectItem>
                      <SelectItem value="buy">Buy New Laptop</SelectItem>
                      <SelectItem value="parts">Spare Parts</SelectItem>
                      <SelectItem value="other">Other Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your issue or requirement..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Redirecting...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="size-4" />
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <GlassCard className="overflow-hidden p-2">
            <iframe
              src={site.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ElyteSys location map"
              className="rounded-xl"
            />
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
