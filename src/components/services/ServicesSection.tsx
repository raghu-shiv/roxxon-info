"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Sparkles,
  Users,
} from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import ServiceDetailsPopUp from "./ServiceDetailsPopUp";

const services = [
  {
    title: "IT Infrastructure Management",
    description:
      "Keep your business running with dependable IT infrastructure, network management, device support and security-focused systems designed around your operational needs.",
    icon: "/images/flaticon/svg/002-travel-1.svg",
    Icon: Cpu,
    gradient: "from-cyan-500 to-blue-500",
    features: ["IT Support", "Infrastructure", "System Reliability"],
  },
  {
    title: "Software Development",
    description:
      "Build digital experiences and business applications with responsive interfaces, maintainable code and functionality tailored to your requirements.",
    icon: "/images/flaticon/svg/001-travel.svg",
    Icon: Code2,
    gradient: "from-violet-500 to-fuchsia-500",
    features: ["Web Development", "Custom Software", "Digital Products"],
  },
  {
    title: "Mobile App Development",
    description:
      "Create user-friendly mobile applications with cross-platform development approaches, consistent experiences and room to evolve as your business grows.",
    icon: "/images/flaticon/svg/004-travel-3.svg",
    Icon: BrainCircuit,
    gradient: "from-emerald-500 to-teal-500",
    features: ["Mobile Applications", "Cross-Platform", "User Experience"],
  },
  {
    title: "Workforce Solutions",
    description:
      "Connect with technology professionals through flexible staffing and recruitment support designed to help businesses build and extend their teams.",
    icon: "/images/flaticon/svg/004-travel-3.svg",
    Icon: Users,
    gradient: "from-orange-500 to-pink-500",
    features: ["IT Staffing", "Recruitment", "Dedicated Teams"],
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  const reduceMotion = useReducedMotion();

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-24 -top-28 h-[440px] w-[440px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute -right-20 top-0 h-[440px] w-[440px] rounded-full bg-cyan-500/15 blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={reduceMotion ? undefined : item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                <Sparkles size={16} aria-hidden="true" />
                What We Do
              </span>
            </motion.div>

            <motion.h1
              variants={reduceMotion ? undefined : item}
              className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Technology Services
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Built Around Your Business.
              </span>
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : item}
              className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              From infrastructure and software to mobile applications and
              technology talent, we help businesses find practical solutions for
              their evolving needs.
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : item}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <a
                href="#services-section"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
              >
                Explore Services
                <ArrowRight size={18} aria-hidden="true" />
              </a>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-colors hover:border-cyan-400/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
              >
                Discuss Your Project
              </Link>
            </motion.div>

            <motion.div
              variants={reduceMotion ? undefined : item}
              className="mx-auto mt-14 grid max-w-3xl gap-3 text-left sm:grid-cols-3"
            >
              {[
                { icon: Code2, label: "Build", detail: "Digital solutions" },
                { icon: Cloud, label: "Support", detail: "IT capabilities" },
                { icon: Users, label: "Scale", detail: "Technology teams" },
              ].map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10">
                    <Icon
                      size={21}
                      className="text-cyan-300"
                      aria-hidden="true"
                    />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm text-slate-400">
                      {detail}
                    </span>
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section
        id="services-section"
        className="relative isolate overflow-hidden bg-slate-950 py-24 sm:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-10 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            tone="dark"
            badge="Our Services"
            title="The Right Capabilities"
            highlight="For Your Next Step"
            description="Explore our service areas and select a solution to learn more about how we can support your business."
          />

          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid gap-6 md:grid-cols-2 xl:gap-8"
          >
            {services.map((service) => {
              const Icon = service.Icon;

              return (
                <motion.button
                  key={service.title}
                  type="button"
                  variants={reduceMotion ? undefined : item}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                  onClick={() => setSelectedService(service)}
                  aria-label={`Learn more about ${service.title}`}
                  className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-cyan-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:p-8 motion-reduce:transition-none"
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.08] motion-reduce:transition-none`}
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                      >
                        <Icon size={27} aria-hidden="true" />
                      </span>

                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors group-hover:border-cyan-400/30 group-hover:text-cyan-300 motion-reduce:transition-none">
                        <ArrowRight size={18} aria-hidden="true" />
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-bold tracking-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-300 sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-200 sm:text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      View service details
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                      />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How we help */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan-100/70 blur-[110px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Our Approach"
            title="Technology That Works"
            highlight="Toward Your Goals"
            description="We focus on understanding the challenge, identifying a suitable approach and helping you move forward with clarity."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "We start by learning about your requirements, current challenges and business priorities.",
              },
              {
                number: "02",
                title: "Plan",
                description:
                  "We work with you to identify a practical direction based on your needs and constraints.",
              },
              {
                number: "03",
                title: "Move Forward",
                description:
                  "We align on the next steps and collaborate toward a solution that supports your goals.",
              },
            ].map((step, index) => (
              <motion.article
                key={step.number}
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, amount: 0.15 },
                      transition: {
                        duration: 0.5,
                        delay: index * 0.08,
                      },
                    })}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-900/5 sm:p-8 motion-reduce:transition-none"
              >
                <span className="inline-flex rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm font-bold text-cyan-800">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-slate-950 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-500/15 blur-[120px]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <Sparkles size={16} aria-hidden="true" />
              Have a Project in Mind?
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s find the right solution
              <span className="mt-2 block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                for your business.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Tell us what you&apos;re working on. We&apos;ll start with a
              conversation about your goals and the best next step.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none lg:self-center"
          >
            Contact Us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Existing service details modal */}
      {selectedService && (
        <ServiceDetailsPopUp
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </main>
  );
}
