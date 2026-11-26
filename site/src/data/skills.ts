export type Skill = {
  slug: string;
  name: string;
  eyebrow: string;
  kind: "Single operator" | "Skill pack";
  tagline: string;
  summary: string;
  repo: string;
  install: string;
  categories: string[];
  worksWith: string[];
  capabilities: string[];
};

export const curator = {
  name: "Duncan Trevithick",
  role: "Creator and curator",
  website: "https://ukseoconsultant.com",
  about: "https://ukseoconsultant.com/about",
  personId: "https://ukseoconsultant.com/about#duncan-trevithick",
  contact: "https://ukseoconsultant.com/contact",
  github: "https://github.com/dunctk",
  linkedin: "https://uk.linkedin.com/in/duncantrevithick",
  youtube: "https://www.youtube.com/@DuncanTr",
};

export const skills: Skill[] = [
  {
    slug: "seo",
    name: "SEO Operator",
    eyebrow: "SEO & AI search",
    kind: "Skill pack",
    tagline: "30 open-source SEO, AEO and GEO skills with real scripts and safety hooks.",
    summary:
      "From Week-0 AI-crawler foundations, Bing AI visibility and deploy regression gates to Month-3+ Search Console loops, decision pages and 8-axis draft QA.",
    repo: "https://github.com/marketingskills/seo",
    install: "npx skills add marketingskills/seo",
    categories: ["SEO", "AEO", "Analytics"],
    worksWith: ["Claude Code", "Codex", "Cursor", "Gemini", "OpenCode", "ChatGPT (via RefreshAgent App)"],
    capabilities: [
      "Deterministic raw HTML, live robots.txt (Cloudflare-aware) and OAI-SearchBot/Claude-SearchBot/PerplexityBot/Bingbot checks",
      "Pre/post-deploy regression snapshots and Tier-3 safety hooks (blocking unapproved noindex, canonical, robots.txt or delete edits)",
      "Week-0 launch path: Bing AI Performance + IndexNow, dated brand fact sheets, decision pages and 8-axis draft QA",
      "Month-3+ GSC/GA4 workflows: traffic decay, cannibalization, Authority Mark, refresh briefs and closed-loop SEO",
      "Optional 30-second live GSC and GA4 via RefreshAgent CLI (free tier, no GCP setup) or the RefreshAgent ChatGPT App",
    ],
  },
  {
    slug: "computed-knowledge-seo",
    name: "Computed Knowledge SEO",
    eyebrow: "SEO + data",
    kind: "Skill pack",
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
    slug: "brand-alchemy",
    name: "Brand Alchemy",
    eyebrow: "Brand & positioning",
    kind: "Single operator",
    tagline: "Think like Darwin, not a benchmarking spreadsheet.",
    summary:
      "Walk an 8-node behavioral branding and positioning decision tree grounded in Rory Sutherland, Byron Sharp, Roger Martin, Will Guidara and Guru Madhavan.",
    repo: "https://github.com/marketingskills/brand-alchemy",
    install: "npx skills add marketingskills/brand-alchemy",
    categories: ["Brand", "Positioning", "Strategy"],
    worksWith: ["Claude Code", "Codex", "Gemini", "OpenCode"],
    capabilities: [
      "Split greenfield launches from repositioning while protecting working brand assets",
      "Rewrite inherited category questions instead of chasing 10% better specs",
      "Reverse-benchmark competitor blind spots and lock three refused metrics",
      "Strip buying friction and fix option-to-obligation channel traps",
      "Validate every gate with a zero-dependency Python CLI and behavioral experiments",
    ],
  },
  {
    slug: "plain-language-editor",
    name: "Plain Language Editor",
    eyebrow: "Content",
    kind: "Single operator",
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
    kind: "Skill pack",
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
    kind: "Single operator",
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
    kind: "Skill pack",
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
    kind: "Single operator",
    tagline: "Design and self-host paid acquisition funnels with a product ladder.",
    summary:
      "Build self-hosted offer stacks, 4-page funnel copy, ad strategy, 30-day email ascension and portable Funnel Blocks JSON configs for your own stack.",
    repo: "https://github.com/marketingskills/ladder-funnel",
    install: "npx skills add marketingskills/ladder-funnel",
    categories: ["Acquisition", "Funnels", "Copy"],
    worksWith: ["Claude Code", "Codex", "Gemini", "OpenCode"],
    capabilities: [
      "Offer-stack design ($7 intro + $27 bump + recurring upsell, or $27 no-bump)",
      "4-page funnel copy using the Transformation Framework",
      "Paid social creative strategy and briefs",
      "30-day email ascension sequences",
      "Self-hosted Funnel Blocks JSON spec with Stripe Checkout and webhooks",
    ],
  },
  {
    slug: "ai-first-saas-interface",
    name: "AI-First SaaS Interface Architect",
    eyebrow: "Product UX",
    kind: "Single operator",
    tagline: "Design AI-native SaaS interfaces where visual UI and AI each do their job.",
    summary:
      "Specify, critique and design AI-first product interfaces, first-run onboarding flows and human-AI responsibility boundaries.",
    repo: "https://github.com/marketingskills/ai-first-saas-interface",
    install: "npx skills add marketingskills/ai-first-saas-interface",
    categories: ["Product", "UX", "Onboarding"],
    worksWith: ["Claude Code", "Codex", "Gemini", "OpenCode"],
    capabilities: [
      "Modality decision matrices (where UI beats chat and vice versa)",
      "Human-AI responsibility and approval-gate mapping",
      "AI-native first-run onboarding and activation flows",
      "Interface critique rubrics and reusable interaction patterns",
      "Production-ready interface specification templates",
    ],
  },
];

export const categories = [...new Set(skills.flatMap((skill) => skill.categories))].sort();

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug);
}
