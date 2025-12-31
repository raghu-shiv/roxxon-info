"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/our-projects", label: "Our Projects" },
    { href: "/contact", label: "Contact us" },
  ];

  const isActive = (href: string) => pathname === href;

  const renderNavLinks = (isMobile = false) =>
    navLinks.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className={`transition ${
          isActive(href) ? "text-primary" : "hover:text-secondary"
        } ${isMobile ? "block text-center py-2" : ""}`}
      >
        {label}
      </Link>
    ));

  return (
    <>
      {/* Topbar - hidden on sm and below */}
      <div className="hidden md:block bg-midnight py-3 text-white text-sm">
        <div className="container mx-auto px-7 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0 text-center md:text-left">
            <p className="mb-0">
              <span className="font-light text-gray-400">Phone no:</span>{" "}
              <a href="tel:+918090452438" className="hover:underline">
                +91 8090452438
              </a>{" "}
              or <span className="font-light text-gray-400">email us:</span>{" "}
              <a
                href="mailto:roxxoninfotech@gmail.com"
                className="hover:underline"
              >
                roxxoninfotech@gmail.com
              </a>
            </p>
          </div>
          <div className="flex space-x-3">
            {["facebook", "twitter", "instagram", "dribbble"].map((social) => (
              <a
                key={social}
                href="https://www.instagram.com/roxxon_info0723?igsh=NzJlc2E4bG5kejkz"
                className="text-white hover:text-secondary"
                referrerPolicy="no-referrer"
                target="_blank"
              >
                <span className={`fa fa-${social}`}></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar with animation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white text-black shadow-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          <Link href="/" className="text-xl font-bold">
            <Image
              src="/images/logo.png"
              alt="Roxxon Infotech"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {renderNavLinks()}
            <Link
              href="/#whatsapp-contact"
              className="ml-4 bg-primary text-white px-5 py-2 rounded hover:bg-secondary transition"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-black focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu with animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2 flex flex-col items-center">
                {renderNavLinks(true)}
                <Link
                  href="/#whatsapp-contact"
                  className="bg-primary text-white px-5 py-2 rounded hover:bg-secondary transition"
                >
                  Free Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
