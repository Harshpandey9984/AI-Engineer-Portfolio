import { Lightbulb, Users, RefreshCcw } from 'lucide-react';

const principles = [
  {
    icon: Lightbulb,
    title: 'Engineer with purpose',
    description:
      'Start with the problem, understand the user, and choose a suitable technical approach.',
  },
  {
    icon: Users,
    title: 'Build for real users',
    description:
      'Focus on usability, reliability, and solutions that make sense outside a demo.',
  },
  {
    icon: RefreshCcw,
    title: 'Improve through iteration',
    description:
      'Test assumptions, refine the implementation, and learn from practical feedback.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[var(--surface)]">
      <div className="container-portfolio section-padding mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 rv in">
          <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-[var(--hot)] px-3.5 py-1 rounded-full bg-[color-mix(in_srgb,var(--hot)_10%,transparent)] border border-[color-mix(in_srgb,var(--hot)_25%,transparent)] mb-4">
            Philosophy
          </span>
          <h2 className="mb-4">
            A Little About How I Build.
          </h2>
          <p className="text-[var(--muted)] text-[17px] leading-relaxed">
            I’m interested in the intersection of artificial intelligence and practical software
            engineering. My work focuses on building applications that use AI to solve meaningful
            problems, simplify workflows, and create better digital experiences. I enjoy exploring
            ideas, engineering solutions, and turning working prototypes into usable products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((p, idx) => (
            <div
              key={p.title}
              className="rv in p-8 rounded-2xl bg-[var(--bg)] border border-[var(--line)]"
              style={{ '--d': idx } as any}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center mb-6">
                <p.icon size={22} className="text-[var(--accent)]" />
              </div>
              <h3 className="card-title text-[var(--text)] mb-2.5">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
