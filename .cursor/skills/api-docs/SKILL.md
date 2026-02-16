---
name: api-docs
description: Create and maintain API documentation for Shootstack. Use when adding new API endpoints, updating existing endpoint docs, creating domain overview pages, or when the user mentions API docs, OpenAPI, or endpoint documentation.
---

# API Documentation

Maintain API docs in Mintlify format with OpenAPI specs organized by business domain.

## Structure

```
docs/
├── api-reference/
│   ├── introduction.mdx              # API overview
│   ├── openapi/
│   │   └── {domain}.json             # OpenAPI spec per domain
│   └── {domain}/
│       └── overview.mdx              # Domain overview page
└── docs.json                         # Navigation config
```

## Adding a New Domain

### Step 1: Create OpenAPI spec

Create `api-reference/openapi/{domain}.json`. See [openapi-template.json](references/openapi-template.json) for the full template.

Key requirements:
- Match validation rules exactly from `diamond-server/src/api/app/{domain}/{domain}-validations.js`
- Match response fields from `diamond-server/src/api/app/{domain}/{domain}-mapper.js`
- Include `x-mint.title` for each operation
- Add realistic examples for request/response bodies

### Step 2: Create overview page

Create `api-reference/{domain}/overview.mdx`. See [overview-template.mdx](references/overview-template.mdx) for the template.

Required sections in order:
1. **Progress** — Endpoint status table
2. **Rules** — From `{Domain}Rules` in model
3. **{Domain} object** — Response fields table
4. **Enums** — Collapsible accordions for enums/constraints

### Step 3: Update navigation

Add to `docs.json` under `navigation.tabs[1].groups`:

```json
{
  "group": "{Domain}",
  "openapi": "api-reference/openapi/{domain}.json",
  "pages": [
    "api-reference/{domain}/overview",
    {
      "group": "Endpoints",
      "pages": [
        "GET /{resources}",
        "POST /{resources}",
        "GET /{resources}/{id}",
        "PATCH /{resources}/{id}",
        "DELETE /{resources}/{id}"
      ]
    }
  ]
}
```

## Progress Status Flow

Use these badges in the Progress table:

| Badge | Meaning |
| ----- | ------- |
| `<Badge icon="circle-check" size="sm" color="green">Done</Badge>` | Fully implemented |
| `<Badge size="sm" color="blue">In progress</Badge>` | Currently being worked on |
| `<Badge size="sm" color="yellow">Blocked</Badge>` | Done, waiting on dependency |
| `<Badge size="sm" color="gray">Todo</Badge>` | Not started |

**Workflow:** Todo → In progress → Done (or → Blocked → Done)

## Validation Rules Mapping

Always check `diamond-server/src/config/rest/rules.js` for max lengths:

| Constant | Value | Use for |
| -------- | ----- | ------- |
| `MAX_SHORT_TITLE` | 40 | Names, short text |
| `MAX_TITLE` | 80 | Titles, timezone |
| `MAX_LONG_TITLE` | 160 | Extended titles |
| `MAX_DESCRIPTION` | 600 | Descriptions |
| `MAX_URL` | 250 | URLs |

## Common Response Codes

Include these in OpenAPI specs:

| Code | Use `$ref` |
| ---- | ---------- |
| 400 | `#/components/responses/BadRequest` |
| 401 | `#/components/responses/Unauthorized` |
| 403 | `#/components/responses/Forbidden` |
| 404 | `#/components/responses/NotFound` |
| 409 | `#/components/responses/Conflict` |

## Checklist

When adding/updating API docs:

- [ ] OpenAPI spec matches actual validation rules (maxLength, required, etc.)
- [ ] Response schema matches mapper output
- [ ] Examples are realistic
- [ ] Progress table includes all endpoints
- [ ] Rules section matches `{Domain}Rules` from model
- [ ] Enums match model exports
- [ ] Navigation updated in `docs.json`
