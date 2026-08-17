"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Cloud, BrainCircuit, Users, CheckCircle2 } from "lucide-react";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Variants } from "framer-motion";

const pillars = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Custom web platforms, enterprise software, SaaS products and scalable applications built with modern technologies.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud-native architecture, CI/CD, infrastructure automation and secure deployments for modern businesses.",
  },
  {
    icon: BrainCircuit,
    title: "AI Powered Solutions",
    description:
      "Integrate Generative AI, automation and intelligent workflows to accelerate innovation.",
  },
  {
    icon: Users,
    title: "Workforce Solutions",
    description:
      "Build high-performing engineering teams through AI-assisted recruitment and technology staffing.",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhoWeAre() {
  return (
    <Section className="bg-white">
      <SectionHeader
        badge="Who We Are"
        title="Technology That"
        highlight="Powers Business Growth"
        description="Roxxon combines software engineering, cloud technologies, AI and workforce solutions to help organizations build, scale and transform with confidence."
      />

      <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          <h3 className="text-4xl font-bold text-slate-900 leading-tight">
            We Build Technology
            <span className="block text-cyan-600">That Builds Businesses.</span>
          </h3>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Whether you're launching a startup, modernizing enterprise systems,
            migrating to the cloud, or building a high-performing engineering
            team, Roxxon delivers practical technology solutions backed by
            experienced professionals.
          </p>

          <div className="mt-10 space-y-6">
            {[
              "Modern Software Development",
              "Cloud & Infrastructure Engineering",
              "AI & Intelligent Automation",
              "Technology Workforce Solutions",
            ].map((item) => (
              <motion.div
                whileHover={{
                  x: 8,
                }}
                key={item}
                className="flex items-center gap-4"
              >
                <CheckCircle2 size={22} className="text-cyan-500" />

                <span className="text-lg text-slate-700">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/about">Learn More About Us</Button>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="relative"
        >
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-cyan-100 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl">
            <Image
              src="/images/services.svg"
              alt="Technology Solutions"
              width={700}
              height={700}
              className="mx-auto"
            />
          </div>
        </motion.div>
      </div>

      {/* Pillars */}

      <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <motion.div
              key={pillar.title}
              initial={{
                opacity: 0,
                y: 30,
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
                y: -8,
              }}
              className="
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
              <div className="inline-flex rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 text-white">
                <Icon size={28} />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {pillar.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {pillar.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
