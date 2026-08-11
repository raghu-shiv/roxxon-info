"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Database,
  BrainCircuit,
  ShieldCheck,
  Server,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const roles = [
  {
    title: "Frontend Engineer",
    icon: Code2,
    technologies: ["React", "Next.js", "TypeScript"],
    type: "Contract • Permanent",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Backend Engineer",
    icon: Server,
    technologies: ["Node.js", "Java", "Python"],
    type: "Contract • Permanent",
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Cloud Engineer",
    icon: Cloud,
    technologies: ["AWS", "Azure", "Kubernetes"],
    type: "Contract • Dedicated",
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Data Engineer",
    icon: Database,
    technologies: ["Snowflake", "Kafka", "Spark"],
    type: "Contract • Permanent",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI / ML Engineer",
    icon: BrainCircuit,
    technologies: ["OpenAI", "LangChain", "LLMs"],
    type: "Contract • Permanent",
    color: "from-orange-500 to-pink-500",
  },
  {
    title: "QA Automation",
    icon: ShieldCheck,
    technologies: ["Playwright", "Cypress", "Selenium"],
    type: "Contract • Dedicated",
    color: "from-purple-500 to-fuchsia-500",
  },
];

export default function RolesSlider() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Talent We Provide
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Hire Top Technology Professionals
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From early-stage startups to enterprise organizations, we help
            companies hire experienced engineers across modern technologies.
          </p>
        </motion.div>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={28}
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {roles.map((role) => {
              const Icon = role.icon;

              return (
                <SwiperSlide key={role.title}>
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-2xl"
                  >
                    <div
                      className={`inline-flex rounded-2xl bg-gradient-to-br ${role.color} p-4 text-white shadow-lg`}
                    >
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-slate-900">
                      {role.title}
                    </h3>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {role.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 rounded-2xl bg-slate-50 p-4">
                      <p className="text-sm font-medium text-slate-500">
                        Hiring Models
                      </p>

                      <p className="mt-2 font-semibold text-slate-900">
                        {role.type}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-700 transition-all group-hover:gap-4"
                    >
                      Request Talent
                      <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
