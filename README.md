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
├── docs.json                 # Mintlify entry shell
├── config/                   # site configuration ($ref from docs.json)
│   ├── branding.json
│   ├── site.json             # navbar, footer, seo, redirects
│   └── navigation/           # Academy, Guides (collapsible groups), Troubleshooting
├── assets/
│   ├── favicon.svg
│   ├── logo/
│   ├── icons/                # stroke-rounded Hugeicons, same set as diamond-app
│   └── images/               # screenshots: <tab>/<section>/<article>-<task>-<n>.png and -dark.png
├── index.mdx                 # home page (mode: custom)
├── style.css, academy.css    # theme overrides
├── search.js                 # wires the home search / Ask AI buttons
├── academy/                  # video lessons, generated from snippets/academy-lessons.js
├── guides/                   # step-by-step guides, one folder per core feature
│   ├── introduction/
│   ├── projects/
│   ├── media-folders/
│   ├── galleries/
│   └── gallery-shares/
├── troubleshooting/          # question-and-answer articles
├── snippets/                 # academy-lessons.js catalog, academy-grid.jsx
├── scripts/                  # sync-academy.mjs, sync-app-help.mjs, lint-guides.mjs
└── .cursor/
    ├── rules/                # help-*.mdc layer conventions (auto-attach by glob)
    └── skills/
        ├── guides-architecture/
        │   └── maps/         # per-feature article briefs, e.g. projects.md
        ├── guides-article/
        └── voice-review/     # fresh-reader tone check for any MDX page
```

## Writing articles

- Guides: plan a feature section with the `guides-architecture` skill (writes `.cursor/skills/guides-architecture/maps/<section>.md`), then write each article with the `guides-article` skill. Both verify labels and limits against the diamond-app code before writing.
- Academy: edit `snippets/academy-lessons.js`, run `npm run sync-academy`, then write the lesson body.
- Troubleshooting: one question per page, added to that tab's `pages` list.
- In-app Help drawer: run `npm run sync-app-help` after adding a page or changing a title, description, or path. It writes every article to `../diamond-app/src/integrations/help-centre/helpCentreArticles.json`, which you commit in diamond-app. Which articles each app page shows is chosen in diamond-app's `helpCentreRoutes.js`.
- Tone of voice: the rules live in `.cursor/rules/help-mdx-copy.mdc`, with examples in `.cursor/skills/guides-article/voice.md`. After writing any page, run the `voice-review` skill. It has a fresh subagent read the page as a photographer and suggest rewrites.

See `AGENTS.md` for terminology and `.cursor/rules/` for per-layer conventions.

## Development

```bash
npm i -g mint
npm run dev
```

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
