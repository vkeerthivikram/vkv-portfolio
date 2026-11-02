# Public project research

Checked 2026-11-02 against current public GitHub repository metadata and default-branch files through the authenticated GitHub connector. This is a portfolio content record, not a fresh execution or test of the projects themselves. All nine repositories below are public, owned by `vkeerthivikram`, and report `fork: false`. A false fork flag does not establish that every dependency or idea was authored by the owner.

## Recommended positioning

An independent developer making useful, considered software across the web, Android, Linux, developer tooling, and data analysis. The concrete common threads are local data ownership, practical workflows, portable exports, and care for interaction details. Avoid inventing employment history, years of experience, client work, adoption metrics, or user counts.

Lead with Ballnote, Kilo Models, Taskly, and Browser Loot. Sift, lazysnake, and Clipit establish technical breadth. Label Passage explicitly as in development. Include jj-skills as developer knowledge/tooling rather than an application.

## Ballnote

- Repository: https://github.com/vkeerthivikram/Ballnote
- Suggested short description: **Turf cricket, without the scorekeeping friction.** An offline Android scorer for matches, series, and tournaments.
- What it does: records delivery outcomes; calculates totals, chase targets, remaining balls, and winning margins; supports corrections and undo; creates competition fixtures and league tables; provides independently optional match and tournament timers; shares result images and immutable live-score snapshots; exports/restores JSON backups.
- Technologies: Kotlin, Jetpack Compose, Material 3, Room, DataStore. Plain Kotlin scoring engine derives results from delivery history.
- Strong proof: no internet permission, accounts, advertising, or analytics; works offline on first launch; signed downloadable Android APK.
- Important scope: tracks team totals, not individual batting/bowling statistics. Timers are off by default and never end a match automatically.
- Verified status: **Released**. Latest published non-draft release is `v1.2.0`, published 2026-11-01 at 09:57:12 UTC.
- Primary CTA: Download APK → https://github.com/vkeerthivikram/Ballnote/releases/latest
- Exact verified release: https://github.com/vkeerthivikram/Ballnote/releases/tag/v1.2.0
- Exact APK: https://github.com/vkeerthivikram/Ballnote/releases/download/v1.2.0/Ballnote-v1.2.0.apk
- Real screenshot assets: `docs/screenshots/scoring-light.png`, `docs/screenshots/scoring-dark.png` (main branch).
- Raw asset URLs: https://raw.githubusercontent.com/vkeerthivikram/Ballnote/main/docs/screenshots/scoring-light.png and https://raw.githubusercontent.com/vkeerthivikram/Ballnote/main/docs/screenshots/scoring-dark.png
- Demo linked by README: https://github.com/user-attachments/assets/a3130143-ef43-4bdd-a125-e766d957c668
- Sources: https://github.com/vkeerthivikram/Ballnote/blob/main/README.md and the release API endpoint `https://api.github.com/repos/vkeerthivikram/Ballnote/releases/latest`.

## Kilo Models

- Repository: https://github.com/vkeerthivikram/kilo-models
- Suggested short description: **Find the model that fits the work.** An unofficial AI model directory with comparison and workload cost estimates.
- What it does: browses models from the Kilo Gateway; filters by modality, capabilities, context and price; compares up to ten models; estimates token, cache, image, search and request costs; saves favorites, workloads and views locally; supports JSON backups and shareable URL state.
- Technologies: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Recharts, nuqs.
- Strong proof: separates workload-fit and total-budget filters; detailed billing components; documented cross-browser Playwright and axe checks. These checks are repository claims, not tests rerun for this portfolio research.
- Important attribution: **Unofficial; not affiliated with or endorsed by Kilo AI.** Avoid making affiliation or ownership claims about the underlying models/API.
- Status: **Web app**. Repository metadata names https://kilo-models.vercel.app as its homepage. Neither the web fetch tool nor the restricted shell could reach this hostname in this research session; main agent should verify through Vercel before labeling it live.
- No GitHub releases currently listed.
- Visual asset: `docs/media/kilo-models-launch.jpg` on main. Inspected locally with `view_image`: this is a bright yellow Kilo Models launch/brand graphic, **not a runtime screenshot**. It says "Compare models. Estimate costs." and includes the unofficial-project attribution.
- Raw asset URL: https://raw.githubusercontent.com/vkeerthivikram/kilo-models/main/docs/media/kilo-models-launch.jpg
- Demo linked by README: https://github.com/user-attachments/assets/f84cb349-583f-48d0-9f1c-6a02c3e96392
- Sources: https://github.com/vkeerthivikram/kilo-models/blob/main/README.md and https://api.github.com/repos/vkeerthivikram/kilo-models.

