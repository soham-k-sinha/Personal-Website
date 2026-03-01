export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    video?: string;
  };
  problem: string;
  solution: string;
  outcome: string;
  architectureImageAlt: string;
  decisions: string[];
  tradeoffs?: string[];
  techStack: string[];
}

export const featuredProjects: Project[] = [
  {
    id: "anchor",
    title: "Anchor",
    oneLiner: "Open-source agentic AI automation platform that converts natural language into deterministic desktop workflows",
    tags: ["Python", "FastAPI", "Ollama", "Playwright", "AI Agents"],
    links: {
      github: "https://github.com/soham-k-sinha/Anchor",
    },
    problem: "Senior citizens and non-technical users struggle to automate daily tasks—existing tools require setup and technical knowledge.",
    solution: "Architected a multi-stage agent orchestration pipeline (intent routing, tool-restricted planning, schema validation) using Ollama, FastAPI, and Pydantic. Actions execute via Apple Shortcuts and DSL-based browser automation (Playwright), with human-in-the-loop safety guarantees.",
    outcome: "Zero-setup automation with 100% validated executions and low planning latency in a secure environment.",
    architectureImageAlt: "Multi-stage agent pipeline: intent routing, planning, schema validation, execution via Shortcuts and Playwright",
    decisions: [
      "Ollama for local LLM inference to keep workflows private and fast",
      "Tool-restricted planning and schema validation to ensure deterministic, safe executions",
      "Playwright and Apple Shortcuts for cross-application automation without brittle scripting",
    ],
    tradeoffs: [
      "Local LLM vs cloud API (chose privacy and latency for desktop use)",
      "DSL-based browser automation vs raw Playwright (chose maintainability and safety)",
    ],
    techStack: ["Python", "FastAPI", "Ollama", "Pydantic", "Playwright", "Apple Shortcuts"],
  },
  {
    id: "pulse-x",
    title: "Pulse X",
    oneLiner: "Real-time blockchain-based emergency relief platform on the XRP Ledger for trustless, auditable donations",
    tags: ["Python", "FastAPI", "XRP Ledger", "xrpl-py", "Blockchain"],
    links: {
      github: "https://github.com/soham-k-sinha/PulseX",
    },
    problem: "Humanitarian aid donations often suffer from opacity, slow settlement, and high payment friction, delaying critical relief.",
    solution: "Architected a dual-currency transaction pipeline using XRPL escrows, trustlines, and manual sequence–controlled batch submission via async FastAPI and xrpl-py. Implemented a secure multi-wallet escrow-based fund process and weighted allocation engine for reserve-safe, lossless distribution.",
    outcome: "3–5 second settlement finality, ~$0.0001 transaction costs, near-instant fund deployment, and ~94% reduction in payment friction vs traditional rails.",
    architectureImageAlt: "XRP Ledger pipeline: escrows, trustlines, batch submission, multi-wallet escrow and allocation engine",
    decisions: [
      "XRP Ledger for fast finality and low cost vs other chains",
      "Dual-currency (XRP + RLUSD) and escrow model for trustless, auditable flows",
      "Async FastAPI and batch submission for throughput and consistency",
    ],
    techStack: ["Python", "FastAPI", "xrpl-py", "XRP Ledger", "Blockchain"],
  },
  {
    id: "lattice",
    title: "Lattice",
    oneLiner: "Full-stack AI financial app that turns any chat platform into a smart money manager—split expenses, optimize credit, budget in real time",
    tags: ["Next.js", "FastAPI", "AI Agents", "Knot API", "MCP"],
    links: {
      github: "https://github.com/soham-k-sinha/lattice",
    },
    problem: "People discuss money in chat apps but then switch to spreadsheets or separate apps to split expenses and budget—friction leads to inaction.",
    solution: "Extended chat into a smart money manager with a custom MCP server (Dedalus Labs) orchestrating agentic AI workflows. Process user merchant transactions and sentiment signals in real time with FastAPI, Next.js, and Knot API.",
    outcome: "Personalized financial insights with under 10s latency across 100+ concurrent sessions; collaborative budgeting and expense splitting in real time.",
    architectureImageAlt: "MCP server orchestration with FastAPI, Next.js, Knot API for transactions and sentiment",
    decisions: [
      "MCP server for agent orchestration to keep logic centralized and reusable",
      "Knot API for real transaction and merchant data with user consent",
      "Real-time sentiment and transaction processing for sub-10s insights",
    ],
    techStack: ["Next.js", "FastAPI", "Knot API", "MCP", "AI Agents"],
  },
  {
    id: "datatalk-extension",
    title: "DataTalk Google Extension",
    oneLiner: "AI-powered Chrome extension to ingest CSV/Excel and scrape tables from any webpage, then query and visualize via conversation",
    tags: ["React", "Python", "FastAPI", "LLMs", "Chrome Extension"],
    links: {
      github: "https://github.com/soham-k-sinha/DataTalk",
    },
    problem: "Analyzing data from spreadsheets or web tables usually means switching to external tools; static datasets don’t support quick, conversational exploration.",
    solution: "Building a full-stack Chrome extension: React frontend and Python/FastAPI backend powered by LLMs. Seamlessly ingest CSV/Excel and scrape tables from any page in real time; transform static data into an interactive conversational assistant for querying, filtering, and visualizing inside the browser.",
    outcome: "Faster, more intuitive analysis without leaving the browser or relying on external tools; git used for source control.",
    architectureImageAlt: "Chrome extension: React UI, FastAPI + LLM backend, CSV/Excel ingest and table scraping",
    decisions: [
      "Chrome extension for zero-friction access to data on any webpage",
      "LLM-backed conversation for natural-language query and visualization",
      "FastAPI + Python for ML/data ecosystem and async support",
    ],
    techStack: ["React", "JavaScript", "Python", "FastAPI", "LLMs", "Git"],
  },
];
