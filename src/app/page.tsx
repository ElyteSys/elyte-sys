"use client";

import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle,
  ChevronRight,
  Cog,
  DraftingCompass,
  Factory,
  GraduationCap,
  Headphones,
  Headset,
  HeartPulse,
  Landmark,
  Mail,
  MapPinned,
  MessageCircle,
  MessageSquare,
  MessagesSquare,
  Monitor,
  PackageOpen,
  Phone,
  Rocket,
  Search,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ── Shared helpers ─────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-4">
      <span className="w-4 h-px bg-[#2563EB]" />
      {children}
      <span className="w-4 h-px bg-[#2563EB]" />
    </span>
  );
}

function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative group bg-[#0D1528] border border-white/[0.07] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-blue-900/20 ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#2563EB]/0 to-[#2563EB]/0 group-hover:from-[#2563EB]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
      {children}
    </div>
  );
}

/* ── Data ───────────────────────────────────────────────────── */

const SERVICES = [
  {
    icon: Monitor,
    label: "IT Solutions & Sales",
    headline: "Corporate IT Solutions & Sales",
    subline:
      "High-performance hardware and tailored IT infrastructure to power your business growth.",
    body: "We deliver high-performance hardware and tailored IT infrastructure to power your business growth. Our experts help you select, deploy, and maintain the right technology for your specific operational needs.",
    points: [
      {
        title: "Authorized Sales",
        desc: "Top-tier laptops, desktops, servers, and networking hardware.",
      },
      {
        title: "Custom Procurement",
        desc: "Bulk ordering tailored to your company's budget and specs.",
      },
      {
        title: "End-to-End Setup",
        desc: "Full installation, software configuration, and network integration.",
      },
    ],
    color: "#2563EB",
    glow: "rgba(37,99,235,0.15)",
    path: "/services#sales",
  },
  {
    icon: Wrench,
    label: "Laptop Service & Repair",
    headline: "Expert Laptop & Device Service",
    subline:
      "Minimize downtime with fast, reliable repair and maintenance for all major brands.",
    body: "Minimize downtime with our fast, reliable repair and maintenance services for all major brands. We handle everything from minor software glitches to complex hardware failures.",
    points: [
      {
        title: "Hardware Repairs",
        desc: "Screen replacements, motherboard repairs, and battery upgrades.",
      },
      {
        title: "Software Troubleshooting",
        desc: "OS installation, malware removal, and data recovery.",
      },
      {
        title: "Component Upgrades",
        desc: "SSD and RAM installations to boost aging fleet performance.",
      },
    ],
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.15)",
    path: "/services#repair",
  },
  {
    icon: CalendarCheck,
    label: "AMC Support",
    headline: "Comprehensive B2B AMC Support",
    subline:
      "Proactive monitoring and scheduled maintenance to keep your systems running 24/7.",
    body: "Protect your business from unexpected IT failures with our Annual Maintenance Contracts (AMC). We provide proactive monitoring and scheduled maintenance to keep your systems running 24/7.",
    points: [
      {
        title: "Priority Response",
        desc: "Dedicated SLA-backed support timelines for contract clients.",
      },
      {
        title: "Preventative Care",
        desc: "Regular health checks to catch hardware issues before they cause downtime.",
      },
      {
        title: "Cost Predictability",
        desc: "Fixed annual pricing eliminates unexpected IT repair expenses.",
      },
    ],
    color: "#10B981",
    glow: "rgba(16,185,129,0.12)",
    path: "/amc-plans",
  },
  {
    icon: PackageOpen,
    label: "Hardware Rentals",
    headline: "Flexible IT Hardware Rentals",
    subline:
      "Scale your workforce instantly without heavy upfront capital expenditure.",
    body: "Scale your workforce instantly without heavy upfront capital expenditure. Our flexible rental plans provide your team with pre-configured, high-performance laptops and workstations.",
    points: [
      {
        title: "Short & Long-Term",
        desc: "Rental plans ranging from event-based days to multi-year corporate setups.",
      },
      {
        title: "Immediate Scaling",
        desc: "Quick onboarding for seasonal employees, interns, or new project teams.",
      },
      {
        title: "Full Maintenance",
        desc: "All rented devices include complimentary technical support and replacements.",
      },
    ],
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.12)",
    path: "/rentals",
  },
  {
    icon: MapPinned,
    label: "On-Site Support",
    headline: "Dedicated On-Site Technical Support",
    subline:
      "Immediate, hands-on technical assistance directly at your office location.",
    body: "Get immediate, hands-on technical assistance directly at your office location. Our certified engineers resolve complex network, server, and workstation issues on-site to keep your team productive.",
    points: [
      {
        title: "Desktop Support",
        desc: "Direct troubleshooting for employee workstations and peripherals.",
      },
      {
        title: "Network & Server Care",
        desc: "On-premise fixes for routers, switches, and server racks.",
      },
      {
        title: "Scheduled Visits",
        desc: "Routine on-site IT checkups tailored to your operational hours.",
      },
    ],
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.12)",
    path: "/services#onsite",
  },
];

