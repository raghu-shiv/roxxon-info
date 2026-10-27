"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: string;
};

interface Props {
  service: Service;
  onClose: () => void;
}

const serviceDetails = [
  {
    title: "IT Infrastructure Management",
    points: [
      {
        name: "Hardware Services",
        description:
          "We provide expert technical support, maintenance, and repair for all your physical hardware. Our services help maintain optimal device performance and extend hardware lifespan, ensuring minimal downtime and maximum reliability.",
      },
      {
        name: "Surveillance & Access Control",
        description:
          "Enhance security with intelligent surveillance systems and advanced access control. Our solutions support biometric authentication—including facial recognition, voice ID, gait analysis, and more—to safeguard your premises with modern, frictionless technology.",
      },
      {
        name: "Free Infrastructure Diagnosis",
        description:
          "We offer complimentary hardware diagnostics to identify potential infrastructure issues before they become critical. This proactive service is designed to improve operational continuity and reduce unexpected disruptions.",
      },
    ],
  },
  {
    title: "Software Development",
    points: [
      {
        name: "Captivating Visual Identity",
        description:
          "We create a strong digital presence through compelling visuals, thoughtful color palettes, and brand-aligned imagery that captivate users and communicate your message effectively.",
      },
      {
        name: "Seamless User Experience",
        description:
          "With user-centric design at the core, we build intuitive navigation structures that ensure users find what they need effortlessly—enhancing satisfaction, trust, and engagement.",
      },
      {
        name: "Conversion-Driven Design",
        description:
          "Designs are not just meant to look good—they’re built to perform. Our approach strategically places CTAs and optimizes layouts to guide users toward actions that matter for your business growth.",
      },
    ],
  },
  {
    title: "Annual Maintenance Contract",
    points: [
      {
        name: "24/7 On-Demand Support",
        description:
          "Our AMC provides around-the-clock technical assistance to ensure minimal downtime. From urgent issues to routine fixes, we’re always available to keep your systems running at peak performance.",
      },
      {
        name: "Comprehensive Cabling Services",
        description:
          "We offer full-spectrum structured cabling solutions that establish a solid foundation for your IT infrastructure—supporting reliable, high-speed data transfer and seamless communication across your organization.",
      },
      {
        name: "Seamless Integration & Migration",
        description:
          "As your tech stack evolves, we handle complex system integrations and data migrations with minimal disruption—ensuring a smooth transition to updated platforms and environments.",
      },
    ],
  },
  {
    title: "Mobile App Development",
    points: [
      {
        name: "Cross-Platform Development",
        description:
          "Build once and deploy across both iOS and Android, significantly reducing time and cost without compromising performance or design quality.",
      },
      {
        name: "Native Performance",
        description:
          "React Native components are compiled into native code, delivering fast and fluid performance that's indistinguishable from apps built using native tools.",
      },
      {
        name: "Consistent UI & UX",
        description:
          "Create visually consistent interfaces that adapt seamlessly to various screen sizes and platforms, ensuring a smooth user experience.",
      },
      {
        name: "Faster Iteration with Hot Reloading",
        description:
          "Speed up the development process with live reloading and real-time preview of changes—ideal for rapid prototyping and debugging.",
      },
      {
        name: "Extensive Libraries & Community Support",
        description:
          "Tap into a vast ecosystem of libraries, plugins, and community tools to accelerate development and integrate advanced features with ease.",
      },
      {
        name: "Secure and Scalable",
        description:
          "Build apps that not only perform well but also meet enterprise-grade security and scalability standards, ready for growth.",
      },
    ],
  },
  // {
  //   title: "Digital Service Cloud Platform",
  //   points: [
  //     {
  //       name: "Remote Cloud Support",
  //       description:
  //         "We offer real-time remote support for cloud setup, configuration, and maintenance. Our experts ensure continuous uptime and fast issue resolution—minimizing disruptions to your operations.",
  //     },
  //     {
  //       name: "Scalable Cloud Solutions",
  //       description:
  //         "Get access to secure cloud storage, automated data backups, software hosting, and remote collaboration tools. We help businesses streamline workflows, reduce IT overheads, and enhance productivity.",
  //     },
  //     {
  //       name: "Cloud-Based Customer Service",
  //       description:
  //         "Our cloud-enabled customer service ensures rapid query resolution, resource optimization, and smooth user experiences—enhancing service delivery across digital touchpoints.",
  //     },
  //   ],
  // },
  {
    title: "Biometric Security Solutions",
    points: [
      {
        name: "Physiological Biometrics",
        description:
          "We implement a wide range of biometric technologies including fingerprint scanning, facial recognition, iris and retina analysis, palm vein mapping, and even scent and DNA-based verification. These solutions offer high accuracy and non-repudiation for secure identity management.",
      },
      {
        name: "Behavioral Biometrics",
        description:
          "Our behavioral systems capture unique patterns like voice recognition, typing rhythm, gesture dynamics, and mouse movement to authenticate users in real-time. These passive security layers are ideal for continuous authentication and fraud detection.",
      },
      {
        name: "Advanced Applications",
        description:
          "Biometric systems are widely deployed in sectors like border security, e-governance, health tech, and finance. We provide scalable solutions designed for both on-premise and cloud-based ecosystems—enhancing compliance and operational integrity.",
      },
    ],
  },
  {
    title: "CCTV Surveillance",
    points: [
      {
        name: "High-Definition Cameras",
        description:
          "Choose from IP or analog cameras including dome, bullet, and covert options. Our team ensures strategic placement and optimal resolution based on your area size, angles, and surveillance objectives.",
      },
      {
        name: "Monitoring Stations",
        description:
          "Monitors allow for live viewing and playback of footage. We customize the number of screens required based on your facility size and coverage goals, with easy scalability as needs grow.",
      },
      {
        name: "Cables & Routers",
        description:
          "Our systems support both wired and wireless setups. We configure the right networking infrastructure—including cables, routers, and switches—for seamless connectivity between all devices.",
      },
      {
        name: "Video Recorders",
        description:
          "We offer both DVR (Digital Video Recorders) and NVR (Network Video Recorders) to match your camera type. These devices ensure secure video processing, recording, and centralized management.",
      },
      {
        name: "Robust Storage Solutions",
        description:
          "We implement enterprise-grade storage systems built for continuous recording and long-term video retention. Our CCTV solutions are paired with high-performance drives that handle multi-feed video storage 24/7.",
      },
    ],
  },
  {
    title: "Workforce Solutions",
    points: [
      {
        name: "IT Talent Outsourcing",
        description:
          "We help US startups scale quickly by providing dedicated remote IT professionals, including Full Stack Developers, Frontend Developers, Backend Developers, QA Engineers, DevOps Engineers, UI/UX Designers, and AI specialists. Our flexible engagement models reduce hiring time and operational costs.",
      },
      {
        name: "IT Staffing & Recruitment",
        description:
          "We provide end-to-end IT staffing solutions across India, connecting businesses with highly skilled professionals for permanent, contractual, and project-based roles. Our rigorous screening process ensures every candidate aligns with your technical and business requirements.",
      },
      {
        name: "Dedicated Development Teams",
        description:
          "Build an extension of your in-house team with dedicated developers who work exclusively on your projects. We manage talent acquisition, onboarding, and ongoing support, allowing you to focus on product innovation and business growth.",
      },
      {
        name: "Contract & Project Staffing",
        description:
          "Whether you need short-term specialists or an entire project team, we provide experienced IT professionals for contract, contract-to-hire, and project-based engagements with rapid deployment and seamless integration.",
      },
      {
        name: "Talent Management & HR Support",
        description:
          "Beyond recruitment, we assist with onboarding, workforce management, performance coordination, and employee engagement, ensuring a smooth experience for both clients and professionals throughout the engagement lifecycle.",
      },
    ],
  },
];