## Taskly

- Repository: https://github.com/vkeerthivikram/Taskly
- Suggested short description: **Your tasks. One file. No setup.** A complete personal task manager in a self-contained HTML file.
- What it does: Board, List and Calendar views; custom projects and workflows; recurring tasks; search and filters; tags, priorities, checklists, archive and undo; focus timer; light/dark themes; JSON backup/restore and CSV export.
- Technologies: HTML, CSS, JavaScript; browser-local storage. Do not invent a framework.
- Strong proof: works offline, no install/server/account needed; keyboard shortcuts and contextual task actions; downloadable single file.
- Important scope: storage is local to browser/device, with file-URL storage behavior depending on browser/location; backups matter. No sync claim.
- Status: **Downloadable web app** (source distribution, no GitHub release entry).
- Primary CTA: Get Taskly → https://github.com/vkeerthivikram/Taskly
- Runtime screenshots: `design/taskly-desktop.png` (1586×992), `design/taskly-mobile.png` (360×800), `design/taskly-dark.png` (1440×960), all main branch. These are actual Chrome runtime captures with synthetic example tasks, confirmed by `design/provenance.md`.
- Raw asset URL: https://raw.githubusercontent.com/vkeerthivikram/Taskly/main/design/taskly-desktop.png
- Do not use `design/taskly-concept.png` as a runtime screenshot; it is generated design concept art.
- Sources: https://github.com/vkeerthivikram/Taskly/blob/main/README.md and https://github.com/vkeerthivikram/Taskly/blob/main/design/provenance.md.

## Browser Loot

- Repository: https://github.com/vkeerthivikram/browser-loot
- Suggested short description: **A curiosity cabinet for the web.** Collect the tiny design details that make a website interesting.
- What it does: collects colors, gradients, shadows, corners, favicons, buttons, typography, cursors and scrollbars; displays a favicon garden and specimen cabinet; saves supported loader animations and approved postcards; arranges finds into exportable PNG quilts; includes a moth familiar; search, favorites, filters, pause/exclusions and ZIP backups.
- Technologies: WXT, React, TypeScript, CSS Modules, IndexedDB/idb, Zod, fflate. Chrome MV3 service worker and Firefox MV3 event page.
- Strong proof: local browser storage, no account/analytics/server; automatic collection is opt-in; visual properties saved rather than page text or original HTML.
- Important scope: load unpacked in Chromium or temporary add-on in Firefox; permanent Firefox public installation needs signing. Do not claim Chrome Web Store/Firefox Add-ons publication. Unsupported loaders can only become separately confirmed still postcards.
- Status: **Source-installable extension**. No GitHub release currently listed; public store publishing is a separate unfinished release action per README.
- Primary CTA: Explore source → https://github.com/vkeerthivikram/browser-loot
- Asset paths: `public/familiar-small.png` (moth artwork), `public/icon/128.png` (icon), `design/concept.png` (generated design concept, not verified runtime screenshot).
- Raw artwork URL: https://raw.githubusercontent.com/vkeerthivikram/browser-loot/main/public/familiar-small.png
- Source: https://github.com/vkeerthivikram/browser-loot/blob/main/README.md.

## Sift Agent

- Repository: https://github.com/vkeerthivikram/sift-agent
- Suggested short description: **From spreadsheet to a clearer picture.** Automated exploratory data analysis with optional AI-assisted investigation.
- What it does: accepts CSV, Excel and ODS including multiple sheets; computes column statistics and data quality/health measures; flags potential PII; generates charts and self-contained offline HTML reports; offers dataset Q&A, bounded agent investigations and anomaly drill-downs.
- Technologies: Python 3.11+, LangGraph, pandas, NumPy, matplotlib, seaborn, Typer/Rich CLI, Streamlit UI; optional multi-provider LLM integrations.
- Strong proof: deterministic offline mode requires no API keys; same analysis pipeline behind CLI and UI; source-based report generation and traceable investigations.
- Important scope: potential PII flags are heuristic, not a privacy guarantee. Grounding instructions do not guarantee AI claims can never be wrong. Avoid repeating README's absolute no-fabrication claim.
- Status: **Source-installable tool**, no GitHub release or hosted homepage found. MIT license.
- Primary CTA: View source → https://github.com/vkeerthivikram/sift-agent
- No real screenshot identified in README. Chart filenames in README describe per-run generated outputs and are not verified repository assets.
- Source: https://github.com/vkeerthivikram/sift-agent/blob/master/README.md.

