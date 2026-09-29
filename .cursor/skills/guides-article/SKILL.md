---
name: guides-article
description: Writes one Guides help-centre article (MDX) for a Shootstack feature in the Hyperline-style step-by-step pattern, for photographers. Verifies every button label, dialog text, and limit against the diamond-app code with an explore subagent before writing, registers the page in the Guides navigation group, and runs the Mintlify checks. Use when asked to write, add, or rewrite a Guides article, a feature Overview, or a how-to such as "Upload photos" or "Favorites".
disable-model-invocation: true
---

# Guides article

Write one article under `guides/<section>/`. One article, one job. If the section has no article map yet, run `guides-architecture` first or confirm scope with the user.

Reader: a photographer, not technical, usually mid-task. They want to know what to click, why it matters for their shoot or their clients, and then get back to work. Write the way you would explain the app to a colleague over their shoulder: calm, helpful, professional. Short, but it should sound like a person.

## Inputs

- Section (`projects`, `media-folders`) and article slug (`overview`, `favorites`).
- Type: `overview` (first article of a group) or `task` (one job).
- Brief: `.cursor/skills/guides-architecture/maps/<section>.md` if it exists. Take `title`, `sidebarTitle`, H2 outline, and cross-links from it. Its `description` is a draft: rewrite it to the frontmatter rule in `help-mdx-copy.mdc` and update the map to match.

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

Read the article block in `.cursor/skills/guides-architecture/maps/<section>.md`. Read [voice.md](voice.md) for before/after pairs that show the tone. Read one existing article in the same group (or `guides/media-folders/overview.mdx`) to match depth.

The brief's "UI strings (spelling reference)" list is exactly that, not a checklist. A label goes in the article because the reader clicks it, not because it is on the list.

### 2. Research the feature in code

Always run one `explore` subagent with [research-prompt.md](research-prompt.md), even when a brief exists. Labels change; the brief may be stale. Model: prefer `grok-4.7-xhigh-fast`; omit the model if that slug is unavailable.

Use only claims that come back with a file path. If the subagent cannot find a control, it does not exist for this article.

The research output is a fact sheet, not an outline. Use it to spell labels, confirm limits, and learn what a step is for. Most of it (toasts, statuses, error strings, empty states) does not go in the article.

### 3. Write from the template

Pick the skeleton in [templates.md](templates.md) (`overview` or `task`). Then apply these rules:

**Shape**
- Frontmatter: `title`, `sidebarTitle`, `description`. Overview: `title` is the feature name (`Projects`), `sidebarTitle: Overview`. Task: `title` is the job (`Upload photos`), `sidebarTitle` one or two words.
- Intro: one or two sentences. What the thing is, and what a photographer uses it for (`one folder per set, such as proofs and final edits`).
- One H2 per job, in the order a photographer meets them (create, open, change, delete). Open an H2 with one sentence only when it adds something the heading doesn't (when in the shoot, or why it matters for the client). Never restate the heading as a purpose.
- `<Steps>` for anything with 2 or more clicks. One action per `<Step>`, at most 5 steps per block. A step body is one or two sentences: the action, then optionally why or what you see. `<Step title>` names the action (`Start a new project`), not the location.
- Single-click actions are one sentence of prose, no `<Steps>`.
- `<Note>` for one limit a photographer plans around (counts, sizes, quotas): the number and what to do about it. Skip field validation such as name length. `<Warning>` directly before a destructive step, in plain words (what is deleted, that it can't be undone). `<Tip>` only for a shortcut or a faster path. No other callouts.
- End with `## Related` and 2-4 root-relative links (`/guides/projects/favorites`). Skip the section if nothing exists yet.

**Voice**

Tone, terminology, bold rules, and the "what stays out" list live in one place: `.cursor/rules/help-mdx-copy.mdc` `## Voice`. Read it before writing; do not restate or reinterpret it here. On top of that, for Guides:

- Use the sentences in [voice.md](voice.md) `## Standard phrasings` for recurring situations (opening a menu, confirming a dialog, delete warnings, batch limits). Copy, swap the `<...>` parts, done.
- Check your draft against `### Sounds like a person` in `help-mdx-copy.mdc`. Step 6 has an independent reviewer do the same.
- Budgets: Overview about 500 words, task article about 350. If you are over, cut prose, not steps.
- No code blocks, no tables of options.
- Unverified detail: `{/* TODO: ... */}` in place, never a guess.

### 4. Add screenshot placeholders

Add one placeholder under each step where a screenshot would show the control, and under single-click actions that are hard to find. Placeholders are MDX comments that already contain the final `<Frame>`, so a screenshot can be dropped in by uncommenting:

```mdx
{/* TODO screenshot: Projects page with New highlighted
<Frame>
  <img className="block dark:hidden" src="/assets/images/guides/projects/overview-create-1.png" alt="Projects page with the New button" />
  <img className="hidden dark:block" src="/assets/images/guides/projects/overview-create-1-dark.png" alt="Projects page with the New button" />
</Frame>
*/}
```

Path convention: `assets/images/guides/<section>/<article>-<task>-<n>.png`. Comment-only placeholders keep `mint validate` and `mint broken-links` green until the PNG exists. Alt text describes what is visible, not the step.

### 5. Register in navigation

In `config/navigation/index.json`, find the Guides tab, then the nested `group` inside the wrapper whose name matches the section UI label. Append `guides/<section>/<slug>` in sidebar order from the brief. If the group does not exist yet, add it inside that wrapper's `pages`, with `expanded: false`, after the last existing group and with this article as its only page. Overview is always first in a group. Do not add a top-level group; those stay expanded.

If the article replaces an older page at a different path, add a redirect in `config/site.json` (`redirects: [{ source, destination }]`).

### 6. Voice review

Run the `voice-review` skill (`.cursor/skills/voice-review/SKILL.md`) on the article. Its reviewer has not seen your research, so it reads the page the way a photographer would. Apply the rewrites you agree with. Keep labels verbatim and facts unchanged. If a rewrite needs a fact you have not verified, leave the sentence and add a `{/* TODO: ... */}`.

### 7. Verify and report

Run from the repo root:

```bash
npm run validate
npm run broken-links
```

`validate` runs `lint-guides` first, which fails on pasted dialog copy, toast words, bold statuses, quoted messages in a `<Note>`, missing delete warnings, wrong screenshot paths, and non-sentence-case headings. Fix anything reported. Then check by hand:

- [ ] Every bold label is a control or screen and appears verbatim in the locale JSON path returned by research
- [ ] Every action traces to a component path in the research output
- [ ] Every limit quotes the number from code, and says what to do about it
- [ ] No toasts, transient statuses, or quoted error strings
- [ ] The intro says what the job is for; no H2 opener restates its heading
- [ ] `voice-review` ran and every finding is applied or consciously kept
- [ ] No documented control is in the brief's "Do not document" list
- [ ] Headings sentence case; Diamond terminology; word budget
- [ ] Page is in the correct nested group, Overview first
- [ ] Placeholders follow the path convention

Finish by listing the screenshots to capture: path plus a one-line description of the screen and highlighted control.

## Boundaries

- One article per run. Do not touch sibling articles except to add a `Related` link.
- No Academy or Troubleshooting pages. Different shapes.
- Do not edit `snippets/academy-lessons.js` or run `sync-academy` for this work.
- Do not invent behavior from marketing copy or memory. Code and locale strings only.
