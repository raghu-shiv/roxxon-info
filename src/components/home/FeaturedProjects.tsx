"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import CapabilityCard from "@/components/ui/CapabilityCard";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

const otherProjects = projects.filter(
  (project) => project.id !== featuredProject.id,
);

export default function FeaturedProjects() {
  return (
    <Section className="bg-slate-950">
      <SectionHeader
        badge="Featured Work"
        title="Selected"
        highlight="Projects"
        description="
        A selection of software products,
        AI solutions,
        business applications and digital experiences
        delivered by Roxxon.
        "
      />

      <div className="mt-20 grid gap-6 lg:grid-cols-12">
        <ProjectCard project={featuredProject} featured />

        <CapabilityCard />

        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
