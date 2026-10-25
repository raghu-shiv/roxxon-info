"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Users,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const capabilities = [
  { icon: Code2, label: "Modern software and SaaS products" },
  { icon: Cloud, label: "Cloud infrastructure and DevOps" },
  { icon: BrainCircuit, label: "AI and intelligent automation" },
  { icon: Users, label: "Technology staffing and dedicated teams" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhoWeAre() {
  const reduceMotion = useReducedMotion();

  return (
    <Section className="bg-white text-slate-900">
      <SectionHeader
        badge="Who We Are"
        title="Technology That"
        highlight="Moves Business Forward"
        description="Roxxon brings engineering, cloud, AI and talent together to help organizations turn ambitious ideas into practical outcomes."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          variants={reduceMotion ? undefined : fadeUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Engineering with purpose
          </p>

          <h3 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            We build technology
            <span className="mt-1 block bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              that builds businesses.
            </span>
          </h3>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Whether you&apos;re launching a startup, modernizing enterprise
            systems, migrating to the cloud, or building an engineering team,
            Roxxon focuses on practical solutions that fit your goals and growth
            plans.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50">
                  <Icon
                    size={18}
                    className="text-cyan-700"
                    aria-hidden="true"
                  />
                </span>
                <span className="pt-1 text-sm font-medium leading-6 text-slate-700 sm:text-base">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Learn More About Us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
            <CheckCircle2
              size={18}
              className="text-cyan-700"
              aria-hidden="true"
            />
            <span>
              Collaborative delivery. Modern engineering. Practical outcomes.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          variants={reduceMotion ? undefined : fadeUp}
          viewport={{ once: true, amount: 0.15 }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-100/80 via-transparent to-blue-100/80 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-900/5 sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Connected capabilities
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  One partner across the technology lifecycle
                </p>
              </div>
              <span className="rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold text-cyan-800">
                Roxxon
              </span>
            </div>

            <Image
              src="/images/services.svg"
              alt="Illustration of Roxxon technology services"
              width={700}
              height={700}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="mx-auto h-auto w-full"
            />

            <div className="mt-4 grid grid-cols-2 gap-3">
              {["Build", "Scale", "Automate", "Connect"].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
