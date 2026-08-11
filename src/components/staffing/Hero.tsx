"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
  Clock3,
} from "lucide-react";

const stats = [
  {
    value: 48,
    suffix: " Hrs",
    title: "Average Candidate Submission",
  },
  {
    value: 95,
    suffix: "%",
    title: "Offer Acceptance",
  },
  {
    value: 500,
    suffix: "+",
    title: "Technology Professionals",
  },
];

const hiringModels = [
  "Contract Staffing",
  "Permanent Hiring",
  "Dedicated Teams",
  "RPO",
];

const floatingIcons = [
  { icon: Building2, top: "15%", left: "8%" },
  { icon: Users, top: "30%", right: "12%" },
  { icon: Sparkles, bottom: "18%", left: "15%" },
  { icon: Clock3, bottom: "20%", right: "10%" },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Icons */}

      {floatingIcons.map((itemData, index) => {
        const Icon = itemData.icon;

        return (
          <motion.div
            key={index}
            className="absolute hidden lg:flex"
            style={itemData}
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
            }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <Icon className="text-cyan-400" size={28} />
            </div>
          </motion.div>
        );
      })}

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          {/* LEFT */}

          <div>
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                <Sparkles size={16} />
                Workforce Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-7xl"
            >
              Build Your
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Engineering Team
              </span>
              Faster.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Roxxon helps startups and technology companies across the
              <span className="font-semibold text-white"> United States </span>
              and
              <span className="font-semibold text-white"> India </span>
              hire exceptional software engineers, cloud architects, DevOps
              specialists, AI engineers, data professionals, QA experts and
              product leaders.
            </motion.p>

            {/* Hiring Models */}

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              {hiringModels.map((model) => (
                <div
                  key={model}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl"
                >
                  <CheckCircle2 className="text-green-400" size={18} />

                  {model}
                </div>
              ))}
            </motion.div>

            {/* CTA */}

            <motion.div variants={item} className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Hire Talent
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </div>

          {/* RIGHT */}

          <motion.div variants={item} className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white">
                  Why Startups Choose Roxxon
                </h3>

                <p className="mt-3 text-slate-300">
                  Fast hiring. Technical expertise. Transparent communication.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
                  >
                    <div className="text-4xl font-bold text-cyan-400">
                      <CountUp end={stat.value} duration={2.5} />
                      {stat.suffix}
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {stat.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-cyan-400" size={22} />

                  <span className="font-semibold text-white">
                    AI-Assisted Recruitment
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  We combine experienced recruiters with AI-assisted sourcing,
                  intelligent Boolean search, and talent mapping to deliver
                  highly relevant candidates faster without compromising hiring
                  quality.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
