# Emails: Guides article map

Group: Emails
Slug: guides/emails/
Sources reviewed: 2026-09-30, diamond-app 58e04146, diamond-server 40635e9, diamond-site 9ff5fa8

The app sidebar **Emails** opens the workspace **Gallery shares** email-history tab. **Templates** is the other tab. Photographers compose from an open gallery or the **Emails** tab of an existing gallery share; the workspace history has no compose action. An email record can be opened to see its status, events, and preview. It cannot be renamed, edited, deleted, or resent in this UI. A contact's **Emails** tab shows the same kind of records for that contact. Gallery share settings belong to Gallery shares; contact management belongs to Contacts.

## Articles (sidebar order)

### 1. Emails
- File: guides/emails/overview.mdx
- sidebarTitle: Overview
- description: Find gallery share emails, then check each message's details and delivery activity.
- Reader goal: Know where sent emails live and how to open one.
- H2 outline:
  - Where emails live
  - Open a sent email
  - Where to compose
  - Where templates live
- UI strings (spelling reference, verbatim): sidebar **Emails**, tabs **Gallery shares** and **Templates**, toolbar **Email history**, columns **Recipient**, **Subject**, **Gallery**, **Status**, **Created at**, detail **Gallery share email**, **To**, **Gallery**, **Subject**, **Created at**, empty **No gallery share emails yet** / **Gallery share emails you send will appear here.**, gallery share tab **Emails**, **Compose email**
- Limits to mention: none
- Writer notes: The sidebar **Emails** opens `/emails/gallery-shares`; its **Gallery shares** tab lists email records across the workspace, newest first. Click a row to open the detail panel. The detail has **Email events** and **Preview**, explained in the Activity article. The workspace list has no **New** or **Compose email** button. Composition starts from a gallery's **Share gallery** menu or from an existing gallery share's **Emails** tab; link to Send instead of repeating steps. The **Templates** tab holds reusable message bodies; link to Create templates. Email records have no rename or delete control. The same email can appear under its gallery share and recipient contact; those lists have no workspace search, filters, or sort toolbar. Do not imply that **Created at** is a scheduled send date.
- Cross-links: /guides/emails/send, /guides/emails/find, /guides/emails/activity, /guides/emails/create-templates; /guides/gallery-shares/overview; Contacts when published
- Sources:
  - diamond-app/src/layouts/app/components/AppNavigation.jsx
  - diamond-app/src/pages/emails/(root)/_layouts/HeaderLayout.jsx
  - diamond-app/src/pages/emails/gallery-share-emails/(root)/_layouts/GalleryShareEmailsLayout.jsx
  - diamond-app/src/components/gallery-share-email/GalleryShareEmailInfiniteTable.jsx
  - diamond-app/src/pages/emails/gallery-share-emails/gallery-share-email/(root)/_layouts/EmailInfoLayout.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/gallery-share-emails/_layouts/ToolbarLayout.jsx
  - diamond-app/src/pages/contacts/contact/emails/_layouts/EmailsLayout.jsx
  - diamond-app/src/constants/links.js
  - diamond-app/public/locales/en/layouts/app.json, pages/root-emails.json, pages/gallery-share-emails.json, pages/gallery-share-email.json, features/gallery-share-email.json

### 2. Send a gallery share email
- File: guides/emails/send.mdx
- sidebarTitle: Send
- description: Send a gallery to a client by email, or send another message from an existing share.
- Reader goal: Choose a recipient, write the message, and send the gallery share.
- H2 outline:
  - Email a new gallery share
  - Email an existing gallery share
  - Write the message
  - What the recipient receives
