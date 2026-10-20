# Notes: Guides article map

Group: Notes
Slug: guides/notes/
Sources reviewed: 2026-09-30, diamond-app 58e04146, diamond-server 40635e9

Notes is a workspace list under **Notes**, with a **Templates** tab beside it. The same notes also appear on a project's **Notes** tab and a contact's **Notes** tab. A note is a title and body, with an optional project and contact. Projects and contacts belong to their own groups.

## Articles (sidebar order)

### 1. Notes
- File: guides/notes/overview.mdx
- sidebarTitle: Overview
- description: Create a note for a shoot, then link it, find it, or delete it.
- Reader goal: Write down shoot details and attach them to the right project or client.
- H2 outline:
  - Create a note
  - Open a note
  - Name a note
  - Link a project or contact
  - Search notes
  - Delete a note
  - On a project or contact
- UI strings (spelling reference, verbatim): **Notes**, **Templates**, **New**, **Create note**, **Search note...**, **Open**, **Delete**, **Delete note**, **Cancel**, "Are you sure? This will delete this note. This action cannot be undone.", placeholders **Untitled note**, **Select a project**, **Select a contact**, dialog **Edit note**, **Back**, empty **No notes found** / **No notes found. Create a new note to get started.**, search empty **No notes found** / **Create a new note**, card fallback **Untitled note** / **No content**, sidebar **Notes**
- Limits to mention: none. Search runs when the box is empty or has at least 2 characters.
- Writer notes: **New** is on the Notes header. The empty state uses **Create note**. Clicking **New** or **Create note** adds a card and stays on the list. It does not open the note and does not toast success. Creating from the search empty state does open **Edit note**. Click a card, or choose **Open** from the card ⋯ menu or a right-click, to open **Edit note**. The title has a placeholder and no field label. It saves on its own. The project and contact controls can be cleared; those resets have no text label. Creating from a project preselects that project. Creating from a contact preselects that contact. Either can still be changed or cleared. A project or contact badge on the card opens that project or contact. Search is a header icon (tooltip **Search note...**, `/` shortcut) on the workspace Notes tab only. Do not mention that the shortcut is off while **Edit note** is open. Delete is from the card menu only. Delete toasts "Note deleted successfully" and shows the title above the confirmation. On a narrow screen the project and contact Notes headers show the plus icon without the word **New**. The sidebar **Notes** entry has no count badge. A project or contact **Notes** tab badge counts every note on that record. **New** on those tabs is only on the Notes tab, not on the other tabs of the overlay. There is no search on a project or contact Notes tab.
- Cross-links: /guides/notes/write, /guides/notes/templates, /guides/notes/filter; project and contact pickers point at Projects and Contacts.
- Sources:
  - diamond-app/src/pages/notes/(root)/_layouts/HeaderLayout.jsx (New, search, Notes and Templates tabs)
  - diamond-app/src/pages/notes/notes/(root)/_layouts/NotesLayout.jsx (card click opens the note)
  - diamond-app/src/pages/notes/notes/(root)/_layouts/NoteLayout.jsx (Edit note dialog)
  - diamond-app/src/pages/notes/notes/(root)/_layouts/SearchNoteLayout.jsx (search create opens the note; `/` off when a note is open)
  - diamond-app/src/components/note/CreateNote.jsx (no navigation, no success toast; limit toast)
  - diamond-app/src/components/note/NoteOptions.jsx, NoteEntityInfiniteGrid.jsx, DeleteNote.jsx
  - diamond-app/src/components/note/SearchNote.jsx (empty or at least 2 characters)
  - diamond-app/src/pages/notes/notes/note/NotePage.jsx (shared by workspace, project, and contact)
  - diamond-app/src/pages/notes/notes/note/_layouts/DetailsLayout.jsx
  - diamond-app/src/pages/projects/project/notes/_layouts/HeaderLayout.jsx (New only on this tab; hides the word on a narrow screen)
  - diamond-app/src/pages/contacts/contact/notes/_layouts/HeaderLayout.jsx
  - diamond-app/src/layouts/app/components/AppNavigation.jsx (sidebar entry, no badge)
  - diamond-app/src/core/note/noteSchema.jsx (`MAX: 5000`)
  - diamond-app/public/locales/en/features/note.json, pages/root-notes.json, pages/note.json, pages/project-notes.json, pages/contact-notes.json, layouts/app.json

### 2. Write a note
- File: guides/notes/write.mdx
- sidebarTitle: Write
- description: Format a note, then download a PDF of it.
- Reader goal: Turn a blank note into something they can hand over.
- H2 outline:
  - Format the note
  - Add a link
  - Add a list
  - Export a PDF
