import {
  siAnthropic,
  siOpenrouter,
  siGithubcopilot,
  siGooglegemini,
  siCursor,
  siPerplexity,
} from "simple-icons";

const aiTools = [
  { name: "Claude", icon: siAnthropic, tone: "coral", size: "large", position: "claude" },
  { name: "OpenRouter", icon: siOpenrouter, tone: "green", size: "medium", position: "chatgpt" },
  { name: "Copilot", icon: siGithubcopilot, tone: "blue", size: "small", position: "copilot" },
  { name: "Gemini", icon: siGooglegemini, tone: "violet", size: "medium", position: "gemini" },
  { name: "Cursor", icon: siCursor, tone: "white", size: "small", position: "cursor" },
  { name: "Perplexity", icon: siPerplexity, tone: "cyan", size: "small", position: "perplexity" },
];

function ToolBadge({ name, icon, tone, size, position }: (typeof aiTools)[number]) {
  return (
    <span className={`ai-tool-badge ${tone} ${size} ${position}`} title={name} aria-label={name}>
      <svg className="ai-tool-mark" viewBox="0 0 24 24" role="img" aria-label={`${name} logo`}>
        <path d={icon.path} />
      </svg>
    </span>
  );
}

export function AiToolFlow() {
  return (
    <div className="ai-tool-flow" aria-hidden="true">
      <div className="ai-flow-glow" />
      {aiTools.map((tool) => <ToolBadge key={tool.name} {...tool} />)}
    </div>
  );
}
