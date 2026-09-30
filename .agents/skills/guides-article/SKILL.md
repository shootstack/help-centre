---
name: guides-article
description: Writes one Guides help-centre article (MDX) for a Shootstack feature in the Hyperline-style step-by-step pattern, for photographers. Verifies every button label, dialog text, and limit against the diamond-app code with an explore subagent before writing, registers the page in the Guides navigation group, and runs the Mintlify checks. Use when asked to write, add, or rewrite a Guides article, a feature Overview, or a how-to such as "Upload photos" or "Favorites".
disable-model-invocation: true
---

# Guides article

Write one article under `guides/<section>/`. One article, one job. If the section has no article map yet, run `guides-architecture` first or confirm scope with the user.

Three sources govern the page, and this skill does not restate them: shape is `.cursor/rules/help-guides.mdc`, copy mechanics are `.cursor/rules/help-mdx-copy.mdc`, and tone is `.agents/skills/voice-review/tone.md`. This skill is the workflow around them: research, draft from the template, register, review, verify.

## Inputs

- Section (`projects`, `media-folders`) and article slug (`overview`, `favorites`).
- Type: `overview` (first article of a group) or `task` (one job).
- Brief: `.agents/skills/guides-architecture/maps/<section>.md` if it exists. Take `title`, `sidebarTitle`, H2 outline, and cross-links from it. Its `description` is a draft: rewrite it to the frontmatter rule in `help-mdx-copy.mdc` and update the map to match.

## Workflow

```
Progress:
- [ ] 1. Resolve inputs and brief
- [ ] 2. Research the feature in code
- [ ] 3. Write from the template
- [ ] 4. Add screenshot placeholders
- [ ] 5. Register in navigation
- [ ] 6. Voice review
- [ ] 7. Verify and report
```

### 1. Resolve inputs and brief

Read the article block in `.agents/skills/guides-architecture/maps/<section>.md`. Read `.agents/skills/voice-review/tone.md` in full: the five qualities, where drift starts, and the standard phrasings you will copy into the draft. Read one existing article in the same group (or `guides/media-folders/overview.mdx`) to match depth.

The brief's "UI strings (spelling reference)" list is exactly that, not a checklist. A label goes in the article because the reader clicks it, not because it is on the list.

### 2. Research the feature in code

Always run one `explore` subagent with [research-prompt.md](research-prompt.md), even when a brief exists. Labels change; the brief may be stale. Model: prefer `grok-4.7-xhigh-fast`; omit the model if that slug is unavailable.

Use only claims that come back with a file path. If the subagent cannot find a control, it does not exist for this article.

The research output is a fact sheet, not an outline. Use it to spell labels, confirm limits, and learn what a step is for. Most of it (toasts, statuses, error strings, empty states) does not go in the article.

### 3. Write from the template

Pick the skeleton in [templates.md](templates.md) (`overview` or `task`). The skeletons already carry the shape from `help-guides.mdc` `## Patterns`; fill the slots, delete the sections the feature does not have. While drafting:

- Order H2s the way a photographer meets them: create, open, change, delete.
- Copy the sentences in `tone.md` `### Standard phrasings` for recurring situations (open a menu, confirm a dialog, delete warning, batch limit). Swap the `<...>` parts, done.
- Write the description, intro, and each H2 opener last, against `tone.md` `## Where drift starts`.
- Unverified detail: `{/* TODO: ... */}` in place, never a guess.

### 4. Add screenshot placeholders

Add one placeholder under each step where a screenshot would show the control, and under single-click actions that are hard to find. Use the `## Placeholder snippet` in [templates.md](templates.md); the path convention is in `help-guides.mdc` and the alt-text rule in `help-mdx-copy.mdc`. Comment-only placeholders keep `mint validate` and `mint broken-links` green until the PNG exists.

### 5. Register in navigation

In `config/navigation/index.json`, find the Guides tab, then the nested `group` inside the wrapper whose name matches the section UI label. Append `guides/<section>/<slug>` in sidebar order from the brief. If the group does not exist yet, add it inside that wrapper's `pages`, with `expanded: false`, after the last existing group and with this article as its only page. Overview is always first in a group. Do not add a top-level group; those stay expanded.

If the article replaces an older page at a different path, add a redirect in `config/site.json` (`redirects: [{ source, destination }]`).

### 6. Voice review

Run the `voice-review` skill (`.agents/skills/voice-review/SKILL.md`) on the article. Its reviewer has not seen your research, so it reads the page the way a photographer would. Apply the rewrites you agree with. Keep labels verbatim and facts unchanged. If a rewrite needs a fact you have not verified, leave the sentence and add a `{/* TODO: ... */}`.

### 7. Verify and report

Run from the repo root:

```bash
npm run validate
npm run broken-links
```

`validate` runs `lint-guides` first, which covers the mechanical rules (banned words, bold statuses, quoted messages, missing delete warnings, step counts, screenshot paths, sentence case, budgets, description shape). Fix anything reported. Then check by hand what the lint cannot see:

- [ ] Every bold label is a control or screen and appears verbatim in the locale JSON path returned by research
- [ ] Every action traces to a component path in the research output
- [ ] Every limit quotes the number from code, and says what to do about it
- [ ] `voice-review` ran and every finding is applied or consciously kept
- [ ] No documented control is in the brief's "Do not document" list
- [ ] Page is in the correct nested group, Overview first

Finish by listing the screenshots to capture: path plus a one-line description of the screen and highlighted control.

## Boundaries

- One article per run. Do not touch sibling articles except to add a `Related` link.
- No Academy or Troubleshooting pages. Different shapes.
- Do not edit `snippets/academy-lessons.js` or run `sync-academy` for this work.
- Do not invent behavior from marketing copy or memory. Code and locale strings only.
