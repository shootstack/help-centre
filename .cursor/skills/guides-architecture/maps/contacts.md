# Contacts: Guides article map

Group: Contacts
Slug: guides/contacts/
Sources reviewed: 2026-10-11, diamond-app 95056817, diamond-server 457fbbe

Contacts is a workspace list under **Contacts**. Opening a row is an overlay on that list, and the overlay starts on **Activity**. Tasks, notes, emails, and activity are tabs on the contact and belong to their own groups. A contact's files belong to this group.

## Custom fields release: article decisions

The user requested this audit and authorized writing the needed articles on 2026-10-11. Three parallel research inventories checked current actions, limits, and entry points. Contact custom fields are released, replacing the earlier unavailable-feature finding.

Create one task article, **Manage contact custom fields**, for workspace-wide field definitions: create, edit name/options, and delete. The settings page and destructive confirmations warrant their own article. Fold individual value entry into **Edit a contact**, and custom columns/filtering into **Filter and sort contacts**. Add discovery links to **Contacts** and **Workspace settings** overview. Contacts keeps six articles, Overview first; no new sidebar group is needed.

Update existing pages:

- `guides/contacts/overview`: orient readers to the details sidebar and link the new guide.
- `guides/contacts/details`: add value entry/clearing and clarify that Update contact has only built-in fields.
- `guides/contacts/filter`: add custom columns and supported filters; retain system-only sorting.
- `guides/workspace-settings/overview`: link Contact under Custom fields to the new guide without duplicating its instructions.

Do not expand this release into project custom fields, Academy, Troubleshooting, or translations.

## Articles (sidebar order)

### 1. Contacts
- File: guides/contacts/overview.mdx
- sidebarTitle: Overview
- description: Create a contact for each client so you can find them when you share galleries or follow up.
- Reader goal: Add someone they work with and find them again.
- H2 outline:
  - Create a contact
  - Open a contact
  - Search contacts
  - Delete a contact
  - Inside a contact
- UI strings (spelling reference, verbatim): **Contacts**, **New**, **Create contact**, **Name**, **Enter contact name**, **Email**, **Enter email address**, **Company (optional)**, **Enter company name**, **Cancel**, **Open contact**, **Search contact...**, search empty **No contacts found** / **Create a new contact**, list empty **No contacts found** / **No contacts found. Create a new contact to get started.**, **Delete contact**, **Delete**, "Are you sure? This will delete this contact. This action cannot be undone.", "A contact with this email already exists", "You have reached the maximum number of contacts.", tabs **Activity**, **Emails**, **Tasks**, **Notes**, **Files**, **Back to contacts**
- Limits to mention: none. Search runs when the box is empty or has at least 2 characters.
- Writer notes: **New** is on the Contacts header. The empty state uses **Create contact**. The table has no ⋯ menu: right-click a row, or click the row to open. Right-click offers **Open contact**, **Add to favorites**, **Edit contact**, and **Delete contact**. Create opens the new contact. There is no separate rename command; the name is a field on the next article. Name the Contact details sidebar and its Custom fields section, then link the field-management guide. The same email cannot be used twice. Create does not toast success. Delete toasts "Contact deleted successfully". The list is a table, with no grid toggle. **Learn more** on the Contacts empty state opens Help; there is no separate workflow to document.
- Cross-links: /guides/contacts/details, /guides/contacts/custom-fields, /guides/contacts/filter, /guides/contacts/favorites, /guides/contacts/files; tabs point to Tasks, Notes, and the gallery-share email list when those sections exist. Activity stays a one-line mention.
- Sources:
  - diamond-app/src/pages/contacts/(root)/_layouts/HeaderLayout.jsx (New, search, `/` shortcut)
  - diamond-app/src/pages/contacts/(root)/_layouts/CreateContactLayout.jsx (navigates to the new contact; no success toast)
  - diamond-app/src/pages/contacts/(root)/_layouts/ContactsLayout.jsx (row click)
  - diamond-app/src/components/contact/ContactEntityInfiniteTable.jsx (right-click only)
  - diamond-app/src/components/contact/ContactOptions.jsx, CreateContact.jsx, DeleteContact.jsx, SearchContact.jsx
  - diamond-app/src/core/contact/contactSchema.jsx (`MAX: 1000`)
  - diamond-app/src/core/app/appRouter.jsx (`/contacts`, `/contacts/:contactId` index redirects to `activity`)
  - diamond-app/public/locales/en/features/contact.json, pages/contacts.json, pages/contact.json, layouts/app.json

