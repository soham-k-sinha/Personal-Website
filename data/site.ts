export interface Metric {
  label: string;
  value: string;
}

export interface Social {
  github: string;
  linkedin: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  headline: string;
  subheadline: string;
  tagline: string;
  proofChips: string[];
  metrics: Metric[];
  socials: Social;
  resume: string;
  url: string;
}

export const siteConfig: SiteConfig = {
  name: "Soham Sinha",
  headline: "AI Systems Engineer • CS & Math @ UMass Amherst",
  subheadline: "Designing and deploying intelligent systems at the intersection of machine learning and software engineering, from multi-step LLM workflows and fine-tuned models to scalable APIs and production-grade infrastructure.",
  tagline: "Shipping AI that delivers measurable impact",
  proofChips: [
    "TartanHacks '26 Winner",
    "Gold Medalist HackImpact '23",
    "Chancellor's Award",
    "Dean's List",
  ],
  metrics: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Shipped", value: "6+" },
    { label: "Internships", value: "5+" },
    { label: "GPA", value: "4.0" },
  ],
  socials: {
    github: "https://github.com/soham-k-sinha",
    linkedin: "https://www.linkedin.com/in/soham-sinha111/",
    email: "sohamkundan@gmail.com",
  },
  resume: "https://drive.google.com/file/d/1gXqYhX0ciNq-qjZfJHp69_hnfwNPDRnc/view?usp=drive_link",
  url: "https://yoursite.com",
};
