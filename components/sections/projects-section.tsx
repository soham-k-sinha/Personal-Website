"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { Section, SectionHeader } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { featuredProjects, earlierProjects, Project } from "@/data/projects";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDetailsClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <Section id="projects">
      <AnimatedSection>
        <SectionHeader
          title="Featured Projects"
          description="Search engines, retrieval systems, hackathon builds, and a startup. Open any project for the engineering decisions and tradeoffs behind it."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDetailsClick={() => handleDetailsClick(project)}
            />
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-zinc-500">
          Earlier projects:{" "}
          {earlierProjects.map((project, index) => (
            <span key={project.title}>
              {index > 0 && " · "}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title={project.oneLiner}
                aria-label={`${project.title} on GitHub`}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {project.title}
              </a>
            </span>
          ))}
        </p>
      </AnimatedSection>
      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </Section>
  );
}
