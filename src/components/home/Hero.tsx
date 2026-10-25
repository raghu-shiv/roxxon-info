"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Layers3,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import {
  SiAmazonwebservices,
  SiNextdotjs,
  SiOpenai,
  SiReact,
} from "react-icons/si";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const capabilities = [
  {
    icon: Code2,
    title: "Software Engineering",
    detail: "Web apps, SaaS and enterprise platforms",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Workforce Solutions",
    detail: "Technical staffing and dedicated teams",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    detail: "Intelligent products and workflows",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    detail: "Cloud infrastructure and DevOps",
    color: "from-orange-500 to-pink-500",
  },
];

const technologies = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "AWS", Icon: SiAmazonwebservices },
  { name: "OpenAI", Icon: SiOpenai },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* Floating technology markers */}
      {[
        { Icon: Code2, top: "19%", left: "5%" },
        { Icon: BrainCircuit, top: "23%", right: "5%" },
        { Icon: Workflow, bottom: "16%", left: "8%" },
        { Icon: Layers3, bottom: "15%", right: "7%" },
      ].map(({ Icon, ...position }, index) => (
        <motion.div
          key={index}
          className="absolute z-0 hidden lg:block"
          style={position}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl">
            <Icon size={25} className="text-cyan-400" />
          </div>
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          {/* Left: positioning and calls to action */}
          <div>
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                <Sparkles size={16} />
                Technology. Talent. Transformation.
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-8 text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Build What&apos;s
              <span className="block">Next with</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Roxxon.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              From modern software products and AI-powered solutions to
              high-performing engineering teams, we help ambitious businesses
              turn complex technology challenges into meaningful progress.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore Our Services
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/[0.03] px-6 py-4 font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/10"
              >
                Talk to Our Team
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300"
            >
              {[
                "Modern Engineering",
                "AI-Assisted Solutions",
                "Flexible Talent Models",
              ].map((value) => (
                <span key={value} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  {value}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Technologies we work with
              </p>

              <div className="flex flex-wrap gap-3">
                {technologies.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
                  >
                    <Icon size={19} className="text-cyan-400" />
                    {name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: capability panel */}
          <motion.div variants={item} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-[90px]" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <span className="text-sm font-medium text-cyan-300">
                    Roxxon capabilities
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    One partner.
                    <span className="block text-slate-300">
                      Multiple possibilities.
                    </span>
                  </h2>
                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                  <Layers3 size={25} className="text-cyan-300" />
                </div>
              </div>

              <div className="relative mt-8 space-y-3">
                {capabilities.map(
                  ({ icon: Icon, title, detail, color }, index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.09, duration: 0.45 }}
                      whileHover={{ x: 4 }}
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 transition hover:border-cyan-400/25 hover:bg-white/[0.06] sm:p-5"
                    >
                      <div
                        className={`shrink-0 rounded-xl bg-gradient-to-br ${color} p-3 text-white shadow-lg`}
                      >
                        <Icon size={23} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-white">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {detail}
                        </p>
                      </div>

                      <ArrowRight
                        size={18}
                        className="shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-400"
                      />
                    </motion.div>
                  ),
                )}
              </div>

              <div className="relative mt-6 rounded-2xl border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-400/10 p-2.5">
                    <BrainCircuit size={21} className="text-cyan-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Built around your goals
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Practical solutions. Collaborative delivery.
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Discuss your project
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mt-4 ml-auto hidden w-fit rounded-xl border border-white/10 bg-slate-900/90 px-5 py-3 shadow-xl sm:block"
            >
              <p className="text-sm text-slate-300">
                <span className="mr-2 text-cyan-400">✦</span>
                Engineering meets opportunity
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
