import { useState, useEffect } from 'react';
import { Mail, Phone, Copy, Check, ExternalLink, MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../config/site';

export type ContactModalType = 'email' | 'phone' | null;

interface ContactDialogProps {
  type: ContactModalType;
  onClose: () => void;
  prefilledSubject?: string;
  prefilledBody?: string;
}

export default function ContactDialog({
  type,
  onClose,
  prefilledSubject = 'AI Project Inquiry',
  prefilledBody = 'Hi Harsh, I would like to discuss an AI project...',
}: ContactDialogProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [type]);

  if (!type) return null;

  const email = siteConfig.email || 'harshpandey8499@gmail.com';
  const rawPhone = siteConfig.phone || '9199668058';
  const cleanPhone = rawPhone.replace(/\D/g, '');
  const formattedPhone = cleanPhone.length === 10 ? `+91 ${cleanPhone}` : `+${cleanPhone}`;
  const intlPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

  const handleCopy = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      setCopied(true);
    }
  };

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(prefilledSubject)}&body=${encodeURIComponent(prefilledBody)}`;

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    prefilledSubject
  )}&body=${encodeURIComponent(prefilledBody)}`;

  const whatsappUrl = `https://wa.me/${intlPhone}?text=${encodeURIComponent(
    `Hi Harsh, I visited your AI Engineer portfolio and would like to connect!`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md p-6 rounded-2xl bg-[var(--surface)] border border-[var(--line)] shadow-2xl text-[var(--text)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface2)] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {type === 'email' ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] border border-[color-mix(in_srgb,var(--accent)_25%,transparent)] flex items-center justify-center text-[var(--accent)]">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold font-display text-[var(--text)]">Send Email</h3>
                <p className="text-xs text-[var(--muted)] font-mono">{email}</p>
              </div>
            </div>

            <p className="text-xs text-[var(--muted)] mb-5 leading-relaxed">
              Choose your preferred way to reach out. Works on all desktop browsers and mobile devices.
            </p>

            <div className="space-y-2.5">
              {/* Option 1: Open in Gmail Web */}
              <a
                href={gmailWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full btn-portfolio btn-portfolio-primary justify-between !py-3 !px-4 !text-xs !rounded-xl"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink size={15} />
                  Open in Gmail (Web Browser)
                </span>
                <span className="text-[10.5px] opacity-80 font-mono">Recommended</span>
              </a>

              {/* Option 2: Copy Email */}
              <button
                type="button"
                onClick={() => handleCopy(email)}
                className="w-full btn-portfolio btn-portfolio-secondary justify-between !py-3 !px-4 !text-xs !rounded-xl"
              >
                <span className="flex items-center gap-2">
                  {copied ? <Check size={15} className="text-[var(--hot)]" /> : <Copy size={15} />}
                  {copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}
                </span>
                <span className="text-[10.5px] text-[var(--muted)] font-mono">{email}</span>
              </button>

              {/* Option 3: Default Email Client */}
              <button
                type="button"
                onClick={() => {
                  window.location.href = mailtoUrl;
                  onClose();
                }}
                className="w-full btn-portfolio btn-portfolio-secondary justify-between !py-3 !px-4 !text-xs !rounded-xl"
              >
                <span className="flex items-center gap-2">
                  <Mail size={15} />
                  Open Default Mail App
                </span>
                <span className="text-[10.5px] text-[var(--muted)] font-mono">Outlook / Apple Mail</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--hot)_12%,transparent)] border border-[color-mix(in_srgb,var(--hot)_25%,transparent)] flex items-center justify-center text-[var(--hot)]">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold font-display text-[var(--text)]">Direct Call & WhatsApp</h3>
                <p className="text-xs text-[var(--muted)] font-mono">{formattedPhone}</p>
              </div>
            </div>

            <p className="text-xs text-[var(--muted)] mb-5 leading-relaxed">
              Connect instantly via phone or WhatsApp chat directly from your phone or PC.
            </p>

            <div className="space-y-2.5">
              {/* Option 1: WhatsApp Chat */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full btn-portfolio btn-portfolio-primary justify-between !py-3 !px-4 !text-xs !rounded-xl !bg-[#25D366] !border-[#25D366] !text-white"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </span>
                <span className="text-[10.5px] opacity-90 font-mono">Instant Response</span>
              </a>

              {/* Option 2: Direct Call */}
              <a
                href={`tel:${cleanPhone}`}
                onClick={onClose}
                className="w-full btn-portfolio btn-portfolio-secondary justify-between !py-3 !px-4 !text-xs !rounded-xl"
              >
                <span className="flex items-center gap-2">
                  <Phone size={15} className="text-[var(--hot)]" />
                  Direct Phone Call
                </span>
                <span className="text-[10.5px] text-[var(--muted)] font-mono">{formattedPhone}</span>
              </a>

              {/* Option 3: Copy Phone Number */}
              <button
                type="button"
                onClick={() => handleCopy(cleanPhone)}
                className="w-full btn-portfolio btn-portfolio-secondary justify-between !py-3 !px-4 !text-xs !rounded-xl"
              >
                <span className="flex items-center gap-2">
                  {copied ? <Check size={15} className="text-[var(--hot)]" /> : <Copy size={15} />}
                  {copied ? 'Phone Number Copied!' : 'Copy Phone Number'}
                </span>
                <span className="text-[10.5px] text-[var(--muted)] font-mono">{cleanPhone}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
