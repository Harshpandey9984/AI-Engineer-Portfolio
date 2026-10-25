import { useEffect, useRef } from 'react';

interface ThumbnailProps {
  type: 'rag' | 'agent' | 'evaluation' | 'default';
}

export default function ProjectThumbnail({ type }: ThumbnailProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches && svgRef.current && typeof (svgRef.current as any).pauseAnimations === 'function') {
      (svgRef.current as any).pauseAnimations();
    }
  }, []);

  if (type === 'rag') {
    return (
      <div className="thumb">
        <span className="thumb-badge">RAG</span>
        <svg
          ref={svgRef}
          viewBox="0 0 300 225"
          role="img"
          aria-label="Enterprise RAG question-answering pipeline with vector retrieval and citations"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Document node */}
          <rect x="22" y="64" width="54" height="72" rx="6" className="fs sl" strokeWidth="1.5" />
          {/* Document text lines */}
          <line x1="30" y1="78" x2="68" y2="78" className="sm" strokeWidth="3" strokeLinecap="round" />
          <line x1="30" y1="90" x2="64" y2="90" className="sa anim-hl" strokeWidth="3.5" strokeLinecap="round" style={{ '--dl': '0s' } as any} />
          <line x1="30" y1="102" x2="60" y2="102" className="sa anim-hl" strokeWidth="3.5" strokeLinecap="round" style={{ '--dl': '0.6s' } as any} />
          <line x1="30" y1="114" x2="52" y2="114" className="sm" strokeWidth="3" strokeLinecap="round" />

          {/* Flow dashed arrows */}
          <path d="M 80 100 C 94 100 94 112 102 112" fill="none" className="sm anim-dash" strokeWidth="1.5" />
          <path d="M 200 112 H 222" fill="none" className="sm anim-dash" strokeWidth="1.5" />

          {/* Vector Space Boundary */}
          <circle cx="150" cy="112" r="50" fill="none" className="sl" strokeWidth="1.5" strokeDasharray="3 5" />

          {/* Eight muted dots inside vector space */}
          <circle cx="125" cy="85" r="3" className="fm" opacity="0.55" />
          <circle cx="170" cy="82" r="3" className="fm" opacity="0.55" />
          <circle cx="130" cy="135" r="3" className="fm" opacity="0.55" />
          <circle cx="178" cy="128" r="3" className="fm" opacity="0.55" />
          <circle cx="118" cy="112" r="3" className="fm" opacity="0.55" />
          <circle cx="140" cy="95" r="3" className="fm" opacity="0.55" />
          <circle cx="165" cy="145" r="3" className="fm" opacity="0.55" />
          <circle cx="182" cy="104" r="3" className="fm" opacity="0.55" />

          {/* Three retrieved accent dots */}
          <circle cx="152" cy="106" r="4" className="fa anim-pls" style={{ '--dl': '0s' } as any} />
          <circle cx="162" cy="118" r="4" className="fa anim-pls" style={{ '--dl': '0.5s' } as any} />
          <circle cx="146" cy="122" r="4" className="fa anim-pls" style={{ '--dl': '1s' } as any} />

          {/* Query dot (hot) */}
          <circle cx="158" cy="100" r="5" className="fh anim-pls" style={{ '--dl': '0.2s' } as any} />
          {/* Thin accent connector lines to retrieved docs */}
          <line x1="158" y1="100" x2="152" y2="106" className="sa" strokeWidth="1" opacity="0.5" />
          <line x1="158" y1="100" x2="162" y2="118" className="sa" strokeWidth="1" opacity="0.5" />
          <line x1="158" y1="100" x2="146" y2="122" className="sa" strokeWidth="1" opacity="0.5" />

          {/* SMIL Animated Travelling Dot along path */}
          <path id="rag-travel-path" d="M 80 100 C 94 100 94 112 104 112 L 196 112 L 222 112" fill="none" opacity="0" />
          <circle r="4" className="fh">
            <animateMotion dur="3.2s" repeatCount="indefinite">
              <mpath href="#rag-travel-path" />
            </animateMotion>
          </circle>

          {/* Answer Card */}
          <rect x="224" y="72" width="62" height="80" rx="9" className="fs sa" strokeWidth="1.8" />
          <line x1="234" y1="88" x2="276" y2="88" className="sm" strokeWidth="3" strokeLinecap="round" />
          <line x1="234" y1="98" x2="268" y2="98" className="sm" strokeWidth="3" strokeLinecap="round" />
          <line x1="234" y1="108" x2="272" y2="108" className="sm" strokeWidth="3" strokeLinecap="round" />
          {/* Hot Pill chip holding surface text p.4 */}
          <rect x="234" y="122" width="30" height="16" rx="8" className="fh" />
          <text x="249" y="133" textAnchor="middle" className="fs" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono">p.4</text>
        </svg>
      </div>
    );
  }

  if (type === 'agent') {
    return (
      <div className="thumb">
        <span className="thumb-badge">Agent</span>
        <svg
          ref={svgRef}
          viewBox="0 0 300 225"
          role="img"
          aria-label="Tool-calling AI agent with central reasoning hub and external tool nodes"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Paths from hub (150,112) to nodes */}
          <path id="agent-line-1" d="M 150 112 L 62 54" className="sl" strokeWidth="1.5" />
          <path id="agent-line-2" d="M 150 112 L 238 54" className="sl" strokeWidth="1.5" />
          <path id="agent-line-3" d="M 150 112 L 62 172" className="sl" strokeWidth="1.5" />
          <path id="agent-line-4" d="M 150 112 L 238 172" className="sl" strokeWidth="1.5" />

          {/* SMIL Traveling Pulses */}
          <circle r="4" className="fh">
            <animateMotion dur="4s" keyPoints="0;1;1" keyTimes="0;.25;1" calcMode="linear" begin="0s" repeatCount="indefinite">
              <mpath href="#agent-line-1" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.02;.22;.25;1" dur="4s" begin="0s" repeatCount="indefinite" />
          </circle>

          <circle r="4" className="fh">
            <animateMotion dur="4s" keyPoints="0;1;1" keyTimes="0;.25;1" calcMode="linear" begin="1s" repeatCount="indefinite">
              <mpath href="#agent-line-2" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.02;.22;.25;1" dur="4s" begin="1s" repeatCount="indefinite" />
          </circle>

          <circle r="4" className="fh">
            <animateMotion dur="4s" keyPoints="0;1;1" keyTimes="0;.25;1" calcMode="linear" begin="2s" repeatCount="indefinite">
              <mpath href="#agent-line-3" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.02;.22;.25;1" dur="4s" begin="2s" repeatCount="indefinite" />
          </circle>

          <circle r="4" className="fh">
            <animateMotion dur="4s" keyPoints="0;1;1" keyTimes="0;.25;1" calcMode="linear" begin="3s" repeatCount="indefinite">
              <mpath href="#agent-line-4" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.02;.22;.25;1" dur="4s" begin="3s" repeatCount="indefinite" />
          </circle>

          {/* Central Hub */}
          <circle cx="150" cy="112" r="24" className="fa" />
          <circle cx="150" cy="112" r="9" className="fs" />
          <circle cx="150" cy="112" r="3.5" className="fa" />

          {/* Rotating Orbit Group */}
          <g className="anim-orbit">
            <circle cx="150" cy="112" r="38" fill="none" className="sh" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="188" cy="112" r="4" className="fh" />
            <circle cx="112" cy="112" r="4" className="fh" opacity="0.5" />
          </g>

          {/* Tool 1: Orders / DB (40, 36) */}
          <rect x="40" y="36" width="44" height="36" rx="8" className="fs anim-nodeon" strokeWidth="1.8" style={{ '--dl': '0s' } as any} />
          {/* Box / DB Icon */}
          <path d="M 54 48 L 62 44 L 70 48 L 62 52 Z M 54 48 V 58 L 62 62 V 52 M 70 48 V 58 L 62 62" fill="none" className="sa" strokeWidth="1.3" strokeLinejoin="round" />

          {/* Tool 2: Policy / Doc (216, 36) */}
          <rect x="216" y="36" width="44" height="36" rx="8" className="fs anim-nodeon" strokeWidth="1.8" style={{ '--dl': '1s' } as any} />
          {/* Doc icon */}
          <path d="M 232 46 H 244 L 248 50 V 62 H 232 Z" fill="none" className="sa" strokeWidth="1.3" />
          <line x1="236" y1="53" x2="242" y2="53" className="sa" strokeWidth="1.2" />
          <line x1="236" y1="57" x2="244" y2="57" className="sa" strokeWidth="1.2" />

          {/* Tool 3: Email / API (40, 154) */}
          <rect x="40" y="154" width="44" height="36" rx="8" className="fs anim-nodeon" strokeWidth="1.8" style={{ '--dl': '2s' } as any} />
          {/* Envelope Icon */}
          <rect x="52" y="165" width="20" height="14" rx="2" fill="none" className="sa" strokeWidth="1.3" />
          <path d="M 52 166 L 62 173 L 72 166" fill="none" className="sa" strokeWidth="1.3" />

          {/* Tool 4: Human Handoff (216, 154) */}
          <rect x="216" y="154" width="44" height="36" rx="8" className="fs anim-nodeon" strokeWidth="1.8" style={{ '--dl': '3s' } as any} />
          {/* Person Icon */}
          <circle cx="238" cy="167" r="4" fill="none" className="sa" strokeWidth="1.3" />
          <path d="M 230 181 C 230 176 233 174 238 174 C 243 174 246 176 246 181" fill="none" className="sa" strokeWidth="1.3" />
        </svg>
      </div>
    );
  }

  // Evaluation thumbnail (default / fallback)
  return (
    <div className="thumb">
      <span className="thumb-badge">Evaluation</span>
      <svg
        ref={svgRef}
        viewBox="0 0 300 225"
        role="img"
        aria-label="Evaluation test harness with benchmark pass thresholds and live telemetry scoring"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Baseline */}
        <line x1="30" y1="170" x2="270" y2="170" className="sl" strokeWidth="1.5" />

        {/* Pass Threshold line at y=82 */}
        <line x1="30" y1="82" x2="270" y2="82" className="sh" strokeWidth="1.5" strokeDasharray="5 5" />
        <text x="272" y="85" className="fh" fontSize="9" fontFamily="JetBrains Mono">PASS</text>

        {/* Five Bars */}
        {/* Bar 0: x=40, height=54 */}
        <rect x="40" y="116" width="30" height="54" rx="5" className="fa anim-grow" opacity="0.35" style={{ '--i': 0 } as any} />
        {/* Bar 1: x=82, height=70 */}
        <rect x="82" y="100" width="30" height="70" rx="5" className="fa anim-grow" opacity="0.5" style={{ '--i': 1 } as any} />
        {/* Bar 2: x=124, height=62 */}
        <rect x="124" y="108" width="30" height="62" rx="5" className="fa anim-grow" opacity="0.65" style={{ '--i': 2 } as any} />
        {/* Bar 3: x=166, height=90 */}
        <rect x="166" y="80" width="30" height="90" rx="5" className="fa anim-grow" opacity="0.85" style={{ '--i': 3 } as any} />
        {/* Bar 4: x=208, height=104 (Hot, rises above pass threshold) */}
        <rect x="208" y="66" width="30" height="104" rx="5" className="fh anim-grow" style={{ '--i': 4 } as any} />

        {/* Scan line */}
        <rect x="30" y="60" width="2" height="110" className="fa anim-scan" opacity="0.45" />

        {/* Check Badge at (252, 44) */}
        <circle cx="252" cy="44" r="15" className="fs sa" strokeWidth="1.8" />
        <path d="M 245 44 l 5 5 l 10 -11" fill="none" className="sa anim-tick" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
