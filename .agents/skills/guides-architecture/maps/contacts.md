# Contacts: Guides article map

Group: Contacts
Slug: guides/contacts/
Sources reviewed: 2026-09-30, diamond-app 58e04146, diamond-server 40635e9

Contacts is a workspace list under **Contacts**. Opening a row is an overlay on that list, and the overlay starts on **Activity**. Tasks, notes, emails, and activity are tabs on the contact and belong to their own groups. A contact's files belong to this group.

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
- Writer notes: **New** is on the Contacts header. The empty state uses **Create contact**. The table has no ⋯ menu: right-click a row, or click the row to open. Right-click offers **Open contact**, **Add to favorites**, **Edit contact**, and **Delete contact**. Create opens the new contact. There is no separate rename command; the name is a field on the next article. The same email cannot be used twice. Create does not toast success. Delete toasts "Contact deleted successfully". The list is a table, with no grid toggle. **Learn more** on the empty state has no click handler.
- Cross-links: /guides/contacts/details, /guides/contacts/filter, /guides/contacts/favorites, /guides/contacts/files; tabs point to Tasks, Notes, and the gallery-share email list when those sections exist. Activity stays a one-line mention.
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
  - Add an address
  - Add social links
  - Change the profile photo
- UI strings (spelling reference, verbatim): **Contact details**, **Edit contact**, **Update contact**, **Update contact**, **Email**, **Name**, **Status**, **Source**, **Birthday**, **Phone**, **Website**, **Company**, sections **Address** and **Social media**, **Address**, **Address 2**, **City**, **Region**, **Postal code**, **Country**, **Facebook**, **Instagram**, **X**, **TikTok**, **YouTube**, **LinkedIn**, **Pinterest**, status **No status**, **Prospect**, **Lead**, **Client**, **Partner**, **Lost**, source **Direct**, **Search**, **Friend**, **Referral**, **Social media**, **Ads**, **Event**, **Platform**, **Other**, **Change photo**, **Delete photo**, **Crop profile photo**, **Zoom**, **Apply**, **Profile photo options**, **Delete profile photo**, "Are you sure? This will remove the contact profile photo. This action cannot be undone."
- Limits to mention: profile photo JPG, PNG, or WEBP, up to 100 MB: "Profile photo must be a JPG, PNG, or WEBP file"; "Profile photo cannot exceed {{max}}" formats as "100 MB". Do not mention the 15,000 px width and height cap in `contactSchema.jsx`.
- Writer notes: **Contact details** starts open (`contactSidebarAtom` defaults true). The same fields are inline in that sidebar and in **Update contact**, opened with **Edit contact** from the row's right-click menu. Document the sidebar once and mention the sheet as the other way in. Inline edits do not toast. The sheet toasts "Contact updated successfully". The header ⋯ menu on an open contact only offers **Delete contact** (open, edit, and favorite are hidden there). The header star is the Favorites article. Email can show a verification icon (**Valid email address**, **Unverified**, and the bounce or spam strings in `contact_email_verification_icon`); one sentence is enough. Do not list every social network as its own step. **Social media** as a source option and **Social media** as the section title are different controls.
- Cross-links: /guides/contacts/overview, /guides/contacts/favorites
- Sources:
  - diamond-app/src/pages/contacts/contact/(root)/_layouts/ContactDetailsLayout.jsx
  - diamond-app/src/pages/contacts/contact/(root)/_layouts/HeaderLayout.jsx (Contact details toggle; header menu hides open, edit, favorite)
  - diamond-app/src/pages/contacts/contact/(root)/contactAtom.jsx
  - diamond-app/src/pages/contacts/(root)/_layouts/UpdateContactLayout.jsx (`showSuccessMsg`)
  - diamond-app/src/components/contact/UpdateContact.jsx, UpdateContactProfilePhoto.jsx, DeleteContactProfilePhoto.jsx
  - diamond-app/src/core/contact/contactSchema.jsx (ContactStatus, ContactSource, ContactProfilePhotoRules)
  - diamond-app/public/locales/en/features/contact.json, features/entity.json (`system_fields.contact`)

### 3. Filter and sort contacts
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
- Writer notes: A new workspace sorts by **Name**, **Ascending**. The app fallback when sorting is missing is Creation date ascending; seeded workspaces use the server default. Filter only lists columns that are visible and filterable. Seeded visible columns are **Name**, **Email**, **Status**, **Phone**, **Tasks**, **Notes**, and **Last contacted at**. Of those, only **Status** and **Last contacted at** can be filtered until the photographer adds another column. **Favorite**, **Source**, **Country**, **Created at**, and **Updated at** are filterable once shown. Name, email, phone, company, and the address and social columns are not filterable. The sort label is **Last contacted**; the column and filter label is **Last contacted at**. That date updates when a gallery share email is sent and is not a field they type. No success toast for filter, sort, or columns.
- Cross-links: /guides/contacts/overview, /guides/contacts/favorites; gallery share email for what updates **Last contacted at**
- Sources:
  - diamond-app/src/pages/contacts/(root)/_layouts/ToolbarLayout.jsx
  - diamond-app/src/components/entity/UpdateEntityFiltering.jsx (visible and filterable only)
  - diamond-app/src/components/entity/UpdateEntitySorting.jsx (contact sort options)
  - diamond-app/src/components/entity/UpdateEntityFieldsOrder.jsx
  - diamond-server/src/helpers/contact-helpers.js (`getInitialContactFields`)
  - diamond-server/src/helpers/entity-helpers.js (Name, Ascending)
  - diamond-server/src/events/gallery-share-email-events.js (`lastContactedAt` on send, skipped when blocked)
  - diamond-app/public/locales/en/features/entity.json

### 4. Favorites
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

### 5. Add files to a contact
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
- **Learn more** on the contacts empty state and the files empty state: rendered with no click handler (ContactEntityInfiniteTable.jsx, FilesLayout.jsx)
- **Create field** under Settings → Custom fields → **Contact**: the button is disabled, tooltip "This feature is not available yet." (ContactEntityLayout.jsx, pages/contact-settings.json)
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
