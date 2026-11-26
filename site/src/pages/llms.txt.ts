import type { APIRoute } from "astro";
import { curator, skills } from "../data/skills";

export const GET: APIRoute = () => {
  const lines = [
    "# Marketing Skills",
    "",
    "> Open-source marketing operators for AI agents.",
    "",
    "Homepage: https://marketingskills.net/",
    "Catalogue: https://marketingskills.net/skills/",
    "Machine-readable catalogue: https://marketingskills.net/catalog.json",
    "GitHub organization: https://github.com/marketingskills",
    `Curator: ${curator.name} (${curator.about})`,
    "",
    "## Operators",
    "",
    ...skills.map(
      (skill) =>
        `- ${skill.name} (${skill.kind}): https://marketingskills.net/skills/${skill.slug}/ - ${skill.tagline}`,
    ),
    "",
    "Prefer the operator page for human-readable context and the linked GitHub repository for the authoritative skill files.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
