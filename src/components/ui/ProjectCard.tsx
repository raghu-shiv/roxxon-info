"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

import { Project } from "@/lib/data/projects";
import TechnologyChip from "./TechnologyChip";
import StatusBadge from "./StatusBadge";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        shadow-xl
        ${
          featured
            ? "lg:col-span-7 lg:row-span-2 min-h-[650px]"
            : "min-h-[320px]"
        }
      `}
    >
      {/* Image */}

      <div className="absolute inset-0">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/10" />

      {/* Content */}

      <div className="relative flex h-full flex-col justify-end p-8">
        {/* Top */}

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-white">
            {project.category}
          </span>

          <StatusBadge status={project.status} />
        </div>

        {/* Title */}

        <h3
          className={`mt-6 font-black text-white ${
            featured ? "text-4xl" : "text-2xl"
          }`}
        >
          {project.name}
        </h3>

        {/* Description */}

        <p
          className={`mt-5 text-slate-300 ${
            featured ? "max-w-2xl leading-8" : "line-clamp-3 leading-7"
          }`}
        >
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <TechnologyChip key={technology.id} technology={technology} />
          ))}
        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between">
          {project.url ? (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-4"
            >
              Visit Project
              <ArrowUpRight size={18} />
            </Link>
          ) : (
            <div className="inline-flex items-center gap-2 text-slate-400">
              <Lock size={18} />
              Private Project
            </div>
          )}

          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Project
            </p>

            <p className="mt-1 font-semibold text-white">{project.category}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