### 2. Edit a contact
- File: guides/contacts/details.mdx
- sidebarTitle: Details
- description: Keep a client's name, status, address, and photo up to date.
- Reader goal: Keep a client's record current while they are looking at that person.
- H2 outline:
  - Edit contact details
  - Set status and source
  - Fill in custom fields
  - Add an address
  - Add social links
  - Change the profile photo
- UI strings (spelling reference, verbatim): **Custom fields**, **Set value...**, **No value**, **Yes**, **No**, **Contact details**, **Edit contact**, **Update contact**, **Update contact**, **Email**, **Name**, **Status**, **Source**, **Birthday**, **Phone**, **Website**, **Company**, sections **Address** and **Social media**, **Address**, **Address 2**, **City**, **Region**, **Postal code**, **Country**, **Facebook**, **Instagram**, **X**, **TikTok**, **YouTube**, **LinkedIn**, **Pinterest**, status **No status**, **Prospect**, **Lead**, **Client**, **Partner**, **Lost**, source **Direct**, **Search**, **Friend**, **Referral**, **Social media**, **Ads**, **Event**, **Platform**, **Other**, **Change photo**, **Delete photo**, **Crop profile photo**, **Zoom**, **Apply**, **Profile photo options**, **Delete profile photo**, "Are you sure? This will remove the contact profile photo. This action cannot be undone."
- Limits to mention: profile photo JPG, PNG, or WEBP, up to 100 MB: "Profile photo must be a JPG, PNG, or WEBP file"; "Profile photo cannot exceed {{max}}" formats as "100 MB". Do not mention the 15,000 px width and height cap in `contactSchema.jsx`.
- Writer notes: **Contact details** starts open (`contactSidebarAtom` defaults true). Built-in fields are inline in that sidebar and in **Update contact**, opened with **Edit contact** from the row's right-click menu. Custom fields appear only in the open contact's **Custom fields** section; they are not in Update contact or editable table cells. Document the sidebar once and mention the sheet as the other way in. Inline edits do not toast. The sheet toasts "Contact updated successfully". The header ⋯ menu on an open contact only offers **Delete contact** (open, edit, and favorite are hidden there). The header star is the Favorites article. Email can show a verification icon (**Valid email address**, **Unverified**, and the bounce or spam strings in `contact_email_verification_icon`); one sentence is enough. Do not list every social network as its own step. **Social media** as a source option and **Social media** as the section title are different controls.
- Cross-links: /guides/contacts/overview, /guides/contacts/favorites, /guides/contacts/custom-fields
- Sources:
  - diamond-app/src/pages/contacts/contact/(root)/_layouts/ContactDetailsLayout.jsx
  - diamond-app/src/pages/contacts/contact/(root)/_layouts/HeaderLayout.jsx (Contact details toggle; header menu hides open, edit, favorite)
  - diamond-app/src/pages/contacts/contact/(root)/contactAtom.jsx
  - diamond-app/src/pages/contacts/(root)/_layouts/UpdateContactLayout.jsx (`showSuccessMsg`)
  - diamond-app/src/components/contact/UpdateContactCustomField.jsx
  - diamond-app/src/hooks/useInlineEdit.jsx
  - diamond-ui/src/DatePicker.jsx, SearchMultiSelect.jsx
  - diamond-app/src/components/contact/UpdateContact.jsx, UpdateContactProfilePhoto.jsx, DeleteContactProfilePhoto.jsx
  - diamond-app/src/core/contact/contactSchema.jsx (ContactStatus, ContactSource, ContactProfilePhotoRules)
  - diamond-app/public/locales/en/features/contact.json, features/entity.json (`system_fields.contact`)

