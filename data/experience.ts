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
    id: "cofounder-nullifai",
    role: "Co-Founder & Software Engineer",
    organization: "NullifAI",
    location: "Amherst, MA",
    dateRange: "Feb 2026 - Present",
    bullets: [
      "Co-founded a SaaS platform automating digital product feedback, reducing workflows that traditionally take 2–4 weeks to automated evaluations completed in minutes.",
      "Built a multi-agent evaluation backend with parallel Playwright workers, simulated user personas, structured agent debate, and Pydantic validation; runs cost approximately $1.90.",
    ],
    technologies: ["Python", "FastAPI", "Playwright", "Pydantic", "LLMs", "AI Agents"],
  },
  {
    id: "swe-intern-lume",
    role: "Software Engineer Intern",
    organization: "LUME Global",
    location: "Part-time — Mumbai, India",
    dateRange: "Jun - Aug 2026",
    bullets: [
      "Architected the backend, PostgreSQL data model, and AWS infrastructure for a platform supporting 10,000+ members, integrating five vendor systems through a 32-table schema and unified identity model.",
      "Built and deployed FastAPI services and AI inference workflows on AWS ECS Fargate, using asynchronous database operations, Redis caching, and SQS/EventBridge for event-driven processing.",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "AWS ECS Fargate", "AWS RDS", "Redis", "SQS", "EventBridge", "Docker"],
  },
  {
    id: "swe-intern-siemens-energy",
    role: "Software Engineering Intern",
    organization: "Siemens Energy",
    location: "Remote",
    dateRange: "May - Aug 2026",
    bullets: [
      "Built Python document-extraction tooling using Gemini Vision to convert complex client PDFs and images into validated JSON and Excel reports for 30+ enterprise clients.",
      "Implemented structured-output validation across different document formats, achieving approximately 90% extraction accuracy, and packaged the application as a standalone executable for client deployment.",
    ],
    technologies: ["Python", "Gemini Vision", "JSON", "Data Extraction", "Schema Validation", "Excel"],
  },
  {
    id: "ml-intern-finarkein",
    role: "Machine Learning Intern",
    organization: "Finarkein Analytics",
    location: "Mumbai, India",
    dateRange: "Jul - Aug 2025",
    bullets: [
      "Optimized BERT fine-tuning using CUDA GPUs and a streamlined training pipeline, reducing training time from two hours to 15 minutes—an 8× improvement.",
      "Developed preprocessing and validation pipelines for more than 100,000 records, improving BERT text-classification accuracy from 67% to 90%.",
    ],
    technologies: ["Python", "PyTorch", "BERT", "Hugging Face", "CUDA", "Machine Learning"],
  },
  {
    id: "head-uca-cics240",
    role: "Head Undergraduate Course Assistant — CICS 240",
    organization: "Manning College of Information and Computer Sciences, UMass Amherst",
    location: "Amherst, MA",
    dateRange: "Aug 2025 - Present",
    description: "Leading undergraduate course assistants supporting more than 300 students in probability and computational statistics.",
    bullets: [
      "Coordinate course-assistant support and help more than 300 students develop stronger foundations in probability, statistics, and problem-solving.",
      "Work with teaching staff and fellow course assistants to improve student support, office hours, and communication.",
      "Started as an Undergraduate Course Assistant for introductory computer science in Aug 2025 and became Head UCA for CICS 240 in 2026.",
    ],
    technologies: ["Python", "Probability", "Statistics", "Teaching", "Leadership"],
  },
];
