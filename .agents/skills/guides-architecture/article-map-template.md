# Article map template

Write one map in this skill. The `guides-article` skill reads it as its brief. Write it to `maps/<section>.md`.

The "UI strings" block is a spelling reference so the writer copies labels verbatim. It is not a list of things the article must mention; toasts, statuses, and error strings belong there for accuracy but stay out of the article.

```markdown
# <Section UI label>: Guides article map

Group: <Section UI label>            (as shown in the app, plural)
Slug: guides/<section>/        (kebab-case of the UI label)
Sources reviewed: <date>, diamond-app <short commit>, diamond-server <short commit>

## Articles (sidebar order)

### 1. <Title>
- File: guides/<section>/<slug>.mdx
- sidebarTitle: Overview
- description: <one sentence, at most 20 words, the outcome in a photographer's words; no bold, arrows, or click path: see help-mdx-copy.mdc Frontmatter>
- Reader goal: <one sentence>
- H2 outline:
  - <H2>
  - <H2>
- UI strings (spelling reference, verbatim): **New**, **Create project**, ...
- Limits to mention: <number + exact message> or "none"   (counts, sizes, quotas a photographer can hit in normal use; field validation such as name length, and workspace-wide safety caps, go under Do not document)
- Cross-links: <other sections this article names but does not document>
- Sources:
  - <path>
  - <path>

### 2. <Title>
(same fields)

## Do not document
- <Capability that does not exist in the UI, with the path checked>
- <Control that is rendered but not wired>

## Open questions
- <Anything the code left ambiguous; leave empty if none>
```