### 3. Manage contact custom fields
- File: guides/contacts/custom-fields.mdx
- sidebarTitle: Custom fields
- description: Add custom fields to keep extra client information with every contact in your workspace.
- Reader goal: Define the extra information stored on contacts and manage its choices safely.
- H2 outline:
  - Open field settings
  - Create a field
  - Edit a field
  - Delete a field
- UI strings (spelling reference, verbatim): **Workspace settings**, **Workspace**, **Custom fields**, **Contact**, **Contact fields**, **Create field**, **Create custom field**, **Type**, **Name**, **Options**, **Add options...**, **Enter option...**, **Add**, **Text**, **Number**, **Date**, **Toggle switch**, **URL**, **Email**, **Phone**, **Select**, **Select multiple**, **Update**, **Edit custom field**, **Save changes**, **Remove options?**, **Remove options**, **Delete**, **Delete custom field?**, **Delete field**, **Cancel**.
- Limits to mention: You can create up to 25 custom fields for contacts. Each selection field holds up to 25 options. Remove unused fields/choices before adding more; warn about deleting existing values.
- Writer notes: Open the workspace-name menu, choose Workspace settings, then Custom fields under Workspace and Contact. Create field opens the form; select Type, name it, and add choices for Select/Select multiple. New fields start as visible columns. Custom-field rows have a right-click or hover three-dot menu; built-in rows have no edit/delete menu. Update allows name and choices only; type is fixed. Removed choices trigger Remove options? after Save changes. Single-select values using removed choices are cleared; multiple-select values lose those choices but retain others. Deleting a field deletes all its values across workspace contacts. Individual value entry belongs in Details, table visibility/filtering in Filter. No generic field overview or extra Settings group is needed.
- Cross-links: /guides/contacts/details, /guides/contacts/filter, /guides/contacts/overview
- Sources:
  - diamond-app/src/layouts/app/components/WorkspaceSettingsMenu.jsx
  - diamond-app/src/layouts/settings/components/SettingsNavigation.jsx
  - diamond-app/src/pages/settings/entity/contact/ContactSettingsPage.jsx and _layouts/{ContactEntityLayout,CreateEntityFieldLayout,UpdateEntityFieldLayout,DeleteEntityFieldLayout}.jsx
  - diamond-app/src/components/entity/{CreateEntityField,UpdateEntityField,DeleteEntityField,EntityFieldTable,EntityFieldOptions}.jsx
  - diamond-app/src/core/entity/entitySchema.jsx
  - diamond-app/public/locales/en/{features/entity,pages/contact-settings,layouts/settings,layouts/app}.json
  - diamond-ui/src/CreateOptions.jsx
  - diamond-server/src/services/entity-service.js
  - diamond-server/src/helpers/entity-helpers.js
  - diamond-server/src/models/entity-model.js

### 4. Filter and sort contacts
- File: guides/contacts/filter.mdx
- sidebarTitle: Filter
- description: Find the contacts you need by filtering, sorting, and choosing the columns in your list.
- Reader goal: Pull up the right people from a long list.
- H2 outline:
  - Filter contacts
  - Sort contacts
  - Choose columns
