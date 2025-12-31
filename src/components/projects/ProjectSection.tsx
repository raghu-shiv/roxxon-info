"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export default function ProjectSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
