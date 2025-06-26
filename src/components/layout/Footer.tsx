"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const exploreLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/services", label: "What We Do" },
    { href: "tel:+918090452438", label: "Call Us" },
  ];

  const legalLinks = [
    { href: "#", label: "Privacy & Policy" },
    { href: "#", label: "Terms & Conditions" },
  ];

  const socialIcons = ["twitter", "facebook", "instagram"];

  const contactInfo = [
    {
      icon: "fa-map-marker",
      text: "Lokhandwala Cmx, Kandivali (E), Mumbai - 400101",
    },
    {
      icon: "fa-phone",
      text: "+91 8090452438",
      href: "tel:+918090452438",
    },
    {
      icon: "fa-paper-plane",
      text: "roxxoninfotech@gmail.com",
      href: "mailto:roxxoninfotech@gmail.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Roxxon Infotech"
              width={160}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              We provide innovative IT solutions for your business.
            </p>
            <ul className="flex gap-4 mt-4">
              {socialIcons.map((icon) => (
                <li key={icon}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className={`fa fa-${icon}`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Explore</h2>
            <ul className="space-y-2 text-sm">
              {exploreLinks.map(({ href, label }, idx) => (
                <li key={idx}>
                  {href.startsWith("/") ? (
                    <Link href={href} className="hover:underline">
                      {label}
                    </Link>
                  ) : (
                    <a href={href} className="hover:underline">
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Legal</h2>
            <ul className="space-y-2 text-sm">
              {legalLinks.map(({ href, label }, idx) => (
                <li key={idx}>
                  <a href={href} className="hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Have a Question?
            </h2>
            <ul className="space-y-3 text-sm text-gray-400">
              {contactInfo.map(({ icon, text, href }, idx) => (
                <li key={idx} className="flex items-start">
                  <i className={`fa ${icon} mr-2 mt-1`} />
                  {href ? (
                    <a href={href} className="hover:underline text-gray-400">
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
          &copy; 2025. All rights reserved | Roxxon Infotech
        </div>
      </div>
    </footer>
  );
}