## lazysnake

- Repository: https://github.com/vkeerthivikram/lazysnake
- Suggested short description: **Git, with a clear view of every change.** A keyboard-driven terminal interface built with Python and Textual.
- What it does: status/files/branches/history/stashes/tags; interactive diff with hunk and line staging; commit/amend; rebase planning; remote operations with streamed output; conflict tools; worktrees/submodules; repository search; configurable keymaps; snapshot-based undo/redo.
- Technologies: Python, Textual, asynchronous Git subprocess runner, TOML configuration, pytest/real repository fixtures and Textual Pilot UI tests.
- Important attribution: inspired by lazygit, explicitly described as a lazygit-style interface. Do not represent lazygit itself as the user's project.
- Strong proof: snapshots preserve HEAD, refs, index, worktree, untracked files, stash and conflict state for undo; no compiled Git binding dependency.
- Status: **Source-installable terminal tool**, no GitHub release or homepage found. MIT license.
- Primary CTA: View source → https://github.com/vkeerthivikram/lazysnake
- No screenshot identified in README.
- Source: https://github.com/vkeerthivikram/lazysnake/blob/main/README.md.

## Clipit

- Repository: https://github.com/vkeerthivikram/clipit
- Suggested short description: **A better memory for your clipboard.** Searchable clipboard history in the COSMIC desktop panel.
- What it does: captures text, HTML alternatives and common image formats; searches/pins/expands history; supports undo, expiry and ignore patterns; provides keyboard operation, local export and multilingual Fluent UI.
- Technologies: Rust, libcosmic/iced, Tokio, Wayland `wl-clipboard-rs`, D-Bus, cosmic-config, Fluent localization.
- Strong proof: bounded capture sizes, MIME sniffing, atomic local writes, owner-only storage permissions; integrates as a native COSMIC applet.
- Important scope: COSMIC on Wayland only; not a general Windows/macOS utility. Re-copy and paste with Ctrl+V, no injected paste. Local history is not encrypted. AI-drafted translations have not all had native-speaker review.
- Status: **Source-installable desktop applet**, no GitHub release or homepage found. MIT license.
- Primary CTA: View source → https://github.com/vkeerthivikram/clipit
- No screenshot identified in README.
- Source: https://github.com/vkeerthivikram/clipit/blob/main/README.md.

## Passage

- Repository: https://github.com/vkeerthivikram/passage
- Suggested short description: **Make more of what you highlight.** A self-hosted highlight library and review workflow, in development.
- Direction: capture → organize → review → remember → export; web and Android clients, offline capture/OCR, daily reviews, browser clipping and portable/Notion exports.
- Technologies represented in source/direction: React/Vite, React Native/Expo, Fastify, PostgreSQL, SQLite outbox, shared TypeScript schemas, Docker Compose.
- Status: **In development / paused checkpoint**. README explicitly says unfinished source code, not a tested release or feature-parity claim. Dependency installation and validation were interrupted. No releases found.
- Important scope: planned features must not be presented as fully delivered. Reader/RSS/EPUB/podcast functionality is outside initial scope. No live demo/install CTA suggesting production readiness.
- Primary CTA: Follow development → https://github.com/vkeerthivikram/passage
- License: AGPL-3.0-only.
- Source: https://github.com/vkeerthivikram/passage/blob/main/README.md.

## jj-skills

