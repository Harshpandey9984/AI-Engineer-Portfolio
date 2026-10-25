import {
  Bot,
  MessageSquare,
  Database,
  Workflow,
  Plug,
  Layers,
  Server,
  Code2,
} from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Custom AI Agent Architecture',
    description:
      'Autonomous tool-calling agents with schema discovery, planning loops, and robust error recovery.',
  },
  {
    icon: Database,
    title: 'Production RAG Pipelines',
    description:
      'High-recall hybrid search, cross-encoder reranking, and citation-grounded enterprise knowledge bases.',
  },
  {
    icon: MessageSquare,
    title: 'LLM Integration & Prompting',
    description:
      'Structured Pydantic outputs, Anthropic Claude / OpenAI API integrations, and prompt injection defense.',
  },
  {
    icon: Workflow,
    title: 'Intelligent Automation Systems',
    description:
      'Automated web scrapers, data processing pipelines, and workflow automation reducing manual overhead.',
  },
  {
    icon: Plug,
    title: 'AI API & Backend Engineering',
    description:
      'High-throughput FastAPI microservices, REST architectures, PostgreSQL schemas, and Redis caching.',
  },
  {
    icon: Layers,
    title: 'AI-Powered SaaS Development',
    description:
      'End-to-end full-stack AI applications with authentication, telemetry, and modern user experiences.',
  },
  {
    icon: Server,
    title: 'Model Evaluation & Benchmarking',
    description:
      'Automated harnesses tracking retrieval metrics, latency percentiles, and ground-truth evaluations.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Engineering',
    description:
      'TypeScript, React, Tailwind CSS, and Web3 smart contract integration for responsive distributed apps.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--surface)]">
      <div className="container-portfolio section-padding mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 rv in">
          <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-[var(--hot)] px-3.5 py-1 rounded-full bg-[color-mix(in_srgb,var(--hot)_10%,transparent)] border border-[color-mix(in_srgb,var(--hot)_25%,transparent)] mb-4">
            Services & Offerings
          </span>
          <h2 className="mb-4">
            Solutions Built Around Practical Needs.
          </h2>
          <p className="text-[var(--muted)] text-[17px] leading-relaxed">
            Delivering complete, maintainable software architectures that connect cutting-edge AI capabilities with user value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="rv in p-6 rounded-2xl bg-[var(--bg)] border border-[var(--line)]"
              style={{ '--d': idx } as any}
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center mb-4">
                <s.icon size={19} className="text-[var(--accent)]" />
              </div>
              <h3 className="card-title !text-base text-[var(--text)] mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
