import { useState, useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectThumbnail from './ProjectThumbnails';
import {
  projects,
  categoryLabels,
  getActiveCategories,
  type Project,
  type ProjectCategory,
} from '../config/projects';
import { siteConfig } from '../config/site';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const categories = getActiveCategories();

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  const getThumbnailType = (id: string): 'rag' | 'agent' | 'evaluation' | 'default' => {
    if (id === 'rag-assistant') return 'rag';
    if (id === 'data-analyst-agent' || id === 'dl-chatbot') return 'agent';
    return 'evaluation';
  };

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container-portfolio section-padding mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 rv in">
          <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-[var(--hot)] px-3.5 py-1 rounded-full bg-[color-mix(in_srgb,var(--hot)_10%,transparent)] border border-[color-mix(in_srgb,var(--hot)_25%,transparent)] mb-4">
            Selected Engineering Work
          </span>
          <h2 className="mb-4">
            Building Real AI Products That Work.
          </h2>
          <p className="text-[var(--muted)] text-[17px] leading-relaxed">
            Enterprise RAG architectures, autonomous agent workflows, and verified full-stack applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 rv in">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'btn-portfolio-primary'
                  : 'bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] border border-[var(--line)] hover:border-[var(--accent)]'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Projects Grid — Vertical Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {filtered.map((project, idx) => (
            <div key={project.id} className="rv in h-full flex" style={{ '--d': idx } as any}>
              <ProjectPanelItem
                project={project}
                thumbnailType={getThumbnailType(project.id)}
              />
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-12 rv in">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline underline-offset-4"
          >
            Explore all repositories on GitHub
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectPanelItem({
  project,
  thumbnailType,
}: {
  project: Project;
  thumbnailType: 'rag' | 'agent' | 'evaluation' | 'default';
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    panelRef.current.style.setProperty('--mx', `${x}px`);
    panelRef.current.style.setProperty('--my', `${y}px`);
  };

  return (
    <div
      ref={panelRef}
      onPointerMove={handlePointerMove}
      className="project-panel group w-full flex flex-col justify-between"
    >
      <div className="relative z-10 w-full mb-1">
        <ProjectThumbnail type={thumbnailType} />
      </div>

      <div className="flex flex-col justify-between flex-1 relative z-10">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 mt-1">
            <h3 className="card-title text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <span className="shrink-0 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full text-[var(--hot)] bg-[color-mix(in_srgb,var(--hot)_12%,transparent)] border border-[color-mix(in_srgb,var(--hot)_25%,transparent)]">
                Featured Flagship
              </span>
            )}
          </div>
          <p className="text-[14px] text-[var(--muted)] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Problem & Contribution */}
          {project.problem && (
            <div className="mb-2.5 p-3 rounded-xl bg-[var(--surface2)] border border-[var(--line)]">
              <span className="text-[11px] font-mono font-bold text-[var(--accent)] uppercase tracking-wider block">
                The Problem
              </span>
              <p className="text-[12.5px] text-[var(--muted)] mt-1 leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}
          {project.contribution && (
            <div className="mb-4 p-3 rounded-xl bg-[color-mix(in_srgb,var(--hot)_6%,var(--surface2))] border border-[color-mix(in_srgb,var(--hot)_22%,transparent)]">
              <span className="text-[11px] font-mono font-bold text-[var(--hot)] uppercase tracking-wider block">
                Engineering Contribution
              </span>
              <p className="text-[12.5px] text-[var(--muted)] mt-1 leading-relaxed">
                {project.contribution}
              </p>
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-[var(--surface2)] text-[var(--muted)] border border-[var(--line)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-[var(--line)]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-portfolio btn-portfolio-secondary !py-2 !px-3.5 !text-xs !rounded-lg"
          >
            <GithubIcon size={14} />
            Source Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-portfolio btn-portfolio-primary !py-2 !px-3.5 !text-xs !rounded-lg"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
