"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Software Engineering",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
  },
  {
    icon: Users,
    title: "Workforce Solutions",
  },
];

const highlights = [
  "Modern Tech Stack",
  "Startup Focused",
  "AI-Assisted Delivery",
  "Scalable Architecture",
];

export default function CapabilityCard() {
  return (
    <motion.aside
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-slate-900
        via-slate-900
        to-slate-800
        p-8
        shadow-2xl
        lg:col-span-5
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Header */}

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
          <Sparkles size={16} />
          Roxxon at a Glance
        </div>

        <h3 className="mt-6 text-3xl font-black text-white">
          Engineering
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Beyond Code
          </span>
        </h3>

        <p className="mt-5 leading-8 text-slate-300">
          We combine software engineering, AI, cloud technologies and workforce
          solutions to help businesses build faster, scale confidently and
          innovate continuously.
        </p>
      </div>

      {/* Capabilities */}

      <div className="relative mt-10 space-y-4">
        {capabilities.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              whileHover={{
                x: 6,
              }}
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                backdrop-blur-xl
              "
            >
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <Icon size={20} className="text-cyan-400" />
              </div>

              <span className="font-medium text-white">{item.title}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Highlights */}

      <div className="relative mt-10">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-500">
          Why Clients Choose Us
        </p>

        <div className="flex flex-wrap gap-3">
          {highlights.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-cyan-300
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom */}

      <div className="relative mt-12 border-t border-white/10 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck size={22} className="text-emerald-400" />

            <div>
              <h4 className="font-semibold text-white">Ready to Build</h4>

              <p className="text-sm text-slate-400">
                Let's create something exceptional.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-cyan-500
              px-5
              py-3
              font-semibold
              text-slate-950
              transition-all
              hover:gap-3
              hover:bg-cyan-400
            "
          >
            Start
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.aside>
  );
}
