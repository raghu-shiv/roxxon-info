"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/staffing", label: "Staffing" },
  { href: "/contact", label: "Contact us" },
];

const consultationHref = "/#whatsapp-contact";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const renderNavLinks = (isMobile = false) =>
    navLinks.map(({ href, label }) => {
      const active = isActive(href);

      return (
        <Link
          key={href}
          href={href}
          onClick={isMobile ? closeMobileMenu : undefined}
          aria-current={active ? "page" : undefined}
          className={[
            "group relative inline-flex items-center font-medium transition-colors duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950",
            isMobile
              ? "w-full justify-center rounded-xl px-4 py-3 text-base"
              : "h-12 px-1 text-sm",
            active ? "text-cyan-300" : "text-slate-300 hover:text-white",
            isMobile && active ? "bg-white/5" : "",
            "motion-reduce:transition-none",
          ].join(" ")}
        >
          {label}

          {!isMobile && (
            <span
              className={[
                "absolute inset-x-0 bottom-1 h-0.5 origin-left rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform duration-200",
                active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                "motion-reduce:transition-none",
              ].join(" ")}
            />
          )}
        </Link>
      );
    });

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.35, ease: "easeOut" }
      }
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur-xl"
    >
      <nav aria-label="Main navigation">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            aria-label="Roxxon Infotech home"
            className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            onClick={closeMobileMenu}
          >
            <Image
              src="/images/logo_light.png"
              alt="Roxxon Infotech"
              width={140}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex xl:gap-9">
            {renderNavLinks()}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-100 transition-colors hover:border-cyan-400/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:hidden motion-reduce:transition-none"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M6 6l12 12M18 6 6 18"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              key="mobile-navigation"
              initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={
                shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.25, ease: "easeInOut" }
              }
              className="overflow-hidden border-t border-white/10 bg-slate-950 lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 sm:px-6">
                {renderNavLinks(true)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
