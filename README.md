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
│   └── navigation/           # Academy, Guides (collapsible feature groups), Troubleshooting (topics)
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
├── academy/                  # video lessons, generated from snippets/academy-lessons.js
├── guides/                   # step-by-step guides, one folder per core feature
│   ├── introduction/
│   ├── projects/
│   ├── media-folders/
│   ├── galleries/
│   └── gallery-shares/
├── troubleshooting/          # question-and-answer articles
├── snippets/                 # academy catalog and grid; home content, preview, and guide grid
├── scripts/                  # sync-academy.mjs, sync-app-help.mjs, lint-guides.mjs
├── .agents/
│   └── skills/               # canonical skills (Agent Skills layout, read by Cursor and other agents)
│       ├── guides-architecture/
│       │   └── maps/         # per-feature article briefs, e.g. projects.md
│       ├── guides-article/
│       ├── voice-review/     # tone guide (tone.md) + fresh-reader review for any MDX page
│       └── mintlify*/        # vendored Mintlify skills
└── .cursor/
    ├── rules/                # help-*.mdc layer conventions (auto-attach by glob)
    └── skills/               # one stub per skill above, pointing at .agents/skills/
```

Skills live in `.agents/skills/` so any agent that follows the [Agent Skills](https://agentskills.io) layout finds them. `.cursor/skills/` holds a stub per skill with the same `name` and `description`, mirroring `diamond-screenshots`. Edit the canonical copy; when you add a skill, add its stub.

## Writing articles

- Guides: plan a feature section with the `guides-architecture` skill (writes `.agents/skills/guides-architecture/maps/<section>.md`), then write each article with the `guides-article` skill. Both verify labels and limits against the diamond-app code before writing.
- Academy: edit `snippets/academy-lessons.js`, run `npm run sync-academy`, then write the lesson body.
  The catalog can also set `thumbnail`, `thumbnailDark`, and `preview` for lesson cards. The first lesson is a mock preview: a silent 12-second montage of existing demo screenshots in `assets/videos/academy/`, with an English caption track. Replace it with the recorded walkthrough when the Academy is ready.
- Troubleshooting: one question per page. Keep Overview first, then group questions in the sidebar by the same topics and order as `troubleshooting/index.mdx`.
- In-app Help drawer: run `npm run sync-app-help` after adding a page or changing a title, description, or path. It writes every article to `../diamond-app/src/integrations/help-centre/helpCentreArticles.json`, which you commit in diamond-app. Which articles each app page shows is chosen in diamond-app's `helpCentreRoutes.js`.
- Tone of voice: helpful, professional, calm, supportive, natural. `.agents/skills/voice-review/tone.md` is the single definition, with examples and the standard phrasings; `.cursor/rules/help-mdx-copy.mdc` holds the copy mechanics (frontmatter, terminology, bold labels, what stays out). After writing any page, run the `voice-review` skill. It has a fresh subagent read the page as a photographer, checks consistency with sibling articles, and applies rewrites.

See `AGENTS.md` for terminology and `.cursor/rules/` for per-layer conventions.

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
| diamond-site | 3001 |
| help-centre (this repo) | 3333 |

## Validate

```bash
npm run validate
npm run broken-links
```

`validate` runs `lint-guides` first, which checks every `guides/**/*.mdx` against the voice and shape rules (banned words, arrow chains, description length, bold statuses, quoted error messages, missing delete warnings, screenshot paths). Run it alone with `npm run lint-guides`.

## Publishing

Changes pushed to the default branch deploy automatically via the Mintlify GitHub app.
