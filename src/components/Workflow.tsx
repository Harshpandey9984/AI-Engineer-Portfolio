const steps = [
  {
    number: '01',
    title: 'Understand the Problem',
    description:
      'Map domain constraints, user intents, latency requirements, and measurable evaluation metrics before writing code.',
  },
  {
    number: '02',
    title: 'Design the AI Architecture',
    description:
      'Select model providers, vector indexing strategies, agent tool schemas, and sandboxed execution boundaries.',
  },
  {
    number: '03',
    title: 'Engineer the Application',
    description:
      'Implement AI logic, FastAPI endpoints, data ingestion pipelines, structured Pydantic validations, and frontend interfaces.',
  },
  {
    number: '04',
    title: 'Evaluate & Deploy',
    description:
      'Benchmark with automated test suites, evaluate hit@k and faithfulness, containerize with Docker, and ship reliably.',
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 lg:py-32 bg-[var(--bg)]">
      <div className="container-portfolio section-padding mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 rv in">
          <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-[var(--hot)] px-3.5 py-1 rounded-full bg-[color-mix(in_srgb,var(--hot)_10%,transparent)] border border-[color-mix(in_srgb,var(--hot)_25%,transparent)] mb-4">
            Engineering Methodology
          </span>
          <h2 className="mb-4">
            From Problem to Intelligent Product.
          </h2>
          <p className="text-[var(--muted)] text-[17px] leading-relaxed">
            A disciplined, iterative engineering cycle grounded in validation and performance.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block rv in">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-[var(--line)]" />
            <div className="absolute top-8 left-0 h-px bg-gradient-to-r from-[var(--accent)] to-[var(--hot)] w-full" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div key={step.number} className="relative pt-16" style={{ '--d': idx } as any}>
                  {/* Node */}
                  <div className="absolute top-3.5 left-0 w-9 h-9 rounded-xl bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center z-10 shadow-xs">
                    <span className="text-xs font-mono font-bold text-[var(--accent)]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="card-title text-[var(--text)] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="rv in relative flex gap-6 pb-10 last:pb-0"
              style={{ '--d': idx } as any}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center shrink-0 z-10 shadow-xs">
                  <span className="text-xs font-mono font-bold text-[var(--accent)]">
                    {step.number}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-[var(--accent)] to-[var(--hot)] mt-2" />
                )}
              </div>

              <div className="pt-1.5 pb-4">
                <h3 className="card-title text-[var(--text)] mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
