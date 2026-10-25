const tools = [
  'Python',
  'PyTorch',
  'Hugging Face',
  'LangChain',
  'LangGraph',
  'LlamaIndex',
  'FastAPI',
  'pgvector',
  'PostgreSQL',
  'Redis',
  'scikit-learn',
  'Claude API',
  'Docker',
  'Azure',
  'React',
  'TypeScript',
];

export default function ToolStrip() {
  return (
    <div className="tool-marquee-band">
      <div className="marquee-track">
        {/* Set 1 */}
        {tools.map((tool, idx) => (
          <span key={`t1-${idx}`} className="marquee-pill">
            {tool}
          </span>
        ))}
        {/* Set 2 (Duplicated for seamless 38s infinite animation) */}
        {tools.map((tool, idx) => (
          <span key={`t2-${idx}`} className="marquee-pill">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
