"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BrainCircuit,
  Code2,
  Rocket,
  Handshake,
  ShieldCheck,
  BadgeCheck,
  Cloud,
  Users,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const reasons = [
  {
    icon: BrainCircuit,
    title: "AI-First Delivery",
    description:
      "We leverage AI throughout software development and recruitment to improve speed, quality and decision-making.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Code2,
    title: "Modern Engineering",
    description:
      "Our team builds scalable products using modern frameworks, cloud-native architecture and engineering best practices.",
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    icon: Rocket,
    title: "Startup Mindset",
    description:
      "Fast execution, rapid iterations and practical solutions designed for growing businesses and ambitious founders.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We work as an extension of your team, focusing on transparency, collaboration and measurable business outcomes.",
    gradient: "from-orange-500 to-pink-600",
  },
];

const capabilities = [
  {
    title: "Software Engineering",
    status: "Active",
    icon: Code2,
    color: "bg-emerald-500",
  },
  {
    title: "Cloud Engineering",
    status: "Available",
    icon: Cloud,
    color: "bg-cyan-500",
  },
  {
    title: "AI Solutions",
    status: "Ready",
    icon: BrainCircuit,
    color: "bg-violet-500",
  },
  {
    title: "Workforce Solutions",
    status: "Hiring",
    icon: Users,
    color: "bg-orange-500",
  },
];

export default function WhyRoxxon() {
  return (
    <Section className="bg-white">
      <SectionHeader
        badge="Why Roxxon"
        title="Technology Built Around"
        highlight="Business Outcomes"
        description="We don't just deliver software or recruit talent—we build long-term partnerships that help businesses innovate, scale and succeed."
      />

      <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}

        <div className="space-y-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  x: 8,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  hover:shadow-xl
                "
              >
                <div className="flex gap-6">
                  <div
                    className={`
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      ${reason.gradient}
                      text-white
                    `}
                  >
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {reason.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="relative"
        >
          {/* Glow */}

          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-100 blur-[120px]" />

          {/* Dashboard */}

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-100 p-6">
              <div>
                <p className="text-sm text-slate-500">Technology Operations</p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  Delivery Dashboard
                </h3>
              </div>

              <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                ● Online
              </div>
            </div>

            {/* Cards */}

            <div className="mt-10 space-y-4">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      x: 5,
                      scale: 1.01,
                    }}
                    className="
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-5
          backdrop-blur-xl
        "
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-cyan-500/10 p-3">
                        <Icon size={22} className="text-cyan-400" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>

                        <p className="text-sm text-slate-400">
                          Technology Capability
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`h-3 w-3 rounded-full ${item.color}`} />

                      <span className="text-sm font-medium text-slate-300">
                        {item.status}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Technology */}

            <div className="border-t border-slate-100 p-8">
              <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-500">
                Technology
              </p>

              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "AWS", "Docker", "OpenAI", "Azure"].map(
                  (tech) => (
                    <div
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-cyan-50 hover:border-cyan-300"
                    >
                      {tech}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Footer */}

            <div className="border-t border-slate-100 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Active Projects</p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {["Software", "Cloud", "AI", "Staffing"].map((item) => (
                      <span
                        key={item}
                        className="
        rounded-full
        bg-cyan-100
        px-4
        py-2
        text-sm
        font-semibold
        text-cyan-700
      "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-cyan-500 px-6 py-4 text-white">
                  Building the Future
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
    absolute
    -left-8
    top-20
    rounded-2xl
    border
    border-white/20
    bg-white/90
    p-5
    shadow-xl
    backdrop-blur-xl
  "
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-cyan-100 p-3">
                <BrainCircuit size={22} className="text-cyan-600" />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">AI Driven</h4>

                <p className="text-sm text-slate-500">Smart Delivery</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
    absolute
    -right-8
    bottom-28
    rounded-2xl
    border
    border-white/20
    bg-white/90
    p-5
    shadow-xl
    backdrop-blur-xl
  "
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-100 p-3">
                <Cloud size={22} className="text-blue-600" />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Cloud Native</h4>

                <p className="text-sm text-slate-500">AWS • Azure</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
    absolute
    bottom-0
    left-24
    rounded-2xl
    border
    border-white/20
    bg-white/90
    p-5
    shadow-xl
    backdrop-blur-xl
  "
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-emerald-100 p-3">
                <Users size={22} className="text-emerald-600" />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Engineering Teams
                </h4>

                <p className="text-sm text-slate-500">Ready to Scale</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom CTA */}

      <motion.div
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
        className="mt-24 text-center"
      >
        <Button href="/about">Discover Our Story</Button>
      </motion.div>
    </Section>
  );
}
