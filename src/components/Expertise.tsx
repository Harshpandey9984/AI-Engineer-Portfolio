import {
  Bot,
  MessageSquare,
  Database,
  Workflow as WorkflowIcon,
  Package,
  ShieldCheck,
} from 'lucide-react';

const specializations = [
  {
    icon: Bot,
    title: 'AI Agents & Agentic Workflows',
    description:
      'Design and develop tool-calling autonomous agents using LangGraph and LangChain that execute multi-step planning, database reasoning, and external API workflows.',
  },
  {
    icon: Database,
    title: 'Enterprise RAG Systems',
    description:
      'Build knowledge-grounded applications using hybrid retrieval (vector HNSW + keyword full-text search), Reciprocal Rank Fusion, cross-encoders, and Redis caching.',
  },
  {
    icon: MessageSquare,
    title: 'LLM Application Engineering',
    description:
      'Integrate state-of-the-art models (Anthropic Claude, OpenAI) with prompt engineering, structured outputs (Pydantic), and deterministic validation.',
  },
  {
    icon: WorkflowIcon,
    title: 'Intelligent Automation',
    description:
      'Connect language models with background task queues, REST APIs, and automated data extraction pipelines to eliminate manual operational friction.',
  },
  {
    icon: Package,
    title: 'Full-Stack AI Products',
    description:
      'Combine model inference logic, FastAPI backends, relational & vector databases, and responsive modern user interfaces into coherent software products.',
  },
  {
    icon: ShieldCheck,
    title: 'Evaluation, Testing & MLOps',
    description:
      'Construct automated evaluation harnesses measuring hit@k, MRR, latency percentiles (p50/p95), unit tests, and Docker containerization.',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-[var(--surface2)]">
      <div className="container-portfolio section-padding mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 rv in">
          <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-[var(--hot)] px-3.5 py-1 rounded-full bg-[color-mix(in_srgb,var(--hot)_10%,transparent)] border border-[color-mix(in_srgb,var(--hot)_25%,transparent)] mb-4">
            AI Specialization
          </span>
          <h2 className="mb-4">
            Building Intelligence Into Real Products.
          </h2>
          <p className="text-[var(--muted)] text-[17px] leading-relaxed">
            From retrieval-augmented generation and autonomous agent swarms to production-grade FastAPI microservices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((s, idx) => (
            <div
              key={s.title}
              className="rv in p-7 rounded-2xl bg-[var(--surface)] border border-[var(--line)]"
              style={{ '--d': idx } as any}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center mb-5">
                <s.icon size={22} className="text-[var(--accent)]" />
              </div>
              <h3 className="card-title text-[var(--text)] mb-2.5">
                {s.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