- UI strings (spelling reference, verbatim): **Share gallery**, **Compose email**, sheet **Share gallery**, steps **Email**, **Security**, **Favorites**, **Download**, **Review**, **Overview**, **Back**, **Next**, **Send email**, dialog **Compose gallery share email**, **To**, **Type a name or email...**, **Subject**, **Enter email subject**, **Start typing your email...**, **Cancel**, **Send email**, preview **View gallery**, **Use the following password to view the gallery:**, **Use the following PIN to download the photos:**, paused dialog **Email sending paused** / **Email sending for this workspace has been paused after repeated spam complaints. Contact support to restore access.** / **OK**, discard dialog **Discard gallery share?** / **Keep editing** / **Discard**
- Limits to mention: 50 emails per gallery share: "You have reached the maximum number of emails for this gallery share. The maximum is {{max}} emails." The compose editor shows a 3000-character text limit; formatting can make the stored HTML exceed 5000 characters and trigger an estimate warning. Do not mention the workspace contact cap.
- Writer notes: From a gallery, **Share gallery** → **Compose email** opens a six-step sheet and creates the share when **Send email** is clicked at **Overview**. Cover the **Email** step and name the remaining steps, linking to the gallery share settings articles instead of duplicating them. From an existing gallery share, **Emails** → **Compose email** opens **Compose gallery share email**; its empty-state button does the same. A recipient can be an existing contact or a typed email. A typed new address can create a contact. Do not mention the workspace contact cap. The message editor shows a preview; **View gallery** in that preview is not clickable. A sent message includes the gallery password only when **Password protected** is on and the download PIN only when **PIN protected** is on. The existing-share compose preview can show stored values even while those switches are off, so describe the sent message from the server behavior. There is no success toast in either flow. If sending is paused, the dialog directs the photographer to support. **Insert email template** and **Save as email template** are covered in Use templates.
- Cross-links: /guides/emails/use-templates, /guides/emails/activity, /guides/gallery-shares/overview, /guides/gallery-shares/security, /guides/gallery-shares/downloads; Contacts when published
- Sources:
  - diamond-app/src/pages/projects/project/project-content/gallery/_layouts/ShareGalleryEmailLayout.jsx
  - diamond-app/src/components/gallery-share/CreateEmailGalleryShare.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/gallery-share-emails/_layouts/CreateGalleryShareEmailLayout.jsx
  - diamond-app/src/components/gallery-share-email/CreateGalleryShareEmail.jsx, GalleryShareEmailPreview.jsx
  - diamond-app/src/core/gallery-share/galleryShareSchema.jsx
  - diamond-app/src/core/gallery-share-email/galleryShareEmailSchema.jsx
  - diamond-server/src/helpers/gallery-share-helpers.js
  - diamond-server/src/services/gallery-share-email-service.js
  - diamond-app/src/layouts/dialogs/EmailDisabledDialog.jsx
  - diamond-app/public/locales/en/pages/gallery.json, pages/gallery-share-emails.json, features/gallery-share-email.json, layouts/dialogs.json, features/common.json

### 3. Find gallery share emails
- File: guides/emails/find.mdx
- sidebarTitle: Find emails
- description: Search sent emails by recipient, subject, or gallery, then narrow them by status or sent date.
- Reader goal: Locate a particular gallery share email in the workspace history.
- H2 outline:
  - Search emails
  - Filter by status or sent date
  - Sort the history
- UI strings (spelling reference, verbatim): **Search gallery share emails**, **Search by recipient, subject, or gallery...**, **Gallery share emails**, **Filter**, **Status**, **Search status...**, **Sent date**, **This week**, **This month**, **This quarter**, **This year**, **Clear filters**, **Sorted by**, **Sent date**, **Last updated**, **Ascending**, **Descending**, status choices **Waiting**, **Sent**, **Delayed**, **Undeliverable**, **Delivered**, **Opened**, **Clicked**, **Bounced**, **Complained**, **Blocked**, search empty **No gallery share emails found**
- Limits to mention: Search runs with an empty box or at least 2 characters; no numeric quota to mention.
- Writer notes: These controls are on workspace **Emails** → **Gallery shares**, not on a particular share's or contact's **Emails** tab. The header search icon has the **Search gallery share emails** tooltip and `/` shortcut. Do not mention that the shortcut is off while an email detail is open. The search results show subject with recipient and gallery; selecting one opens its detail. **Status** accepts more than one status. **Sent date** has four preset periods; **Clear filters** resets status and date. The sort control offers **Sent date** or **Last updated**, each ascending or descending. A fresh visit defaults to **Sent date**, descending. Do not present the status filter as a way to change delivery status.
- Cross-links: /guides/emails/overview, /guides/emails/activity
- Sources:
  - diamond-app/src/pages/emails/(root)/_layouts/HeaderLayout.jsx
  - diamond-app/src/pages/emails/gallery-share-emails/(root)/_layouts/SearchGalleryShareEmailLayout.jsx, ToolbarLayout.jsx, galleryShareEmailsAtom.jsx
  - diamond-app/src/components/gallery-share-email/SearchGalleryShareEmail.jsx
  - diamond-server/src/helpers/gallery-share-email-helpers.js
  - diamond-app/public/locales/en/pages/root-emails.json, pages/gallery-share-emails.json, features/gallery-share-email.json

