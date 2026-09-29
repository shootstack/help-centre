---
name: voice-review
description: Reviews help-centre MDX pages for tone of voice with a fresh subagent that reads each page the way a photographer would, then applies the rewrites. Keeps every UI label and fact unchanged. Use after writing a Guides, Troubleshooting, or Academy page, or when asked to audit, polish, or make copy sound more natural.
disable-model-invocation: true
---

# Voice review

The writer knows the code, so their own sentences always make sense to them. This review hands each page to a reader who has only seen the voice rules and the page, and asks: would a photographer mid-task say "what do you mean?"

## Inputs

- One or more `.mdx` paths (`guides/gallery-shares/overview.mdx`), or a section folder (`guides/gallery-shares/`).

## Workflow

```
Progress:
- [ ] 1. Launch one reviewer per page
- [ ] 2. Triage the findings
- [ ] 3. Apply and lint
```

### 1. Launch one reviewer per page

Launch every reviewer in one message: one `generalPurpose` subagent per page, model inherited. Use [review-prompt.md](review-prompt.md) with `<path>` filled in; the prompt forbids edits. Do not pass research output, article maps, or your own notes. The reviewer must not know more than the reader.

For more than eight pages, give one subagent per section and list every page path in `<path>`. It returns findings grouped by page.

### 2. Triage the findings

Each finding is a line number, the original text, the pattern it hits, and a rewrite. Accept a rewrite when:

- Every bold label is still verbatim.
- No fact was added, dropped, or changed. That covers numbers, defaults, where a control is, and what happens after a click.
- It is shorter or clearer, not only different.

Reject stylistic swaps that fix nothing. When a finding is right but the rewrite changes a fact, write your own fix from the facts already on the page.

### 3. Apply and lint

Apply the accepted rewrites. If a `description` changed on a Guides page, update the matching `description:` in `.cursor/skills/guides-architecture/maps/<section>.md`. Run:

```bash
npm run lint-guides
```

Report the number of findings per page, how many you applied, and the before/after of every changed `description` and intro.

## Boundaries

- Voice only. No new sections, steps, screenshots, or links.
- No fact comes from the reviewer. Only the page, the code, and the locale strings are sources.
- Do not touch generated regions (`{/* <name>:start */}` to `{/* <name>:end */}`).
