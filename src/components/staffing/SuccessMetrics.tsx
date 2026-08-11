"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Clock3,
  Users,
  BrainCircuit,
  Globe2,
  BadgeCheck,
  BriefcaseBusiness,
} from "lucide-react";

const metrics = [
  {
    icon: Clock3,
    value: 48,
    suffix: " Hrs",
    title: "Average Candidate Submission",
    description:
      "Rapid sourcing through AI-assisted recruitment and proactive talent pipelines.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: BadgeCheck,
    value: 95,
    suffix: "%",
    title: "Offer Acceptance",
    description:
      "Candidate engagement and transparent communication throughout the hiring journey.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    title: "Technology Professionals",
    description:
      "Growing network of experienced engineers across modern technologies.",
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    icon: Globe2,
    value: 2,
    suffix: " Countries",
    title: "Hiring Presence",
    description:
      "Supporting startups and enterprises across the United States and India.",
    color: "from-orange-500 to-pink-600",
  },
  {
    icon: BrainCircuit,
    value: 100,
    suffix: "%",
    title: "AI-Assisted Recruitment",
    description:
      "Modern sourcing workflows powered by AI with experienced recruiter oversight.",
    color: "from-sky-500 to-cyan-600",
  },
  {
    icon: BriefcaseBusiness,
    value: 4,
    suffix: "+ Models",
    title: "Flexible Workforce Solutions",
    description:
      "Contract, Permanent, Dedicated Recruiters and Recruitment Process Outsourcing.",
    color: "from-indigo-500 to-blue-600",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function SuccessMetrics() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-100 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-100 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Recruitment That Delivers Results
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Built for Speed.
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Trusted for Quality.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine experienced recruiters, AI-powered sourcing, and deep
            technology expertise to help businesses hire exceptional talent
            efficiently.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${metric.color} p-4 text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <div className="mt-8">
                  <h3 className="text-5xl font-bold text-slate-900">
                    <CountUp end={metric.value} duration={2.5} />

                    {metric.suffix}
                  </h3>

                  <h4 className="mt-5 text-xl font-semibold text-slate-900">
                    {metric.title}
                  </h4>

                  <p className="mt-4 leading-7 text-slate-600">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing Statement */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mx-auto mt-24 max-w-4xl rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white">
            Ready to Build Your Next Engineering Team?
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Whether you're hiring a single software engineer or scaling an
            entire product organization, Roxxon helps you connect with
            exceptional technology professionals across the United States and
            India.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-cyan-300">
            <span>Contract Staffing</span>
            <span>•</span>
            <span>Permanent Hiring</span>
            <span>•</span>
            <span>Dedicated Recruiters</span>
            <span>•</span>
            <span>RPO Solutions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
