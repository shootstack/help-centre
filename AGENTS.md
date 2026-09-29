> **First-time setup**: Customize this file for your project. Prompt the user to customize this file for their project.
> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- `docs.json` is the Mintlify entry shell. Site settings live in `config/` (`branding.json`, `site.json`, `navigation/`). Favicon, logo, icons, and screenshots live in `assets/`
- The Help Center has three top bar tabs in `config/navigation/index.json`: Academy (video lessons), Guides (step-by-step guides), and Troubleshooting (question-and-answer articles). Guides lists Introduction as a single page, then one collapsible sidebar `group` per core feature (Projects, Media folders, ...) with an Overview article first; pages live in `guides/<section>/`. Plan a section with the `guides-architecture` skill and write each article with the `guides-article` skill (both in `.cursor/skills/`). Add Troubleshooting articles to that tab's `pages` list. Add or change an Academy lesson in `snippets/academy-lessons.js`, run `npm run sync-academy`, then write the lesson body. Do not hand-edit the Academy overview list, sidebar times, or Academy page order.
- The diamond-app Help drawer reads a catalog of every article. Run `npm run sync-app-help` after adding a page or changing a title, description, or path; it writes `../diamond-app/src/integrations/help-centre/helpCentreArticles.json`. Which articles each app path shows is picked in diamond-app's `src/integrations/help-centre/helpCentreRoutes.js`, not here.
- Layer conventions live in `.cursor/rules/` and auto-attach by file glob: `help-mdx-copy` (every page), `help-guides`, `help-academy`, `help-troubleshooting`, `help-config`, `help-home-theme`, `help-snippets-scripts`, `help-assets-images`, `help-drafts`. Match the local layer pattern before inventing structure. When you add a top-level folder, script, rule, or skill, update the file layout in `README.md` in the same change.
- Run `npm run dev` (port **3333**) to preview
- Run `npm run validate` and `npm run broken-links` before committing

## Terminology

Use Diamond product terms: Gallery, Media folder (Photo folder), Project, Workspace, Contact, Photo, Favorites.

Address the reader as **you**. American English. Never call a gallery an album or collection.

## Style preferences

{/* Add any project-specific style rules below */}

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- Full voice rules are in `.cursor/rules/help-mdx-copy.mdc`. Run the `voice-review` skill on every page you write or rewrite.

## Content boundaries

- Customer-facing help only. Do not add OpenAPI specs or endpoint reference pages.
- Link to the Shootstack app and [support@shootstack.com](mailto:support@shootstack.com).
- Do not invent product behavior. If a flow is unclear, ask.
