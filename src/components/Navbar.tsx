import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './Icons';
import { siteConfig } from '../config/site';
import { useScrollSpy } from '../hooks/useScrollSpy';
import ContactDialog, { type ContactModalType } from './ContactDialog';

const navItems = [
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Contact', href: 'contact' },
];

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState<ContactModalType>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const activeSection = useScrollSpy(navItems.map((n) => n.href), 120);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Safe Area Top Strip */}
      <div className="safe-area-strip" />

      <header className="site-header">
        <nav className="container-portfolio section-padding mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo HP with small teal/mint dot */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-1.5 group cursor-pointer focus-visible:outline-none"
              aria-label="Go to top"
            >
              <span className="text-xl font-bold font-display text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                HP
              </span>
              <span className="w-2 h-2 rounded-full bg-[var(--hot)] shadow-[0_0_8px_var(--hot)]" />
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`nav-link cursor-pointer ${activeSection === item.href ? 'active text-[var(--text)]' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Direct Social & Contact Channels (Desktop) */}
              <div className="hidden lg:flex items-center gap-1 border-r border-[var(--line)] pr-3 mr-1">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface2)] transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon size={15} />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--surface2)] transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={15} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface2)] transition-colors"
                  aria-label="Twitter (X) Profile"
                  title="Twitter / X (@HarshPandey9984)"
                >
                  <TwitterXIcon size={13} />
                </a>
                <button
                  type="button"
                  onClick={() => setDialogType('email')}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--surface2)] transition-colors cursor-pointer"
                  aria-label={`Email (${siteConfig.email})`}
                  title={`Email: ${siteConfig.email}`}
                >
                  <Mail size={15} />
                </button>
              </div>

              {/* 62x32 Pill Theme Switch */}
              <button
                type="button"
                onClick={toggleTheme}
                role="switch"
                aria-pressed={isDark}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                className="theme-switch-pill shrink-0"
              >
                <div className="theme-switch-knob">
                  {/* Sun Icon */}
                  <span className="switch-icon switch-icon-sun">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                  </span>
                  {/* Moon Icon */}
                  <span className="switch-icon switch-icon-moon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  </span>
                </div>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="hidden sm:inline-flex btn-portfolio btn-portfolio-primary !py-2 !px-3.5 !text-xs !rounded-lg shrink-0"
              >
                Let’s Talk
                <ArrowRight size={13} />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface2)] border border-[var(--line)]"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>

        {/* 2px Scroll Progress Bar */}
        <div ref={progressBarRef} className="scroll-progress-bar" />

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-[62px] bg-[var(--surface)]/95 backdrop-blur-xl z-40 p-6 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`text-left px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    activeSection === item.href
                      ? 'text-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] font-semibold'
                      : 'text-[var(--text)] hover:bg-[var(--surface2)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-2">
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full btn-portfolio btn-portfolio-primary justify-center"
                >
                  Let’s Talk
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Mobile Contact & Social Channels */}
            <div className="pt-6 border-t border-[var(--line)] flex flex-col gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--muted)]">
                Connect Directly
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                  aria-label="Twitter / X"
                >
                  <TwitterXIcon size={15} />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setDialogType('email');
                  }}
                  className="w-10 h-10 rounded-xl bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Contact Action Dialog */}
      <ContactDialog
        type={dialogType}
        onClose={() => setDialogType(null)}
      />
    </>
  );
}