- UI strings (spelling reference, verbatim): placeholder **Start typing your note...**, text size **Title**, **Heading**, **Subheading**, **Body**, lists **Bullet list**, **Numbered list**, **Checklist**, **None**, link **Link**, **Enter link URL**, **Enter link text (optional)**, **Cancel**, **Insert**, **Update**, **Export PDF**, footer **Saving**, **Auto-saved**, **Not saved**, count "{{count}} / {{max}}", "The character count is an estimate. Formatting and styling may use additional space. Try simplifying or removing some formatting.", PDF labels **Project**, **Contact**, **Exported**, empty body **No content**
- Limits to mention: 3000 characters of text. The counter shows the count against that max. If formatting pushes the stored note over 5000 characters, the editor shows the estimate warning above.
- Writer notes: The body saves on its own. Field updates do not toast success. Bold, italic, underline, strikethrough, undo, redo, emoji, and the line break are icon buttons with no text label. Text size and lists are menus. **Link** is a popover: **Insert** on a new link, **Update** when one is already selected. **Export PDF** is one click in the footer, with no dialog and no success toast. The file uses the title, or `note.pdf` when the title is empty. The PDF includes the workspace name, and **Project**, **Contact**, and **Exported** when those values exist. The same editor is on a template; point at the templates article instead of repeating these controls there. Status text in the footer stays out of the article.
- Cross-links: /guides/notes/overview, /guides/notes/templates
- Sources:
  - diamond-app/src/components/note/UpdateNoteContent.jsx (`CONTENT_TEXT_MAX: 3000`, `showCount`, editor variant)
  - diamond-app/src/components/_common/tiptap/Toolbar.jsx
  - diamond-app/src/components/_common/tiptap/TipTap.jsx (count and HTML warning)
  - diamond-app/src/components/_common/tiptap/useTipTapEditor.jsx (no horizontal rule)
  - diamond-app/src/pages/notes/notes/note/_layouts/ContentLayout.jsx
  - diamond-app/src/pages/notes/notes/note/_layouts/FooterLayout.jsx
  - diamond-app/src/components/note/ExportNote.jsx (`showSuccessMsg` defaults false)
  - diamond-app/src/core/note/noteSchema.jsx (`CONTENT_MAX: 5000`, `CONTENT_TEXT_MAX: 3000`)
  - diamond-app/public/locales/en/features/common.json (`tip_tap`), features/note.json, pages/note.json

### 3. Note templates
- File: guides/notes/templates.mdx
- sidebarTitle: Templates
- description: Save reusable text, then insert it into an empty note.
- Reader goal: Reuse a shot list or questionnaire instead of retyping it.
- H2 outline:
  - Create a template
  - Open a template
  - Insert a template
  - Save a note as a template
  - Delete a template
- UI strings (spelling reference, verbatim): **Templates**, **New**, **Create template**, **Search template...**, **Open**, **Delete**, **Delete note template**, **Cancel**, "Are you sure? This will delete this note template. This action cannot be undone.", dialog **Edit template**, placeholder **Untitled template**, **Note templates**, **Insert note template**, **Save as note template**, dialog **Save note template**, fields **Title**, **Content**, placeholder **Start typing your note...**, **Save template**, empty **No templates found** / **No note templates found. Create a new template to get started.**, search empty **No templates found** / **Create a new template**, sort **Sorted by …**, **Title**, **Last updated**, **Creation date**, **Ascending**, **Descending**
- Limits to mention: The template body uses the same 3000-character text limit as a note.
- Writer notes: **New** is on the Templates header. The empty state uses **Create template**. Header create stays on the list and does not toast success. Creating from the search empty state opens **Edit template**. Click a card, or choose **Open** from the ⋯ menu or a right-click, to open it. A template is a title and body only: no project, no contact, and no **Export PDF**. Formatting is the same toolbar as a note; link to the Write article and do not repeat it. **Insert note template** is under **Note templates** on the note, and it renders only while the body is empty. Picking one replaces that empty body. There is no success toast. **Save as note template** opens **Save note template** already filled with the note title and body, and the photographer can change both before **Save template**. That save toasts "Note saved as template successfully". Delete is from the template card only and toasts "Note template deleted successfully". Search matches the Notes search (tooltip **Search template...**, `/`, at least 2 characters). Do not mention that the shortcut is off while **Edit template** is open. Sort is on the Templates toolbar only. A new visit sorts by **Creation date**, **Descending**. There is no filter on Templates.
- Cross-links: /guides/notes/overview, /guides/notes/write
- Sources:
  - diamond-app/src/pages/notes/(root)/_layouts/HeaderLayout.jsx
  - diamond-app/src/pages/notes/note-templates/(root)/_layouts/NoteTemplatesLayout.jsx
  - diamond-app/src/pages/notes/note-templates/(root)/_layouts/NoteTemplateLayout.jsx
  - diamond-app/src/pages/notes/note-templates/(root)/_layouts/SearchNoteTemplateLayout.jsx
  - diamond-app/src/pages/notes/note-templates/(root)/_layouts/ToolbarLayout.jsx
  - diamond-app/src/pages/notes/note-templates/(root)/noteTemplatesAtom.jsx (`createdAt`, `desc`)
  - diamond-app/src/pages/notes/note-templates/note-template/NoteTemplatePage.jsx
  - diamond-app/src/pages/notes/note-templates/note-template/_layouts/DetailsLayout.jsx, FooterLayout.jsx
  - diamond-app/src/components/note/InsertNoteTemplate.jsx (returns null unless the body is empty)
  - diamond-app/src/components/note/SaveNoteAsTemplate.jsx (`showSuccessMsg` on the note page)
  - diamond-app/src/pages/notes/notes/note/_layouts/ContentLayout.jsx
  - diamond-app/src/components/note-template/CreateNoteTemplate.jsx, DeleteNoteTemplate.jsx, UpdateNoteTemplateContent.jsx
  - diamond-app/src/core/note-template/noteTemplateSchema.jsx (`MAX: 50`)
  - diamond-server/src/helpers/note-template-helpers.js (fallback sort `createdAt` descending)
  - diamond-app/public/locales/en/features/note.json, features/note-template.json, pages/note-templates.json, pages/note-template.json, pages/root-notes.json

