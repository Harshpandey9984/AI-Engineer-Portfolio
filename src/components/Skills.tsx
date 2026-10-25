const skillCategories = [
  {
    title: 'Generative AI & LLMs',
    skills: [
      'Large Language Models (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'AI Agents',
      'Prompt Engineering',
      'Function / Tool Calling',
      'Structured Outputs (Pydantic)',
      'Text-to-SQL',
      'Embeddings & Vector Search',
      'Hybrid Retrieval & Reranking',
      'Guardrails & PII Redaction',
    ],
  },
  {
    title: 'AI Frameworks & Libraries',
    skills: [
      'LangChain',
      'LangGraph',
      'Sentence-Transformers',
      'Anthropic Claude API',
      'OpenAI API',
      'scikit-learn',
      'Pandas',
      'NumPy',
    ],
  },
  {
    title: 'Vector Databases & Storage',
    skills: [
      'pgvector',
      'PostgreSQL',
      'Redis (Caching & SSE)',
      'SQLite',
      'HNSW Vector Indexing',
    ],
  },
  {
    title: 'MLOps, APIs & Backend',
    skills: [
      'Python',
      'FastAPI',
      'REST APIs',
      'Docker & Docker Compose',
      'GitHub Actions (CI/CD)',
      'Pytest',
      'Microsoft Azure',
      'Google Cloud Platform',
    ],
  },
  {
    title: 'Full-Stack Development',
    skills: [
      'TypeScript',
      'JavaScript',
      'React',
      'Node.js',
      'Tailwind CSS',
      'Next.js',
    ],
  },
  {
    title: 'Programming & Databases',
    skills: [
      'Python 3',
      'SQL / T-SQL',
      'Solidity (Smart Contracts)',
      'Git & GitHub',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[var(--surface)]">
      <div className="container-portfolio section-padding mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 rv in">
          <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-[var(--hot)] px-3.5 py-1 rounded-full bg-[color-mix(in_srgb,var(--hot)_10%,transparent)] border border-[color-mix(in_srgb,var(--hot)_25%,transparent)] mb-4">
            Technical Stack
          </span>
          <h2 className="mb-4">
            Verified Technical Abilities.
          </h2>
          <p className="text-[var(--muted)] text-[17px] leading-relaxed">
            Core engineering competencies spanning LLM architecture, agentic workflows, database engineering, and production deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-[var(--bg)] border border-[var(--line)] rv in"
              style={{ '--d': idx } as any}
            >
              <h3 className="skill-title text-[var(--text)] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
