"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  "React",
  "Next.js",
  "Angular",
  "Vue.js",
  "Node.js",
  "Express",
  "NestJS",
  "Python",
  "Django",
  "FastAPI",
  "Java",
  "Spring Boot",
  ".NET",
  "C#",
  "PHP",
  "Laravel",
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Jenkins",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Snowflake",
  "Kafka",
  "GraphQL",
  "REST APIs",
  "OpenAI",
  "LangChain",
  "Vector DB",
  "Machine Learning",
  "Generative AI",
  "LLMs",
];

const categories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: "React • Next.js • Angular • Vue",
  },
  {
    icon: Database,
    title: "Backend",
    skills: "Node • Java • Python • .NET",
  },
  {
    icon: Cloud,
    title: "Cloud",
    skills: "AWS • Azure • GCP • Kubernetes",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data",
    skills: "OpenAI • ML • LangChain • LLMs",
  },
  {
    icon: ShieldCheck,
    title: "DevOps",
    skills: "Docker • Terraform • CI/CD",
  },
  {
    icon: Cpu,
    title: "QA & Automation",
    skills: "Selenium • Cypress • Playwright",
  },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Technology Expertise
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Hire Engineers Across
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Modern Technology Stacks
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Whether you're building SaaS products, AI platforms, fintech
            solutions or enterprise software, Roxxon connects you with
            experienced technology professionals across today's most in-demand
            skills.
          </p>
        </motion.div>

        {/* Categories */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="inline-flex rounded-2xl bg-cyan-500/10 p-4">
                  <Icon className="text-cyan-400" size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">{item.skills}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Cloud */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-24"
        >
          <h3 className="text-center text-3xl font-bold text-white">
            Technologies We Recruit For
          </h3>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.03,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                className="
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-white/5
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  backdrop-blur-lg
                  transition
                  hover:border-cyan-400
                  hover:bg-cyan-500/10
                "
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
