import {
  ArrowRight,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Zap,
} from "lucide-react";
import Link from "next/link";

const INDUSTRIES = [
  { icon: Building2, label: "Corporate Offices", count: "340+" },
  { icon: Zap, label: "Startups", count: "280+" },
  { icon: GraduationCap, label: "Educational Institutions", count: "180+" },
  { icon: HeartPulse, label: "Healthcare", count: "120+" },
  { icon: Factory, label: "Manufacturing", count: "160+" },
  { icon: Landmark, label: "Government Organizations", count: "80+" },
];

const LOGOS = [
  "Nexus Pharma",
  "Greenfield Infra",
  "FinBridge Solutions",
  "BrightPath Schools",
  "MediCore Hospitals",
  "Apex Manufacturing",
  "ClearSky Startups",
  "Vidya Academy",
  "StateBank Cooperative",
  "TrustGrid Finance",
  "BuildRight Engineers",
  "NetCore Systems",
];

const CASE_STUDIES = [
  {
    client: "Nexus Pharma Ltd.",
    industry: "Healthcare",
    challenge:
      "300 laptops across 4 cities with no centralized IT management — frequent breakdowns causing production delays.",
    solution:
      "Deployed a 3-year Premium AMC covering all devices. Assigned a resident engineer for HQ. Onboarded all assets into our management portal with monthly health reports.",
    result:
      "98.5% uptime achieved. Average resolution time dropped from 3 days to 4 hours. IT cost reduced by 32%.",
    color: "#10B981",
  },
  {
    client: "Greenfield Infra Pvt. Ltd.",
    industry: "Construction & Real Estate",
    challenge:
      "Needed 80 fully configured laptops for a 3-month site project on a 10-day notice. Zero in-house IT team.",
    solution:
      "Sourced, configured with their project management software, and delivered all 80 units across 2 sites within 7 days. Provided a dedicated support engineer on-site.",
    result:
      "Project launched on schedule. Devices collected and data-wiped at project close. Client re-booked for next project.",
    color: "#0057D9",
  },
  {
    client: "BrightPath School Network",
    industry: "Education",
    challenge:
      "200+ student laptops across 6 branches — uncoordinated repair processes, long turnaround times, no asset records.",
    solution:
      "Structured AMC with quarterly preventive visits to each branch. Built a full asset inventory. Established a WhatsApp support channel for staff.",
    result:
      "Repair turnaround reduced from 2 weeks to 48 hours. Full asset visibility for management. 100% renewed AMC the following year.",
    color: "#7C3AED",
  },
];

export default function Clients() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0057D9] to-[#003D9D] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-200 text-sm font-medium mb-3 block">
            Our Clients
          </span>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Trusted Technology Partner for Businesses
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            At ElyteSys Pvt. Ltd., we are committed to delivering reliable IT solutions that help businesses operate efficiently and grow with confidence. We work closely with organizations to understand their unique technology requirements and provide customized solutions backed by quality products and responsive support.
Whether you're a startup, small business, educational institution, or a large enterprise, our goal is to become your trusted long-term IT partner.
          </p>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Companies We Work With
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {LOGOS.map((name) => (
            <div
              key={name}
              className="bg-white border border-border rounded-xl h-16 flex items-center justify-center px-4 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <span className="text-sm font-semibold text-[#374151] text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
        {/* <p className="text-center text-sm text-muted-foreground mt-6">
          + 1,188 more businesses across India
        </p> */}
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-bold text-[#111827] mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Industries Served
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map(({ icon: Icon, label, count }) => (
              <div
                key={label}
                className="bg-white border border-border rounded-2xl p-5 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-[#0057D9]" />
                </div>
                <p className="text-xs font-medium text-[#374151] mb-1">
                  {label}
                </p>
                <p
                  className="text-xl font-bold text-[#0057D9]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#0057D9] uppercase mb-2 block">
            Success Stories
          </span>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Case Studies
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map(
            ({ client, industry, challenge, solution, result, color }) => (
              <div
                key={client}
                className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-2" style={{ backgroundColor: color }} />
                <div className="p-6">
                  <div className="mb-4">
                    <h3
                      className="font-bold text-[#111827] text-lg mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {client}
                    </h3>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${color}15`, color }}
                    >
                      {industry}
                    </span>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-[#374151] mb-1">
                        Challenge
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#374151] mb-1">
                        Solution
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {solution}
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                      <p className="font-semibold text-[#10B981] mb-1 text-xs uppercase tracking-wide">
                        Result
                      </p>
                      <p className="text-[#374151] leading-relaxed">{result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111827] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Let's Build Your IT Infrastructure Together
          </h2>
          <p className="text-gray-400 mb-7">
            Looking for a reliable IT partner for laptop procurement, AMC services, rentals, infrastructure solutions, or technical support?
Partner with ElyteSys Pvt. Ltd. and experience professional IT services tailored to your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0057D9] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
