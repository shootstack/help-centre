---
name: ss-voice-review
description: Reviews photographer Help Center pages for natural tone and flow between sentences and paragraphs against the help-centre voice, checks sibling phrasing, and applies light rewrites without changing UI labels or product facts.
disable-model-invocation: true
---

# Voice review

Every photographer page should sound like the same person: a colleague who knows Shootstack, explaining it to a photographer over their shoulder. Clear, calm, and useful, as the core voice defines them. The writer knows the code, so their own sentences always make sense to them. This review hands the page to a reader who has only the tone guide and the page, then aligns the page with its siblings.

The help-centre voice, `teams/marketing/brand/voice/surfaces/help-centre.md` in the Shootstack workspace, narrows the core voice (`voice.md`, `tone.md`, `mechanics.md`, and `naming.md` in the same folder) for the Help Center. It is the standard for this review and for writing.

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

Read `voice.md`, `tone.md`, `mechanics.md`, and `naming.md` in `teams/marketing/brand/voice/` first, then `surfaces/help-centre.md` in full, including "Flow between sentences and paragraphs". You triage against it; the reader reads with it. Review whole passages as well as individual lines, so an abrupt sentence or paragraph break is visible.

### 2. Launch one fresh reader per page

Launch every reader in one message: one `generalPurpose` subagent per page, model inherited. Use [review-prompt.md](review-prompt.md). Use the reader prompt. Fill in `<path>`. The prompt forbids edits. Do not pass research output, article maps, or your own notes. The reader must not know more than the page's audience would: a photographer.

For more than eight pages, give one subagent per section and list every page path in `<path>`. It returns findings grouped by page.

### 3. Triage the findings

Each finding is a line number, the original text, the pillar or check it drifts from, and a rewrite. A flow finding may span adjacent sentences or paragraphs; review and apply it as one passage. Accept a rewrite when:

- Every bold label is still verbatim.
- No fact changed: numbers, defaults, where a control is, what happens after a click. Dropping a reference fact from `## What stays out` in `help-mdx-copy.md` is fine; dropping a limit, a location, or a step is not.
- It is shorter or reads more like a person, not only different. For flow findings, compare the passage before and after: the connection should be easier to follow without adding filler, repetition, or a new implied sequence or cause.
- It makes the smallest useful change. Keep clear short sentences, paragraph breaks, and scannable steps where they already work; do not join every sentence or add a transition to every paragraph.

Reject stylistic swaps that fix nothing. When a finding is right but the rewrite changes a fact, write your own fix from the facts already on the page. When the fix needs a fact that is not on the page, leave the sentence and add `{/* TODO: ... */}`.

### 4. Check consistency with siblings

Do this yourself; the reader does not see other pages.

- Recurring moments use the sentences in `## Standard phrasings`. Photographer pages use the table in `help-centre.md`; client pages use the one in "When the reader is a client". Align any that differ.
- Read the section's `overview.mdx` (for an overview, one task article in the same group). Compare intro, H2 openers, and step bodies. If the page is clipped where the sibling explains, or the other way round, move the page toward the guide, not toward the sibling's flaws. Note sibling lines that drift too; fix them only if the user asked for the section.

### 5. Apply, lint, report

Apply the accepted rewrites. If a `description` changed, update the matching `description:` in the article map: `.agents/skills/ss-guides-architecture/maps/<section>.md` for a guide. Run `npm run lint-guides` for Guides, `npm run validate` for Academy or Troubleshooting.

Report per page: findings grouped by pillar or check, how many you applied, the before/after of every changed `description` and intro, and any `TODO` you left.

## Boundaries

- Voice only. No new sections, steps, screenshots, or links.
- No fact comes from the reader or from you. Only the page, the code, and the locale strings are sources.
- Do not touch generated regions (`{/* <name>:start */}` to `{/* <name>:end */}`).
- Do not edit `help-centre.md` to fit a page. Update it when the user explicitly asks to record a voice preference; otherwise, if a page argues for a new rule, tell the user.
