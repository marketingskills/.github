import type { APIRoute } from "astro";
import { skills } from "../data/skills";

export const GET: APIRoute = () => {
  const urls = [
    "https://marketingskills.net/",
    "https://marketingskills.net/skills/",
    ...skills.map((skill) => `https://marketingskills.net/skills/${skill.slug}/`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