### 4. Check email activity
- File: guides/emails/activity.mdx
- sidebarTitle: Activity
- description: Check whether a gallery share email was delivered, then review its recorded activity and sent message.
- Reader goal: Tell whether an email reached its recipient or was opened, and inspect its timeline.
- H2 outline:
  - Read the status
  - Read email events
  - Review the sent preview
- UI strings (spelling reference, verbatim): column **Status**, badges **Waiting**, **Sent**, **Delayed**, **Undeliverable**, **Delivered**, **Opened**, **Clicked**, **Bounced**, **Complained**, **Blocked**, **No status**, detail **Gallery share email**, **Email events**, **No activity recorded yet.**, **Preview**, **To**, **Gallery**, **Subject**, **Created at**
- Limits to mention: none
- Writer notes: The status badge is on the email-history row. Opening a row shows recipient, gallery, subject, date, an **Email events** timeline with timestamps, and **Preview** of the stored message. Events come from delivery tracking; one email may show multiple events. The timeline can be empty. Keep the description to what the app displays; do not promise an open or click event for every recipient. The preview's **View gallery** button is disabled. The detail is read-only and offers no resend, edit, delete, or status-change action. A recipient who is suppressed or otherwise blocked may still produce an email record with **Blocked**; do not imply every record was sent by the provider.
- Cross-links: /guides/emails/overview, /guides/emails/find, /guides/emails/send
- Sources:
  - diamond-app/src/components/gallery-share-email/GalleryShareEmailInfiniteTable.jsx, GalleryShareEmailStatusBadge.jsx, GalleryShareEmailActivity.jsx, GalleryShareEmailPreview.jsx
  - diamond-app/src/pages/emails/gallery-share-emails/gallery-share-email/(root)/_layouts/EmailInfoLayout.jsx, EmailActivityLayout.jsx, EmailPreviewLayout.jsx
  - diamond-server/src/helpers/gallery-share-email-helpers.js
  - diamond-server/src/services/gallery-share-email-service.js
  - diamond-app/public/locales/en/features/gallery-share-email.json, pages/gallery-share-email.json

### 5. Create email templates
- File: guides/emails/create-templates.mdx
- sidebarTitle: Create templates
- description: Create a reusable email message, edit its title and body, and remove templates you no longer need.
- Reader goal: Build and maintain the template library in the workspace.
- H2 outline:
  - Create a template
  - Open and edit a template
  - Search and sort templates
  - Delete a template
- UI strings (spelling reference, verbatim): tab **Templates**, **New**, **Create template**, **Open**, **Delete**, editor **Edit template**, placeholders **Untitled template**, **Start typing your email...**, **Search template...**, **Email templates**, sort **Sorted by**, **Title**, **Last updated**, **Creation date**, **Ascending**, **Descending**, confirmation **Delete email template** / **Are you sure? This will delete this email template. This action cannot be undone.** / **Cancel** / **Delete**, footer **Saving** / **Auto-saved** / **Not saved**, empty **No templates found** / **No email templates found. Create a new template to get started.**
- Limits to mention: The editor shows a 3000-character text limit, with an estimate warning if formatting pushes stored HTML over 5000 characters.
- Writer notes: On **Emails** → **Templates**, **New** or the empty-state **Create template** creates a blank card and leaves the list open. Click a card, or its **Open** menu item from the ⋯ or right-click menu, to open **Edit template**. The title and body auto-save. The rich-text editor has the standard text toolbar; do not list every icon unless a reader needs it for this job. Search opens from the header icon with `/`. Do not mention that the shortcut is off while the editor is open. It runs with an empty box or at least 2 characters. **Create template** in an empty search opens the new editor, unlike header **New**. Sort defaults to **Creation date**, descending. There is no template filter or view toggle. Deletion is from the card menu and has a confirmation. The template has no project or contact fields and does not itself send an email. Linking a template to a compose message belongs to Use templates.
- Cross-links: /guides/emails/use-templates, /guides/emails/send
- Sources:
  - diamond-app/src/pages/emails/(root)/_layouts/HeaderLayout.jsx
  - diamond-app/src/pages/emails/email-templates/(root)/_layouts/EmailTemplatesLayout.jsx, SearchEmailTemplateLayout.jsx, ToolbarLayout.jsx, emailTemplatesAtom.jsx
  - diamond-app/src/pages/emails/email-templates/email-template/EmailTemplatePage.jsx
  - diamond-app/src/pages/emails/email-templates/email-template/_layouts/DetailsLayout.jsx, ContentLayout.jsx, FooterLayout.jsx
  - diamond-app/src/components/email-template/CreateEmailTemplate.jsx, EmailTemplateInfiniteGrid.jsx, EmailTemplateOptions.jsx, DeleteEmailTemplate.jsx, UpdateEmailTemplateTitle.jsx, UpdateEmailTemplateContent.jsx, SearchEmailTemplate.jsx
  - diamond-app/src/core/email-template/emailTemplateSchema.jsx
  - diamond-server/src/helpers/email-template-helpers.js
  - diamond-server/src/services/email-template-service.js
  - diamond-app/public/locales/en/pages/root-emails.json, pages/email-templates.json, pages/email-template.json, features/email-template.json, features/common.json