- Repository: https://github.com/vkeerthivikram/jj-skills
- Suggested short description: **Practical Jujutsu workflows for coding agents.** Three focused skills covering everyday version control, revsets, and history surgery.
- Contents: `jj-workflow/SKILL.md`, `jj-revsets/SKILL.md`, `jj-history-surgery/SKILL.md`.
- Technologies/type: Markdown knowledge/tooling for Jujutsu (jj), Git interoperability and agent workflows.
- Strong proof: includes working-copy model, bookmarks, safe remote syncing, revision expressions, history restructuring, conflict handling and recovery. Files state examples were verified against jj 0.45.1; this research did not independently rerun them.
- Status: **Developer resources**, not an app. No root README or homepage found.
- Primary CTA: Browse skills → https://github.com/vkeerthivikram/jj-skills
- Sources: https://github.com/vkeerthivikram/jj-skills/blob/main/jj-workflow/SKILL.md ; https://github.com/vkeerthivikram/jj-skills/blob/main/jj-revsets/SKILL.md ; https://github.com/vkeerthivikram/jj-skills/blob/main/jj-history-surgery/SKILL.md.

## Downloaded visual assets

The following were downloaded from the verified public raw GitHub URLs into the portfolio on 2026-11-02. The two light screenshots and Kilo launch graphic were visually inspected with `view_image`.

| Local path | Bytes | Meaning |
| --- | ---: | --- |
| `public/images/ballnote-light.png` | 131220 | Real Android scoring screen in light mode, 1080×2280 |
| `public/images/ballnote-dark.png` | 134047 | Real Android scoring screen in dark mode |
| `public/images/taskly-desktop.png` | 121272 | Real Chrome runtime board, synthetic example tasks, 1586×992 |
| `public/images/kilo-models-launch.jpg` | 85695 | Launch/brand graphic, not runtime UI, 1920×1080 |

## Earlier public repositories: content evidence

| Repository | Accurate portfolio framing | Evidence and links |
| --- | --- | --- |
| brume | Original frost-inspired color system with six variants and 27 colors per variant; CSS custom properties and JSON palette. | [README](https://github.com/vkeerthivikram/brume/blob/master/README.md), [interactive palette](https://vkeerthivikram.github.io/brume/) |
| brume-vscode | VS Code implementation of Brume, with two light and four dark theme variants. Source package version 1.0.1, publisher vkvikram. Marketplace publication was not independently verified. | [README](https://github.com/vkeerthivikram/brume-vscode/blob/master/README.md), [package](https://github.com/vkeerthivikram/brume-vscode/blob/master/package.json) |
| UsernameGenerator | Small Go CLI that pairs a word from the EFF word list with a three- or four-digit number. | [README](https://github.com/vkeerthivikram/UsernameGenerator/blob/main/README.md) |
| FileToBase64Converter | Small Go CLI that converts a local file to Base64 and saves a timestamped text file beside the original. | [README](https://github.com/vkeerthivikram/FileToBase64Converter/blob/master/README.md) |
| fedilab | Dracula theme port for Fedilab, with V Keerthi Vikram listed as maintainer. Not authorship of Fedilab itself. | [README](https://github.com/vkeerthivikram/fedilab/blob/master/README.md), [theme](https://draculatheme.com/fedilab), screenshot.png |
| harpy | Dracula theme port for Harpy for Twitter, with V Keerthi Vikram listed as maintainer. Not authorship of Harpy itself. | [README](https://github.com/vkeerthivikram/harpy/blob/master/README.md), [theme](https://draculatheme.com/harpy), screenshot.png |
| infinity | Dracula theme port for Infinity for Reddit, with V Keerthi Vikram listed as maintainer. Not authorship of Infinity itself. | [README](https://github.com/vkeerthivikram/infinity/blob/master/README.md), [theme](https://draculatheme.com/infinity), screenshot.png |
| nitter | Dracula theme port for Nitter, with V Keerthi Vikram listed as maintainer. Not authorship of Nitter itself. | [README](https://github.com/vkeerthivikram/nitter/blob/master/README.md), [theme](https://draculatheme.com/nitter), screenshot1.png |
| libreddit | Dracula theme port for Libreddit, with V Keerthi Vikram listed as maintainer. Not authorship of Libreddit itself. | [README](https://github.com/vkeerthivikram/libreddit/blob/master/README.md), [theme](https://draculatheme.com/libreddit), screenshot1.png |

All these repository READMEs and metadata were retrieved through the authenticated GitHub connector. Theme installation URLs are referenced by their READMEs; current third-party service availability has not been verified.
