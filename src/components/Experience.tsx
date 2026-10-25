import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';
import { experienceData, type ExperienceEntry } from '../config/experience';
import { siteConfig } from '../config/site';

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
};

const labelMap = {
  work: 'Work Experience',
  education: 'Education',
  certification: 'Certifications & Achievements',
};

export default function Experience() {
  const grouped = experienceData.reduce<Record<string, ExperienceEntry[]>>(
    (acc, entry) => {
      if (!acc[entry.type]) acc[entry.type] = [];
      acc[entry.type].push(entry);
      return acc;
    },
    {}
  );

  const handleResume = () => {
    window.open(siteConfig.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[var(--surface2)]">
      <div className="container-portfolio section-padding mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 rv in">
          <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-[var(--hot)] px-3.5 py-1 rounded-full bg-[color-mix(in_srgb,var(--hot)_10%,transparent)] border border-[color-mix(in_srgb,var(--hot)_25%,transparent)] mb-4">
            Track Record
          </span>
          <h2 className="mb-4">
            Experience & Education.
          </h2>
          <p className="text-[var(--muted)] text-[17px] leading-relaxed">
            Verified professional background, academic foundation in Computer Science, and competitive engineering achievements.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {(['work', 'education', 'certification'] as const).map((type) => {
            const entries = grouped[type];
            if (!entries || entries.length === 0) return null;
            const Icon = iconMap[type];

            return (
              <div key={type} className="rv in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center">
                    <Icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text)] font-mono">
                    {labelMap[type]}
                  </h3>
                </div>

                <div className="relative ml-5">
                  {/* Left rule */}
                  <div className="timeline-line" />

                  <div className="space-y-8 pl-8">
                    {entries.map((entry, idx) => {
                      const isFirst = idx === 0 && type === 'work';

                      return (
                        <div key={idx} className="relative">
                          {/* Timeline dot */}
                          <div
                            className={`absolute -left-[39px] top-1.5 timeline-dot-item ${
                              isFirst ? 'timeline-dot-first' : ''
                            }`}
                          />

                          <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--line)]">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                              <div>
                                <h4 className="timeline-title text-[var(--text)]">
                                  {entry.role}
                                </h4>
                                <p className="text-sm font-semibold text-[var(--accent)]">
                                  {entry.organization}
                                </p>
                              </div>
                              <span className="text-xs font-mono font-medium text-[var(--muted)] bg-[var(--surface2)] px-2.5 py-1 rounded-md border border-[var(--line)] shrink-0">
                                {entry.period}
                                {entry.current && (
                                  <span className="ml-1.5 inline-flex w-1.5 h-1.5 rounded-full bg-[var(--hot)] animate-pulse" />
                                )}
                              </span>
                            </div>
                            <p className="text-sm text-[var(--muted)] leading-relaxed">
                              {entry.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Download Resume banner */}
          <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-6 rv in">
            <div>
              <h4 className="text-lg font-bold text-[var(--text)] font-display mb-1">
                Download Official Resume
              </h4>
              <p className="text-xs text-[var(--muted)] font-mono">
                Verified PDF · Updated with all projects, experience, and certifications
              </p>
            </div>
            <button
              onClick={handleResume}
              className="btn-portfolio btn-portfolio-primary shrink-0"
            >
              <Download size={16} />
              Download Resume (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
