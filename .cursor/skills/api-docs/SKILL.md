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
- Match endpoint order from `diamond-server/src/api/app/{domain}/{domain}-routes.js`
- Match error responses from `@throws` in `diamond-server/src/services/{domain}-service.js`
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
        "POST /{resources}",
        "GET /{resources}",
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

## Error Responses

Check `@throws` JSDoc annotations in `diamond-server/src/services/{domain}-service.js`. For each thrown error:
- Add the matching error code to the endpoint's `responses` in the OpenAPI spec
- Add a callout in the endpoint `description` with the business rule, e.g.: `Returns \`409 Conflict\` if the workspace already has 1,000 projects.`

## Business Rule Callouts

When an endpoint has limits or constraints from `{Domain}Rules`, mention them directly in the OpenAPI endpoint `description` field. Format as a sentence at the end of the description: `Returns \`{code} {reason}\` if {condition}.`

## Cross-domain Links

When an endpoint references another domain (e.g., copy photos references the Photo domain), add a markdown link to that domain's overview page in the endpoint `description`: `See [Photos](/api-reference/photo/overview) for photo details.`

## Checklist

When adding/updating API docs:

- [ ] OpenAPI spec matches actual validation rules (maxLength, required, etc.)
- [ ] Response schema matches mapper output
- [ ] Endpoint order matches routes file
- [ ] Examples are realistic
- [ ] Progress table includes all endpoints
- [ ] Rules section matches `{Domain}Rules` from model
- [ ] Enums match model exports
- [ ] Navigation updated in `docs.json`
- [ ] Error responses match `@throws` in service
- [ ] Business rules called out in endpoint description
- [ ] Cross-domain links added where applicable
