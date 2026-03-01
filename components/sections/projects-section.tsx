"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { Section, SectionHeader } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { featuredProjects, Project } from "@/data/projects";

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
          description="Building intelligent systems and scalable infrastructure. From ML research to production deployments."
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
      </AnimatedSection>
      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </Section>
  );
}
