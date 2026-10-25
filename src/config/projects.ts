// ============================================================
// PROJECT DATA — Verified & Curated Projects
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  contribution: string;
  technologies: string[];
  categories: ProjectCategory[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export type ProjectCategory =
  | "all"
  | "ai-ml"
  | "ai-agents"
  | "ai-automation"
  | "full-stack"
  | "other";

export const categoryLabels: Record<ProjectCategory, string> = {
  all: "All Projects",
  "ai-ml": "AI & Machine Learning",
  "ai-agents": "AI Agents & LLMs",
  "ai-automation": "AI Automation",
  "full-stack": "Full-Stack Applications",
  other: "Other Engineering",
};

export const projects: Project[] = [
  {
    id: "rag-assistant",
    title: "Enterprise RAG Knowledge Assistant",
    description:
      "A production-grade Retrieval-Augmented Generation service that answers complex questions over uploaded enterprise documents with numbered source citations and strict factual grounding.",
    problem:
      "Generic LLMs hallucinate and lack internal enterprise document context, leading to untrusted outputs and compliance risks without audit trails.",
    contribution:
      "Architected hybrid retrieval combining HNSW vector search with Postgres full-text search merged via Reciprocal Rank Fusion, cross-encoder re-ranking, Redis caching with streaming responses, and an evaluation harness reporting hit@k, MRR, and p95 latency.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "LangChain",
      "Sentence-Transformers",
      "Redis",
      "Claude API",
      "Docker",
    ],
    categories: ["ai-ml", "ai-agents"],
    githubUrl: "https://github.com/Harshpandey9984?tab=repositories",
    featured: true,
  },
  {
    id: "data-analyst-agent",
    title: "AI Data Analyst Agent",
    description:
      "A tool-calling AI agent built with LangGraph and LangChain that answers natural-language business questions over relational databases through multi-step autonomous planning.",
    problem:
      "Business stakeholders face bottlenecks waiting for SQL analysts, while basic text-to-SQL tools are vulnerable to SQL injections and hallucinations.",
    contribution:
      "Engineered autonomous schema discovery, SQL generation with sqlglot dual-layer sandboxing, automatic self-correction on syntax errors, pandas summary statistics, and scikit-learn trend forecasting validated by 29 automated unit tests.",
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "Claude API",
      "FastAPI",
      "Pandas",
      "scikit-learn",
      "SQLite",
      "Docker",
    ],
    categories: ["ai-agents", "ai-automation"],
    githubUrl: "https://github.com/Harshpandey9984?tab=repositories",
    featured: false,
  },
  {
    id: "lead-harvest",
    title: "Lead-Harvest",
    description:
      "An automated lead discovery and data extraction application that harvests, parses, and enriches high-intent B2B prospects through intelligent web spiders and automated schema validators.",
    problem:
      "Manual prospect sourcing is labor-intensive and produces messy, unstructured data requiring hours of manual deduplication.",
    contribution:
      "Engineered the complete extraction pipeline, parsing algorithms, structured CRM export, and responsive web interface deployed on Render.",
    technologies: [
      "Python",
      "Web Automation",
      "React",
      "Node.js",
      "REST API",
      "Data Processing",
    ],
    categories: ["ai-automation", "full-stack"],
    githubUrl: "https://github.com/Harshpandey9984?tab=repositories",
    liveUrl: "https://lead-harvest.onrender.com/",
    featured: false,
  },
  {
    id: "processiq",
    title: "ProcessIQ & Model Evaluation Harness",
    description:
      "An industrial digital-twin optimization and automated model evaluation platform that benchmarks inference latency, accuracy, and system yield under varied operational constraints.",
    problem:
      "Evaluating generative and predictive models across production metrics requires reliable, automated test harnesses beyond single benchmark scores.",
    contribution:
      "Engineered parameter simulation models, automated metric collection (hit@k, MRR, p50/p95 latency), and real-time telemetry dashboards.",
    technologies: [
      "Python",
      "Machine Learning",
      "FastAPI",
      "Digital Twin",
      "Pytest",
      "React",
    ],
    categories: ["ai-ml", "ai-automation", "full-stack"],
    githubUrl: "https://github.com/Harshpandey9984/ProcessIQ",
    featured: false,
  },
  {
    id: "dl-chatbot",
    title: "Deep-Learning Conversational AI",
    description:
      "A deep-learning conversational system built with Python, trained to understand user intent, process context, and return structured, domain-specific responses.",
    problem:
      "Standard rule-based chatbots lack conversational fluidity and fail when queries deviate from rigid keyword structures.",
    contribution:
      "Trained neural intent-classification models, designed dialogue state tracking, and built contextual response retrieval logic.",
    technologies: [
      "Python 3",
      "Deep Learning",
      "NLP",
      "Neural Networks",
      "Intent Classification",
    ],
    categories: ["ai-ml", "ai-agents"],
    githubUrl: "https://github.com/Harshpandey9984/Chatbot",
  },
  {
    id: "smart-loan",
    title: "Smart-Loan DeFi Protocol",
    description:
      "A decentralized microloan management protocol utilizing smart contracts to automate credit logic, loan issuance, and transparent repayment verification.",
    problem:
      "Traditional microfinance systems rely on slow manual intermediaries, high overhead, and non-transparent terms.",
    contribution:
      "Architected Solidity smart contracts for automated collateral and interest schedules; developed during the award-winning Amity Blockchain Hackathon.",
    technologies: [
      "Solidity",
      "Web3.js",
      "Smart Contracts",
      "Ethereum",
      "JavaScript",
    ],
    categories: ["full-stack", "other"],
    githubUrl: "https://github.com/Harshpandey9984/Smart-Loan",
  },
];

// Helper to get unique categories that actually have projects
export function getActiveCategories(): ProjectCategory[] {
  const cats = new Set<ProjectCategory>(["all"]);
  projects.forEach((p) => p.categories.forEach((c) => cats.add(c)));
  return Array.from(cats);
}
