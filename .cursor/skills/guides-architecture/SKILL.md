---
name: guides-architecture
description: Decides which Guides help-centre articles a Shootstack core feature needs (Projects, Media folders, Galleries, Gallery shares, Contacts, Tasks, Notes, Workspace, Branding). Reads the diamond-app and diamond-server code for that feature with parallel explore subagents, applies fixed decision rules, and writes an approved article map to maps/<section>.md in this skill that the guides-article skill consumes. Use when planning a new Guides section, auditing an existing one against the current UI, or when asked "which help articles do we need for X".
disable-model-invocation: true
---

Read and follow the canonical skill at `.agents/skills/guides-architecture/SKILL.md` from this project root. Its research prompts, article map template, and `maps/` output folder apply here.
