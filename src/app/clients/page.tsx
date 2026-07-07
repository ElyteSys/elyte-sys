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

const LOGOS = ["BigThinkCode", "LightMetrics", "ARMTECH India"];

const CASE_STUDIES = [
  {
    client: "Our Commitment",
    industry: "Healthcare",
    challenge:
      "Every client is a valued partner. We focus on building long-term relationships by delivering dependable IT solutions, timely support, and exceptional service quality. Our commitment is to help businesses maximize productivity through reliable technology and professional expertise.",
    solution:
      "Deployed a 3-year Premium AMC covering all devices. Assigned a resident engineer for HQ. Onboarded all assets into our management portal with monthly health reports.",
    result:
      "98.5% uptime achieved. Average resolution time dropped from 3 days to 4 hours. IT cost reduced by 32%.",
    color: "#10B981",
  },
  {
    client: "Growing Together",
    industry: "Construction & Real Estate",
    challenge:
      "As a growing IT solutions company, ElyteSys is continuously expanding its network of business clients across India. We are dedicated to earning the trust of every organization we serve through integrity, quality, and consistent customer satisfaction.",
    solution:
      "Sourced, configured with their project management software, and delivered all 80 units across 2 sites within 7 days. Provided a dedicated support engineer on-site.",
    result:
      "Project launched on schedule. Devices collected and data-wiped at project close. Client re-booked for next project.",
    color: "#0057D9",
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
            At ElyteSys Pvt. Ltd., we are committed to delivering reliable IT
            solutions that help businesses operate efficiently and grow with
            confidence. We work closely with organizations to understand their
            unique technology requirements and provide customized solutions
            backed by quality products and responsive support. Whether
            you&apos;re a startup, small business, educational institution, or a
            large enterprise, our goal is to become your trusted long-term IT
            partner.
          </p>
        </div>
      </section>

      {/* Client logos */}
      {/* <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Companies We Work With
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
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
        <p className="text-center text-sm text-muted-foreground mt-6">
          + 1,188 more businesses across India
        </p>
      </section> */}

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
                {/* <p
                  className="text-xl font-bold text-[#0057D9]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {count}
                </p> */}
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
        <div className="grid lg:grid-cols-2 gap-6">
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
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground leading-relaxed">
                        {challenge}
                      </p>
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
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Let&apos;s Build Your IT Infrastructure Together
          </h2>
          <p className="text-gray-400 mb-7">
            Looking for a reliable IT partner for laptop procurement, AMC
            services, rentals, infrastructure solutions, or technical support?
            Partner with ElyteSys Pvt. Ltd. and experience professional IT
            services tailored to your business needs.
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
