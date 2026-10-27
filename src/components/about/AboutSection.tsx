"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code2,
  Compass,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";

const capabilities: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Web applications, SaaS platforms and tailored software designed around your business requirements.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Cloud solutions, deployment workflows and infrastructure services that support reliable growth.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Practical AI integrations and automation opportunities that streamline work and improve efficiency.",
  },
  {
    icon: Users,
    title: "Workforce Solutions",
    description:
      "Technology talent and staffing support to help businesses extend their engineering capabilities.",
  },
];

const principles: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Compass,
    title: "Business-first thinking",
    description:
      "We start with your goals and constraints before recommending a technical approach.",
  },
  {
    icon: Lightbulb,
    title: "Purposeful innovation",
    description:
      "We focus on technology that solves real problems rather than complexity for its own sake.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable delivery",
    description:
      "We value clear communication, maintainable solutions and a collaborative working relationship.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : {
        variants: item,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.15 },
      };

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-24 -top-32 h-[440px] w-[440px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute -right-20 top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[140px]" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
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
                About Roxxon Infotech
              </span>
            </motion.div>

            <motion.h1
              variants={reduceMotion ? undefined : item}
              className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Technology with
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Purpose and Possibility.
              </span>
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : item}
              className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Roxxon Infotech brings technology services and workforce solutions
              together to help businesses solve problems, build digital
              capabilities and move forward with confidence.
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : item}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/services"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
              >
                Explore Our Services
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-colors hover:border-cyan-400/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
              >
                Talk to Our Team
              </Link>
            </motion.div>

            <motion.div
              variants={reduceMotion ? undefined : item}
              className="mx-auto mt-14 grid max-w-3xl gap-3 text-left sm:grid-cols-3"
            >
              {[
                {
                  icon: Code2,
                  label: "Engineering",
                  detail: "Digital products",
                },
                {
                  icon: Workflow,
                  label: "Modernization",
                  detail: "Smarter workflows",
                },
                {
                  icon: Users,
                  label: "Talent",
                  detail: "Workforce solutions",
                },
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

      {/* Company introduction */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-100/70 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-blue-100/70 blur-[110px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Who We Are"
            title="A Technology Partner"
            highlight="Focused on What Matters"
            description="We combine technical capabilities with an understanding of business needs to help organizations turn ideas into useful, scalable solutions."
          />

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div {...reveal} className="relative min-w-0">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-200/70 via-transparent to-blue-200/70 blur-xl"
              />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-2 shadow-xl shadow-slate-900/10">
                <Image
                  src="/images/about.jpg"
                  alt="Roxxon Infotech and its technology services"
                  width={900}
                  height={650}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="h-auto max-h-[540px] w-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-slate-950/90 p-5 shadow-lg backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Our approach
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-7 text-white sm:text-xl">
                    Understand the challenge. Build the right solution.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...reveal} className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-800">
                Built around your goals
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
                More than a service provider.
                <span className="mt-2 block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  A partner in progress.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Founded in 2023, Roxxon Infotech was established by four
                partners who shared a vision for helping businesses make better
                use of technology. Our work spans IT consulting, web and
                application development, infrastructure services and workforce
                solutions.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                We aim to understand each organization&apos;s needs, recommend a
                practical path forward and build solutions that can evolve as
                those needs change.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Solutions aligned with business requirements",
                  "Modern engineering and practical implementation",
                  "Collaborative communication and ongoing support",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
                      <ShieldCheck size={16} aria-hidden="true" />
                    </span>
                    <p className="text-sm leading-6 text-slate-700 sm:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            tone="dark"
            badge="What We Do"
            title="Connected Capabilities"
            highlight="For Growing Businesses"
            description="From building digital products to enabling teams, our service areas support different stages of your technology journey."
          />

          <motion.div
            variants={container}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {capabilities.map(({ icon: Icon, title, description }) => (
              <motion.article
                key={title}
                variants={reduceMotion ? undefined : item}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-colors hover:border-cyan-400/30 hover:bg-white/[0.07] motion-reduce:transition-none"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none"
                />

                <div className="relative">
                  <span className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <Icon
                      size={27}
                      className="text-cyan-300"
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="mt-7 text-xl font-bold leading-snug text-white">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="How We Work"
            title="The Principles Behind"
            highlight="Our Work"
            description="Strong outcomes start with a shared understanding of the problem, a thoughtful solution and a reliable working relationship."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                {...reveal}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 0.5, delay: index * 0.08 }
                }
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-900/5 sm:p-8 motion-reduce:transition-none"
              >
                <span className="inline-flex rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
                  <Icon
                    size={26}
                    className="text-cyan-700"
                    aria-hidden="true"
                  />
                </span>

                <h3 className="mt-7 text-xl font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-500/15 blur-[120px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <Sparkles size={16} aria-hidden="true" />
              Let&apos;s Work Together
            </span>

            <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have a challenge to solve?
              <span className="mt-2 block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Let&apos;s find the way forward.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Tell us about your business goals, technology needs or hiring
              plans. We&apos;ll start with a conversation about what makes sense
              for you.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
            >
              Contact Us
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link
              href="/staffing"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
            >
              Explore Staffing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
