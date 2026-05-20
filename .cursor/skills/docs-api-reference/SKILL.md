---
name: docs-api-reference
description: Create and maintain API documentation for Diamond in Mintlify format. Use when adding or updating OpenAPI specs, domain overview pages, or docs navigation for API domains.
---

# API Documentation

Maintain API docs in `docs/api-reference/`.

The `docs/` folder may be a nested checkout. Before editing docs, confirm it is populated and clean enough for the task, and use `diamond-server/` as the source of truth for validations, routes, and mappers.

## Structure

```text
api-reference/
├── openapi/{domain}.json
└── overview/{domain}.mdx
```

## Requirements

- Confirm `docs/` and `diamond-server/` are both available. If docs are checked out separately, inspect that checkout before editing.
- Match validation rules from `diamond-server/src/api/app/{domain}/{domain}-validations.js`
- Match response fields from the mapper
- Match endpoint ordering from the routes file
- Mention important business-rule conflicts in descriptions
- Update `docs.json` navigation

## References

- [openapi-template.json](references/openapi-template.json)
- [overview-template.mdx](references/overview-template.mdx)
