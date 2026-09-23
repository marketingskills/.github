# MarketingSkills.net

Source for the Marketing Skills website.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

The site is fully static and writes to `dist/`.

## Cloudflare Pages

Use this repository with:

- Root directory: `site`
- Build command: `npm install && npm run build`
- Build output directory: `dist`
- Node version: 22 or newer

Then attach `marketingskills.net` as the custom domain.

The existing installer URL is preserved by `public/seo`:

```bash
curl -fsSL https://marketingskills.net/seo | bash
```

## Content model

Operator metadata lives in `src/data/skills.ts`.

That data generates:

- the home-page operator cards
- `/skills/`
- each `/skills/<slug>/` page
- `/catalog.json`
- `/sitemap.xml`

Keep `public/llms.txt` aligned when operators are added or removed.

## Next iteration

A future build can fetch repository metadata during CI and generate the catalogue from each repo's SKILL/README metadata. For now the explicit catalogue keeps the deploy deterministic and avoids silently advertising incomplete repos.
