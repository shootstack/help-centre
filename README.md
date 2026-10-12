# Shootstack Help Center

Public Mintlify help center for Shootstack customers. Deployed from [github.com/shootstack/help-centre](https://github.com/shootstack/help-centre).

Created with the Mintlify CLI:

```bash
mint new . --name "Shootstack Help" --template help-center --theme maple
```

See the [CLI install docs](https://www.mintlify.com/docs/cli/install).

## File layout

```text
help-centre/
├── .vscode/settings.json     # tab size 4, Prettier, ESLint (same editor setup as diamond-app)
├── .prettierrc               # Prettier, tab width 4
├── eslint.config.js          # ESLint flat config for scripts and snippets
├── docs.json                 # Mintlify entry shell
├── config/                   # site configuration ($ref from docs.json)
│   ├── branding.json
│   ├── site.json             # navbar, footer, seo, redirects
│   └── navigation/           # en (default), nl, de, fr; tabs and groups per language
├── assets/
│   ├── favicon.svg
│   ├── logo/
│   ├── icons/                # stroke-rounded Hugeicons, same set as diamond-app
│   ├── fonts/                # Noto Sans Variable (same files as diamond-app), not Google Fonts
│   ├── images/               # screenshots: <tab>/<section>/<article>-<task>-<n>.webp and -dark.webp; home/ for home page cards
│   └── videos/academy/       # local preview video and English caption track
├── index.mdx                 # home page (mode: custom)
├── style.css, academy.css    # theme overrides and Academy media
├── home.css                  # home page layout
├── search.js                 # wires the home search button
├── sidebar.js                # Settings title when that group has no pages; external-link footer
├── locale.js                 # home-page language dropdown beside the navbar logo
├── academy/                  # video lessons, generated from snippets/academy-lessons.js
├── guides/                   # photographer guides, one folder per core feature
│   ├── introduction/
│   ├── projects/
│   ├── media-folders/
│   ├── galleries/
│   └── gallery-shares/
├── troubleshooting/          # question-and-answer articles
├── nl/                       # Dutch home, guides, and troubleshooting pages
├── de/                       # German home, guides, and troubleshooting pages
├── fr/                       # French home, guides, and troubleshooting pages
├── snippets/                 # academy catalog and grid; shared home components and home-content[-<lng>].jsx data
├── scripts/                  # sync-academy.mjs, sync-app-help.mjs, lint-guides.mjs, i18n-audit.mjs
├── .cursor/
│   ├── rules/                # help-*.mdc layer conventions (auto-attach by glob)
│   └── skills/               # canonical skills (Agent Skills layout)
│       ├── guides-architecture/
│       │   └── maps/         # per-feature article briefs, e.g. projects.md
│       ├── guides-article/
│       ├── help-i18n/        # page keys, Mintlify language contract, i18n:audit report
│       ├── voice-review/     # reads tone.md from diamond-translate/projects/help-centre/
│       └── mintlify*/        # vendored Mintlify skills
└── .claude/, .agents/        # links and generated rules for Claude Code and Codex
```

`.cursor/` and the hand-written part of `AGENTS.md` are the source of truth for every agent. `company-os/agent-kit/agent-sync.mjs` links each skill into `.claude/skills/` and `.agents/skills/`, generates `.claude/rules/` from `.cursor/rules/`, and keeps `CLAUDE.md` and the generated section of `AGENTS.md` current. Edit `.cursor/`, then run `node ../../../company-os/agent-kit/agent-sync.mjs sync .`.

## Writing articles

- Guides: plan a feature section with the `guides-architecture` skill (writes `.cursor/skills/guides-architecture/maps/<section>.md`), then write each article with the `guides-article` skill. Both verify labels and limits against the diamond-app code before writing.
- Academy: edit `snippets/academy-lessons.js`, run `npm run sync-academy`, then write the lesson body.
  The catalog can also set `thumbnail`, `thumbnailDark`, and `preview` for lesson cards. The first lesson is a mock preview: a silent 12-second montage of existing demo screenshots in `assets/videos/academy/`, with an English caption track. Replace it with the recorded walkthrough when the Academy is ready.
- Troubleshooting: one question per page. Keep Overview first, then group questions in the sidebar by the same topics and order as `troubleshooting/index.mdx`.
- In-app Help drawer: run `npm run sync-app-help` after adding a photographer page or changing an English or translated title, description, or path. It writes English entries with a `translations` map of localized titles, descriptions, and URLs to `../../../engineering-os/shootstack-diamond/diamond-app/src/integrations/help-centre/helpCentreArticles.json`, which you commit in diamond-app. Only translated pages in the language navigation are included. Which articles each app page shows is chosen in diamond-app's `helpCentreRoutes.js`; the drawer uses the app language and falls back to English when an article has no translation.
- Tone of voice: helpful, professional, calm, supportive, natural. `../../../tools-os/diamond-translate/projects/help-centre/tone.md` is the single definition, with examples and the standard phrasings; `.cursor/rules/help-mdx-copy.mdc` holds the copy mechanics (frontmatter, terminology, bold labels, what stays out). Translation goes through diamond-translate (`help-translations.mdc`). After writing any page, run the `voice-review` skill. It has a fresh subagent read the page as a photographer, checks consistency with sibling articles, and applies rewrites.

See `AGENTS.md` for terminology and `.cursor/rules/` for per-layer conventions.

## Languages

`config/navigation/index.json` defines Mintlify's language switcher for English
(`en`, the default), Dutch (`nl`), German (`de`), and French (`fr`). English keeps
the full Academy, Guides, and Troubleshooting navigation and its existing URLs.
Dutch, German, and French mirror every Guides and Troubleshooting article.
Each language starts with a visible home tab so `/`, `/nl`, `/de`, and `/fr`
resolve to their home pages. Leave the logo URL unset so Mintlify returns to the
current language's home page. Custom home pages show a language dropdown beside
the navbar logo because they have no sidebar language picker. Add translated
pages to the matching language entry; translation work belongs to diamond-translate.

Academy syncing uses English navigation. Academy lessons remain English while
they are work in progress; localized home pages translate the preview text and
controls but link to the English lesson. Home cards use per-language data with
localized guide links, and shared components receive translated preview copy.
The in-app Help catalog syncs all configured languages. `npm run i18n:audit`
checks full page-tree parity, so the missing Academy mirrors remain expected findings.

## Development

```bash
npm i -g mint
npm install
npm run dev
```

`npm install` is for ESLint and Prettier. `npm run lint` checks `scripts/`, `snippets/`, and the root site scripts.

Open `http://localhost:3333`.

| Project | Port |
| --- | --- |
| diamond-app | 3000 |
| help-centre (this repo) | 3333 |

## Validate

```bash
npm run validate
npm run broken-links
```

`validate` runs `lint-guides` first, which checks every `guides/**/*.mdx` against the voice and shape rules (banned words, arrow chains, description length, bold statuses, quoted error messages, missing delete warnings, screenshot paths). Run it alone with `npm run lint-guides`.

## Publishing

Changes pushed to the default branch deploy automatically via the Mintlify GitHub app.
