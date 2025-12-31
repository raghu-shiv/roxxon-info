"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ProjectSlider from "./ProjectSlider";
import { Project } from "@/lib/data/projects";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border border-amber overflow-hidden shadow-amber-100 shadow-lg bg-transparent p-5"
    >
      <ProjectSlider images={project.images} />

      <div className="p-5">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xl text-primary font-semibold hover:underline"
        >
          {project.name} <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
}
