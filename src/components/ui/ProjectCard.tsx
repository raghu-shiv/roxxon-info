"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock, Sparkles } from "lucide-react";

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
  const projectLinkClass =
    "inline-flex min-h-11 items-center gap-2 rounded-lg font-semibold text-cyan-300 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:transition-none";

  return (
    <article
      className={[
        "group relative h-full overflow-hidden rounded-3xl border border-white/10",
        "bg-slate-900/80 shadow-lg shadow-black/10",
        "transition-[border-color,box-shadow,transform] duration-300",
        "hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-950/20",
        "motion-reduce:transform-none motion-reduce:transition-none",
        featured ? "lg:grid lg:grid-cols-[1.15fr_0.85fr]" : "flex flex-col",
      ].join(" ")}
    >
      <div
        className={[
          "relative isolate overflow-hidden bg-slate-800",
          featured
            ? "aspect-[16/10] lg:aspect-auto lg:min-h-[440px]"
            : "aspect-[16/10]",
        ].join(" ")}
      >
        <Image
          src={project.images[0]}
          alt={`${project.name} project screenshot`}
          fill
          priority={featured}
          sizes={
            featured
              ? "(min-width: 1024px) 58vw, 100vw"
              : "(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
          }
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/10"
        />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-5 sm:top-5">
          <span className="rounded-full border border-cyan-300/25 bg-slate-950/85 px-3 py-1.5 text-xs font-semibold text-cyan-200 backdrop-blur-md">
            {project.category}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <Sparkles size={13} className="text-cyan-300" />
              Featured
            </span>
          )}
        </div>

        <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div
        className={[
          "flex min-w-0 flex-1 flex-col p-5 sm:p-7",
          featured ? "lg:justify-center lg:p-8 xl:p-10" : "",
        ].join(" ")}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
          {project.category}
        </p>

        <h3
          className={[
            "mt-3 font-bold tracking-tight text-white",
            featured ? "text-3xl sm:text-4xl" : "text-2xl",
          ].join(" ")}
        >
          {project.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechnologyChip key={technology.id} technology={technology} />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 mt-6">
          {project.url ? (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} (opens in a new tab)`}
              className={projectLinkClass}
            >
              Visit Project
              <ArrowUpRight size={18} />
            </Link>
          ) : (
            <span className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-slate-400">
              <Lock size={17} aria-hidden="true" />
              Private Project
            </span>
          )}

          <span className="text-xs font-medium text-slate-500">
            {project.status === "Live" ? "Live project" : "Portfolio preview"}
          </span>
        </div>
      </div>
    </article>
  );
}