const STATS = [
  { value: "1,200+", label: "Business Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "SLA Compliance" },
  { value: "50+", label: "Cities Served" },
];

const WHY = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "We understand your business goals, challenges, and technology requirements.",
  },
  {
    icon: DraftingCompass,
    title: "Solution Design",
    desc: "Our experts recommended customized IT solutions that align with your objectives and budget.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "We implement your solution efficiently, ensuring minimal disruption to business operations.",
  },
  {
    icon: Headset,
    title: "Ongoing Support",
    desc: "Our dedicated support team provides proactive maintenance, technical assistance, and continuous optimization.",
  },
];

const INDUSTRIES = [
  { icon: Building2, label: "Corporate Offices" },
  { icon: Zap, label: "Startups" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: HeartPulse, label: "Healthcare Organisations" },
  { icon: Factory, label: "Manufacturing Companies" },
  { icon: Landmark, label: "Government Bodies" },
];

const PROCESS = [
  {
    icon: MessagesSquare,
    step: "01",
    title: "Requirement Discussion",
    desc: "We start by understanding your IT environment, device count, support expectations, and business constraints — no generic proposals.",
  },
  {
    icon: Search,
    step: "02",
    title: "Assessment & Planning",
    desc: "Our engineers assess your current setup and prepare a customised service plan with clear scope, timelines, and SLA commitments.",
  },
  {
    icon: Cog,
    step: "03",
    title: "Solution Implementation",
    desc: "We deploy hardware, configure systems, establish support coverage, or launch AMC — with minimal disruption to your operations.",
  },
  {
    icon: Headphones,
    step: "04",
    title: "Ongoing Support & Maintenance",
    desc: "Continuous remote helpdesk, scheduled preventive visits, and proactive monitoring keep your IT at peak performance.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Menon",
    role: "IT Manager, Nexus Pharma",
    rating: 5,
    text: "Zero unplanned downtime in 18 months since signing the Premium AMC. The on-site team responds within the hour and always comes prepared.",
  },
  {
    name: "Rahul Sharma",
    role: "Operations Head, Greenfield Infra",
    rating: 5,
    text: "They delivered 80 configured laptops across 2 sites in 7 days. Everything worked on Day 1. Collection at project close was equally smooth.",
  },
  {
    name: "Aditya Nair",
    role: "CTO, FinBridge Solutions",
    rating: 5,
    text: "Our infrastructure migration was handled with zero data loss. They communicate clearly, document everything, and take ownership.",
  },
];

