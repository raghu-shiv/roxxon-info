"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Users,
  Clock3,
  SearchCheck,
  ShieldCheck,
  MessageCircleMore,
} from "lucide-react";

const features = [
  {
    title: "AI-Assisted Talent Sourcing",
    description:
      "We combine experienced recruiters with AI-powered sourcing, intelligent Boolean search and talent mapping to identify high-quality candidates faster.",
    icon: BrainCircuit,
  },
  {
    title: "Dedicated Recruiters",
    description:
      "Work with recruiters who understand your hiring goals, engineering culture and technology stack.",
    icon: Users,
  },
  {
    title: "Fast Candidate Delivery",
    description:
      "Receive qualified candidate profiles quickly through proactive sourcing and pre-built talent pipelines.",
    icon: Clock3,
  },
  {
    title: "Technical Screening",
    description:
      "Candidates are evaluated for technical capability, communication skills and role alignment before submission.",
    icon: SearchCheck,
  },
  {
    title: "Quality Over Quantity",
    description:
      "We focus on presenting a carefully curated shortlist instead of flooding your inbox with resumes.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Communication",
    description:
      "Regular updates, clear timelines and a collaborative hiring process from requirement to onboarding.",
    icon: MessageCircleMore,
  },
];

export default function WhyRoxxon() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Why Roxxon
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            More Than Recruitment.
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Hiring Partner.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We help startups and growing businesses hire exceptional technology
            talent through a recruitment process focused on quality, speed and
            long-term success.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition
                "
              >
                <div className="inline-flex rounded-2xl bg-cyan-500/10 p-4">
                  <Icon size={30} className="text-cyan-400" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