### 6. Use email templates
- File: guides/emails/use-templates.mdx
- sidebarTitle: Use templates
- description: Insert a saved message into an empty email or save a new message to reuse later.
- Reader goal: Reuse a prepared body while composing, or turn the current message into a template.
- H2 outline:
  - Insert a template
  - Save a message as a template
- UI strings (spelling reference, verbatim): **Email templates**, **Insert email template**, **Save as email template**, dialog **Save email template**, **Title**, **Untitled template**, **Content**, **Start typing your email...**, **Cancel**, **Save template**, toast **Email template saved successfully**
- Limits to mention: The template content editor shows a 3000-character text limit.
- Writer notes: Both controls appear inside the gallery share email compose form, whether the share is new or already exists. **Insert email template** is available only while the body is empty; selecting one fills the body but not the subject. **Save as email template** opens a dialog prefilled from the current subject and body, and both can be changed before **Save template**. Saving the template does not send the gallery share email. It shows a success toast. Link to Create templates for editing, sorting, and deleting the saved item; do not repeat those steps here.
- Cross-links: /guides/emails/send, /guides/emails/create-templates
- Sources:
  - diamond-app/src/components/gallery-share-email/CreateGalleryShareEmail.jsx, InsertEmailTemplate.jsx, SaveEmailAsTemplate.jsx
  - diamond-app/src/components/email-template/SelectEmailTemplate.jsx
  - diamond-app/src/core/email-template/emailTemplateSchema.jsx
  - diamond-app/public/locales/en/features/gallery-share-email.json, features/email-template.json

## Do not document
- Sending, resending, scheduling, editing, or deleting an email from the workspace history. The workspace header has only search on **Gallery shares**, and the detail is read-only (diamond-app/src/pages/emails/(root)/_layouts/HeaderLayout.jsx; diamond-app/src/pages/emails/gallery-share-emails/gallery-share-email/(root)/GalleryShareEmailPage.jsx).
- A global **Compose email** or **New** action on the workspace **Gallery shares** tab. Composition starts from a gallery or gallery share (diamond-app/src/pages/emails/(root)/_layouts/HeaderLayout.jsx; diamond-app/src/pages/projects/project/gallery-shares/gallery-share/gallery-share-emails/_layouts/ToolbarLayout.jsx).
- **Learn more** as a working action in either empty state; those buttons have no handler (diamond-app/src/components/gallery-share-email/GalleryShareEmailInfiniteTable.jsx; diamond-app/src/components/email-template/EmailTemplateInfiniteGrid.jsx).
- **View gallery** in the email preview as a clickable link; it has `pointer-events-none` (diamond-app/src/components/gallery-share-email/GalleryShareEmailPreview.jsx).
- A compose preview as proof that password and PIN are sent. The preview can show stored values when their switches are off, while the server sends them only when enabled (diamond-app/src/components/gallery-share-email/GalleryShareEmailPreview.jsx; diamond-server/src/helpers/gallery-share-helpers.js).
- **Insert email template** after the email body has text. The control renders only for an empty rich-text body (diamond-app/src/components/gallery-share-email/InsertEmailTemplate.jsx).
- A template filter, grid/list switch, duplication, or template variables. The template toolbar contains sorting only, and its card menu contains **Open** and **Delete** (diamond-app/src/pages/emails/email-templates/(root)/_layouts/ToolbarLayout.jsx; diamond-app/src/components/email-template/EmailTemplateOptions.jsx).
- Search, filter, or sort on an individual gallery share's or contact's **Emails** tab. Those controls belong to the workspace list (diamond-app/src/pages/projects/project/gallery-shares/gallery-share/gallery-share-emails/GalleryShareEmailsPage.jsx; diamond-app/src/pages/contacts/contact/emails/_layouts/EmailsLayout.jsx).
- A plan requirement for email sending. The send path does not enforce the plan's `emails` flag (diamond-server/src/services/gallery-share-email-service.js; diamond-server/src/middlewares/quota/plan-feature.js).
- Subject/title length and character rules as separate guidance. They are field validation; retain the editor's visible body count and the 50 emails per gallery share. Do not mention the 50-template workspace cap (diamond-app/src/core/gallery-share-email/galleryShareEmailSchema.jsx; diamond-app/src/core/email-template/emailTemplateSchema.jsx).
- Success toasts after sending or inserting a template. Both paths leave success toasts off; saving a template does show one (diamond-app/src/components/gallery-share-email/CreateGalleryShareEmail.jsx, InsertEmailTemplate.jsx, SaveEmailAsTemplate.jsx).
- The client's gallery interface, contact management, or project activity feed as Emails workflows. Those belong to Gallery shares, Contacts, and Projects (diamond-site/src/core/app/appRouter.jsx; diamond-app/src/pages/contacts/contact/emails/_layouts/EmailsLayout.jsx; diamond-app/src/core/app/appRouter.jsx).

