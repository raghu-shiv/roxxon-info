"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  UserCheck,
  Users,
  BrainCircuit,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Building2,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Contract Staffing",
    description:
      "Quickly scale your engineering team with experienced software developers, cloud engineers, DevOps specialists, QA engineers, AI engineers and data professionals.",
    icon: BriefcaseBusiness,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Permanent Hiring",
    description:
      "Build long-term engineering teams with carefully screened professionals who align with your technology stack and company culture.",
    icon: UserCheck,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Dedicated Recruitment",
    description:
      "Extend your hiring team with experienced recruiters who manage sourcing, screening, interview coordination and offer management.",
    icon: Users,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI Assisted Recruitment",
    description:
      "We combine recruiter expertise with AI-powered sourcing, talent mapping and intelligent Boolean search to reduce time-to-hire.",
    icon: BrainCircuit,
    gradient: "from-orange-500 to-pink-500",
  },
];

const features = [
  {
    title: "Startup Specialists",
    description:
      "We understand startup hiring challenges including speed, budget and scalability.",
    icon: Building2,
  },
  {
    title: "Fast Turnaround",
    description:
      "Qualified profiles delivered within days through proactive sourcing and talent pipelines.",
    icon: Clock3,
  },
  {
    title: "Quality Screening",
    description:
      "Technical, communication and culture-fit assessments before candidate submission.",
    icon: ShieldCheck,
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
      duration: 0.55,
    },
  },
};

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-44 left-0 h-96 w-96 rounded-full bg-cyan-100 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Workforce Solutions Built for
            <span className="block text-cyan-600">
              Fast Growing Technology Companies
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're hiring your first engineer or expanding an
            established product team, Roxxon delivers highly qualified
            technology professionals through flexible staffing models designed
            for startups and enterprises.
          </p>
        </motion.div>

        {/* Service Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mt-20 grid gap-8 lg:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                variants={item}
                key={service.title}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${service.gradient} p-4 text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-semibold text-cyan-700 transition hover:gap-4"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Why Roxxon */}

        <div className="mt-28 grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Why Roxxon
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Recruitment That Moves
              <span className="block text-cyan-600">
                As Fast As Your Startup
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              We don't just source resumes. We build relationships with highly
              skilled technology professionals and combine AI-assisted
              recruiting with experienced talent consultants to help startups
              hire better and faster.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
            >
              Start Hiring Today
            </Link>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="space-y-6"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  variants={item}
                  whileHover={{
                    x: 10,
                  }}
                  key={feature.title}
                  className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="rounded-xl bg-cyan-100 p-4">
                    <Icon size={24} className="text-cyan-700" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </h4>

                    <p className="mt-3 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