### 4. Filter and sort notes
- File: guides/notes/filter.mdx
- sidebarTitle: Filter
- description: Narrow the note list by date, then sort it by title or when it changed.
- Reader goal: Pull up the notes from a stretch of time.
- H2 outline:
  - Filter notes
  - Sort notes
- UI strings (spelling reference, verbatim): **Filter**, **Filters**, **Clear filters**, **Created at**, **Updated at**, periods **This week**, **This month**, **This quarter**, **This year**, **Sorted by**, **Title**, **Last updated**, **Creation date**, **Ascending**, **Descending**
- Limits to mention: none
- Writer notes: Filter and sort exist only on the workspace Notes tab. Project and contact Notes tabs have neither, and Templates has sort only (that sort is in the templates article). A new workspace sorts notes by **Last updated**, **Descending**. If sorting is missing, the app falls back to **Creation date**, **Ascending**, because notes are not in the client fallback map. The filter menu only renders date fields: **Created at** and **Updated at**. Each offers **This week**, **This month**, **This quarter**, and **This year**. **Project** and **Contact** are seeded as filterable text fields, and the menu drops text fields, so they never appear. **Title** and **Content** are not filterable. There is no columns control. Filter and sort do not toast success.
- Cross-links: /guides/notes/overview, /guides/notes/templates
- Sources:
  - diamond-app/src/pages/notes/notes/(root)/_layouts/ToolbarLayout.jsx
  - diamond-app/src/components/entity/UpdateEntityFiltering.jsx (date, boolean, and option fields only; text fields return null)
  - diamond-app/src/components/entity/UpdateEntitySorting.jsx (note sort options)
  - diamond-app/src/components/entity/entityUtils.jsx (`DEFAULT_ENTITY_SORTING` has no note entry; missing sort uses the contact fallback)
  - diamond-server/src/helpers/note-helpers.js (`getInitialNoteFields`)
  - diamond-server/src/helpers/entity-helpers.js (Last updated, Descending)
  - diamond-app/public/locales/en/features/entity.json

## Do not document
- **Learn more** on every empty state: rendered without a click handler (`NoteEntityInfiniteGrid.jsx`, `NoteTemplateInfiniteGrid.jsx`, project and contact `NotesLayout.jsx`)
- A success toast for creating a note or template: the strings exist, and create buttons never pass `showSuccessMsg` (`CreateNote.jsx`, `CreateNoteTemplate.jsx`)
- Delete from **Edit note** or **Edit template**: `DeleteNoteLayout` and `DeleteNoteTemplateLayout` under the edit routes are exported and never mounted (`NotePage.jsx`, `NoteTemplatePage.jsx`)
- **New note** and **New template**: fallback labels on the create buttons; every header and empty state passes its own label (**New** or **Create note** / **Create template**)
- A project or contact on a template: the template page is title and body only (`DetailsLayout.jsx` under note-template)
- **Export PDF** on a template: the template footer is the save status only
- Inserting a template into a note that already has text: `InsertNoteTemplate.jsx` returns null unless the body is empty
- Search, filter, or sort on a project or contact Notes tab
- A filter on Templates
- Filtering by **Project**, **Contact**, **Title**, or **Content**: title and content are not filterable; project and contact are text fields the filter menu does not render
- Custom fields or a columns menu for notes: **Custom fields** settings cover projects and contacts only (`src/pages/settings/entity/`)
- Favorites for notes: sidebar favorites are projects and contacts only
- A client-facing note page: no note surface in diamond-site
- Workspace note and template caps: 5000 notes and 50 templates are safety ceilings in `NoteRules` and `NoteTemplateRules`. Do not mention them. The 3000-character body limit stays
- Title length (64), the required-title message, and the profanity check: field validation, not a planning limit
- Search length (100) and "Search term contains invalid characters": field validation
- A horizontal rule in the editor: `useTipTapEditor.jsx` turns `horizontalRule` off
- A fourth heading level: the size menu is **Title**, **Heading**, **Subheading**, and **Body**
- Keyboard shortcuts other than `/` on the Notes and Templates search buttons
- A note preview page: hovering the card title shows **Created at** and **Updated at** on the card (`NotePreview.jsx`); it is not its own screen

## Open questions
- none
