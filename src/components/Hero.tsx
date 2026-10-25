import { useState } from 'react';
import { ArrowRight, Download, Terminal as TerminalIcon, User, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './Icons';
import { siteConfig } from '../config/site';
import NeuralCanvas from './NeuralCanvas';
import TerminalPanel from './TerminalPanel';
import ContactDialog, { type ContactModalType } from './ContactDialog';

interface HeroProps {
  isDark?: boolean;
}

// "Engineering Intelligent Systems. Building AI That Works."
const headlineWords = [
  'Engineering',
  'Intelligent',
  'Systems.',
  'Building',
  'AI',
  'That',
  'Works.',
];

export default function Hero({ isDark = true }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'portrait' | 'pipeline'>('portrait');
  const [dialogType, setDialogType] = useState<ContactModalType>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResume = () => {
    window.open(siteConfig.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Neural Background Canvas */}
      <NeuralCanvas isDark={isDark} />

      {/* Atmospheric radial glows */}
      <div className="hero-glow-1" />

      <div className="container-portfolio section-padding mx-auto relative z-10 w-full">
        <div className="hero-grid">
          {/* Left Column */}
          <div className="rv in flex flex-col items-start">
            {/* Pill Badge */}
            <div className="hero-badge mb-6">
              <span className="hero-badge-dot" />
              <span>AI Engineering · Intelligent Products</span>
            </div>

            {/* Headline with Word Reveal */}
            <h1 className="mb-6 select-none">
              {headlineWords.map((word, idx) => (
                <span
                  key={idx}
                  className={`w ${idx >= 3 ? 'accent-word' : ''}`}
                >
                  <span
                    style={{
                      animationDelay: `calc(${idx} * 75ms + 120ms)`,
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            {/* Paragraph */}
            <p className="text-[var(--muted)] text-[17px] leading-[1.65] mb-6 max-w-xl">
              I’m Harsh Pandey, an AI Engineer focused on building intelligent applications,
              AI agents, LLM-powered solutions, and automation systems. I combine AI engineering with
              full-stack development to turn complex problems into practical software products.
            </p>

            {/* Three Tag Pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="tag-pill">AI Agents</span>
              <span className="tag-pill hot-pill">LLM Applications</span>
              <span className="tag-pill">Intelligent Automation</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-portfolio btn-portfolio-primary"
              >
                See my projects
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-portfolio btn-portfolio-secondary"
              >
                Get in touch
              </button>
              <button
                onClick={handleResume}
                className="btn-portfolio btn-portfolio-secondary"
                aria-label="Download verified resume"
              >
                <Download size={15} />
                Resume
              </button>
            </div>

            {/* Verified Direct Channels */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold text-[var(--muted)]">
              <span>Verified:</span>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text)] transition-colors inline-flex items-center gap-1.5"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
              <span className="text-[var(--line)]">·</span>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
              <span className="text-[var(--line)]">·</span>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text)] transition-colors inline-flex items-center gap-1.5"
              >
                <TwitterXIcon size={13} />
                X (Twitter)
              </a>
              <span className="text-[var(--line)]">·</span>
              <button
                type="button"
                onClick={() => setDialogType('email')}
                className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Mail size={13} />
                Email
              </button>
            </div>
          </div>

          {/* Right Column: Tabbed View (Portrait vs Live Pipeline) */}
          <div className="rv in w-full flex flex-col items-center">
            {/* View Switcher Controls */}
            <div className="flex items-center gap-1.5 p-1 mb-5 rounded-xl bg-[var(--surface2)] border border-[var(--line)]">
              <button
                onClick={() => setActiveTab('portrait')}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'portrait'
                    ? 'bg-[var(--surface)] text-[var(--accent)] shadow-xs'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                <User size={13} />
                Portrait
              </button>
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'pipeline'
                    ? 'bg-[var(--surface)] text-[var(--accent)] shadow-xs'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                <TerminalIcon size={13} />
                Live Pipeline
              </button>
            </div>

            {/* Display Active View */}
            {activeTab === 'portrait' ? (
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-[24px] overflow-hidden border border-[var(--line)] bg-[var(--surface2)] shadow-[0_25px_60px_-15px_var(--shadow)] group">
                <img
                  src={siteConfig.profileImage}
                  alt="Harsh Pandey - AI Engineer"
                  className="w-full h-full object-cover object-[50%_18%] filter saturate-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
                {/* Subtle bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/95 via-[var(--surface)]/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                  <div className="flex flex-col gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--text)] font-display">Harsh Pandey</h3>
                      <p className="text-xs text-[var(--muted)] font-mono">AI Engineer</p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[color-mix(in_srgb,var(--hot)_15%,transparent)] border border-[color-mix(in_srgb,var(--hot)_30%,transparent)] text-[var(--hot)] text-[10.5px] sm:text-[11px] font-mono font-semibold w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--hot)] animate-pulse shrink-0" />
                      <span>Open for opportunities and collaborations</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <TerminalPanel />
            )}
          </div>
        </div>
      </div>

      <ContactDialog
        type={dialogType}
        onClose={() => setDialogType(null)}
      />
    </section>
  );
}
