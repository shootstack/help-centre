# help-centre Agent Guide

Public **Shootstack Help Center** (Mintlify). Customer-facing guides and support content — not API reference.

Internal App API documentation lives in `diamond-docs/` (local sandbox, port 3334).

## Project shape

- Site config: `docs.json`
- Help pages: `*.mdx`, `getting-started/*.mdx`

## Terminology

Use Diamond product terms: Gallery, Media folder (Photo folder), Project, Workspace, Contact, Photo, Favorites.

## Working style

- Use Mintlify skills in `.agents/skills/mintlify*` for MDX components and navigation
- Run `npm run dev` (port 3333) to preview
- Run `mint validate` and `mint broken-links` before committing

## Boundaries

- Do not add OpenAPI specs or endpoint reference pages here — that belongs in `diamond-docs/`
- Keep copy customer-facing; link to the app and support email where helpful