## Open questions
- none

## Screenshots to capture

Capture a light and dark version of each screen. The dark filename adds `-dark` before `.png`.

- `/assets/images/guides/emails/overview-page-1.png`: Emails page with **Gallery shares** selected and email history visible.
- `/assets/images/guides/emails/overview-open-1.png`: Email history with a **Gallery share email** detail panel open.
- `/assets/images/guides/emails/send-new-1.png`: Gallery toolbar menu with **Compose email** highlighted.
- `/assets/images/guides/emails/send-new-2.png`: **Share gallery** sheet on **Email**, showing recipient, subject, and message fields.
- `/assets/images/guides/emails/send-new-3.png`: **Share gallery** sheet on **Overview** with **Send email** highlighted.
- `/assets/images/guides/emails/send-existing-1.png`: Existing share's **Emails** tab with **Compose email** highlighted.
- `/assets/images/guides/emails/send-existing-2.png`: **Compose gallery share email** dialog with **Send email** highlighted.
- `/assets/images/guides/emails/find-search-1.png`: Workspace **Gallery shares** tab with the search icon highlighted.
- `/assets/images/guides/emails/find-search-2.png`: Email search results showing subject, recipient, and gallery.
- `/assets/images/guides/emails/find-filter-1.png`: Email history toolbar with **Filter** highlighted.
- `/assets/images/guides/emails/find-sort-1.png`: Email history sort menu showing field and order choices.
- `/assets/images/guides/emails/activity-status-1.png`: Email history row with its status badge highlighted.
- `/assets/images/guides/emails/activity-events-1.png`: Email detail showing the **Email events** timeline.
- `/assets/images/guides/emails/activity-preview-1.png`: Email detail showing the **Preview** section.
- `/assets/images/guides/emails/create-templates-create-1.png`: **Templates** tab with **New** highlighted.
- `/assets/images/guides/emails/create-templates-edit-1.png`: **Edit template** with title, message editor, and save status.
- `/assets/images/guides/emails/create-templates-search-1.png`: **Templates** header with the search icon highlighted.
- `/assets/images/guides/emails/create-templates-sort-1.png`: Template sort menu showing field and order choices.
- `/assets/images/guides/emails/create-templates-delete-1.png`: **Delete email template** confirmation with **Delete** highlighted.
- `/assets/images/guides/emails/use-templates-insert-1.png`: Email composer with **Insert email template** highlighted.
- `/assets/images/guides/emails/use-templates-insert-2.png`: Template picker showing saved messages.
- `/assets/images/guides/emails/use-templates-save-1.png`: Email composer with **Save as email template** highlighted.
- `/assets/images/guides/emails/use-templates-save-2.png`: **Save email template** dialog with prefilled title and content.
