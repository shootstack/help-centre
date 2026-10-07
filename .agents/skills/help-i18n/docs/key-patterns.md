# Key patterns

The canonical structure for help-centre pages as translatable units. The audit
(`npm run i18n:audit`) checks the mechanical rules here. When a rule changes,
update this doc and `scripts/i18n-audit.mjs` together, then regenerate
[_generated/STATE.md](_generated/STATE.md).

Wording rules — reader voice, page shape, terminology — live in diamond-translate
and the writing skills.

## Page path is the key

- The navigation entry (`guides/projects/overview`) is the key. A translation is
  the same path under `<lng>/`.
- Renaming or moving a page renames the key: update navigation, internal links,
  and the diamond-app help catalog (`npm run sync-app-help`), then hand off the
  old and new paths.
- Every navigation entry has an `.mdx` file; every language tree mirrors English.

## Frontmatter

| Field | Translatable | Notes |
|---|---|---|
| `title` | Yes | Also feeds the diamond-app help catalog |
| `sidebarTitle` | Yes | Short navigation label |
| `description` | Yes | Plain search snippet, no bold |
| `icon`, `mode`, `tag` | No | Structure; copy unchanged into translations |

## Bold UI labels

- Bold marks a label the reader sees on screen: `Open **Projects**`.
- Guides, Academy, and Troubleshooting labels come from
  `diamond-app/public/locales/en`.
- Copy the label exactly from the English locale. In a translation the label comes
  from that product's locale for the language, never a paraphrase.
- Keyboard keys, symbols, and partial labels (`**Rename project to**`) do not
  match a locale string and are reported for review only.

## Snippets

- `snippets/*.jsx` and `*.js` hold shared components and English data (home
  sections, Academy lessons). Copy inside them is English source.
- Do not add per-language snippet data until a rollout decides the shape
  (see [setup](setup.md#adding-a-runtime-language)).

## Anti-patterns

- Creating `nl/`, `de/`, `fr/`, or any later language folder here.
- Paraphrasing a bold label instead of copying the product string.
- Moving a page without updating navigation, links, and the app help catalog.
- Translating tab or group labels inside the English tree.

## Related

- [setup.md](setup.md) — Mintlify language contract.
- [_generated/STATE.md](_generated/STATE.md) — the live key-health report.
- [help-centre rules, tone, and terminology](../../../../../diamond-translate/projects/help-centre/) — wording.
