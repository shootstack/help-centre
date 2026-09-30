# Research prompts

Three `explore` subagent prompts. Launch all three in one message. Replace every `<...>` placeholder. Set thoroughness to `medium`; use `very thorough` for large domains (Gallery, Gallery share).

Shared preamble for each prompt:

```
Thoroughness: medium. Read-only; do NOT edit files.

Repo: /Users/jiry/Workspace/shootstack/engineering-os/shootstack-diamond/diamond-app
(React 19 gallery-management app for photographers, product name "Shootstack").
Sibling repo for server rules: .../shootstack-diamond/diamond-server

We are planning end-user help articles for the "<Feature UI label>" feature.
Report only what a photographer can do in the UI. Include a file path for every
claim. Quote UI strings verbatim from the English locale JSON. Keep under 800 words.
```

## Prompt A: actions and exact labels

```
<preamble>

Explore:
- src/components/<domain>*/  (every *.jsx; note Options menus, Create/Update/Delete dialogs, previews, badges)
- public/locales/en/features/<domain>*.json

Report:
1. Every user action on a <object>: exact menu/button label, where it is triggered
   (card menu, right-click, header menu, sidebar, toolbar, keyboard shortcut), and
   whether it opens a dialog. Table format.
2. For each dialog: title, field labels and placeholders, submit and cancel button
   labels, confirmation body text, success toast.
3. Empty-state title, description, and button labels.
4. Anything that looks like an action but is not wired (handler missing, hidden
   flag) so we do not document it.
```

## Prompt B: limits, validation, and server rules

```
<preamble>

Explore:
- src/core/<domain>*/  (schemas, hooks, constants; look for enums such as Status, SortBy)
- src/constants/rules.js and src/constants/regex.js
- public/locales/en/schemas/<domain>*.json
- ../diamond-server/src/helpers/<domain>-helpers.js (seeded entity fields: filter names, options, default sort)
- ../diamond-server/src/models/<domain>-model.js (hard caps)

Report:
1. Every limit with its number and the user-facing message shown when it is hit
   (max count, max name length, max favorites, file types, file size).
2. Every enum a photographer sees (status values, sort fields, sort orders) with
   the exact English labels.
3. Seeded filter fields for this list: name, type, options.
4. Default sort for a new workspace.
5. Whether any limit depends on the plan (point to the plan/subscription code) or is fixed.
```

## Prompt C: pages, entry points, and related domains

```
<preamble>

Explore:
- src/pages/**  files that render <domain> (grep for the component names and for "<domain>")
- src/layouts/app/  (sidebar navigation, favorites groups, shortcuts)
- public/locales/en/pages/*.json and public/locales/en/layouts/*.json
- Related domains that surface inside this feature: <list, e.g. favorite-project, task, note>

Report:
1. Where the feature lives: page title, sidebar entry, URL pattern, how it opens
   (page, overlay, drawer).
2. Toolbar and header controls: search (label, shortcut, min characters), sort,
   filter, view toggles, "New" button.
3. Tabs or sections inside one <object> and a one-line purpose for each.
4. Related domains that appear here but are owned elsewhere (tasks, notes,
   galleries) so the map cross-links instead of documenting them.
5. Any viewer-side surface in ../diamond-site for this feature (yes/no; if yes,
   which route).
```
