"use client";

import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const NAV = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    // dropdown: [
    //   { label: "IT Solutions & Sales", path: "/services#sales" },
    //   { label: "Laptop Service & Repair", path: "/services#repair" },
    //   { label: "AMC Support", path: "/amc-plans" },
    //   { label: "Hardware Rentals", path: "/rentals" },
    //   { label: "On-Site Support", path: "/services#onsite" },
    // ],
  },
  // { label: "AMC Plans", path: "/amc-plans" },
  // { label: "Rentals", path: "/rentals" },
  { label: "Clients", path: "/clients" },
  { label: "Contact", path: "/contact" },
] as {
  label: string;
  path: string;
  dropdown?: { label: string; path: string }[];
}[];

interface LayoutShellProps {
  children: ReactNode;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-7", className)}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Top Contact Strip */}
      <div className="hidden lg:block bg-[#050A15] border-b border-white/5 text-xs text-[#6B84A8]">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            GST: 33AAJCE7604E1ZW
          </span>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#2563EB]" />
              +91 99726 69956
            </span>

            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#2563EB]" />
              info@elytesys.com
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080E1C]/95 backdrop-blur-xl border-b border-white/6 shadow-xl shadow-black/40"
            : "bg-[#080E1C] border-b border-white/6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="./logo.svg"
              alt={"Elyte logo"}
              width={1983}
              height={793}
              priority
              className={cn("h-8 w-auto md:h-10")}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={item.path}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-white bg-white/8"
                        : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}

                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="bg-[#0D1528] border border-white/8 rounded-xl shadow-2xl shadow-black/60 py-1.5 min-w-55">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.path}
                            className="block px-4 py-2.5 text-sm text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-white bg-white/8"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="https://wa.me/919972669956"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] rounded-lg text-sm font-medium hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>

            <Link
              href="mailto:info@elytesys.com"
              className="flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/40"
            >
              <Mail className="w-3 h-3" />
              Send mail
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#94A3B8] hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden bg-[#080E1C] border-t border-white/6 px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.path}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive(item.path)
                      ? "text-white bg-white/8"
                      : "text-[#94A3B8]"
                  }`}
                >
                  {item.label}
                </Link>

                {item.dropdown?.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.path}
                    className="block pl-6 pr-3 py-2 text-sm text-[#6B84A8] hover:text-white"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ))}

            <div className="pt-3 grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/919972669956"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] rounded-lg text-sm font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>

              <Link
                href="/contact"
                className="flex items-center justify-center py-2.5 bg-[#2563EB] text-white rounded-lg text-sm font-semibold"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>
      {/* Footer */}
      <footer className="bg-[#050A15] border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src="./logo.svg"
                  alt={"Elyte logo"}
                  width={1983}
                  height={793}
                  priority
                  className={cn("h-8 w-auto md:h-10")}
                />
              </div>

              <p className="text-sm text-[#4B6280] leading-relaxed mb-5">
                India&apos;s trusted B2B IT partner — hardware supply, repair,
                AMC, and infrastructure support since 2009.
              </p>

              {/* <div className="flex gap-2.5">
                {[X].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#2563EB] flex items-center justify-center transition-colors border border-white/6"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#6B84A8]" />
                  </a>
                ))}
              </div> */}
            </div>

            {/* Services */}
            <div>
              <p className="text-xs font-semibold text-white tracking-widest uppercase mb-4">
                Services
              </p>

              <ul className="space-y-2.5">
                {[
                  "IT Solutions & Sales",
                  "Laptop Service & Repair",
                  "AMC Support",
                  "Hardware Rentals",
                  "On-Site Support",
                ].map((s) => (
                  <li key={s}>
                    <Link
                      href="/services"
                      className="text-sm text-[#4B6280] hover:text-white transition-colors"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-semibold text-white tracking-widest uppercase mb-4">
                Company
              </p>

              <ul className="space-y-2.5">
                {[
                  ["About Us", "/about"],
                  // ["AMC Plans", "/amc-plans"],
                  ["Services", "/services"],
                  ["Clients", "/clients"],
                  ["Contact", "/contact"],
                ].map(([label, path]) => (
                  <li key={label}>
                    <Link
                      href={path}
                      className="text-sm text-[#4B6280] hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold text-white tracking-widest uppercase mb-4">
                Contact
              </p>

              <ul className="space-y-3">
                {[
                  { icon: Phone, text: "+91 99726 69956" },
                  { icon: Mail, text: "info@elytesys.com" },
                  {
                    icon: MapPin,
                    text: "No:56, Maduraisamy Madam Street, Perambur, Chennai-600011",
                  },
                ].map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-start gap-2.5 text-sm text-[#4B6280]"
                  >
                    <Icon className="w-4 h-4 text-[#2563EB] mt-0.5" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3A4E68]">
            <p>© 2026 ElyteSys. All rights reserved.</p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919972669956"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-900/40 hover:scale-110 transition-transform"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
