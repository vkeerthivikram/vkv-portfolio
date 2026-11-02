# V Keerthi Vikram · Portfolio

A responsive, accessible portfolio of 18 public projects across Android, web apps, developer tools, and interface themes.

## Local development

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run check
npm run build
npm run test:e2e
```

The production build prerenders semantic HTML and hydrates the project filters and native detail dialogs. Playwright covers desktop and mobile workflows, keyboard focus, reduced motion, overflow, image loading, and axe accessibility checks. See `playwright.config.ts` for browser and server settings.

## Content

- Update `src/data/projects.ts` for project descriptions, technologies, status, and links.
- Featured project presentation lives in `src/components/SelectedWork.tsx`.
- Identity, introduction, and contact links live in `src/App.tsx`.
- Research sources and image provenance are recorded in `docs/project-research.md`.

The content is a curated snapshot as of 2 November 2026, rather than a live GitHub feed. No API token is shipped or needed. Passage is clearly marked as unfinished; Dracula contributions are credited as theme ports. Kilo Models is an independent, unofficial directory.

## Design

React, TypeScript, Vite, native CSS, self-hosted Geist, and Phosphor icons. The original abstract hero artwork was created with Image Gen. Ballnote and Taskly visuals are real screenshots from their public repositories; the Kilo image is its launch artwork. The site uses no analytics, cookies, third-party fonts, or backend.

Design tokens and intentional refinements are documented in `docs/design/spec.md`.

## Deployment

Vercel builds with `npm run build` and serves `dist`. The repository includes explicit framework settings and basic security headers in `vercel.json`. Use the verified Vercel account/team when linking a new checkout. The prerender step uses Vercel’s `VERCEL_PROJECT_PRODUCTION_URL` to generate the canonical URL, absolute social image URL, sitemap, and robots sitemap reference automatically.
