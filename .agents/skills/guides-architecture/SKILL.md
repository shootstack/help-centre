---
name: guides-architecture
description: Decides which photographer Guides articles a feature needs, researched from diamond-app and diamond-server, and writes a per-feature article map. Use when planning a Guides section, auditing it against the current UI, or deciding which articles a feature needs.
disable-model-invocation: true
---

# Guides architecture

Produce the article map for one Guides sidebar group. Output is a plan file, not articles. Writing articles is the `guides-article` skill.

Reference model: Hyperline docs. One collapsible sidebar group per feature, 3-6 articles, first article `sidebarTitle: Overview`, follow-ups are one job each with a verb title.

## Inputs

- Feature name: the label a photographer sees (`Projects`, `Media folders`, `Galleries`). If the user gives a code name (`photo-folder`), resolve the UI label from `diamond-app/public/locales/en` before anything else.
- Optional: an existing map to refresh. Maps are `maps/<section>.md`.

## Workflow

```
Progress:
- [ ] 1. Map the feature to code surfaces
- [ ] 2. Run the three research subagents in parallel
- [ ] 3. Apply the decision rules
- [ ] 4. Write the article map
- [ ] 5. Present the map for approval
```

### 1. Map the feature to code surfaces

Repo roots are siblings of this repo: `../diamond-app`, `../diamond-server`.

| Surface | Path | What it tells you |
|---|---|---|
| Actions and dialogs | `diamond-app/src/components/<domain>*/` | Every user action, its trigger, its dialog |
| Hooks, schemas, limits | `diamond-app/src/core/<domain>*/`, `diamond-app/src/constants/rules.js` | Caps, validation, status enums |
| Where it lives | `diamond-app/src/pages/**` rendering the domain, `diamond-app/src/layouts/app/` | Page names, tabs, sidebar entries, shortcuts |
| Exact UI strings | `diamond-app/public/locales/en/features/<domain>.json`, `pages/*.json`, `layouts/*.json`, `schemas/*.json` | Button labels, dialog copy, toasts, empty states |
| Server-seeded fields and caps | `diamond-server/src/helpers/<domain>-helpers.js`, `diamond-server/src/models/<domain>-model.js` | Filter fields, default sort, hard limits |

Include related domains that surface inside the feature (`favorite-project` for Projects, `photo` for Media folders). List the paths before launching subagents.


### 2. Run the research subagents

Launch all three `explore` subagents in one message using the prompts in [research-prompts.md](research-prompts.md). Use prompts A-C. Fill in the `<domain>` placeholders and paths from step 1.

Model: prefer `grok-4.7-xhigh-fast`; if that slug is unavailable, omit the model so the subagent inherits.

Each subagent must return file paths for every claim. Discard claims without a path.

### 3. Apply the decision rules

Merge the three inventories, then decide:

- **Overview is always first.** It covers: what the object is and where it lives, create, open, rename, delete, and a one-line list of sub-surfaces owned by other sections (name them, link them, do not document them).
- **Separate article** when a capability has its own UI surface (page, overlay, toolbar, multi-step dialog), is a workflow of 3 or more steps, or carries its own settings or limits. Examples: upload photos, sort photos, favorites, filters and sorting.
- **Fold into an existing article** when it is a single click with no dialog, unless it pairs naturally with discovery features. Status change alone is one line; status plus filter plus sort is one "Status" article.
- **Cross-link, do not duplicate** anything owned by another domain (tasks inside a project belong to Tasks).
- **3-6 articles per group.** Above 6, propose one nested subgroup, Hyperline-style (Subscriptions > Create > ...).
- **Never propose an article for something not in the UI.** Put every "we thought it existed but it does not" finding under "Do not document" so writers stop guessing.
- Name articles by the job: `Upload photos`, `Sort photos`, `Favorites`. `sidebarTitle` is one or two words.


### 4. Write the article map

Write the map in this skill using [article-map-template.md](article-map-template.md). Maps go to `maps/<section>.md`. Each `description` becomes the published search snippet. Write it to the frontmatter rule in `.cursor/rules/help-mdx-copy.mdc`: the outcome in plain words, at most 20 words, with no click path and no list of every H2. `.cursor/` is in `.mintignore`, so nothing here is published. Slug the section the way the UI labels it, kebab-case (`media-folders`, not `photo-folders`).

### 5. Present for approval

Show the group name, the ordered article list with one-line descriptions, and the "Do not document" list. Ask before handing off. Once approved, run `guides-article` once per article, in sidebar order,.

## Boundaries

- No article writing here. No edits to `guides/` or `config/navigation/`.
- No Academy or Troubleshooting planning; those tabs have their own shapes.
- No product behavior invented from marketing copy. Code and locale strings are the only sources.
