---
name: voice-review
description: Reviews a photographer Help Center page for a natural, consistent tone against tone.md, checks sibling phrasing, and applies rewrites without changing UI labels or product facts.
disable-model-invocation: true
---

# Voice review

Every photographer page should sound like the same person: a colleague who knows Shootstack, explaining it to a photographer over their shoulder. Helpful, professional, calm, supportive, natural. The writer knows the code, so their own sentences always make sense to them. This review hands the page to a reader who has only the tone guide and the page, then aligns the page with its siblings.

[tone.md](../../../../diamond-translate/projects/help-centre/tone.md) defines the five qualities, how each drifts, and the fixes. It is the standard for this review and for writing.

## Inputs

- One or more `.mdx` paths (`guides/gallery-shares/security.mdx`), or a section folder (`guides/gallery-shares/`).

## Workflow

```
Progress:
- [ ] 1. Read the tone guide
- [ ] 2. Launch one fresh reader per page
- [ ] 3. Triage the findings
- [ ] 4. Check consistency with siblings
- [ ] 5. Apply, lint, report
```

### 1. Read the tone guide

Read [tone.md](../../../../diamond-translate/projects/help-centre/tone.md) in full. You triage against it; the reader reads with it.

### 2. Launch one fresh reader per page

Launch every reader in one message: one `generalPurpose` subagent per page, model inherited. Use [review-prompt.md](review-prompt.md). Use the reader prompt. Fill in `<path>`. The prompt forbids edits. Do not pass research output, article maps, or your own notes. The reader must not know more than the page's audience would: a photographer.

For more than eight pages, give one subagent per section and list every page path in `<path>`. It returns findings grouped by page.

### 3. Triage the findings

Each finding is a line number, the original text, the quality it drifts from, and a rewrite. Accept a rewrite when:

- Every bold label is still verbatim.
- No fact changed: numbers, defaults, where a control is, what happens after a click. Dropping a reference fact from `## What stays out` in `help-mdx-copy.mdc` is fine; dropping a limit, a location, or a step is not.
- It is shorter or reads more like a person, not only different.

Reject stylistic swaps that fix nothing. When a finding is right but the rewrite changes a fact, write your own fix from the facts already on the page. When the fix needs a fact that is not on the page, leave the sentence and add `{/* TODO: ... */}`.

### 4. Check consistency with siblings

Do this yourself; the reader does not see other pages.

- Recurring moments use the sentences in `### Standard phrasings`. Photographer pages use the table in `tone.md`. Align any that differ.
- Read the section's `overview.mdx` (for an overview, one task article in the same group). Compare intro, H2 openers, and step bodies. If the page is clipped where the sibling explains, or the other way round, move the page toward the guide, not toward the sibling's flaws. Note sibling lines that drift too; fix them only if the user asked for the section.

### 5. Apply, lint, report

Apply the accepted rewrites. If a `description` changed, update the matching `description:` in the article map: `.agents/skills/guides-architecture/maps/<section>.md` for a guide. Run `npm run lint-guides` for Guides, `npm run validate` for Academy or Troubleshooting.

Report per page: findings grouped by quality, how many you applied, the before/after of every changed `description` and intro, and any `TODO` you left.

## Boundaries

- Voice only. No new sections, steps, screenshots, or links.
- No fact comes from the reader or from you. Only the page, the code, and the locale strings are sources.
- Do not touch generated regions (`{/* <name>:start */}` to `{/* <name>:end */}`).
- Do not edit `tone.md` to fit a page. If a page argues for a new rule, tell the user.
