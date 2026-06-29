"use client";

import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";

const SERVICE_AREAS = ["Chennai", "Bengaluru"];

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  employees: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    employees: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0057D9] to-[#003D9D] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-200 text-sm font-medium mb-3 block">
            Contact Us
          </span>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Let&apos;s Talk About Your IT Needs
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Our team responds within 2 business hours. No sales scripts — just
            honest advice.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">
        {/* Left: contact info */}
        <div className="space-y-6">
          {/* Quick contacts */}
          <div>
            <h2
              className="text-xl font-bold mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Get in Touch
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Phone / WhatsApp",
                  lines: ["+91 99726 69956"],
                  href: "tel:+919972669956",
                  color: "#0057D9",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp Chat",
                  lines: ["Chat instantly on WhatsApp", "Mon–Sat, 9am–8pm"],
                  href: "https://wa.me/919972669956",
                  color: "#25D366",
                },
                {
                  icon: Mail,
                  label: "Email",
                  lines: ["info@elytesys.com", "support@elytesys.com"],
                  href: "mailto:info@elytesys.com",
                  color: "#EF4444",
                },
                {
                  icon: MapPin,
                  label: "Head Office",
                  lines: [
                    "No:56, Maduraisamy Madam Street",
                    "Perambur, Chennai-600011",
                  ],
                  href: "#map",
                  color: "#F59E0B",
                },
              ].map(({ icon: Icon, label, lines, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white border border-border rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {label}
                    </p>
                    {lines.map((l) => (
                      <p key={l} className="text-sm font-medium text-[#111827]">
                        {l}
                      </p>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-[#0057D9]" />
              <h3
                className="font-semibold text-[#111827] text-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Business Hours
              </h3>
            </div>
            <div className="space-y-1.5 text-sm">
              {[
                ["Monday – Friday", "9:00 AM – 7:00 PM"],
                ["Saturday", "9:00 AM – 5:00 PM"],
                ["Sunday", "Emergency only"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between">
                  <span className="text-muted-foreground">{day}</span>
                  <span className="font-medium text-[#374151]">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service areas */}
          <div className="bg-white border border-border rounded-xl p-5">
            <h3
              className="font-semibold text-[#111827] text-sm mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((city) => (
                <span
                  key={city}
                  className="text-xs bg-blue-50 text-[#0057D9] border border-blue-100 px-2.5 py-1 rounded-full font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-2 pt-11.5">
          {submitted ? (
            <div className="bg-white border border-border rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full min-h-125">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <CheckCircle className="w-8 h-8 text-[#10B981]" />
              </div>
              <h2
                className="text-2xl font-bold text-[#111827] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Message Received!
              </h2>
              <p className="text-muted-foreground mb-2">
                Our team will contact{" "}
                <strong className="text-[#111827]">{form.email}</strong> within
                2 business hours.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                For urgent support, call us directly at +91 99726 69956.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-[#0057D9] font-medium hover:underline"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <div className="bg-white border border-border rounded-2xl p-8">
              <h2
                className="text-2xl font-bold text-[#111827] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Send Us an Enquiry
              </h2>
              <p className="text-muted-foreground text-sm mb-7">
                Fill in the form and we will get back to you with a tailored
                proposal.
              </p>
              <form onSubmit={submit} className="space-y-4">
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
                      <label className="text-xs font-medium text-[#374151] mb-1.5 block">
                        {label}
                      </label>
                      <input
                        name={name}
                        type={type}
                        required={req}
                        value={(form as Record<string, string>)[name]}
                        onChange={handle}
                        placeholder={placeholder}
                        className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg text-[#111827] placeholder:text-muted-foreground focus:outline-none focus:border-[#0057D9] transition-colors bg-[#F8FAFC]"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#374151] mb-1.5 block">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handle}
                      className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg text-[#111827] focus:outline-none focus:border-[#0057D9] transition-colors bg-[#F8FAFC]"
                    >
                      <option value="">Select a service…</option>
                      <option>Laptop Sales</option>
                      <option>Laptop Repair & Service</option>
                      <option>AMC Support</option>
                      <option>Laptop Rentals</option>
                      <option>IT Solutions</option>
                      <option>On-Site Support</option>
                      <option>Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#374151] mb-1.5 block">
                      Number of Employees
                    </label>
                    <select
                      name="employees"
                      value={form.employees}
                      onChange={handle}
                      className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg text-[#111827] focus:outline-none focus:border-[#0057D9] transition-colors bg-[#F8FAFC]"
                    >
                      <option value="">Select range…</option>
                      <option>1–10</option>
                      <option>11–50</option>
                      <option>51–200</option>
                      <option>201–500</option>
                      <option>500+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#374151] mb-1.5 block">
                    Message / Requirements
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={5}
                    placeholder="Tell us about your current IT setup, challenges, device count, or any specific requirements…"
                    className="w-full px-3.5 py-2.5 text-sm border border-border rounded-lg text-[#111827] placeholder:text-muted-foreground focus:outline-none focus:border-[#0057D9] transition-colors resize-none bg-[#F8FAFC]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0057D9] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Send Enquiry <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  We respond within 2 business hours. Your information is never
                  shared.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Map placeholder */}
      <div
        id="map"
        className="h-72 bg-[#E2E8F0] flex items-center justify-center border-t border-border"
      >
        <div className="text-center">
          <MapPin className="w-8 h-8 text-[#0057D9] mx-auto mb-2" />
          <p className="font-semibold text-[#374151]">
            No:56, Maduraisamy Madam Street, Perambur, Chennai-600011
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#0057D9] hover:underline mt-1 block"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}
