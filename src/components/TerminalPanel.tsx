import { useEffect, useState } from 'react';

const lines = [
  { prefix: '$ ', text: 'ask “What does the refund policy say about annual plans?”', time: '' },
  { prefix: 'retrieve  ', text: 'top_k=8 from pgvector', time: '41 ms' },
  { prefix: 'rerank    ', text: 'cross-encoder, 8 to 3', time: '63 ms' },
  { prefix: 'generate  ', text: 'grounded on 3 passages', time: '1.2 s' },
  { prefix: 'evaluate  ', text: 'faithfulness check', time: 'passed' },
  { prefix: '', text: 'answer cites pages 4, 4 and 9', time: '' },
];

export default function TerminalPanel() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVisibleCount(lines.length);
      return;
    }

    const timers: any[] = [];
    lines.forEach((_, idx) => {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => Math.max(prev, idx + 1));
      }, 900 + idx * 650);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="terminal-wrapper w-full max-w-lg mx-auto">
      <div className="terminal-inner">
        {/* Title bar with three 9px --line dots */}
        <div className="terminal-title-bar">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="text-[11.5px] text-[var(--muted)] font-mono tracking-wide ml-2">
            pipeline_run.sh
          </span>
        </div>

        {/* Lines */}
        <div className="p-5 flex flex-col gap-2 font-mono text-[13.5px] leading-[1.75]">
          {lines.map((line, idx) => {
            const isVisible = idx < visibleCount;
            const isFirst = idx === 0;
            const isLast = idx === lines.length - 1;

            return (
              <div
                key={idx}
                className={`terminal-line ${isVisible ? 'show-line' : ''} flex items-baseline justify-between gap-2`}
              >
                <div>
                  {isFirst ? (
                    <span>
                      <span className="text-[var(--accent)] font-bold select-none">{line.prefix}</span>
                      <span>{line.text}</span>
                    </span>
                  ) : isLast ? (
                    <span className="text-[var(--hot)] font-semibold flex items-center gap-2 pt-2 border-t border-dashed border-[var(--line)] w-full">
                      <span className="w-2 h-2 rounded-full bg-[var(--hot)] animate-pulse" />
                      {line.text}
                    </span>
                  ) : (
                    <span>
                      <span className="text-[var(--accent)] font-semibold">{line.prefix}</span>
                      <span className="text-[var(--muted)]">{line.text}</span>
                    </span>
                  )}
                </div>
                {line.time && (
                  <span
                    className={`shrink-0 text-xs font-semibold ${
                      line.time === 'passed'
                        ? 'px-2 py-0.5 rounded text-[var(--hot)] bg-[color-mix(in_srgb,var(--hot)_12%,transparent)] border border-[color-mix(in_srgb,var(--hot)_25%,transparent)]'
                        : 'text-[var(--muted)]'
                    }`}
                  >
                    {line.time}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
