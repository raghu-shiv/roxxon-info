"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Linkedin,
} from "lucide-react";

const exploreLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/services", label: "What We Do" },
  { href: "/our-projects", label: "Recent Projects" },
  { href: "tel:+918090452438", label: "Call Us" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "Lokhandwala Complex, Kandivali East, Mumbai - 400101",
  },
  {
    icon: Phone,
    text: "+91 8090452438",
    href: "tel:+918090452438",
  },
  {
    icon: Mail,
    text: "roxxoninfotech@gmail.com",
    href: "mailto:roxxoninfotech@gmail.com",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/roxxon-infotech/",
  },
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/1HMBCBLHeD/",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/roxxoninfotech?psln=NzJlc2E4bG5kejkz",
  },
];

const linkClass =
  "group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      {/* Ambient background — consistent with the Staffing hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.08] blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-8">
        {/* Main footer grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.2fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Roxxon Infotech home"
              className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Image
                src="/images/logo_light.png"
                alt="Roxxon Infotech"
                width={160}
                height={50}
                className="h-auto w-40 object-contain object-left"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Empowering businesses with thoughtful technology solutions,
              software development, IT services, and workforce expertise.
            </p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Connect with us
              </p>

              <ul className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        <Icon size={18} aria-hidden="true" />
                      </a>
                    ) : (
                      <span
                        aria-label={`${label} link not configured`}
                        title={`${label} link not configured`}
                        className="flex h-10 w-10 cursor-default items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-600"
                      >
                        <Icon size={18} aria-hidden="true" />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h2 className="text-base font-bold text-white">
              Explore
              <span className="mt-3 block h-0.5 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </h2>

            <ul className="mt-5 space-y-4">
              {exploreLinks.map(({ href, label }) => (
                <li key={href}>
                  {href.startsWith("/") ? (
                    <Link href={href} className={linkClass}>
                      <ArrowRight
                        size={14}
                        className="text-cyan-500/70 transition group-hover:translate-x-0.5 group-hover:text-cyan-300"
                        aria-hidden="true"
                      />
                      {label}
                    </Link>
                  ) : (
                    <a href={href} className={linkClass}>
                      <ArrowRight
                        size={14}
                        className="text-cyan-500/70 transition group-hover:translate-x-0.5 group-hover:text-cyan-300"
                        aria-hidden="true"
                      />
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h2 className="text-base font-bold text-white">
              Legal
              <span className="mt-3 block h-0.5 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </h2>

            <ul className="mt-5 space-y-4">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                    <ArrowUpRight
                      size={13}
                      className="text-slate-600 transition group-hover:text-cyan-300"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm font-semibold text-slate-200">
                Have a project in mind?
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Let&apos;s discuss how we can help your business.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Get in touch
                <ArrowRight
                  size={15}
                  className="transition-transform hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-base font-bold text-white">
              Have a Question?
              <span className="mt-3 block h-0.5 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </h2>

            <ul className="mt-5 space-y-5">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                    <Icon size={17} aria-hidden="true" />
                  </span>

                  <div className="min-w-0 pt-1">
                    {href ? (
                      <a
                        href={href}
                        className="break-words text-sm leading-6 text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="text-sm leading-6 text-slate-400">{text}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-center sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} Roxxon Infotech. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Built for better business outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}
