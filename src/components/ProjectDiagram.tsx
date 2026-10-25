interface ProjectDiagramProps {
  id: string;
  isFeatured?: boolean;
}

export default function ProjectDiagram({ id, isFeatured }: ProjectDiagramProps) {
  if (id === 'processiq' || isFeatured) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-xs select-none">
        <svg
          viewBox="0 0 460 220"
          className="w-full h-auto max-h-56 filter drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Grid Background */}
          <defs>
            <pattern id="diag-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" />
            </pattern>
            <linearGradient id="cyanGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="glowG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect width="460" height="220" rx="16" fill="currentColor" fillOpacity="0.02" />
          <rect width="460" height="220" rx="16" fill="url(#diag-grid)" />

          {/* Node 1: Sensor & Parameter Stream */}
          <rect x="20" y="70" width="105" height="80" rx="10" className="fill-white dark:fill-[#151C2C] stroke-slate-200 dark:stroke-slate-700/80" strokeWidth="1.5" />
          <text x="72" y="100" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-semibold text-[11px] font-sans">Sensor Streams</text>
          <text x="72" y="118" textAnchor="middle" className="fill-cyan-600 dark:fill-cyan-400 text-[9px] font-mono">1.2k events/sec</text>
          <circle cx="36" cy="132" r="3" className="fill-emerald-400 animate-pulse" />
          <text x="46" y="135" className="fill-slate-500 dark:fill-slate-400 text-[8px] font-mono">Live Ingestion</text>

          {/* Connection 1 */}
          <path d="M 125 110 L 165 110" stroke="url(#glowG)" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="145" cy="110" r="3" className="fill-cyan-400" />

          {/* Node 2: Digital Twin Engine */}
          <rect x="165" y="55" width="130" height="110" rx="12" className="fill-cyan-50/70 dark:fill-slate-900/90 stroke-cyan-500/50 dark:stroke-cyan-400/50" strokeWidth="2" />
          <rect x="175" y="65" width="110" height="22" rx="6" className="fill-cyan-500/10 dark:fill-cyan-400/20" />
          <text x="230" y="80" textAnchor="middle" className="fill-cyan-700 dark:fill-cyan-300 font-bold text-[10px] font-mono uppercase tracking-wider">Digital Twin ML</text>
          
          {/* Internal simulated curve inside node 2 */}
          <path d="M 180 135 Q 200 115, 215 130 T 250 100 T 285 125" fill="none" stroke="url(#cyanGrad)" strokeWidth="2" />
          <circle cx="250" cy="100" r="4" className="fill-violet-400" />
          <text x="230" y="152" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[9px] font-mono">Simulated Yield +24.8%</text>

          {/* Connection 2 */}
          <path d="M 295 110 L 335 110" stroke="url(#glowG)" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="315" cy="110" r="3" className="fill-violet-400" />

          {/* Node 3: Optimized Parameters */}
          <rect x="335" y="70" width="105" height="80" rx="10" className="fill-white dark:fill-[#151C2C] stroke-slate-200 dark:stroke-slate-700/80" strokeWidth="1.5" />
          <text x="387" y="100" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-semibold text-[11px] font-sans">Yield Dispatch</text>
          <text x="387" y="118" textAnchor="middle" className="fill-violet-600 dark:fill-violet-400 text-[9px] font-mono">Bottleneck 0%</text>
          <rect x="350" y="126" width="75" height="12" rx="3" className="fill-emerald-500/10 stroke-emerald-500/30" />
          <text x="387" y="135" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[8px] font-mono font-bold">OPTIMIZED</text>
        </svg>
      </div>
    );
  }

  if (id === 'lead-harvest') {
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <svg viewBox="0 0 280 140" className="w-full h-auto max-h-36 filter drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="280" height="140" rx="12" className="fill-slate-100/50 dark:fill-slate-900/40" />
          
          {/* Step 1: Web Spider */}
          <rect x="15" y="45" width="70" height="50" rx="8" className="fill-white dark:fill-[#151C2C] stroke-slate-200 dark:stroke-slate-700" />
          <text x="50" y="68" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[9px] font-bold font-mono">DOM Spider</text>
          <text x="50" y="82" textAnchor="middle" className="fill-cyan-600 dark:fill-cyan-400 text-[8px] font-mono">Target Query</text>

          {/* Arrow */}
          <path d="M 85 70 L 105 70" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Step 2: Extraction Agent */}
          <rect x="105" y="38" width="75" height="64" rx="8" className="fill-cyan-50/60 dark:fill-slate-900 stroke-cyan-500/40" />
          <text x="142" y="62" textAnchor="middle" className="fill-cyan-700 dark:fill-cyan-300 text-[9px] font-bold font-mono">Parser Engine</text>
          <text x="142" y="76" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[8px] font-mono">Regex + NLP</text>
          <text x="142" y="90" textAnchor="middle" className="fill-violet-600 dark:fill-violet-400 text-[8px] font-mono">Deduplicate</text>

          {/* Arrow */}
          <path d="M 180 70 L 200 70" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Step 3: Structured Lead Dataset */}
          <rect x="200" y="45" width="65" height="50" rx="8" className="fill-white dark:fill-[#151C2C] stroke-slate-200 dark:stroke-slate-700" />
          <text x="232" y="68" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[9px] font-bold font-mono">CRM Export</text>
          <text x="232" y="82" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[8px] font-mono">Clean JSON</text>
        </svg>
      </div>
    );
  }

  if (id === 'dl-chatbot') {
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <svg viewBox="0 0 280 140" className="w-full h-auto max-h-36 filter drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="280" height="140" rx="12" className="fill-slate-100/50 dark:fill-slate-900/40" />

          {/* Input Tokens */}
          <rect x="15" y="45" width="65" height="50" rx="8" className="fill-white dark:fill-[#151C2C] stroke-slate-200 dark:stroke-slate-700" />
          <text x="47" y="68" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[9px] font-bold font-mono">Query Token</text>
          <text x="47" y="82" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 text-[8px] font-mono">Vector Embed</text>

          <path d="M 80 70 L 105 70" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Neural Hidden Layers */}
          <rect x="105" y="35" width="75" height="70" rx="8" className="fill-violet-50/60 dark:fill-slate-900 stroke-violet-500/40" />
          <text x="142" y="58" textAnchor="middle" className="fill-violet-700 dark:fill-violet-300 text-[9px] font-bold font-mono">Neural Net</text>
          <circle cx="125" cy="74" r="3.5" className="fill-cyan-400" />
          <circle cx="142" cy="74" r="3.5" className="fill-violet-400" />
          <circle cx="160" cy="74" r="3.5" className="fill-pink-400" />
          <path d="M 125 74 L 142 74 M 142 74 L 160 74" stroke="currentColor" strokeOpacity="0.3" />
          <text x="142" y="92" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[8px] font-mono">98.4% Intent</text>

          <path d="M 180 70 L 205 70" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Output Response */}
          <rect x="205" y="45" width="60" height="50" rx="8" className="fill-white dark:fill-[#151C2C] stroke-slate-200 dark:stroke-slate-700" />
          <text x="235" y="68" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[9px] font-bold font-mono">Dialogue</text>
          <text x="235" y="82" textAnchor="middle" className="fill-cyan-600 dark:fill-cyan-400 text-[8px] font-mono">Grounded</text>
        </svg>
      </div>
    );
  }

  if (id === 'textify') {
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <svg viewBox="0 0 280 140" className="w-full h-auto max-h-36 filter drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="280" height="140" rx="12" className="fill-slate-100/50 dark:fill-slate-900/40" />
          
          {/* Audio Waveform */}
          <rect x="15" y="45" width="65" height="50" rx="8" className="fill-white dark:fill-[#151C2C] stroke-slate-200 dark:stroke-slate-700" />
          <text x="47" y="64" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[9px] font-bold font-mono">Raw Audio</text>
          <path d="M 28 80 L 32 72 L 36 86 L 40 68 L 44 88 L 48 74 L 52 82 L 56 77 L 60 80" fill="none" stroke="#06B6D4" strokeWidth="1.5" />

          <path d="M 80 70 L 105 70" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Speech-to-Text Model */}
          <rect x="105" y="40" width="75" height="60" rx="8" className="fill-cyan-50/60 dark:fill-slate-900 stroke-cyan-500/40" />
          <text x="142" y="64" textAnchor="middle" className="fill-cyan-700 dark:fill-cyan-300 text-[9px] font-bold font-mono">Acoustic STT</text>
          <text x="142" y="80" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[8px] font-mono">Multi-lingual</text>

          <path d="M 180 70 L 205 70" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Clean Punctuation */}
          <rect x="205" y="45" width="60" height="50" rx="8" className="fill-white dark:fill-[#151C2C] stroke-slate-200 dark:stroke-slate-700" />
          <text x="235" y="68" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[9px] font-bold font-mono">Transcript</text>
          <text x="235" y="82" textAnchor="middle" className="fill-violet-600 dark:fill-violet-400 text-[8px] font-mono">Punctuated</text>
        </svg>
      </div>
    );
  }

  // Default / Smart-Loan / Bookwarm Web3
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 280 140" className="w-full h-auto max-h-36 filter drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="140" rx="12" className="fill-slate-100/50 dark:fill-slate-900/40" />
        
        {/* Node A */}
        <rect x="20" y="45" width="60" height="50" rx="8" className="fill-white dark:fill-[#151C2C] stroke-slate-200 dark:stroke-slate-700" />
        <text x="50" y="68" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[9px] font-bold font-mono">Client Node</text>
        <text x="50" y="82" textAnchor="middle" className="fill-cyan-600 dark:fill-cyan-400 text-[8px] font-mono">EVM Wallet</text>

        {/* Contract Core */}
        <path d="M 80 70 L 105 70" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3 2" />
        <rect x="105" y="40" width="75" height="60" rx="8" className="fill-violet-50/60 dark:fill-slate-900 stroke-violet-500/40" />
        <text x="142" y="64" textAnchor="middle" className="fill-violet-700 dark:fill-violet-300 text-[9px] font-bold font-mono">Smart Contract</text>
        <text x="142" y="80" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[8px] font-mono">Verified State</text>
        <path d="M 180 70 L 205 70" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* Node B */}
        <rect x="205" y="45" width="60" height="50" rx="8" className="fill-white dark:fill-[#151C2C] stroke-slate-200 dark:stroke-slate-700" />
        <text x="235" y="68" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[9px] font-bold font-mono">Ledger Pool</text>
        <text x="235" y="82" textAnchor="middle" className="fill-violet-600 dark:fill-violet-400 text-[8px] font-mono">Immutable</text>
      </svg>
    </div>
  );
}
