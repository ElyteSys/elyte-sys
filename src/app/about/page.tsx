import { ArrowRight, Award, Eye, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const STATS = [
  // { value: "2026", label: "Founded" },
  // { value: "1,200+", label: "Business Clients" },
  // { value: "10+", label: "Years Experience" },
  // { value: "200+", label: "Certified Engineers" },
  // { value: "50+", label: "Cities Served" },
  // { value: "98%", label: "SLA Compliance" },
] as never[];

const TEAM = [
  {
    name: "Vikram Rao",
    role: "CEO & Founder",
    exp: "22 years in Enterprise IT",
    initial: "V",
  },
  {
    name: "Meena Krishnan",
    role: "Head of Operations",
    exp: "15 years in IT Service Management",
    initial: "M",
  },
  {
    name: "Arjun Desai",
    role: "Chief Technology Officer",
    exp: "18 years in IT Infrastructure",
    initial: "A",
  },
  {
    name: "Kavitha Nair",
    role: "Head of Client Success",
    exp: "12 years in B2B Account Management",
    initial: "K",
  },
];

const CERTS = [
  "Integrity",
  "Customer Commitment",
  "Innovation",
  "Reliability",
  "Quality Service",
  "Continuous Improvement",
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0057D9] to-[#003D9D] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-blue-200 text-sm font-medium mb-3 block">
            About Us
          </span>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            India&apos;s Trusted B2B
            <br />
            IT Partner
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Your Trusted B2B IT Solutions Partner At ElyteSys Pvt. Ltd., we help
            businesses build, maintain, and manage reliable IT infrastructure
            with high-quality products and professional support. Founded in
            2026, ElyteSys was established with a vision to simplify enterprise
            IT procurement and provide dependable technology solutions for
            businesses of all sizes. Although we are a growing company, our team
            brings hands-on industry expertise in laptop sales, IT services, and
            enterprise support. We believe every business deserves fast,
            transparent, and reliable IT solutions backed by exceptional
            customer service.
          </p>
        </div>
      </section>

      {/* Stats */}
      {STATS.length > 0 ? (
        <section className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-3xl font-bold text-[#0057D9] mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {value}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Company Overview */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          {/* <span className="text-xs font-semibold tracking-widest text-[#0057D9] uppercase mb-3 block">
            Our Story
          </span> */}
          <h2
            className="text-3xl font-bold mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            What We Do
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We specialize in delivering end-to-end IT solutions for corporate
              and business clients, including: Enterprise Laptop & Desktop Sales
              Apple MacBook Sales & ServicesBulk IT Procurement Laptop & Desktop
              Repair Services Annual Maintenance Contracts (AMC) Rental Laptops
              for Businesses On-Site IT Support IT Infrastructure Consulting
              Remote Technical Support Preventive Health Check & Maintenance
            </p>
            {/* <p>
              Starting with laptop repair and AMC services for small offices in
              Bengaluru, we rapidly expanded as word spread about our fast
              response times and transparent pricing. By 2015, we had offices in
              Mumbai and Hyderabad.
            </p> */}
            {/* <p>
              Today, our team of 200+ certified engineers supports businesses
              from government organizations and manufacturing plants to
              healthcare networks and high-growth startups — all with the same
              commitment to quality that defined us from day one.
            </p> */}
          </div>
          {/* <div className="mt-8 space-y-3">
            {[
              "OEM-authorized service for Dell, HP, Lenovo & Apple",
              "ISO 9001:2015 certified quality management",
              "Dedicated B2B account management for every client",
              "Pan-India field engineer network with 4-hour SLA",
            ].map((t) => (
              <div
                key={t}
                className="flex items-start gap-2.5 text-sm text-[#374151]"
              >
                <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                {t}
              </div>
            ))}
          </div> */}
        </div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1629837093109-11325d6e7afd?w=700&h=560&fit=crop&auto=format"
            alt="IT technician at work"
            width={700}
            height={560}
            className="rounded-2xl w-full object-cover h-105 shadow-xl"
          />
          {/* <div className="absolute -bottom-5 -left-5 bg-white border border-border rounded-2xl p-5 shadow-lg">
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-[#111827]">
              4.9 / 5 Google Rating
            </p>
            <p className="text-xs text-muted-foreground">
              From 800+ verified reviews
            </p>
          </div> */}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-border rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-[#0057D9]" />
            </div>
            <h3
              className="text-xl font-bold text-[#111827] mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become one of India&apos;s most trusted B2B IT partners by
              delivering reliable technology solutions, exceptional service, and
              long-term value to every client.
            </p>
          </div>
          <div className="bg-[#0057D9] rounded-2xl p-8 text-white">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Vision
            </h3>
            <p className="text-blue-100 leading-relaxed">
              To empower businesses with innovative, affordable, and dependable
              IT solutions while building lasting relationships based on trust,
              quality, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#0057D9] uppercase mb-2 block">
            Leadership
          </span>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Meet the Team
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map(({ name, role, exp, initial }) => (
            <div
              key={name}
              className="bg-white border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0057D9]/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#0057D9]">
                {initial}
              </div>
              <h3
                className="font-semibold text-[#111827] mb-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {name}
              </h3>
              <p className="text-sm text-[#0057D9] font-medium mb-2">{role}</p>
              <p className="text-xs text-muted-foreground">{exp}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Certifications */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            {/* <span className="text-xs font-semibold tracking-widest text-[#0057D9] uppercase mb-2 block">
              Credentials
            </span> */}
            <h2
              className="text-3xl font-bold text-[#111827]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTS.map((c) => (
              <div
                key={c}
                className="bg-white border border-border rounded-xl px-5 py-4 flex items-center gap-3"
              >
                <Award className="w-5 h-5 text-[#10B981] shrink-0" />
                <span className="text-sm font-medium text-[#374151]">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111827] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Partner with Us?
          </h2>
          <p className="text-gray-400 mb-7">
            Serving Businesses Across India Whether you&apos;re a startup, SME,
            educational institution, or enterprise, ElyteSys is committed to
            delivering the right technology solutions to help your business grow
            efficiently.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0057D9] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
