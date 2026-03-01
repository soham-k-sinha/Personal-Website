export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  dateRange: string;
  description?: string;
  bullets: string[];
  technologies?: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "ml-intern-finarkein",
    role: "Machine Learning Intern",
    organization: "Finarkein Analytics Pvt. Ltd.",
    location: "Remote",
    dateRange: "Jul - Aug 2025",
    bullets: [
      "Enhanced text classification model accuracy from 67% to 90% by cleaning 100k+ data points, experimenting with tokenization, and fine-tuning BERT variants with Hugging Face",
      "Engineered ML models from scratch, optimizing the full pipeline from data ingestion to evaluation—reduced model training time by 50%",
      "Deployed an email extraction API with FastAPI and OpenAI APIs, improving operational efficiency",
    ],
    technologies: ["Python", "BERT", "Hugging Face", "FastAPI", "OpenAI"],
  },
  {
    id: "swe-intern-a79",
    role: "Software Engineering Intern",
    organization: "A79.ai",
    location: "Remote",
    dateRange: "May - Aug 2025",
    bullets: [
      "Developed and deployed AI workflows for pharma leaders (Pfizer, Merck): deep research extraction agent for clinical trial research and forecasting agent for drug NPS",
      "Delivered scalable, client-facing AI solutions that streamlined research and forecasting, simplified complex calculations, and enhanced data-driven decision-making; used Docker for deployment",
    ],
    technologies: ["Python", "AI Agents", "Docker", "LLMs"],
  },
  {
    id: "ai-intern-brijbasi",
    role: "AI Intern",
    organization: "Brijbasi Fire Safety Systems Pvt. Ltd.",
    location: "Mumbai, India",
    dateRange: "Jun 2023",
    bullets: [
      "Collaborated with industry professionals to assess applications of AI and physics in firefighting",
      "Delivered a report guiding the company on opportunities and challenges of integrating AI/ML into the industry",
    ],
    technologies: ["Python", "AI/ML", "Research"],
  },
  {
    id: "intern-rubix",
    role: "Intern",
    organization: "Rubix Data Sciences Pvt. Ltd.",
    location: "Remote",
    dateRange: "Jul 2023",
    bullets: [
      "Led a 3-member intern team to build a PDF parsing program using Python (OpenCV and PyTesseract) and Java",
      "Achieved 95% accuracy and reduced manual data entry, with multi-format information extraction",
    ],
    technologies: ["Python", "Java", "OpenCV", "PyTesseract"],
  },
  {
    id: "uca-cics110",
    role: "Undergraduate Course Assistant",
    organization: "Manning College of Information and Computer Sciences, UMass Amherst",
    location: "Amherst, MA",
    dateRange: "Sep 2025 - Present",
    description: "Supporting CICS 110 — introductory computer science",
    bullets: [
      "Supporting 300+ students in foundational CS concepts, programming fundamentals, and problem-solving",
      "Host office hours for debugging, project ideas, and concept support",
      "Collaborate with instructors and other UCAs to refine course materials and create engaging resources",
    ],
    technologies: ["Java", "Python", "Teaching"],
  },
];