/* ── Component ──────────────────────────────────────────────── */

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="bg-[#080E1C]">
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-150 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-36 w-full">
          <div className="max-w-3xl mx-auto text-center mb-2">
            {/* <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#93C5FD] text-xs font-semibold mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              Trusted by 1,200+ Businesses Across India
            </div> */}

            <h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Enterprise IT
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Solutions
              </span>{" "}
              for Modern Businesses
            </h1>

            <p className="text-lg text-[#6B84A8] leading-relaxed mb-10 max-w-xl mx-auto">
              Our mission is to simplify technology management by providing
              reliable products, expert technical services, and responsive
              customer support—allowing businesses to focus on growth while we
              take care of their IT ecosystem.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-14">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/40 text-sm"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919972669956"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/12 text-white font-semibold rounded-xl hover:bg-white/5 transition-all text-sm"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" /> Contact Our Experts
              </a>
            </div>

            {/* Service pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.label}
                    onClick={() => {
                      setActiveService(i);
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/8 bg-white/4 text-[#94A3B8] hover:text-white hover:border-white/20 transition-all text-xs font-medium"
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: s.color }} />{" "}
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stats row */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="text-center bg-white/3 border border-white/6 rounded-2xl py-5 px-4"
              >
                <div
                  className="text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {value}
                </div>
                <div className="text-xs text-[#4B6280] font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* ── ABOUT INTRO ────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 items-center">
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Why Businesses Choose ElyteSys
            </h2>
            <p className="text-[#6B84A8] leading-relaxed mb-4">
              Our commitment extends beyond supplying technology—we build
              long-term partnerships based on reliability, service excellence,
              and customer success.
            </p>
            <p className="text-[#6B84A8] leading-relaxed mb-8">We provide,</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Dedicated B2B IT Solutions",
                "Genuine Products from Trusted Brands",
                "Competitive Corporate Pricing",
                "Experienced Technical Professionals",
                "Fast Response & Reliable Support",
                "Flexible Rental & AMC Plans",
                "Pan-India Business Support",
                "Customer-First Service Approach",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-start gap-2.5 text-sm text-[#94A3B8]"
                >
                  <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />{" "}
                  {t}
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#2563EB] font-semibold text-sm hover:text-[#38BDF8] hover:gap-3 transition-all"
            >
              Full company profile <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* <div className="grid grid-cols-2 gap-4">
            <GlowCard className="p-6 col-span-2">
              <p className="text-[#6B84A8] text-sm leading-relaxed mb-4 italic">
                &ldquo;We are not a break-fix shop. We are a long-term IT
                partner — managing your devices, your network, and your support
                lifecycle so your team stays focused on the business.&rdquo;
              </p>
              <p className="text-sm font-semibold text-white">
                Vikram Rao — Founder &amp; CEO, TechServPro
              </p>
            </GlowCard>
            {[
              { v: "200+", l: "Certified Engineers" },
              { v: "40k+", l: "Devices Managed" },
              { v: "6-day", l: "Support Week" },
              { v: "4 hrs", l: "Avg. Response" },
            ].map(({ v, l }) => (
              <GlowCard key={l} className="p-5 text-center">
                <div
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: v }}
                />
                <div className="text-xs text-[#4B6280]">{l}</div>
              </GlowCard>
            ))}
          </div> */}
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section id="services" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>Our Expertise</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Everything Your Business IT Needs
            </h2>
            {/* <p className="text-[#6B84A8] max-w-xl mx-auto">
              Five core service areas — each run by specialist engineers with
              defined SLAs and a single point of contact.
            </p> */}
          </div>

          {/* Tab row */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.label}
                  onClick={() => setActiveService(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
                    activeService === i
                      ? "text-white border"
                      : "text-[#4B6280] hover:text-[#94A3B8] bg-white/3 border border-white/6"
                  }`}
                  style={
                    activeService === i
                      ? {
                          backgroundColor: `${s.color}18`,
                          borderColor: `${s.color}40`,
                          color: "white",
                        }
                      : {}
                  }
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: activeService === i ? s.color : undefined }}
                  />
                  {s.label}
                </button>
              );
            })}
          </div>

          {/* Active service detail */}
          {(() => {
            const s = SERVICES[activeService];
            const Icon = s.icon;
            return (
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <GlowCard className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${s.color}18`,
                        border: `1px solid ${s.color}30`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: s.color }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold tracking-wider uppercase mb-0.5"
                        style={{ color: s.color }}
                      >
                        {s.label}
                      </p>
                      <h3
                        className="text-xl font-bold text-white leading-tight"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {s.headline}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#6B84A8] leading-relaxed mb-7 text-sm">
                    {s.body}
                  </p>
                  <Link
                    href={s.path}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: s.color }}
                  >
                    Enquire About This Service{" "}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </GlowCard>

                <div className="space-y-4">
                  {s.points.map(({ title, desc }) => (
                    <GlowCard key={title} className="p-5 flex gap-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: `${s.color}15` }}
                      >
                        <CheckCircle
                          className="w-4 h-4"
                          style={{ color: s.color }}
                        />
                      </div>
                      <div>
                        <h4
                          className="font-semibold text-white mb-1 text-sm"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {title}
                        </h4>
                        <p className="text-sm text-[#6B84A8] leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Service card grid — all at a glance */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.label}
                  onClick={() => setActiveService(i)}
                  className={`group text-left rounded-2xl p-4 border transition-all duration-200 ${
                    activeService === i
                      ? "border-opacity-50"
                      : "bg-white/2 border-white/5 hover:border-white/12"
                  }`}
                  style={
                    activeService === i
                      ? {
                          backgroundColor: `${s.color}10`,
                          borderColor: `${s.color}40`,
                        }
                      : {}
                  }
                >
                  <Icon className="w-5 h-5 mb-3" style={{ color: s.color }} />
                  <p
                    className="text-sm font-semibold text-white mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {s.label}
                  </p>
                  <p className="text-xs text-[#4B6280] leading-snug">
                    {s.subline}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Our Process</SectionLabel>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Simple. Transparent. Efficient.
              </h2>
              {/* <p className="text-[#6B84A8] leading-relaxed mb-10">
                Every process, SLA, and communication standard we operate under
                is designed for organisations where IT downtime has a direct
                cost — not for individuals troubleshooting personal devices.
              </p> */}
              <div className="space-y-3">
                {WHY.map(({ icon: Icon, title, desc }) => (
                  <GlowCard key={title} className="p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-white mb-0.5 text-sm"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {title}
                      </h4>
                      <p className="text-sm text-[#6B84A8] leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>

            <div className="lg:pt-14 mt-11">
              <Image
                src="/images/rack_server.png"
                alt="IT engineer on-site"
                width={700}
                height={520}
                className="w-full h-120 object-cover rounded-2xl border border-white/6 mb-4"
              />
              {/* <div className="grid grid-cols-3 gap-3">
                {[
                  { v: "98%", l: "SLA Compliance" },
                  { v: "4 hrs", l: "Response SLA" },
                  { v: "15+", l: "Years Experience" },
                ].map(({ v, l }) => (
                  <GlowCard key={l} className="p-4 text-center">
                    <div
                      className="text-xl font-bold text-white mb-0.5"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {v}
                    </div>
                    <div className="text-[10px] text-[#4B6280] font-medium">
                      {l}
                    </div>
                  </GlowCard>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ─────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>Industries We Support</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-10"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              IT Support Across Every Sector
            </h2>
            <p className="text-[#6B84A8] text-xl max-w-lg mx-auto">
              Our engineers understand the operational pace, compliance
              requirements, and IT priorities of each sector.
            </p>
          </div>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {INDUSTRIES.map(({ icon: Icon, label }) => (
              <GlowCard key={label} className="p-5 text-center cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#2563EB]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#2563EB]" />
                </div>
                <p className="text-xs font-semibold text-[#94A3B8] leading-tight">
                  {label}
                </p>
              </GlowCard>
            ))}
          </div> */}

          {/* Aggregate numbers */}
          {/* <div className="bg-[#0D1528] border border-white/[0.07] rounded-2xl p-6 grid sm:grid-cols-3 gap-6 text-center">
            {[
              {
                value: "1,200+",
                label: "Organisations Served",
                sub: "Across all sectors",
              },
              {
                value: "50+",
                label: "Cities & Towns",
                sub: "Pan-India coverage",
              },
              {
                value: "40,000+",
                label: "Devices Under Management",
                sub: "Active AMC & support",
              },
            ].map(({ value, label, sub }) => (
              <div key={label}>
                <div
                  className="text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {value}
                </div>
                <div className="font-semibold text-[#94A3B8] text-sm">
                  {label}
                </div>
                <div className="text-xs text-[#4B6280]">{sub}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* ── SERVICE PROCESS ────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>How We Work</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Service Process
            </h2>
            <p className="text-[#6B84A8] max-w-lg mx-auto">
              Transparent and structured — so you always know what is happening
              and what comes next.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map(({ icon: Icon, step, title, desc }, i) => (
              <GlowCard key={step} className="p-6 relative overflow-hidden">
                {/* step number watermark */}
                <span
                  className="absolute -top-2 -right-1 text-7xl font-black leading-none select-none pointer-events-none"
                  style={{
                    color: "rgba(37,99,235,0.07)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {step}
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="text-[10px] font-bold text-[#2563EB] tracking-widest uppercase mb-2">
                  Step {step}
                </div>
                <h3
                  className="font-bold text-white mb-2 text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#6B84A8] leading-relaxed">{desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                    <ChevronRight className="w-5 h-5 text-[#2563EB]/30" />
                  </div>
                )}
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      {/* <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>Client Testimonials</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ name, role, rating, text }) => (
              <GlowCard key={name} className="p-6 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#6B84A8] leading-relaxed flex-1 mb-5">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                  <div className="w-9 h-9 rounded-full bg-[#2563EB]/20 flex items-center justify-center text-sm font-bold text-[#2563EB]">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{name}</p>
                    <p className="text-xs text-[#4B6280]">{role}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 text-[#2563EB] font-semibold text-sm hover:text-[#38BDF8] hover:gap-3 transition-all"
            >
              View case studies &amp; client projects{" "}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section> */}

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>Contact Us</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-10"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Let&quot;s Build Smarter IT Solutions Together
            </h2>
            <p className="text-[#6B84A8] text-lg mx-auto">
              Whether you&quot;re looking for enterprise IT procurement, laptop
              sales, infrastructure solutions, AMC services, or technical
              support, our team is ready to help. Get in touch with ElyteSys
              Pvt. Ltd. for expert guidance and customized IT solutions tailored
              to your business needs.
              <br />
              We are committed to providing prompt responses, professional
              service, and reliable technology solutions that help your business
              succeed.
            </p>
          </div>

          {/* <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-25">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  lines: ["+91 99726 69956"],
                  href: "tel:+919972669956",
                  color: "#2563EB",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  lines: ["Chat instantly on WhatsApp", "Mon–Sat, 9am–8pm"],
                  href: "https://wa.me/919972669956",
                  color: "#25D366",
                },
                {
                  icon: Mail,
                  label: "Email",
                  lines: ["info@elytesys.com", "support@elytesys.com"],
                  href: "mailto:info@elytesys.com",
                  color: "#38BDF8",
                },
                {
                  icon: MapPin,
                  label: "Head Office",
                  lines: [
                    "No:56, Maduraisamy Madam Street",
                    "Perambur, Chennai-600011",
                  ],
                  href: "#",
                  color: "#F59E0B",
                },
              ].map(({ icon: Icon, label, lines, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <GlowCard className="p-4 flex items-start gap-4 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${color}15`,
                        border: `1px solid ${color}25`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#4B6280] mb-1 uppercase font-semibold tracking-wider">
                        {label}
                      </p>
                      {lines.map((l) => (
                        <p
                          key={l}
                          className="text-sm font-medium text-[#94A3B8]"
                        >
                          {l}
                        </p>
                      ))}
                    </div>
                  </GlowCard>
                </a>
              ))}
            </div>

            <div className="lg:col-span-2">
              <GlowCard className="p-7">
                <h3
                  className="text-lg font-bold text-white mb-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Send an Enquiry
                </h3>
                <HomeContactForm />
              </GlowCard>
            </div>
          </div> */}
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────────── */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="relative rounded-2xl overflow-hidden p-10 text-center"
            style={{
              background: "linear-gradient(135deg, #0F1F45 0%, #0D1528 100%)",
              border: "1px solid rgba(37,99,235,0.25)",
            }}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(#2563EB 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative">
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Ready to Discuss Your IT Requirements?
              </h2>
              <p className="text-[#6B84A8] mb-8 text-lg">
                Whether you need IT support, hardware procurement, or managed
                services, we&quot;re here to help.
                <br />
                Let&quot;s build a technology solution that keeps your business
                running efficiently.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="mailto:info@elytesys.com"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/40 text-sm"
                >
                  <Mail className="w-4 h-4" /> Send Email
                </Link>
                <a
                  href="https://wa.me/919972669956"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/12 text-white font-semibold rounded-xl hover:bg-white/5 transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" /> Chat on
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Inline contact form ────────────────────────────────────── */

function HomeContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <CheckCircle className="w-10 h-10 text-[#10B981] mb-3" />
        <p className="font-bold text-white mb-1">Enquiry Received</p>
        <p className="text-sm text-[#6B84A8]">
          We will contact <strong className="text-white">{form.email}</strong>{" "}
          within 2 business hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 text-sm text-[#2563EB] hover:text-[#38BDF8] transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-2.5 text-sm border border-white/[0.08] rounded-xl bg-[#111D35] text-[#E2E8F0] placeholder:text-[#3A4E68] focus:outline-none focus:border-[#2563EB]/60 transition-colors";
  const labelCls = "text-xs font-medium text-[#4B6280] mb-1.5 block";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          {
            name: "name",
            label: "Full Name *",
            placeholder: "Enter your name",
            type: "text",
            req: true,
          },
          {
            name: "company",
            label: "Company Name *",
            placeholder: "Enter your company",
            type: "text",
            req: true,
          },
          {
            name: "phone",
            label: "Phone Number *",
            placeholder: "+91",
            type: "tel",
            req: true,
          },
          {
            name: "email",
            label: "Business Email *",
            placeholder: "Enter your email",
            type: "email",
            req: true,
          },
        ].map(({ name, label, placeholder, type, req }) => (
          <div key={name}>
            <label className={labelCls}>{label}</label>
            <input
              name={name}
              type={type}
              required={req}
              value={(form as Record<string, string>)[name]}
              onChange={handle}
              placeholder={placeholder}
              className={inputCls}
            />
          </div>
        ))}
      </div>
      <div>
        <label className={labelCls}>Service Required</label>
        <select
          name="service"
          value={form.service}
          onChange={handle}
          className={inputCls}
        >
          <option value="">Select a service…</option>
          <option>IT Solutions &amp; Sales</option>
          <option>Laptop Service &amp; Repair</option>
          <option>AMC Support</option>
          <option>Hardware Rentals</option>
          <option>On-Site Technical Support</option>
          <option>Multiple / Not sure yet</option>
        </select>
      </div>
      <div>
        <label className={labelCls}>Brief Requirement</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handle}
          rows={3}
          placeholder="Describe your requirement — device count, location, timeline, or specific needs…"
          className={`${inputCls} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-900/30"
      >
        Send Enquiry <ArrowRight className="w-4 h-4" />
      </button>
      <p className="text-xs text-[#3A4E68] text-center">
        We respond within 2 business hours. Your information is never shared.
      </p>
    </form>
  );
}
