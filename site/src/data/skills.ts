export type Skill = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  repo: string;
  install: string;
  categories: string[];
  worksWith: string[];
  capabilities: string[];
};

export const skills: Skill[] = [
  {
    slug: "seo",
    name: "SEO Operator",
    eyebrow: "SEO",
    tagline: "Turn your coding agent into an SEO operator.",
    summary:
      "Diagnose traffic drops, find keyword opportunities, write refresh briefs, prioritize work and run closed-loop SEO growth workflows.",
    repo: "https://github.com/marketingskills/seo",
    install: "curl -fsSL https://marketingskills.net/seo | bash",
    categories: ["SEO", "Analytics", "Content"],
    worksWith: ["Claude Code", "Codex", "Hermes", "OpenClaw"],
    capabilities: [
      "Traffic-decay and keyword-opportunity diagnosis",
      "Technical SEO triage and cannibalization checks",
      "Content refresh and new-content briefs",
      "SEO prioritization and closed-loop growth",
      "Optional live GSC and GA4 workflows",
    ],
  },
  {
    slug: "computed-knowledge-seo",
    name: "Computed Knowledge SEO",
    eyebrow: "SEO + data",
    tagline: "Compute, don't summarize.",
    summary:
      "Design SEO and AEO systems around novel, defensible knowledge produced from multiple datasets instead of scaled filler.",
    repo: "https://github.com/marketingskills/computed-knowledge-seo",
    install: "npx skills add marketingskills/computed-knowledge-seo",
    categories: ["SEO", "AEO", "Data"],
    worksWith: ["Skills-compatible agents"],
    capabilities: [
      "Join independent datasets into useful new facts",
      "Model claims as grounded semantic relationships",
      "Build provenance and claim ledgers",
      "Separate deterministic computation from semantic AI",
      "Turn discoveries into pages, tools, charts, APIs and research",
    ],
  },
  {
    slug: "plain-language-editor",
    name: "Plain Language Editor",
    eyebrow: "Content",
    tagline: "Make AI-written content clear, human and easy to follow.",
    summary:
      "Edit for comprehension, substance, truth and length rather than only removing surface-level AI tells.",
    repo: "https://github.com/marketingskills/plain-language-editor",
    install: "npx skills add marketingskills/plain-language-editor",
    categories: ["Content", "Editing", "Quality"],
    worksWith: ["Claude Code", "Codex", "Gemini", "OpenCode"],
    capabilities: [
      "Find the spine and remove unnecessary length",
      "Kill meta-commentary and vague abstraction",
      "Make subjects, verbs and claims concrete",
      "Flag unsupported claims and contradictions",
      "Preserve the writer's real voice while removing AI slop",
    ],
  },
  {
    slug: "open-source-growth",
    name: "Open Source Growth",
    eyebrow: "Growth",
    tagline: "Give your open-source repo a growth team.",
    summary:
      "Audit adoption blockers, improve packaging, build launch material, find ecosystem inclusion opportunities and create a trustworthy install flow.",
    repo: "https://github.com/marketingskills/open-source-growth",
    install: "npx skills add marketingskills/open-source-growth",
    categories: ["Growth", "Open source", "Developer marketing"],
    worksWith: ["Skills-compatible agents"],
    capabilities: [
      "Repo adoption and trust audits",
      "README and install-flow improvements",
      "Launch packs and demo planning",
      "Ecosystem inclusion research",
      "Ethical open-source growth workflows",
    ],
  },
  {
    slug: "creative-multiverse",
    name: "Creative Multiverse",
    eyebrow: "Creative",
    tagline: "Explore beyond the most obvious creative answer.",
    summary:
      "Map familiar attractors, sample less-obvious creative decisions and protect coherent consequences through revision.",
    repo: "https://github.com/marketingskills/creative-multiverse",
    install: "npx skills add marketingskills/creative-multiverse",
    categories: ["Creative", "Writing", "Ideation"],
    worksWith: ["Skills-compatible agents"],
    capabilities: [
      "Map and exclude obvious creative attractors",
      "Generate probability-bearing alternatives",
      "Mechanically sample creative decisions",
      "Force unusual premises to create real consequences",
      "Audit finished work against familiar templates",
    ],
  },
  {
    slug: "gtm-engineer",
    name: "GTM Engineer",
    eyebrow: "Go to market",
    tagline: "Evidence-first go-to-market workflows for AI agents.",
    summary:
      "Build TAMs, find public buying signals, enrich and score accounts, qualify inbound and draft human-approved outreach.",
    repo: "https://github.com/marketingskills/gtm-engineer",
    install: "npx skills add marketingskills/gtm-engineer",
    categories: ["GTM", "Sales", "Research"],
    worksWith: ["Skills-compatible agents"],
    capabilities: [
      "ICP and TAM design",
      "Public buying-signal discovery",
      "Waterfall enrichment and account scoring",
      "Human-approved outreach drafting",
      "Inbound qualification and GTM reporting",
    ],
  },
  {
    slug: "ladder-funnel",
    name: "LadderFunnel Architect",
    eyebrow: "Acquisition",
    tagline: "Design paid acquisition funnels with a product ladder.",
    summary:
      "Build offer stacks, funnel copy, ad strategy and email ascension around a low-ticket entry product and recurring upsell.",
    repo: "https://github.com/marketingskills/ladder-funnel",
    install: "npx skills add marketingskills/ladder-funnel",
    categories: ["Acquisition", "Funnels", "Copy"],
    worksWith: ["Claude", "Codex", "Gemini"],
    capabilities: [
      "Offer-stack design",
      "Funnel-page copy",
      "Paid social creative strategy",
      "Email ascension sequences",
      "Portable funnel build guidance",
    ],
  },
];

export const categories = [...new Set(skills.flatMap((skill) => skill.categories))].sort();

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug);
}
