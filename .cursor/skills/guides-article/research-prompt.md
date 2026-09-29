# Research prompt

One `explore` subagent per article. Replace every `<...>`. Scope it to the jobs this article covers, not the whole feature.

```
Thoroughness: medium. Read-only; do NOT edit files.

Repo: /Users/jiry/Workspace/shootstack/engineering-os/shootstack-diamond/diamond-app
(React 19 gallery-management app for photographers, product name "Shootstack").
Sibling repo for server rules: .../shootstack-diamond/diamond-server

I am writing one end-user help article: "<Article title>" in the "<Section UI label>"
section. It covers exactly these jobs:
- <job 1, e.g. create a project>
- <job 2>
- <job 3>

Explore:
- src/components/<domain>*/  (the components for these jobs)
- src/core/<domain>*/  (schemas and limits for these jobs)
- src/pages/**  files that render them (grep for the component names)
- src/layouts/app/  if a sidebar entry or shortcut is involved
- public/locales/en/features/<domain>*.json, pages/*.json, layouts/*.json, schemas/*.json
- ../diamond-server/src/helpers/<domain>-helpers.js for seeded filter or sort fields, if relevant

For each job, report in order:
1. Purpose: one line on why a photographer does this, taken from UI copy
   (dialog descriptions, tooltips, empty states, checkbox hints). Say "none in UI"
   if the app does not explain it.
2. Trigger: exact button or menu label and where it is (page header, card menu,
   right-click, header menu inside the object, sidebar, toolbar, keyboard shortcut).
3. Dialog, if any: title, field labels, placeholders, submit and cancel labels,
   confirmation body text verbatim.
4. Result: what the user sees after (navigation, toast text, badge).
5. Limits or validation the user can hit, with the number and the exact message.
6. Anything that looks related but is NOT in the UI, so I do not document it.

Rules:
- Quote UI strings verbatim from the English locale JSON, with the JSON path.
- Tag every string as one of: control (the user clicks it), screen (page or dialog
  title), status (badge or transient state), toast, or message (error or hint).
  Only controls and screens will be bolded in the article; the rest is reference.
- Include a file path for every claim. Claims without a path will be discarded.
- Do not describe implementation (hooks, atoms, Redux, API). Only what a user sees and does.
- Keep under 600 words.
```