export default function ServiceDetailsPopUp({ service, onClose }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const detail = serviceDetails.find((item) => item.title === service.title);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="service-dialog-overlay"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-950/80 px-3 py-5 backdrop-blur-md sm:items-center sm:px-6 sm:py-8"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-dialog-title"
          aria-describedby="service-dialog-description"
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 12, scale: 0.98 }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 0.25,
            ease: "easeOut",
          }}
          className="relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 text-white shadow-2xl shadow-black/40"
        >
          {/* Ambient background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
          </div>

          {/* Header */}
          <div className="relative border-b border-white/10 px-5 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close service details"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-400/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 motion-reduce:transition-none sm:right-6 sm:top-6"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <div className="flex items-start gap-4 pr-10 sm:gap-5 sm:pr-12">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 p-3 sm:h-20 sm:w-20">
                <Image
                  src={service.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 sm:text-sm">
                  <CheckCircle2 size={14} aria-hidden="true" />
                  Service Overview
                </span>

                <h2
                  id="service-dialog-title"
                  className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl"
                >
                  {service.title}
                </h2>
              </div>
            </div>

            <p
              id="service-dialog-description"
              className="mt-6 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
            >
              {service.description}
            </p>
          </div>

          {/* Service details */}
          <div className="relative px-5 py-6 sm:px-8 sm:py-8">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                What&apos;s Included
              </p>
              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                How we can help
              </h3>
            </div>

            {detail && detail.points.length > 0 ? (
              <div className="space-y-4">
                {detail.points.map((point, index) => (
                  <motion.article
                    key={point.name}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.25,
                      delay: shouldReduceMotion ? 0 : index * 0.04,
                    }}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition-colors hover:border-cyan-400/20 hover:bg-white/[0.065] sm:p-6 motion-reduce:transition-none"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h4 className="text-base font-semibold leading-6 text-white sm:text-lg">
                          {point.name}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm leading-7 text-slate-300">
                  Detailed information for this service is not available yet.
                  Contact our team to discuss your requirements.
                </p>
              </div>
            )}

            {/* Footer CTA */}
            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-5 sm:p-6">
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Have a project in mind?
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                Tell us what you need, and let&apos;s discuss how this service
                could support your business.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
                >
                  Discuss This Service
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 motion-reduce:transition-none"
                >
                  Continue Exploring
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
