export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "C", "SQL", "TypeScript", "JavaScript"],
  },
  {
    label: "Backend & Databases",
    items: ["FastAPI", "Node.js", "Express", "PostgreSQL", "Redis", "WebSockets", "REST APIs"],
  },
  {
    label: "Cloud & Infrastructure",
    items: [
      "AWS ECS",
      "AWS RDS",
      "AWS S3",
      "AWS ElastiCache",
      "AWS SQS",
      "AWS EventBridge",
      "Docker",
      "Linux",
    ],
  },
  {
    label: "AI/ML & Search",
    items: [
      "PyTorch",
      "Hugging Face",
      "BERT",
      "LLMs",
      "AI Agents",
      "scikit-learn",
      "FAISS",
      "CLIP",
      "SigLIP",
      "TF-IDF",
      "Information Retrieval",
    ],
  },
  {
    label: "Frontend & Developer Tools",
    items: ["React", "Next.js", "Git", "pytest", "JUnit", "Playwright"],
  },
];

export const whatIBuild = [
  {
    title: "Backend & Infrastructure",
    description:
      "I like building the systems behind the product—APIs, databases, integrations, and infrastructure that need to work reliably.",
    bullets: [
      "Backend APIs and service architecture with Python and FastAPI",
      "PostgreSQL data modeling, asynchronous operations, and Redis caching",
      "AWS deployment and event-driven processing",
      "Java concurrency, networking, and performance-oriented systems",
    ],
  },
  {
    title: "AI/ML & Search Systems",
    description:
      "I'm interested in how models work, how we evaluate them, and how to turn them into useful systems.",
    bullets: [
      "Machine-learning pipelines, fine-tuning, and model evaluation",
      "Multimodal search, vector retrieval, and reranking",
      "LLM-powered applications and structured agent workflows",
      "Retrieval quality, data leakage, and performance benchmarking",
    ],
  },
  {
    title: "Products & People",
    description:
      "I enjoy building things from scratch, especially when there's a real problem to solve and good people to solve it with.",
    bullets: [
      "Co-founding and engineering NullifAI",
      "Building and shipping projects under hackathon deadlines",
      "Leading course assistants and supporting 300+ students",
      "Learning new technologies by implementing systems from the fundamentals",
    ],
  },
];
