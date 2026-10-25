import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, Mail, Copy, ExternalLink, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './Icons';
import { siteConfig } from '../config/site';
import ContactDialog, { type ContactModalType } from './ContactDialog';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const projectTypes = [
  'Enterprise RAG Assistant',
  'Tool-Calling AI Agent',
  'LLM Application Development',
  'AI Workflow Automation',
  'Full-Stack AI Product',
  'Consulting / Full-time Role',
  'Other',
];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [dialogType, setDialogType] = useState<ContactModalType>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const subject = `[AI Inquiry] ${formData.projectType || 'Project'} from ${formData.name || 'Client'}`;
  const body = `Hi Harsh,\n\nName: ${formData.name}\nEmail: ${formData.email}${
    formData.phone ? `\nPhone: ${formData.phone}` : ''
  }\nProject / Role Type: ${formData.projectType || 'General'}\n\nProject Overview:\n${formData.message}\n`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    if (siteConfig.contactEndpoint) {
      setStatus('submitting');
      try {
        const res = await fetch(siteConfig.contactEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setStatus('success');
          return;
        }
      } catch (e) {}
    }

    // Try location.href mailto (doesn't open blank tabs)
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setStatus('success');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyInquiry = async () => {
    try {
      const fullText = `To: ${siteConfig.email}\nSubject: ${subject}\n\n${body}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullText);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      setCopied(true);
    }
  };

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    siteConfig.email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <section id="contact" className="py-24 lg:py-32 bg-[var(--bg)]">
        <div className="container-portfolio section-padding mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 rv in">
            <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-[var(--hot)] px-3.5 py-1 rounded-full bg-[color-mix(in_srgb,var(--hot)_10%,transparent)] border border-[color-mix(in_srgb,var(--hot)_25%,transparent)] mb-4">
              Get In Touch
            </span>
            <h2 className="mb-4">
              Have an AI Idea Worth Building?
            </h2>
            <p className="text-[var(--muted)] text-[17px] leading-relaxed">
              Whether you’re exploring an AI agent, an enterprise RAG pipeline, intelligent automation, or an AI-enabled software product, let’s discuss the problem and how we can approach it.
            </p>
          </div>

          <div className="contact-card max-w-4xl mx-auto grid lg:grid-cols-5 gap-10 rv in">
            {/* Left Info Column */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="card-title text-[var(--text)] mb-3">
                  Let’s collaborate.
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  Open to international freelance contracts, engineering collaborations with AI startups, and full-time AI Engineering opportunities.
                </p>

                <div className="space-y-4 mb-8">
                  {/* Email action trigger */}
                  <button
                    type="button"
                    onClick={() => setDialogType('email')}
                    className="w-full flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors group text-left cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[var(--surface2)] border border-[var(--line)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors shrink-0">
                      <Mail size={16} className="text-[var(--accent)]" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider">Email (Click for options)</span>
                      <span className="truncate block font-medium text-[var(--text)]">{siteConfig.email}</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-2.5 pt-6 border-t border-[var(--line)]">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--text)] transition-colors"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--text)] transition-colors"
                  aria-label="Twitter / X"
                  title="Twitter / X"
                >
                  <TwitterXIcon size={15} />
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-[var(--muted)] mb-1.5">
                      Your Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex Rivera"
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-sm text-[var(--text)] focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-[var(--muted)] mb-1.5">
                      Your Email <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-sm text-[var(--text)] focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono font-medium text-[var(--muted)] mb-1.5 flex items-center justify-between">
                      <span>Phone Number</span>
                      <span className="text-[var(--muted)] font-normal text-[11px]">(Optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-sm text-[var(--text)] focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-mono font-medium text-[var(--muted)] mb-1.5">
                      Project / Role Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-sm text-[var(--text)] focus:border-[var(--accent)] transition-colors"
                    >
                      <option value="">Select an area...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-[var(--muted)] mb-1.5">
                    Message & Overview <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about what you’re building, roles, timelines, or requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-sm text-[var(--text)] focus:border-[var(--accent)] transition-colors resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-[color-mix(in_srgb,var(--hot)_12%,transparent)] border border-[color-mix(in_srgb,var(--hot)_30%,transparent)] text-xs text-[var(--text)] space-y-3">
                    <div className="flex items-center gap-2 text-[var(--hot)] font-bold">
                      <CheckCircle size={16} />
                      <span>Inquiry prepared! Choose how you would like to dispatch it:</span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={gmailWebUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-portfolio btn-portfolio-primary !py-2 !px-3 !text-xs !rounded-lg"
                      >
                        <ExternalLink size={14} />
                        Send via Gmail Web
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyInquiry}
                        className="btn-portfolio btn-portfolio-secondary !py-2 !px-3 !text-xs !rounded-lg"
                      >
                        {copied ? <Check size={14} className="text-[var(--hot)]" /> : <Copy size={14} />}
                        {copied ? 'Copied!' : 'Copy Inquiry'}
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full btn-portfolio btn-portfolio-primary justify-center cursor-pointer"
                >
                  <Send size={15} />
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ContactDialog
        type={dialogType}
        onClose={() => setDialogType(null)}
      />
    </>
  );
}
