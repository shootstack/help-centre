# i18n setup

How help-centre will serve more than one language on Mintlify. Today the site is
English only: `config/navigation/index.json` (referenced from `docs.json`) has no
`languages` array and no `<lng>/` folders exist. Change this only by following
this doc.

## Mintlify contract

Checked against the Mintlify docs ([navigation languages](https://www.mintlify.com/docs/organize/navigation#languages),
[internationalization guide](https://www.mintlify.com/docs/guides/internationalization)).

- `navigation.languages` is an array. Each entry needs `language` (ISO 639-1, for
  example `nl`, `de`, `fr`) and its own full navigation tree: `tabs`, `groups`,
  and `pages`, plus optional `banner`, `footer`, and `navbar`.
- The first entry is the default language unless one sets `default: true`.
- English stays at the root. Each other language mirrors it under `<lng>/` with
  the same file names and folders:

```text
guides/projects/overview.mdx        # en (default)
nl/guides/projects/overview.mdx     # nl
```

```json
{
  "languages": [
    { "language": "en", "tabs": [ { "tab": "Guides", "groups": [ { "group": "Projects", "pages": ["guides/projects/overview"] } ] } ] },
    { "language": "nl", "tabs": [ { "tab": "Handleidingen", "groups": [ { "group": "Projecten", "pages": ["nl/guides/projects/overview"] } ] } ] }
  ]
}
```

- A page path may appear in only one language's tree.
- Tab and group labels in a language tree are copy; diamond-translate writes them.
- Icons, `expanded`, `directory`, and page order are structure and must match English.

## Related scripts

| Command | What it does |
|---|---|
| `npm run i18n:audit` | Page-tree parity per configured language (exit 1 on drift) and bold-label report; writes [_generated/STATE.md](_generated/STATE.md). |
| `npm run sync-app-help` | Writes the diamond-app help catalog (title, description, href) from English navigation. |
| `npm run sync-academy` | Writes the Academy lesson list into `academy/index.mdx` from navigation. |
| `npm run lint-guides` | English voice and shape linter for photographer guides. |

Tone, terminology, and translated-page coverage are checked in diamond-translate.

## Adding a runtime language

Authorized rollout only — never a side effect of translation work.

1. Wrap the current tree as the `en` entry of `navigation.languages`.
2. Decide with the requester whether `sync-app-help` should emit per-language
   catalogs for diamond-app, and whether Academy and home snippets get
   per-language data. These are implementation changes here.
3. Add the language entry and `<lng>/` page mirror only after diamond-translate
   has applied the translated pages. Do not create or seed `<lng>/` here.
4. Run `npm run i18n:audit` and `npm run validate`.

## Related

- [key-patterns.md](key-patterns.md) — what each page and label must look like.
- [diamond-translate](../../../../../diamond-translate/AGENTS.md) — wording, terminology, translated pages, and coverage.
