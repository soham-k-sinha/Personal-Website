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
  title: "Resume",
  description: `Resume of ${siteConfig.name}: Computer Science and Mathematics at UMass Amherst, with software engineering experience at Siemens Energy, LUME Global, Finarkein Analytics, and NullifAI.`,
  alternates: {
    canonical: "/resume",
  },
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
            Computer Science and Mathematics student at UMass Amherst (4.0 GPA, graduating May 2028)
            who builds backend systems, cloud infrastructure, search, and applied AI/ML. Internship
            experience at Siemens Energy, LUME Global, and Finarkein Analytics; co-founder of NullifAI.
            Seeking a Summer 2027 Software Engineering internship.
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
          {featuredProjects.slice(0, 4).map((project) => (
            <ResumeEntry
              key={project.id}
              title={project.highlight ? `${project.title} — ${project.highlight}` : project.title}
              description={project.oneLiner}
              bullets={[project.outcome]}
            />
          ))}
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          <ResumeEntry
            title="B.S. in Computer Science & Mathematics (Double Major), Business Minor"
            organization="University of Massachusetts Amherst, Commonwealth Honors College"
            location="Amherst, MA"
            dateRange="Expected May 2028"
            bullets={[
              "GPA: 4.0",
              "Coursework: Data Structures & Algorithms, Systems Programming (C), SQL & Databases, Machine Learning, Artificial Intelligence, Linear Algebra, Probability & Statistics",
              "Awards: HackHarvard '26 Winner (Photon Best Voice Agent), CMU TartanHacks '26 Winner, MIT Bitcoin Hackathon '26 Finalist, HackImpact '23 Winner, Chancellor's Award, Dean's List (Fall 2024 – Spring 2026)",
            ]}
          />
        </ResumeSection>

        {/* Activities */}
        <ResumeSection title="Activities & Leadership">
          <ResumeEntry
            title="AI4ALL Ignite Fellow"
            dateRange="2026 - 2027"
            bullets={[
              "AI career accelerator with industry mentorship; selected among 200+ projects to present ML research at the AI4ALL Symposium.",
              "Worked on a seven-person team predicting mental health symptom severity from behavioral and neuroimaging data; contributed to model training, evaluation, and identifying data leakage.",
            ]}
          />
        </ResumeSection>
      </ResumeLayout>
    </div>
  );
}
