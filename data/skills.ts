export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL", "C"],
  },
  {
    label: "AI/ML",
    items: [
      "AI Agents",
      "LLMs",
      "ML & AI",
      "NLP",
      "Hugging Face",
      "BERT",
      "Deep Learning",
    ],
  },
  {
    label: "Backend & APIs",
    items: ["FastAPI", "Flask", "Git", "Docker", "Firebase"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js"],
  },
  {
    label: "Other",
    items: [
      "System Design",
      "Computational Proofs",
      "Statistics",
      "Linear Algebra",
      "Data Structures & Algorithms",
    ],
  },
];

export const whatIBuild = [
  {
    title: "AI/ML Systems",
    description:
      "Building intelligent systems from data to deployment. Specializing in NLP, agentic workflows, fine-tuning, and production APIs.",
    bullets: [
      "Multi-step AI agentic workflows and LLM-powered applications",
      "End-to-end ML pipelines: data cleaning, training, and evaluation",
      "Fine-tuning and optimizing models (e.g. BERT) for real-world accuracy",
      "FastAPI and Docker for scalable, production-ready services",
    ],
  },
  {
    title: "Full-Stack AI Products",
    description:
      "Shipping 0→1 products that combine AI with great UX. From browser extensions to financial and automation tools.",
    bullets: [
      "Chrome extensions and web apps with React and Next.js",
      "Conversational interfaces and data visualization powered by LLMs",
      "Real-time pipelines and collaborative features",
      "Cross-platform automation (e.g. desktop workflows, Apple Shortcuts)",
    ],
  },
  {
    title: "Impact & Collaboration",
    description:
      "Seeking a summer internship in technology—data and computer science. Growth mindset, integrity, and commitment to building things that matter.",
    bullets: [
      "Teaching and mentoring: UCA for 300+ students in introductory CS",
      "Team leadership: led intern teams on PDF parsing and data extraction",
      "Clear communication and collaboration with instructors and stakeholders",
      "Analytical, research-oriented approach with a strong mathematical background",
    ],
  },
];
