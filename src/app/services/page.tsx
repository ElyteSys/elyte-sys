import {
  ArrowRight,
  Building2,
  CheckCircle,
  Clipboard,
  Laptop,
  MapPin,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SECTIONS = [
  {
    id: "sales",
    emoji: <Laptop />,
    title: "Laptop Sales",
    subtitle: "Enterprise Laptop & Desktop Sales",
    color: "#0057D9",
    bg: "bg-blue-50",
    desc: "Equip your business with genuine laptops, desktops, workstations, and accessories from leading brands such as Dell, HP, Lenovo, Apple, ASUS, Acer, and more. Whether you need a single device or a bulk corporate order, we deliver quality products at competitive prices.",
    image:
      "/images/desktop_laptop.png",
    items: [
      "Corporate Laptop Sales",
      "Bulk IT Procurement",
      "New & Refurbished Systems",
      "Apple MacBooks & Windows Laptops",
      "Genuine Accessories",
      "Custom Business Configurations",
    ],
  },
  {
    id: "repair",
    emoji: <Wrench />,
    title: "Laptop Service & Repair",
    subtitle: "Hardware Repairs by Certified Technicians",
    color: "#7C3AED",
    bg: "bg-purple-50",
    desc: "Our certified technicians handle everything from screen cracks to motherboard-level repairs, with genuine OEM parts.",
    image:
      "/images/chip_level_service.png",
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
    emoji: <Clipboard />,
    title: "AMC Support",
    subtitle: "Annual Maintenance Contracts (AMC)",
    color: "#10B981",
    bg: "bg-green-50",
    desc: "Reduce unexpected breakdowns with our comprehensive AMC solutions. We offer preventive maintenance, priority support, and regular health checks to ensure your IT infrastructure remains reliable throughout the year.",
    image:
     "/images/maintanence.png",
    items: [
      "AMC Includes",
      "Preventive Maintenance",
      "Routine Health Checks",
      "Priority Technical Support",
      "On-Site Engineer Visits",
      "Software Maintenance",
      "Asset Management Assistance",
    ],
  },
  {
    id: "it",
    emoji: <Building2 />,
    title: "B2B IT Solutions",
    subtitle: "End-to-End Infrastructure for Growing Businesses",
    color: "#F59E0B",
    bg: "bg-amber-50",
    desc: "Build a secure, scalable, and efficient IT environment with our infrastructure services designed for startups, SMEs, and enterprise organizations.",
    image:
      "/images/networking.png",
    items: [
      "Office IT Setup",
      "Network Installation",
      "Wi-Fi Deployment",
      "Server Configuration",
      "Data Storage Solutions",
      "Security & Endpoint Protection",
      "IT Consulting & Planning",
    ],
  },
  {
    id: "rental",
    emoji: <MapPin />,
    title: "Rental",
    subtitle: "Rental Laptops for Businesses",
    color: "#0EA5E9",
    bg: "bg-sky-50",
    desc: "Need laptops for a short-term project, training session, or temporary workforce? We provide flexible rental solutions with fully configured business-ready devices.",
    image:
      "/images/laptop-gallery.png",
    items: [
      "Daily, Weekly & Monthly Plans",
      "Bulk Laptop Rentals",
      "Corporate Events",
      "Employee Onboarding",
      "Training Programs",
      "Project-Based Requirements",
    ],
  },
  {
    id: "onsite",
    emoji: <MapPin />,
    title: "On-Site Support",
    subtitle: "On-Site IT Support",
    color: "#0EA5E9",
    bg: "bg-sky-50",
    desc: "Our experienced engineers provide prompt on-site assistance to resolve technical issues quickly and efficiently.",
    image:
      "/images/it_support.png",
    items: [
      "Support Services",
      "Hardware Troubleshooting",
      "Software Installation",
      "Network Support",
      "Printer Installation",
      "Office IT Maintenance",
      "Emergency Support",
    ],
  },
  {
    id: "enterprise",
    emoji: <MapPin />,
    title: "Enterprise",
    subtitle: "Enterprise IT Procurement",
    color: "#0EA5E9",
    bg: "bg-sky-50",
    desc: "Simplify your IT purchasing process with our procurement services. We help businesses source quality IT equipment at competitive prices with reliable after-sales support.",
    image:
      "/images/devices.png",
    items: [
      "Laptops & Desktops",
      "Monitors",
      "Printers",
      "Networking Equipment",
      "Storage Devices",
      "IT Accessories",
      "Office Electronics",
    ],
  },
  {
    id: "remote-support",
    emoji: <MapPin />,
    title: "Remote Support",
    subtitle: "Remote Technical Support",
    color: "#0EA5E9",
    bg: "bg-sky-50",
    desc: "Receive expert assistance without waiting for an on-site visit. Our remote support team quickly diagnoses and resolves software and system issues.",
    image:
      "/images/remote_support.png",
    items: [
      "Software Installation",
      "Windows Configuration",
      "Driver Installation",
      "Email Setup",
      "Security Updates",
      "Performance Optimization",
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#2563eb] text-white py-20">
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
            End-to-End Technology Solutions for Modern Enterprises At ElyteSys
            Pvt. Ltd.,
            <br />
            we provide reliable IT products and professional services that help
            businesses operate efficiently and securely. From enterprise
            procurement to technical support, we are your trusted technology
            partner for all your business IT needs.
          </p>
        </div>
      </section>

      {/* Quick links */}
      {/* <div className="sticky top-16 z-30 bg-white border-b border-border shadow-sm">
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
      </div> */}

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
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4`}
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
            Whether you&apos;re looking for enterprise laptop procurement, AMC
            support, rental laptops, IT infrastructure solutions, or
            professional repair services, ElyteSys Pvt. Ltd. is here to help.
            Contact us today for a free consultation and customized business IT
            solution.
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
