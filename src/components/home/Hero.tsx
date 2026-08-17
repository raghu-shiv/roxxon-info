"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  BadgeCheck,
  Cloud,
  Code2,
  Users,
  Sparkles,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiOpenai,
  SiAmazonwebservices,
} from "react-icons/si";

import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const trustItems = [
  "Startup Focused",
  "USA & India",
  "AI Assisted",
  "Cloud Ready",
];

const services = [
  "Software Development",
  "Workforce Solutions",
  "AI Solutions",
  "Cloud Engineering",
];

const technologies = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "AWS",
    icon: SiAmazonwebservices,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "OpenAI",
    icon: SiOpenai,
  },
];

const dashboardStats = [
  {
    title: "Engineering",
    value: "Software",
    icon: Code2,
  },
  {
    title: "Delivery",
    value: "USA + India",
    icon: Cloud,
  },
  {
    title: "Hiring",
    value: "AI Powered",
    icon: BrainCircuit,
  },
];

const aiInsights = [
  {
    title: "AI matched 24 software engineers",
    description: "Based on your technology stack and hiring requirements.",
  },
  {
    title: "Cloud migration specialists available",
    description: "Certified AWS and Azure engineers ready for deployment.",
  },
  {
    title: "New React talent identified",
    description: "Senior frontend developers available immediately.",
  },
  {
    title: "Hiring pipeline updated",
    description: "15 qualified candidates ready for client interviews.",
  },
];

export default function Hero() {
  const [activeInsight, setActiveInsight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % aiInsights.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Orbs */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Badge */}

            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
                <Sparkles size={16} />
                Building Digital Products & Engineering Teams
              </span>
            </motion.div>

            {/* Heading */}

            <motion.div variants={fadeUp} className="mt-8">
              <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white lg:text-7xl">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease,
                  }}
                  className="block"
                >
                  Building
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.6,
                    ease,
                  }}
                  className="block"
                >
                  Digital Products
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.6,
                    ease,
                  }}
                  className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent"
                >
                  & Engineering Teams
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Roxxon partners with startups and growing businesses to deliver
              modern software solutions, AI-powered digital products, cloud
              engineering, and technology workforce solutions that accelerate
              innovation and business growth.
            </motion.p>

            {/* CTA */}

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-5"
            >
              <Button
                href="/services"
                className="shadow-cyan-500/40 hover:shadow-cyan-500/70"
              >
                Explore Services
              </Button>

              <Button href="/contact">Book Consultation</Button>
            </motion.div>

            {/* Trust Bar */}

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <CheckCircle2 size={16} className="text-cyan-400" />

                  {item}
                </div>
              ))}
            </motion.div>

            {/* Services */}

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              {services.map((service) => (
                <motion.div
                  key={service}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition"
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>

            {/* Technology Logos */}

            <motion.div variants={fadeUp} className="mt-12">
              <p className="mb-5 text-sm uppercase tracking-[0.2em] text-slate-500">
                Technologies We Work With
              </p>

              <div className="flex flex-wrap gap-4">
                {technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      whileHover={{
                        y: -5,
                        scale: 1.08,
                      }}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl transition-all"
                    >
                      <Icon
                        size={22}
                        className="text-slate-300 transition group-hover:text-cyan-400"
                      />

                      <span className="font-medium text-slate-200">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Experience Card */}

            <motion.div variants={fadeUp} className="mt-12">
              <GlassCard className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-slate-400">Experience Across</p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Software Engineering & Talent Solutions
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-5xl font-black text-cyan-400">
                    <CountUp end={10} duration={2} />+
                  </div>

                  <p className="text-sm text-slate-400">
                    Combined Team Experience
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
          {/* RIGHT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease,
              }}
              className="absolute -top-5 right-6 z-20 hidden lg:block"
            >
              <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 backdrop-blur-xl shadow-xl">
                🚀 Delivering Innovation
              </div>
            </motion.div>

            <GlassCard className="relative overflow-hidden p-8">
              {/* Glow */}

              <div className="absolute -right-28 -top-28 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />

              {/* Header */}

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    Technology Delivery Dashboard
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Roxxon Intelligence
                  </h3>
                </div>

                <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">
                  Online
                </div>
              </div>

              {/* Dashboard Stats */}

              <div className="mt-10 grid grid-cols-3 gap-5">
                {dashboardStats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        y: -5,
                        scale: 1.03,
                      }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                    >
                      <div className="inline-flex rounded-xl bg-cyan-500/10 p-3">
                        <Icon size={22} className="text-cyan-400" />
                      </div>

                      <h4 className="mt-5 text-lg font-bold text-white">
                        {item.value}
                      </h4>

                      <p className="mt-2 text-sm text-slate-400">
                        {item.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress */}

              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "Software Engineering",
                    status: "Active",
                  },
                  {
                    title: "Cloud Engineering",
                    status: "Available",
                  },
                  {
                    title: "AI Workforce",
                    status: "Enabled",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="mb-3 flex justify-between">
                      <span className="font-medium text-slate-300">
                        {item.title}
                      </span>

                      <span className="font-semibold text-cyan-400">
                        {item.status}
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: `${item.status}`,
                        }}
                        transition={{
                          duration: 1.2,
                          ease,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Rotating AI Insight */}

              <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="text-cyan-400" size={22} />

                  <span className="font-semibold text-white">
                    AI Recommendation
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeInsight}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  >
                    <h4 className="mt-5 text-lg font-semibold text-white">
                      {aiInsights[activeInsight].title}
                    </h4>

                    <p className="mt-3 leading-7 text-slate-300">
                      {aiInsights[activeInsight].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Capability Cards */}

              <div className="mt-10 grid grid-cols-2 gap-5">
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="text-green-400" size={22} />

                    <div>
                      <h4 className="font-semibold text-white">
                        Enterprise Ready
                      </h4>

                      <p className="text-sm text-slate-400">
                        Secure & Scalable
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center gap-3">
                    <Users className="text-cyan-400" size={22} />

                    <div>
                      <h4 className="font-semibold text-white">
                        Engineering Teams
                      </h4>

                      <p className="text-sm text-slate-400">Ready to Scale</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom */}

              <div className="mt-10 rounded-2xl bg-slate-900/60 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      Let's build your next product.
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-white">
                      Software • AI • Workforce
                    </h4>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </section>
  );
}
