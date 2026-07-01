import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SECTIONS = [
  {
    id: "sales",
    emoji: "💻",
    title: "Laptop Sales",
    subtitle: "New, Refurbished & Bulk Corporate Orders",
    color: "#0057D9",
    bg: "bg-blue-50",
    desc: "We supply laptops from all major brands — configured, deployed, and supported end-to-end for your business.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700&h=440&fit=crop&auto=format",
    items: [
      "New Laptops — Dell, HP, Lenovo, Apple, ASUS",
      "Refurbished Grade-A Laptops with warranty",
      "Bulk Corporate Orders with volume pricing",
      "Workstations & high-performance configurations",
      "Pre-configured software & OS deployment",
      "Asset tagging & inventory management",
    ],
  },
  {
    id: "repair",
    emoji: "🔧",
    title: "Laptop Service & Repair",
    subtitle: "Hardware Repairs by Certified Technicians",
    color: "#7C3AED",
    bg: "bg-purple-50",
    desc: "Our certified technicians handle everything from screen cracks to motherboard-level repairs, with genuine OEM parts.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=440&fit=crop&auto=format",
    items: [
      "Hardware Repair — keyboards, ports, batteries",
      "Motherboard-level repair & component replacement",
      "Screen & display replacement (all models)",
      "Data Recovery from failed drives",
      "Virus removal & OS reinstallation",
      "Preventive cleaning & maintenance",
    ],
  },
  {
    id: "amc",
    emoji: "📋",
    title: "AMC Support",
    subtitle: "Annual Maintenance Contracts with SLA Guarantees",
    color: "#10B981",
    bg: "bg-green-50",
    desc: "Comprehensive AMC plans that keep your entire IT fleet running — with defined response times and proactive care.",
    image:
      "https://images.unsplash.com/photo-1629837093109-11325d6e7afd?w=700&h=440&fit=crop&auto=format",
    items: [
      "Preventive Maintenance visits (quarterly / monthly)",
      "Remote Support via phone, email & remote desktop",
      "On-Site Support with guaranteed response SLA",
      "Asset Management & lifecycle tracking",
      "Priority escalation for critical systems",
      "Quarterly performance & health reports",
    ],
  },
  {
    id: "it",
    emoji: "🏢",
    title: "B2B IT Solutions",
    subtitle: "End-to-End Infrastructure for Growing Businesses",
    color: "#F59E0B",
    bg: "bg-amber-50",
    desc: "From network design to cloud migration — we plan, deploy, and manage your full IT infrastructure.",
    image:
      "https://images.unsplash.com/photo-1680992046626-418f7e910589?w=700&h=440&fit=crop&auto=format",
    items: [
      "Network Setup — LAN, WAN, Wi-Fi, VPN",
      "Server Management — on-premise & cloud",
      "Cloud Solutions — AWS, Azure, Google Cloud",
      "Cybersecurity — firewalls, endpoint protection, audits",
      "IT Infrastructure Consulting & roadmapping",
      "Helpdesk & IT support outsourcing",
    ],
  },
  {
    id: "onsite",
    emoji: "🚗",
    title: "On-Site Support",
    subtitle: "Resident Engineers & Emergency Dispatch",
    color: "#0EA5E9",
    bg: "bg-sky-50",
    desc: "Our field engineers come to you — for planned visits, resident deployments, or same-day emergency callouts.",
    image:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=700&h=440&fit=crop&auto=format",
    items: [
      "Emergency Support — same-day dispatch",
      "Resident Engineers at your office (full-time / part-time)",
      "Multi-Location Support across branches",
      "Scheduled preventive visits",
      "Hardware installation & configuration",
      "End-user training & onboarding",
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0057D9] to-[#003D9D] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-200 text-sm font-medium mb-3 block">
            Our Services
          </span>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Complete IT Services for Businesses
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            End-to-End Technology Solutions for Modern Enterprises
            At ElyteSys Pvt. Ltd., <p>we provide reliable IT products and professional services that help businesses operate efficiently and securely. From enterprise procurement to technical support, we are your trusted technology partner for all your business IT needs.</p>
            
          </p>
        </div>
      </section>

      {/* Quick links */}
      <div className="sticky top-16 z-30 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-[#374151] hover:text-[#0057D9] hover:bg-blue-50 transition-colors whitespace-nowrap shrink-0"
            >
              <span>{s.emoji}</span> {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Service sections */}
      {SECTIONS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 ${i % 2 === 1 ? "bg-[#F8FAFC]" : "bg-white"}`}
        >
          <div
            className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${s.bg} text-sm font-semibold mb-4`}
                style={{ color: s.color }}
              >
                <span>{s.emoji}</span> {s.title}
              </div>
              <h2
                className="text-3xl font-bold text-[#111827] mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {s.subtitle}
              </h2>
              <p className="text-muted-foreground mb-7 leading-relaxed">
                {s.desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {s.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#374151]"
                  >
                    <CheckCircle
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: s.color }}
                    />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                style={{ backgroundColor: s.color }}
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <Image
                src={s.image}
                alt={s.title}
                width={700}
                height={440}
                className="rounded-2xl w-full h-90 object-cover shadow-xl border border-border"
              />
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-[#111827] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Upgrade Your Business IT?
          </h2>
          <p className="text-gray-400 mb-7">
Whether you're looking for enterprise laptop procurement, AMC support, rental laptops, IT infrastructure solutions, or professional repair services, ElyteSys Pvt. Ltd. is here to help.
Contact us today for a free consultation and customized business IT solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0057D9] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Book Free IT Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