- UI strings (spelling reference, verbatim): **Filter**, **Filters**, **Clear filters**, **Favorite** (Yes / No), **Status**, **Source**, **Country**, **Last contacted at**, **Created at**, **Updated at**, periods **This week**, **This month**, **This quarter**, **This year**, **Sorted by**, **Email**, **Name**, **Company**, **Last contacted**, **Last updated**, **Creation date**, **Ascending**, **Descending**, **Columns**, **Column**, **Add column**, **Search column...**
- Limits to mention: none
- Writer notes: A new workspace sorts by **Name**, **Ascending**. The current app fallback and seeded workspaces both use Name ascending. Filter only lists columns that are visible and filterable. Seeded visible columns are **Name**, **Email**, **Status**, **Phone**, **Tasks**, **Notes**, and **Last contacted at**. Of those, only **Status** and **Last contacted at** can be filtered until the photographer adds another column. **Favorite**, **Source**, **Country**, **Created at**, and **Updated at** are filterable once shown. Name, email, phone, company, and the address and social columns are not filterable. The sort label is **Last contacted**; the column and filter label is **Last contacted at**. That date updates when a gallery share email is sent and is not a field they type. New custom fields start visible as columns. Columns can show, hide, and reorder system/custom fields. Visible custom Select, Select multiple, Toggle switch, and Date fields can be filtered. Text, Number, URL, Email, and Phone custom fields cannot be filtered. Custom fields are not in the sorting menu. Hiding a column does not remove it from Contact details or clear its saved values/filter; use Clear filters to reset filters. No success toast for filter, sort, or columns.
- Cross-links: /guides/contacts/overview, /guides/contacts/custom-fields, /guides/contacts/favorites; gallery share email for what updates **Last contacted at**
- Sources:
  - diamond-app/src/pages/contacts/(root)/_layouts/ToolbarLayout.jsx
  - diamond-app/src/components/entity/UpdateEntityFiltering.jsx (visible and filterable only)
  - diamond-app/src/components/entity/UpdateEntitySorting.jsx (contact sort options)
  - diamond-app/src/components/entity/UpdateEntityFieldsOrder.jsx, entityUtils.jsx
  - diamond-server/src/services/entity-service.js (custom fields start visible)
  - diamond-server/src/helpers/contact-helpers.js (`getInitialContactFields`)
  - diamond-server/src/helpers/entity-helpers.js (Name, Ascending)
  - diamond-server/src/events/gallery-share-email-events.js (`lastContactedAt` on send, skipped when blocked)
  - diamond-app/public/locales/en/features/entity.json

### 5. Favorites
- File: guides/contacts/favorites.mdx
- sidebarTitle: Favorites
- description: Pin up to 10 contacts to the sidebar so your current clients are one click away.
- Reader goal: Keep current clients at hand without searching.
- H2 outline:
  - Add a contact to favorites
  - Open a favorite contact
  - Remove a contact from favorites
- UI strings (spelling reference, verbatim): **Add to favorites**, **Remove from favorites**, header tooltips **Add favorite** / **Remove favorite**, sidebar group **Favorite contacts**, sidebar row tooltip **Remove from favorites**, filter **Favorite**
- Limits to mention: 10 favorites: "You can favorite up to 10 contacts"
- Writer notes: Add and remove from the row's right-click menu, or from the star on the open contact. The star tooltips are **Add favorite** and **Remove favorite**. The menu labels are **Add to favorites** and **Remove from favorites**. The sidebar group appears once there is at least one favorite. Removing from the sidebar toasts "Contact removed from favorites successfully". Starring from the contact does not toast. To see only favorites in the table, add the **Favorite** column, then filter it to **Yes**.
- Cross-links: /guides/contacts/overview, /guides/contacts/filter
- Sources:
  - diamond-app/src/components/contact/ContactOptions.jsx
  - diamond-app/src/components/contact/UpdateContactFavorite.jsx
  - diamond-app/src/pages/contacts/contact/(root)/_layouts/HeaderLayout.jsx
  - diamond-app/src/layouts/app/components/AppNavigation.jsx
  - diamond-app/src/components/favorite-contact/DeleteFavoriteContact.jsx
  - diamond-app/src/core/contact/contactSchema.jsx (`MAX_FAVORITES: 10`)
  - diamond-app/public/locales/en/features/contact.json, favorite-contact.json, layouts/app.json

### 6. Add files to a contact
- File: guides/contacts/files.mdx
- sidebarTitle: Files
- description: Add files to a contact, then download, rename, or delete them.
- Reader goal: Keep a contract or other file with the person it belongs to.
- H2 outline:
  - Upload files
  - Download a file
  - Rename a file
  - Delete a file
