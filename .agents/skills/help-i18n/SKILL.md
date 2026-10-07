---
name: help-i18n
description: Implement help-centre i18n structure — the Mintlify `navigation.languages` contract, page paths as keys, frontmatter fields, bold UI labels sourced from diamond-app locales, snippets, and key health with `npm run i18n:audit`. Use when adding, moving, or removing pages, wiring navigation for a language, or checking that bold labels match product English. English wording follows diamond-translate; translated pages are written only there.
---

# help-i18n

The i18n implementation of help-centre: how English pages are keyed, wired into
navigation, and checked so a language can be added later. Wording itself belongs
to diamond-translate.

## Owns

- The Mintlify language contract in `config/navigation/index.json` (none configured yet).
- Page paths as keys, frontmatter fields, and snippet copy.
- Bold UI labels and their source locale in diamond-app.
- Key health: `npm run i18n:audit`.

## Does not own

Tone, terminology, previews, target-language pages, and translation coverage.
These live in [diamond-translate](../../../../diamond-translate/AGENTS.md): the
project's [rules, tone, and terminology](../../../../diamond-translate/projects/help-centre/)
layered over the shared ones. See the `help-translations` rule. The
`guides-article`, `guides-architecture`, and `voice-review` skills own page
writing and structure.

## References

| Doc | Owns |
| --- | --- |
| [docs/setup.md](docs/setup.md) | Mintlify `languages` contract, page mirror, sync scripts, adding a language |
| [docs/key-patterns.md](docs/key-patterns.md) | Page keys, frontmatter, bold labels, snippets |
| [docs/_generated/STATE.md](docs/_generated/STATE.md) | Live key-health report (generated, never hand-edit) |

## Workflow

1. Write or change English pages following the help-centre voice in
   diamond-translate and [key-patterns](docs/key-patterns.md). Bold labels are
   copied from the product's English locale, not paraphrased.
2. Register pages in `config/navigation/index.json`. There is no extractor.
3. Run `npm run i18n:audit` and read [STATE.md](docs/_generated/STATE.md).
   Parity drift exits 1; unmatched bold labels are reported only.
4. Hand off.

## Handoff

When English pages were added, changed, moved, or removed, end the task with a
[`Handoff: copy`](../../../../diamond-translate/AGENTS.md#handoff-copy) block
listing every affected page as `<page path>` (for example `guides/projects/overview`).
Do not translate here.

## Adding a language

Only when rollout is explicitly requested. The runtime side lives in
[setup](docs/setup.md#adding-a-runtime-language); wording, language guides, and
registration live in diamond-translate.
