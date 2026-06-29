import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle,
  Phone,
  Settings,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BRANDS = [
  { name: "Dell", models: "Latitude 5520, Inspiron 15, Vostro 14" },
  { name: "HP", models: "EliteBook 840, ProBook 450, Pavilion 15" },
  { name: "Lenovo", models: "ThinkPad E14, IdeaPad 3, ThinkBook 14" },
  { name: "Apple", models: "MacBook Air M2, MacBook Pro 14" },
  { name: "ASUS", models: "ExpertBook B1, VivoBook 15" },
  { name: "Acer", models: "Aspire 5, Swift 3, TravelMate" },
];

const CONFIGS = [
  {
    tier: "Essential",
    specs: "Intel i5 / Ryzen 5 · 8GB RAM · 256GB SSD · Win 11 Pro",
    price: "₹800",
    period: "/day",
    use: "Basic office tasks, presentations, browsing",
  },
  {
    tier: "Business",
    specs: "Intel i7 / Ryzen 7 · 16GB RAM · 512GB SSD · Win 11 Pro",
    price: "₹1,200",
    period: "/day",
    use: "Development, design, data analytics",
  },
  {
    tier: "Power",
    specs: "Intel i9 / Ryzen 9 · 32GB RAM · 1TB SSD · Dedicated GPU",
    price: "₹2,000",
    period: "/day",
    use: "Video editing, CAD, machine learning",
  },
  {
    tier: "Mac",
    specs: "MacBook Air M2 · 16GB · 512GB · macOS Ventura",
    price: "₹1,500",
    period: "/day",
    use: "Creative professionals, iOS development",
  },
];

const DURATIONS = [
  {
    label: "Daily Rental",
    desc: "Minimum 1 day — ideal for events, interviews, demos",
    discount: "",
  },
  {
    label: "Weekly Rental",
    desc: "7–29 days — training programs, short projects",
    discount: "10% off daily rate",
  },
  {
    label: "Monthly Rental",
    desc: "30–364 days — project teams, seasonal workforce",
    discount: "25% off daily rate",
  },
  {
    label: "Annual Rental",
    desc: "12 months+ — cost-effective alternative to purchase",
    discount: "40% off daily rate",
  },
];

const USE_CASES = [
  {
    icon: Building2,
    title: "Corporate Events",
    desc: "Conferences, board meetings, product launches — configured and branded to your needs.",
  },
  {
    icon: Settings,
    title: "Training Programs",
    desc: "Pre-loaded with your LMS or training software, ready to go on Day 1.",
  },
  {
    icon: Calendar,
    title: "Project-Based Teams",
    desc: "Scale up for a quarter, scale back down — pay only for what you use.",
  },
  {
    icon: Truck,
    title: "Emergency Replacements",
    desc: "Same-day delivery when a critical device fails and can&apos;t wait for repair.",
  },
];

export default function Rentals() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0057D9] to-[#003D9D] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-200 text-sm font-medium mb-3 block">
              Laptop Rentals
            </span>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Rent Laptops for Your Business — Any Duration
            </h1>
            <p className="text-red-100 text-lg mb-8">
              Flexible, configured, and delivered to your door. All brands, all
              configurations, all of India.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#EF4444] font-semibold rounded-xl hover:bg-red-50 transition-colors shadow-lg"
              >
                Get Rental Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919972669956"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1602016736566-7ed6a58894bd?w=700&h=460&fit=crop&auto=format"
              alt="Laptops ready for rental"
              width={700}
              height={460}
              className="rounded-2xl w-full h-90 object-cover border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* Why rent */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Why Rent Instead of Buy?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Zero Capital Expenditure",
              desc: "Preserve your cash — rental is an operating expense with immediate tax benefit.",
            },
            {
              title: "Always Latest Hardware",
              desc: "Upgrade configs between projects — no stuck-with-old-hardware problem.",
            },
            {
              title: "Scale Instantly",
              desc: "Need 50 more laptops for Q4? Done in 24 hours — no procurement delay.",
            },
            {
              title: "IT Managed for You",
              desc: "We configure, deliver, collect, and wipe. Your IT team does nothing.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white border border-border rounded-2xl p-5 hover:shadow-md transition-shadow"
            >
              <CheckCircle className="w-6 h-6 text-[#10B981] mb-3" />
              <h3
                className="font-semibold text-[#111827] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Configurations */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#111827] mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Configuration Options
            </h2>
            <p className="text-muted-foreground">
              All laptops come with Windows 11 Pro pre-activated. Custom
              software loading available.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONFIGS.map(({ tier, specs, price, period, use }) => (
              <div
                key={tier}
                className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#EF4444] p-4">
                  <h3
                    className="font-bold text-white text-lg"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {tier}
                  </h3>
                  <div className="flex items-end gap-1 mt-1">
                    <span className="text-2xl font-bold text-white">
                      {price}
                    </span>
                    <span className="text-red-100 text-sm pb-0.5">
                      {period}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 font-medium">
                    {specs}
                  </p>
                  <p className="text-xs text-[#374151]">
                    <span className="font-medium">Best for:</span> {use}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Volume discounts available for 10+ units. Custom configurations on
            request.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Available Brands
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BRANDS.map(({ name, models }) => (
            <div
              key={name}
              className="bg-white border border-border rounded-xl p-4 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-sm font-bold text-[#0057D9] shrink-0">
                {name[0]}
              </div>
              <div>
                <div className="font-semibold text-[#111827] text-sm mb-0.5">
                  {name}
                </div>
                <div className="text-xs text-muted-foreground">{models}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Duration pricing */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-bold text-[#111827] mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Rental Duration &amp; Pricing
            </h2>
          </div>
          <div className="space-y-3">
            {DURATIONS.map(({ label, desc, discount }) => (
              <div
                key={label}
                className="bg-white border border-border rounded-xl p-5 flex items-center justify-between gap-4"
              >
                <div>
                  <h3
                    className="font-semibold text-[#111827]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {label}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>
                </div>
                {discount && (
                  <span className="text-sm font-semibold text-[#10B981] bg-green-50 border border-green-200 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                    {discount}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Common Use Cases
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {USE_CASES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-border rounded-2xl p-5 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-5 h-5 text-[#EF4444]" />
              </div>
              <h3
                className="font-semibold text-[#111827] mb-2 text-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111827] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Get Your Rental Quote in 2 Hours
          </h2>
          <p className="text-gray-400 mb-7">
            Tell us quantity, duration, and spec — we will send a detailed
            proposal with delivery timeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#EF4444] text-white font-semibold rounded-xl hover:bg-red-600 transition-colors"
          >
            Get Rental Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