- UI strings (spelling reference, verbatim): **Files**, **Upload**, **Upload files**, **Drag and drop files here**, **Upload file**, "Up to {{maxBatch}} files at a time, max {{maxSize}} per file. Every file is validated after upload and ready within seconds.", empty **No files yet** / **Upload your first file to get started. Files can be up to {{maxSize}}.**, queue **Pending**, **Uploading**, **Finished**, **Canceled**, **Error**, **Aborted**, **Invalid**, **Cancel upload**, row menu **Download**, **Rename**, **Delete**, **Download file**, "Download this file to save it.", **Rename** dialog heading **Options**, **Enter new file name**, **Delete file**, "Are you sure? This will permanently delete this file. This action cannot be undone.", status **Validating. This file will be ready in a few seconds.**, **This file was flagged as unsafe and has been removed.**, **This file couldn't be validated, but it's ready to download.**, **Validation didn't finish. This file is still ready to download.**
- Limits to mention: 25 MB per file and 20 files at a time (`formatBytes` → "25 MB"). Types: PDF, DOC, DOCX, Pages, XLS, XLSX, Numbers, Keynote, PPTX, TXT, CSV, ZIP, JPG, PNG, WEBP, GIF, HEIC: "File type is invalid". Storage full: "Your contact file storage is full. Upgrade your plan or delete files to free space." Download bandwidth: "You've used this month's download bandwidth. Upgrade your plan or wait until next month." Leave plan gigabytes out; the messages do not state a number.
- Writer notes: **Upload** is on the Files header; the empty state uses **Upload files**. Each file row has a ⋯ menu and a right-click menu. An unsafe file hides **Download**. **Rename** and **Delete** stay in the row menu. Upload, download, and rename do not toast success. Delete toasts "File deleted successfully". Files are validated after upload; say they are ready within seconds, and do not document the scan poll duration.
- Cross-links: /guides/contacts/overview
- Sources:
  - diamond-app/src/pages/contacts/contact/files/ContactFilesPage.jsx, files/_layouts/HeaderLayout.jsx, FilesLayout.jsx, UploadContactFileLayout.jsx
  - diamond-app/src/components/contact-file/UploadContactFile.jsx, ContactFileList.jsx, ContactFileOptions.jsx, DownloadContactFile.jsx, DeleteContactFile.jsx, UpdateContactFileName.jsx
  - diamond-app/src/core/contact-file/contactFileSchema.jsx (`MAX_SIZE` 25 MB, `MAX_UPLOAD_BATCH` 20, content types)
  - diamond-app/src/core/contact/contactSchema.jsx (`MAX_FILES: 100`)
  - diamond-server/src/models/contact-model.js (`MAX_FILES: 100`), diamond-server/src/helpers/contact-file-helpers.js
  - diamond-app/public/locales/en/features/contact-file.json, pages/contact-files.json

## Do not document
- **Learn more** on the files empty state: rendered with no click handler (FilesLayout.jsx). Contacts Learn more opens Help (ContactEntityInfiniteTable.jsx), without a separate task to teach.
- Project custom fields: outside this contacts-only release. Do not infer release from development settings code.
- Custom values in Create contact or Update contact dialogs, or editable Contacts table cells: absent. Use Contact details (CreateContact.jsx, UpdateContact.jsx, ContactEntityInfiniteTable.jsx, ContactDetailsLayout.jsx).
- Changing a saved field's type: Type is disabled in UpdateEntityField.jsx. Create a different field if needed.
- Renaming, recoloring, or reordering existing choices: no control in diamond-ui/src/CreateOptions.jsx. Do not expose server-only capabilities.
- Sorting by custom fields, filtering custom Text/Number/URL/Email/Phone, or filtering a hidden column through the menu: not offered (UpdateEntitySorting.jsx, UpdateEntityFiltering.jsx).
- A custom-field plan tier or administrator requirement: not present in reviewed UI or entity routes; do not invent one.
- Custom field name/value lengths and the 60-total-field safety cap: validation details; omit under help-mdx-copy. The 25 custom-field and 25-option quotas stay.
- **Your contact info** under Branding: that is the workspace's own website, email, and phone, not a CRM contact (UpdateWorkspaceContact.jsx, pages/contact-info-settings.json)
- Picking a contact while composing a gallery share email, including **Search contact or enter email...** and the verification warnings on that field: owned by the email compose flow (features/contact.json `contact_autocomplete`)
- The task, note, and email tables inside a contact, and **New task**: name the tabs and link them. Activity is a feed with no actions to teach here
- A contact page on the gallery site: diamond-site has no CRM contact route
- A list/grid toggle, a status board, or drag-to-reorder contacts
- Typing **Last contacted at**: it is set when a gallery share email is sent
- Success toasts for create, inline field edits, starring from the contact, upload, download, and rename: `showSuccessMsg` stays off. The update sheet, delete contact, delete file, and sidebar unfavorite do toast
- Field length and character checks (name 64, email 254, company 64, phone 20, URL 250, address 500, city/region/postal 32, country 48, file name 100, search 100): validation only; do not put them in a Note
- Workspace contact caps: 1000 contacts and 100 files on one contact are safety ceilings (`ContactRules.MAX`, `ContactRules.MAX_FILES`). Do not mention them. 10 favorites stays
- The 15,000 px contact-photo cap: a safety ceiling in `ContactProfilePhotoRules`. The 100 MB size limit stays
- Trial workspaces cannot upload files: `trial.features.contactFiles` defaults to false in plan-model.js, and the Files tab is always in the contact header. The contact-file routes do not check that flag
- Plan storage or bandwidth numbers: the alerts tell the photographer to upgrade or free space, without a size

