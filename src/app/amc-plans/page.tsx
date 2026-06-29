"use client";

import {
  ArrowRight,
  CheckCircle,
  Clock,
  Phone,
  Shield,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PLANS = [
  {
    name: "Basic",
    price: "₹499",
    unit: "/ device / month",
    color: "#64748B",
    bg: "bg-slate-50",
    border: "border-slate-200",
    popular: false,
    features: [
      { label: "Preventive Visits per Year", value: "2" },
      { label: "Remote Support", value: true },
      { label: "On-Site Support", value: true },
      { label: "Priority Response", value: false },
      { label: "Dedicated Engineer", value: false },
      { label: "Asset Management", value: false },
      { label: "Quarterly Reports", value: false },
      { label: "Response SLA", value: "48 hours" },
    ],
    best: "Small offices with stable IT environment",
  },
  {
    name: "Standard",
    price: "₹799",
    unit: "/ device / month",
    color: "#0057D9",
    bg: "bg-blue-50",
    border: "border-blue-300",
    popular: true,
    features: [
      { label: "Preventive Visits per Year", value: "4" },
      { label: "Remote Support", value: true },
      { label: "On-Site Support", value: true },
      { label: "Priority Response", value: true },
      { label: "Dedicated Engineer", value: false },
      { label: "Asset Management", value: true },
      { label: "Quarterly Reports", value: true },
      { label: "Response SLA", value: "8 hours" },
    ],
    best: "Growing teams with active IT requirements",
  },
  {
    name: "Premium",
    price: "₹1,299",
    unit: "/ device / month",
    color: "#7C3AED",
    bg: "bg-purple-50",
    border: "border-purple-300",
    popular: false,
    features: [
      { label: "Preventive Visits per Year", value: "12" },
      { label: "Remote Support", value: true },
      { label: "On-Site Support", value: true },
      { label: "Priority Response", value: true },
      { label: "Dedicated Engineer", value: true },
      { label: "Asset Management", value: true },
      { label: "Quarterly Reports", value: true },
      { label: "Response SLA", value: "4 hours" },
    ],
    best: "Enterprises with mission-critical uptime needs",
  },
];

const ADDONS = [
  "Data backup & recovery",
  "CCTV & physical security audit",
  "IT policy documentation",
  "Cybersecurity training for staff",
  "Software license management",
  "Cloud backup integration",
];

export default function AMCPlans() {
  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0057D9] to-[#003D9D] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-200 text-sm font-medium mb-3 block">
            AMC Plans
          </span>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Annual Maintenance Contract Plans
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Predictable IT costs. Guaranteed response times. Zero surprises.
          </p>
        </div>
      </section>

      {/* Billing toggle */}
      <div className="py-10 flex justify-center">
        <div className="inline-flex items-center bg-[#F1F5F9] rounded-xl p-1 border border-border">
          <button
            onClick={() => setPeriod("monthly")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${period === "monthly" ? "bg-white text-[#0057D9] shadow-sm" : "text-muted-foreground"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setPeriod("annual")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${period === "annual" ? "bg-white text-[#0057D9] shadow-sm" : "text-muted-foreground"}`}
          >
            Annual <span className="text-[#10B981] text-xs ml-1">Save 15%</span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <section className="pb-20 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => {
            const monthlyNum = parseInt(plan.price.replace(/[^0-9]/g, ""));
            const displayPrice =
              period === "annual"
                ? `₹${Math.round(monthlyNum * 0.85).toLocaleString("en-IN")}`
                : plan.price;

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 ${plan.border} overflow-hidden ${plan.popular ? "shadow-xl scale-105" : "shadow-md"}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 bg-[#0057D9] text-white text-xs font-semibold text-center py-1.5 tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                <div
                  className={`${plan.bg} p-6 ${plan.popular ? "pt-10" : ""}`}
                >
                  <h3
                    className="text-xl font-bold text-[#111827] mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {plan.best}
                  </p>
                  <div className="flex items-end gap-1">
                    <span
                      className="text-4xl font-bold"
                      style={{
                        color: plan.color,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {displayPrice}
                    </span>
                    <span className="text-sm text-muted-foreground pb-1">
                      {plan.unit}
                    </span>
                  </div>
                  {period === "annual" && (
                    <p className="text-xs text-[#10B981] mt-1 font-medium">
                      15% discount applied
                    </p>
                  )}
                </div>

                <div className="bg-white p-6 space-y-3">
                  {plan.features.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-[#374151]">{label}</span>
                      {typeof value === "boolean" ? (
                        value ? (
                          <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        ) : (
                          <X className="w-4 h-4 text-[#CBD5E1]" />
                        )
                      ) : (
                        <span className="font-semibold text-[#111827]">
                          {value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-6 pt-0 bg-white">
                  <Link
                    href="/contact"
                    className="block w-full py-3 text-center text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
                    style={{ backgroundColor: plan.color }}
                  >
                    Request {plan.name} AMC
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Minimum 5 devices. Prices exclusive of GST. Custom enterprise pricing
          available for 50+ devices.
        </p>
      </section>

      {/* What's included */}
      <section className="py-16 bg-[#F1F5F9]">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-2xl font-bold text-[#111827] mb-8 text-center"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            All Plans Include
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: Shield,
                title: "Genuine OEM Parts",
                desc: "Only manufacturer-approved components — every repair carries a parts warranty.",
              },
              {
                icon: Clock,
                title: "Defined SLA Commitments",
                desc: "Response and resolution times are contractually guaranteed — not just promised.",
              },
              {
                icon: Users,
                title: "Dedicated Account Manager",
                desc: "A single point of contact who knows your infrastructure and escalation path.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-border rounded-2xl p-5 flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#0057D9]" />
                </div>
                <div>
                  <h4
                    className="font-semibold text-[#111827] mb-1 text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Optional Add-Ons
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ADDONS.map((a) => (
            <div
              key={a}
              className="flex items-center gap-2.5 bg-white border border-border rounded-xl px-4 py-3 text-sm text-[#374151]"
            >
              <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" /> {a}
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
            Need a Custom AMC Proposal?
          </h2>
          <p className="text-gray-400 mb-7">
            Tell us your fleet size and we will build a tailored AMC plan with
            custom SLAs and pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0057D9] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Request AMC Proposal <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919972669956"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl hover:border-gray-400 transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
