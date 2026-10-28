export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  highlight?: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    video?: string;
    website?: string;
  };
  problem: string;
  solution: string;
  outcome: string;
  architectureImageAlt: string;
  decisions: string[];
  tradeoffs?: string[];
  techStack: string[];
}

export interface EarlierProject {
  title: string;
  oneLiner: string;
  github: string;
}

export const featuredProjects: Project[] = [
  {
    id: "ember",
    title: "Ember",
    oneLiner: "An emergency-response coordination system that uses simulation, optimization, and real-time resident communication to adapt evacuation and resource plans as conditions change.",
    highlight: "HackHarvard '26 · Photon Best Voice Agent",
    tags: ["Python", "FastAPI", "WebSockets", "Photon", "Daytona"],
    links: {
      github: "https://github.com/soham-k-sinha/Ember",
    },
    problem: "Emergency-response plans go stale as soon as real conditions change. Residents report new hazards, roads flood, and infrastructure like a hospital's grid power fails while responders are already out. A plan made once from a forecast can't keep absorbing those updates or re-think how shared resources should be used.",
    solution: "Ember was a four-person HackHarvard project. People text or call in what's happening; an LLM reads each message into a structured fact (how many people, a wheelchair, a blocked street, minutes of backup power); a deterministic planner re-scores candidate plans against a NumPy simulator of the district's roads, flood, vehicles, and facilities; and everyone whose instructions changed gets a personal text or call. Daytona fans out robustness checks across perturbed versions of the storm, and a React + PixiJS dashboard shows the live plan. My part was the backend and the resident-facing side: the FastAPI service and SQLite shared state, the WebSocket feed, Photon iMessage threads, message-to-fact extraction with a keyword fallback for when the model is down, and voice calls through ElevenLabs on the Photon number. My teammates built the simulation engine, planner, Daytona integration, and scenario data.",
    outcome: "Won Photon's Best Voice Agent award at HackHarvard 2026. In our simulated flood drill (synthetic households on real Boston/Cambridge street data, not a real-world deployment), a resident's text triggered a full replan in about 0.6–0.9 seconds of planner time, and the end-to-end test suite passed 83/83 checks against the live backend with real Daytona sandboxes.",
    architectureImageAlt: "Text or call via Photon → structured fact extraction → simulator-scored replan → personalized text or call back to each resident",
    decisions: [
      "The LLM never makes planning decisions. It turns each message into a structured fact and words the reply; routes, times, and assignments always come from the planner, and a guard rejects any number, vehicle, or street in a reply that the planner didn't compute.",
      "A keyword parser takes over if the model is unavailable, so incoming reports still trigger replanning.",
      "Plans are evaluated under uncertainty, not just against the forecast: the forecast-best plan is only replaced when a more robust one does better in the worst 20% of simulated worlds.",
      "Daytona sandboxes run those simulations in parallel (10,000 worlds in a few seconds vs. about 24 s on a laptop), so robustness checks fit inside a live replanning loop.",
      "Communication (Photon, voice) and planning live in separate components connected by versioned JSON Schema contracts, which let four people build in parallel.",
    ],
    tradeoffs: [
      "Simulation accuracy vs. replanning speed: a simplified district model keeps each plan evaluation to milliseconds, at the cost of realism.",
      "Robust plans vs. forecast-optimal plans: the robust pick can look worse on the forecast but holds up when conditions drift. It also drives more vehicle-km, which we report rather than hide.",
      "Automated replanning vs. human oversight: every decision comes with the simulated numbers behind it, so a coordinator can see why the plan changed.",
      "Coordinating four components on a hackathon clock meant some paths, like multiplayer joins with real phones, were tested against fakes rather than verified live.",
    ],
    techStack: ["Python", "NumPy", "FastAPI", "SQLite", "WebSockets", "React", "PixiJS", "Photon", "ElevenLabs", "Daytona", "Claude"],
  },
  {
    id: "umass-housing-search",
    title: "UMass Housing Search Engine",
    oneLiner: "A search engine built from scratch in Java that crawls housing listings across multiple sources and ranks results using a custom TF-IDF index.",
    tags: ["Java", "Jsoup", "Concurrency", "TF-IDF", "Docker"],
    links: {
      github: "https://github.com/soham-k-sinha/Java-Search-Engine",
    },
    problem: "Finding off-campus housing at UMass Amherst means checking a pile of different sites: the university listing service, property managers, individual landlords, and aggregators, each with its own format. The same apartment often shows up on several of them, and there's no single place to search everything. I was going through this myself, and it was frustrating.",
    solution: "I deliberately built it in Java, a language I wasn't comfortable in, without a search framework, because I wanted to learn how search engines and concurrent systems actually work. A crawl manager runs source-specific adapters on a five-thread ExecutorService pool with rate-limited fetching, parses each site's HTML with Jsoup, and normalizes listings (price, bedrooms, address) into one schema. Cross-source deduplication keys on a normalized address, the bedroom count, and a $100 price bucket. The cleaned listings feed a hand-written inverted index with TF-IDF ranking, and search is served by a small HTTP server I wrote on raw Java sockets, with a JSON API and a static frontend.",
    outcome: "My last committed crawl pulled 300+ raw listings from 5 housing sites (the UMass off-campus listing service, Zumper, Craigslist, Kamins, and Valley Property Management) and deduplicated them to 241 unique listings in an index of about 1,270 terms. Index lookups average well under a millisecond, and search requests return in under 8 ms end to end in my benchmarks. The service is containerized with Docker and was previously deployed on Railway. Just as valuable: I came out understanding thread pools, race conditions, and how a request actually gets from a socket to a response.",
    architectureImageAlt: "Per-source crawl adapters on a thread pool → normalization and deduplication → inverted index with TF-IDF → raw-socket HTTP server with JSON API",
    decisions: [
      "No search library or web framework for the core engine. The inverted index, TF-IDF scoring, and HTTP request parsing are all hand-written so I'd understand each layer.",
      "Concurrent crawling with a fixed thread pool, since crawl time is dominated by network I/O and each source can be fetched independently.",
      "One adapter per source behind a shared listing model, so adding a site means writing a parser, not changing the pipeline.",
      "TF-IDF over an inverted index: simple, fast for keyword queries, and easy to reason about at this scale.",
      "The index is built once per crawl and serialized to disk, so queries never wait on the network.",
    ],
    tradeoffs: [
      "Hand-rolled HTTP server vs. a framework: far more educational, but I had to handle request parsing, CORS, and error responses myself.",
      "Per-source scrapers are brittle. When a site changes its HTML, its adapter breaks.",
      "Crawl-then-index keeps queries fast and simple, but results are only as fresh as the last crawl.",
      "Keyword TF-IDF doesn't handle structured constraints like \"under $1,500\" as well as dedicated filters would.",
    ],
    techStack: ["Java", "Jsoup", "Java HttpClient", "ExecutorService", "Java Sockets", "Inverted Index", "TF-IDF", "Docker"],
  },
  {
    id: "visualmatch",
    title: "VisualMatch",
    oneLiner: "A multimodal search engine over 52,591 fashion items, supporting text, image, and combined queries with vector retrieval and cross-model reranking.",
    tags: ["PyTorch", "OpenCLIP", "SigLIP", "FAISS", "FastAPI"],
    links: {
      demo: "https://huggingface.co/spaces/Sks123212/visualmatch",
      github: "https://github.com/soham-k-sinha/visualmatch",
    },
    problem: "Keyword search struggles with visual concepts. Sometimes the easiest way to describe what you want is a photo, or a photo plus a change: upload a jacket you like and ask for something similar in blue. Plain text matching can't do that.",
    solution: "VisualMatch searches 52,591 items from the DeepFashion In-Shop dataset in three modes: text, image, and composed (a reference image plus a text modifier like \"like this but in blue\"). I embedded the catalog with three vision-language models (CLIP ViT-B/32, OpenCLIP ViT-B/16, and SigLIP ViT-B/16) and built a separate FAISS index for each. Composed queries interpolate the image and text embeddings and re-normalize. Retrieval is two-stage: pull the top 50 candidates from FAISS, then re-score them with SigLIP and return the top 10. A FastAPI backend exposes the three search modes, the Gradio frontend runs on Hugging Face Spaces, and evaluation runs are logged to Weights & Biases.",
    outcome: "I evaluated it against ground truth built from dataset metadata rather than model outputs: 111 labeled text and composed queries, plus 500 image-to-image queries where other views of the same garment count as relevant. Retrieving with CLIP ViT-B/32 and reranking with SigLIP raised text-search MRR from 0.486 to 0.647 (about +33%) and NDCG@10 by 30% over the B/32 baseline. Text-heavy weighting (α = 0.3) consistently beat balanced and image-heavy weighting for composed queries. These are offline results on this benchmark, not production accuracy numbers.",
    architectureImageAlt: "Gradio frontend → FastAPI → query encoder → FAISS IndexFlatIP top-50 → SigLIP reranker → top-10 results",
    decisions: [
      "Exact search with FAISS IndexFlatIP. At about 52K items, exact inner-product search is fast enough, so approximate indexes like HNSW or IVF would add complexity without a real benefit yet.",
      "Each model keeps its own embedding space and index (512-dim for CLIP/OpenCLIP, 768-dim for SigLIP) instead of forcing everything into one shared space.",
      "Embeddings are L2-normalized at index and query time, so inner product equals cosine similarity.",
      "A cheaper first-stage retriever plus a stronger reranker: the standard way to trade a bit of latency for ranking quality.",
      "Model-independent ground truth and written-up failure cases, so the evaluation isn't tilted toward any one model and doesn't rely on good-looking demo results.",
    ],
    tradeoffs: [
      "Reranking adds a second model to every query, trading some latency for ranking quality.",
      "Exact vs. approximate nearest neighbor: exact is simpler and fully accurate at this size, but it wouldn't scale to millions of items.",
      "Composed-query weighting: α = 0.3 works best on average but hurts queries where the image should dominate. Adaptive weighting is future work.",
      "Two-stage vs. one strong model: SigLIP alone still beats B/32 + reranking on image-to-image search, so the reranker mainly helps text and composed queries. It isn't a universal win.",
    ],
    techStack: ["Python", "PyTorch", "OpenCLIP", "SigLIP", "FAISS", "NumPy", "FastAPI", "Gradio", "Weights & Biases", "Hugging Face Spaces"],
  },
  {
    id: "pulse-x",
    title: "PulseX",
    oneLiner: "A real-time disaster-relief donation platform using XRP Ledger escrows, automated payouts, and live transaction updates.",
    highlight: "TartanHacks '26 Winner",
    tags: ["Python", "FastAPI", "PostgreSQL", "WebSockets", "XRP Ledger"],
    links: {
      github: "https://github.com/soham-k-sinha/PulseX",
    },
    problem: "When a disaster hits, donors have little visibility into where their money goes, and relief funding can be slow and hard to trace on its way to the organizations doing the work.",
    solution: "PulseX was a team project at CMU TartanHacks, and I built the backend. Donors give in XRP or RLUSD (Ripple's USD-backed stablecoin), and funds move through time-locked XRP Ledger escrows before being released to relief organizations. The FastAPI backend creates escrows and batched payouts with xrpl-py, persists every donation and transaction in PostgreSQL, and pushes live updates to the React dashboard over WebSockets.",
    outcome: "Won at TartanHacks 2026. The prototype runs end to end on the XRP Ledger testnet: donations, escrow, batched payouts, and a live dashboard tracking funds from donor to organization.",
    architectureImageAlt: "React dashboard ↔ FastAPI backend ↔ XRP Ledger testnet, with PostgreSQL for transaction state and WebSockets for live updates",
    decisions: [
      "XRP Ledger for fast, low-cost settlement and native escrow support, instead of writing and auditing a custom smart contract.",
      "Escrow-based releases, so funds stay locked on-chain until their release conditions are met.",
      "Batched payouts to cut down on the number of individual ledger transactions.",
      "PostgreSQL as the app's record of donations and transaction state, so the dashboard doesn't have to query the ledger for everything.",
      "WebSockets for live updates instead of client polling.",
    ],
    tradeoffs: [
      "Batching reduces transaction overhead but adds a short delay before payouts go out.",
      "Keeping state in both PostgreSQL and the ledger means the two have to stay consistent.",
      "Built and demoed on testnet. Real use would need proper custody, compliance, and key-management work.",
    ],
    techStack: ["Python", "FastAPI", "xrpl-py", "XRP Ledger", "PostgreSQL", "WebSockets", "React", "TypeScript"],
  },
  {
    id: "nullifai",
    title: "NullifAI",
    oneLiner: "A multi-agent product-testing platform that uses browser automation and simulated user personas to turn lengthy feedback cycles into automated evaluations.",
    highlight: "Startup · Co-Founder",
    tags: ["Python", "Playwright", "FastAPI", "Pydantic", "AI Agents"],
    links: {
      website: "https://www.nullifai.tech",
    },
    problem: "Getting product feedback the traditional way can take weeks. Teams have to recruit participants, run testing sessions, analyze responses, and consolidate everything before they can make a decision.",
    solution: "I co-founded NullifAI and built its evaluation backend. A run launches parallel Playwright browser workers, each driven by a simulated user persona that actually clicks through the product. The agents then hold a structured debate over what they found, and every output is validated against Pydantic schemas before it goes into the report. The result is a repeatable feedback report instead of a pile of free-form LLM text.",
    outcome: "By our estimates, a feedback cycle that traditionally takes 2–4 weeks runs in minutes, at roughly $1.90 per run versus an estimated $300 for a conventional campaign. These are our own project estimates, not externally audited numbers.",
    architectureImageAlt: "Parallel Playwright workers driven by simulated personas → structured agent debate → Pydantic-validated feedback report",
    decisions: [
      "Parallel browser workers, so personas test the product at the same time instead of one after another.",
      "Structured outputs validated with Pydantic, so malformed agent output fails loudly instead of leaking into a report.",
      "Simulated personas, so each run covers several kinds of users rather than one generic reviewer.",
      "A structured debate step that challenges individual agents' findings before they reach the final report.",
      "Designing for repeatability: the same product and personas should produce consistent reports across runs.",
    ],
    tradeoffs: [
      "More personas and debate rounds improve coverage but raise both latency and API cost per run.",
      "Real browser automation is slower and heavier than API-level testing, but it evaluates what users actually see.",
      "Simulated users are fast and cheap, but they don't replace talking to real users. They're best for catching problems early.",
    ],
    techStack: ["Python", "FastAPI", "Playwright", "Pydantic", "LLMs", "Multi-Agent Systems"],
  },
  {
    id: "mental-health-severity",
    title: "Mental Health Severity Prediction",
    oneLiner: "An applied machine-learning study comparing behavioral and brain-imaging features for predicting mental health symptom severity.",
    highlight: "AI4ALL Ignite",
    tags: ["Python", "scikit-learn", "Random Forest", "pandas"],
    links: {
      github: "https://github.com/soham-k-sinha/MH_Severity_Behavioral_and_Scans",
    },
    problem: "Mental health symptom severity is hard to predict, and it isn't obvious which kinds of data carry real signal. Our team asked whether behavioral measures, resting-state fMRI features, or both could predict stress, depression, anhedonia, and anxiety scores.",
    solution: "On a seven-person AI4ALL Ignite team, using the OpenNeuro Transdiagnostic Connectome dataset, we trained Random Forest regressors across 4 targets × 7 feature sets (behavioral-only subsets, imaging-only, and multimodal), evaluated with cross-validation and a held-out test set. I worked on model training, feature analysis, and evaluation. During evaluation I noticed that some features were questionnaire items closely tied to the target scores, so the model was partly being handed the answer. I checked feature–target correlations, brought it to the team, and we updated the evaluation approach and retrained without those features.",
    outcome: "After removing the leakage, the numbers were less impressive, but they were trustworthy. The cleaner comparison showed behavioral features consistently outperforming our imaging summary features, and adding imaging to behavioral data gave little or no improvement. The project was selected among 200+ projects to present at the AI4ALL Symposium. This is a student research project. It isn't clinically validated or published.",
    architectureImageAlt: "Behavioral and fMRI connectivity features → leakage audit → Random Forest regressors across 28 experiments → cross-validated evaluation",
    decisions: [
      "Random Forest as the baseline model: it handles nonlinear relationships and mixed feature types with minimal preprocessing.",
      "Seven feature configurations per target, so each modality's contribution could be compared directly.",
      "Cross-validation plus a held-out test set, reporting MAE, RMSE, and R².",
      "Auditing features for target leakage before trusting the results, and removing features that effectively encoded the target.",
    ],
    tradeoffs: [
      "Removing leaked features lowered the headline numbers in exchange for results that actually mean something.",
      "Global connectivity summary statistics are a lightweight imaging baseline. Richer network-level features might change the imaging story.",
      "Random Forests are easy to inspect through feature importance, but tuned boosting models might perform better.",
    ],
    techStack: ["Python", "scikit-learn", "Random Forest", "pandas", "NumPy", "Feature Engineering", "Model Evaluation"],
  },
];

export const earlierProjects: EarlierProject[] = [
  {
    title: "Anchor",
    oneLiner: "Local-LLM agent that turns natural language into validated desktop and browser workflows",
    github: "https://github.com/soham-k-sinha/Anchor",
  },
  {
    title: "Lattice",
    oneLiner: "Chat-based money manager for splitting expenses and budgeting",
    github: "https://github.com/soham-k-sinha/Lattice",
  },
  {
    title: "DataTalk",
    oneLiner: "Chrome extension for querying spreadsheets and web tables in conversation",
    github: "https://github.com/soham-k-sinha/DataTalk",
  },
];
