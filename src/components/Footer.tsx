import { useState } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './Icons';
import { siteConfig } from '../config/site';
import ContactDialog, { type ContactModalType } from './ContactDialog';

export default function Footer() {
  const [dialogType, setDialogType] = useState<ContactModalType>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="py-12 border-t border-[var(--line)] bg-[var(--surface)]">
        <div className="container-portfolio section-padding mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold font-display text-[var(--text)]">
                  HP
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--hot)]" />
                <span className="text-sm font-semibold text-[var(--text)] ml-1">
                  {siteConfig.name}
                </span>
              </div>
              <p className="text-xs text-[var(--muted)] font-mono">
                AI Engineer · Applied AI & LLM Specialist
              </p>
            </div>

            {/* Social and Contact Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--text)] transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--text)] transition-colors"
                  aria-label="Twitter / X Profile"
                  title="Twitter / X"
                >
                  <TwitterXIcon size={14} />
                </a>
                <button
                  type="button"
                  onClick={() => setDialogType('email')}
                  className="w-9 h-9 rounded-lg bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
                  aria-label={`Email (${siteConfig.email})`}
                  title={`Email: ${siteConfig.email}`}
                >
                  <Mail size={16} />
                </button>
              </div>

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-semibold text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                Resume (PDF)
              </a>

              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-lg bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
                aria-label="Back to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>

          {/* Contact details line with direct action click */}
          <div className="mt-8 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-[var(--muted)] font-mono">
              Direct Email: <button onClick={() => setDialogType('email')} className="text-[var(--accent)] hover:underline cursor-pointer">{siteConfig.email}</button>
            </p>
            <p className="text-xs text-[var(--muted)] font-mono">
              © {currentYear} Harsh Pandey. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <ContactDialog
        type={dialogType}
        onClose={() => setDialogType(null)}
      />
    </>
  );
}
