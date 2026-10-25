"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { BrainCircuit, Cloud, Code2, Users } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Design and build scalable web applications, SaaS platforms, enterprise systems and APIs using modern technologies.",
    features: [
      "Web Applications",
      "Enterprise Software",
      "SaaS Products",
      "API Development",
    ],

    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Workforce Solutions",
    description:
      "Hire experienced technology professionals through AI-assisted sourcing and modern recruitment strategies.",
    features: [
      "IT Staffing",
      "Contract Hiring",
      "Permanent Hiring",
      "Dedicated Teams",
    ],

    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Build intelligent products using Generative AI, automation and modern AI workflows.",
    features: ["OpenAI", "Automation", "LLMs", "AI Integration"],

    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description:
      "Modern cloud infrastructure, DevOps, CI/CD and scalable deployment pipelines.",
    features: ["AWS", "Azure", "Docker", "Kubernetes"],

    gradient: "from-orange-500 to-pink-500",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function CoreServices() {
  const reduceMotion = useReducedMotion();

  return (
    <Section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <SectionHeader
        tone="dark"
        badge="Core Services"
        title="Technology Services"
        highlight="Built for Modern Businesses"
        description="From software engineering to AI-powered workforce solutions, Roxxon delivers technology services that help organizations innovate, scale and grow."
      />

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-14 grid gap-6 md:grid-cols-2 xl:gap-8"
      >
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              variants={reduceMotion ? undefined : cardVariants}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-950/20 sm:p-8 motion-reduce:transition-none"
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.08] motion-reduce:transition-none`}
              />

              <div className="relative flex flex-1 flex-col">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                >
                  <Icon size={27} aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 sm:text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
