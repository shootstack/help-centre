# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- `docs.json` is the Mintlify entry shell. Site settings live in `config/` (`branding.json`, `site.json`, `navigation/`). Favicon, logo, icons, and screenshots live in `assets/`
- The Help Center has three top bar tabs in `config/navigation/index.json`: Academy (video lessons), Guides (step-by-step guides), and Troubleshooting (question-and-answer articles). Guides lists Introduction as a single page, then one collapsible sidebar `group` per core feature (Projects, Media folders, ...) with an Overview article first; pages live in `guides/<section>/`. Plan a section with the `guides-architecture` skill and write each article with the `guides-article` skill (both in `.agents/skills/`; `.cursor/skills/` holds a pointer stub per skill). Add Troubleshooting articles to that tab's `pages` list. Add or change an Academy lesson in `snippets/academy-lessons.js`, run `npm run sync-academy`, then write the lesson body. Do not hand-edit the Academy overview list, sidebar times, or Academy page order.
- The diamond-app Help drawer reads a catalog of every article. Run `npm run sync-app-help` after adding a page or changing a title, description, or path; it writes `../diamond-app/src/integrations/help-centre/helpCentreArticles.json`. Which articles each app path shows is picked in diamond-app's `src/integrations/help-centre/helpCentreRoutes.js`, not here.
- Layer conventions live in `.cursor/rules/` and auto-attach by file glob in Cursor: `help-mdx-copy` (every page), `help-guides`, `help-academy`, `help-troubleshooting`, `help-config`, `help-home-theme`, `help-snippets-scripts`, `help-assets-images`, `help-drafts`. If your tool does not auto-attach them, read the rule whose `globs` match the files you touch before editing; they are plain markdown. Match the local layer pattern before inventing structure. When you add a top-level folder, script, rule, or skill, update the file layout in `README.md` in the same change.
- Run `npm run dev` (port **3333**) to preview
- Run `npm run validate` and `npm run broken-links` before committing

## Voice and terminology

The reader is a photographer, usually mid-task. Three files own the writing, and nothing else restates them:

- Tone of voice (helpful, professional, calm, supportive, natural): `.agents/skills/voice-review/tone.md`. The single definition, with examples and the standard phrasings every article reuses.
- Copy mechanics (frontmatter, Diamond terminology, bold UI labels, what stays out, components, links): `.cursor/rules/help-mdx-copy.mdc`.
- Page shape per tab: `help-guides.mdc`, `help-academy.mdc`, `help-troubleshooting.mdc`.

Run the `voice-review` skill on every page you write or rewrite.

## Content boundaries

- Customer-facing help only. Do not add OpenAPI specs or endpoint reference pages.
- Link to the Shootstack app. To reach support, tell the reader to open **Help** and click **Chat with support**. Do not publish support@shootstack.com.
- Do not invent product behavior. If a flow is unclear, ask.
