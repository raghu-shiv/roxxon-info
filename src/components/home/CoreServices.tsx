"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code2,
  Smartphone,
  Users,
} from "lucide-react";

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
    href: "/services/software-development",
    gradient: "from-cyan-500 to-blue-600",
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
    href: "/workforce-solutions",
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Build intelligent products using Generative AI, automation and modern AI workflows.",
    features: ["OpenAI", "Automation", "LLMs", "AI Integration"],
    href: "/services/ai",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description:
      "Modern cloud infrastructure, DevOps, CI/CD and scalable deployment pipelines.",
    features: ["AWS", "Azure", "Docker", "Kubernetes"],
    href: "/services/cloud",
    gradient: "from-orange-500 to-pink-600",
  },
];

export default function CoreServices() {
  return (
    <Section className="bg-slate-950 text-white">
      <SectionHeader
        badge="Core Services"
        title="Technology Services"
        highlight="Built for Modern Businesses"
        description="From software engineering to AI-powered workforce solutions, Roxxon delivers technology services that help organizations innovate, scale and grow."
      />

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
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
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:shadow-2xl"
            >
              {/* Hover Gradient */}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />

              {/* Icon */}

              <div
                className={`inline-flex rounded-2xl bg-gradient-to-br ${service.gradient} p-4 text-white shadow-lg`}
              >
                <Icon size={30} />
              </div>

              {/* Title */}

              <h3 className="mt-8 text-3xl font-bold">{service.title}</h3>

              {/* Description */}

              <p className="mt-5 leading-8 text-slate-300">
                {service.description}
              </p>

              {/* Features */}

              <div className="mt-8 flex flex-wrap gap-3">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}

              <Link
                href={service.href}
                className="mt-10 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all group-hover:gap-4"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
