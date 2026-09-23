import type { APIRoute } from "astro";
import { skills } from "../data/skills";

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify(
      {
        name: "Marketing Skills",
        description: "Open-source marketing operators for AI agents.",
        homepage: "https://marketingskills.net",
        repository: "https://github.com/marketingskills",
        generated_from: "marketingskills/.github/site/src/data/skills.ts",
        skills,
      },
      null,
      2,
    ),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
};
