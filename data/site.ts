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
  title: string;
  description: string;
  proofChips: string[];
  metrics: Metric[];
  socials: Social;
  resume: string;
  url: string;
}

export const siteConfig: SiteConfig = {
  name: "Soham Sinha",
  headline: "Software Engineer • CS + Math @ UMass Amherst",
  subheadline: "Software engineer who loves building things from scratch, tackling hard technical problems, and turning ambitious ideas into working products. From backend systems and cloud infrastructure to AI and machine learning, I'm always looking for something challenging to build next.",
  tagline: "Software Engineer | Backend, Cloud & AI Systems",
  title: "Soham Sinha | Software Engineer & CS/Math Student at UMass Amherst",
  description: "Soham Sinha is a Computer Science and Mathematics student at UMass Amherst building backend systems, cloud infrastructure, and AI-powered products. Explore his engineering projects, internships, and hackathon wins.",
  proofChips: [
    "HackHarvard '26 Winner",
    "TartanHacks '26 Winner",
    "MIT Bitcoin Hackathon '26 Finalist",
    "4.0 GPA",
  ],
  metrics: [
    { label: "Platform Members Supported", value: "10,000+" },
    { label: "Students Supported", value: "300+" },
    { label: "Hackathon Wins", value: "3" },
    { label: "GPA", value: "4.0" },
  ],
  socials: {
    github: "https://github.com/soham-k-sinha",
    linkedin: "https://www.linkedin.com/in/soham-sinha111/",
    email: "sohamkundan@gmail.com",
  },
  resume: "https://drive.google.com/file/d/1J0eriFfmTrlsMsDWyWt7Jblsnc-n0Vgw/view?usp=sharing",
  url: "https://www.sohamsinha.me",
};