## Open questions
- none

## Custom fields release: writing and voice-review report

The new guide and four existing article updates were implemented from current app/server code. Each page had an article-specific research pass, and five fresh readers reviewed only the tone guide, copy exclusions, and their assigned page.

| Page | Findings by quality | Applied |
| --- | --- | --- |
| Contacts overview | No findings. | 0 |
| Edit a contact | Natural: status/source label chains. Calm/Natural: address label chain. | 3. Choices and address fields now scan as short lists. |
| Manage contact custom fields | Natural: “Contacts holds” treated the screen name as a container. | 1. “You can create up to 25 custom fields for contacts.” |
| Filter and sort contacts | Natural: repeated the custom-filter types in adjacent sentences. | 1. Shortened the second sentence to “pick the values or date period to match.” |
| Workspace settings overview | No findings. | 0 |

All five findings were applied. Every description was retained and matches its article brief. No intro changed during voice review. The workspace overview intro changed during drafting:

- Before: “Workspace settings are where you manage the details shown to your contacts and the subscription for your photography business.”
- After: “Use workspace settings to manage your business details, the fields you keep on contacts, and your subscription.”

Other existing intros are unchanged. The new guide's intro is: “Custom fields keep extra information about your clients alongside their contact details. Create a field once for your workspace, then fill it in on each contact.”

Recurring menu, confirmation, deletion, and limit phrasing was checked against Contacts siblings and tone.md. Labels, limits, actions, option-removal effects, and saving behavior were retained. There are no factual TODOs; only the screenshot placeholders below.

The new guide is third in the six-page Contacts group, after Details and before Filter. The generated diamond-app help catalog adds one entry and preserves existing entries. Translation content remains in diamond-translate's workflow. The i18n audit reports nine missing mirrors: six pre-existing Academy mirrors plus the new guide in nl, de, and fr. The changed existing translations also need a copy handoff. The only guide-lint warning is the pre-existing 635-word Emails deliverability article.

## Screenshots to capture for the custom fields release

Each path below needs a light WebP and a matching `-dark.webp` version. Keep placeholders commented until both files exist. Paths are relative to this help-centre repository.

- `assets/images/guides/contacts/details-custom-fields-1.webp`: Open contact's Contact details sidebar with Custom fields and an empty Set value control highlighted.
- `assets/images/guides/contacts/custom-fields-open-1.webp`: Settings sidebar with Custom fields expanded, Contact selected, and Create field highlighted.
- `assets/images/guides/contacts/custom-fields-create-1.webp`: Create custom field dialog with the Type menu open.
- `assets/images/guides/contacts/custom-fields-create-2.webp`: Options popover with the choice name, color picker, and Add control visible.
- `assets/images/guides/contacts/custom-fields-edit-1.webp`: Custom-field row menu showing Update and Delete.
- `assets/images/guides/contacts/custom-fields-remove-1.webp`: Remove options confirmation with the removed choices, affected contact count, and Remove options control.
- `assets/images/guides/contacts/custom-fields-delete-1.webp`: Delete custom field confirmation with the field name, affected contact count, and Delete field control.
- `assets/images/guides/contacts/filter-custom-fields-1.webp`: Contacts Filter menu showing a custom choice field and its options.
