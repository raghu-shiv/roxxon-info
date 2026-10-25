"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/projects";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeaturedProjects() {
  const reduceMotion = useReducedMotion();

  const featuredProject =
    projects.find((project) => project.featured) ?? projects[0];

  const otherProjects = projects.filter(
    (project) => project.id !== featuredProject?.id,
  );

  if (!featuredProject) return null;

  return (
    <Section className="bg-slate-950 text-white">
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]"
        />

        <SectionHeader
          tone="dark"
          badge="Featured Work"
          title="Ideas Made"
          highlight="Real."
          description="Explore digital products, business platforms and intelligent solutions built to solve real problems."
        />

        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8"
        >
          <motion.div
            variants={reduceMotion ? undefined : item}
            className="md:col-span-2"
          >
            <ProjectCard project={featuredProject} featured />
          </motion.div>

          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={reduceMotion ? undefined : item}
              className="min-w-0"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <Sparkles size={22} className="text-cyan-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Have a project in mind?
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                Let&apos;s discuss the right approach for your next build.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </Section>
  );
}
