import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ResumeLayout } from "@/components/resume/layout";
import { ResumeSection } from "@/components/resume/section";
import { ResumeEntry } from "@/components/resume/entry";
import { siteConfig } from "@/data/site";
import { experienceItems } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { Download, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume - ${siteConfig.name}`,
  description: `Resume and professional experience of ${siteConfig.name}`,
};

export default function ResumePage() {
  return (
    <div className="container max-w-5xl py-12 print:py-0">
      {/* Action Buttons - Hidden on Print */}
      <div className="flex justify-between items-center mb-8 print:hidden">
        <Link href="/">
          <Button variant="ghost">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <a
          href={siteConfig.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <Download className="h-4 w-4 mr-2" />
            View Resume
          </Button>
        </a>
      </div>

      <ResumeLayout>
        {/* Header */}
        <header className="text-center mb-8 print:mb-6">
          <h1 className="text-4xl font-bold mb-2 print:text-3xl">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-muted-foreground print:text-gray-700 mb-3">
            {siteConfig.headline}
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground print:text-gray-700 flex-wrap">
            <span>{siteConfig.socials.email}</span>
            <span>•</span>
            <a
              href={siteConfig.socials.github}
              className="hover:underline print:text-gray-700"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={siteConfig.socials.linkedin}
              className="hover:underline print:text-gray-700"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Summary */}
        <ResumeSection title="Summary">
          <p className="text-muted-foreground print:text-gray-700">
            Software engineer specializing in AI/ML systems and distributed infrastructure. 
            Experienced in building scalable systems from research prototypes to production 
            deployments serving millions of users. Strong track record of shipping impactful 
            products at both large tech companies and early-stage startups. Published researcher 
            with expertise in deep learning, NLP, and computer vision.
          </p>
        </ResumeSection>

        {/* Skills */}
        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h4 className="font-semibold text-sm mb-2 print:text-xs">
                  {group.label}
                </h4>
                <p className="text-sm text-muted-foreground print:text-gray-700">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Experience */}
        <ResumeSection title="Experience">
          {experienceItems.map((item) => (
            <ResumeEntry
              key={item.id}
              title={item.role}
              organization={item.organization}
              location={item.location}
              dateRange={item.dateRange}
              description={item.description}
              bullets={item.bullets}
            />
          ))}
        </ResumeSection>

        {/* Projects */}
        <ResumeSection title="Selected Projects">
          {featuredProjects.slice(0, 3).map((project) => (
            <ResumeEntry
              key={project.id}
              title={project.title}
              description={project.oneLiner}
              bullets={[
                project.problem.slice(0, 150) + "...",
                project.outcome.slice(0, 150) + "...",
              ]}
            />
          ))}
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          <ResumeEntry
            title="Bachelor of Science in Computer Science"
            organization="Your University"
            location="City, State"
            dateRange="2015 - 2019"
            bullets={[
              "GPA: 3.9/4.0",
              "Relevant Coursework: Machine Learning, Distributed Systems, Algorithms, Computer Vision",
              "Research: Published 2 papers at top-tier ML conferences (NeurIPS, ICML)",
            ]}
          />
        </ResumeSection>
      </ResumeLayout>
    </div>
  );
}
