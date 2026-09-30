# Gallery shares: Guides article map

Group: Gallery shares
Slug: guides/gallery-shares/
Sources reviewed: 2026-09-27, diamond-app 702f16c5, diamond-server 00f52a2, diamond-site 8c28446

A gallery share is the link a client opens. Create it from an open gallery with **Share gallery** → **Create link**. Creating a share can also start from **Compose email** on the gallery; that workflow belongs to the future Emails section, and this group does not document it. Shares are listed on the project tab **Gallery shares** (`GallerySharesPage`): open, rename, copy the link, delete. The individual gallery share page (`GallerySharePage`) is in this group, split by job. Settings on that page are Security (password, expiry), Favorites (allow, cap), Downloads (PIN, gallery and photo limits), and Reviews (questions). Activity on that share stays on those same articles: the **Favorites** tab (the list for that share, copy into a media folder), the **Gallery downloads** and **Photo downloads** tabs (what was downloaded), and the **Reviews** tab (submissions). Do not fold those into one Activity article. There is no Activity tab. The gallery itself (folders, design, cover) stays in Galleries. Photos stay in Media folders.

## Articles (sidebar order)

### 1. Gallery shares
- File: guides/gallery-shares/overview.mdx
- sidebarTitle: Overview
- description: Send a client a link to one gallery, then rename, copy, or delete that link.
- Reader goal: Send a gallery to a client and find that share again on the project.
- H2 outline:
  - Where gallery shares live
  - Create a gallery share
  - Open a gallery share
  - Rename a gallery share
  - Share the link
  - Delete a gallery share
  - Inside a gallery share
- UI strings (spelling reference, verbatim): **Gallery shares**, **Share gallery**, **Create link**, **Compose email**, sheet **Share gallery**, steps **Security**, **Favorites**, **Download**, **Review**, **Overview**, **Back**, **Next**, **Create link**, discard **Discard gallery share?** / **Your progress will be lost if you close now.** / **Discard** / **Keep editing**, empty **No gallery shares yet** / **No gallery shares yet. Share a gallery to get started.**, columns **Name**, **Gallery share link**, **Visibility**, **Access type**, **Expiration date**, **Visits**, **Favorites**, **Gallery downloads**, **Photo downloads**, **Created at**, access **Password** / **Public**, row menu **Open**, **Open live**, **Rename**, **Delete**, sheet **Gallery share**, tabs **Info**, **Favorites**, **Gallery downloads**, **Photo downloads**, **Reviews**, rename heading **Options**, placeholder **Enter new gallery share name**, **Rename gallery share to "{{input}}"**, **Cancel**, copy toast **Gallery share link copied to clipboard**, **Visibility**, dialog **Publish gallery share online?** / **This gallery share is not online yet, so visitors cannot access it. Do you want to publish it online and open the live gallery share?** / **Publish and open**, delete **Delete gallery share** / **Are you sure? The gallery share link will no longer be accessible and all associated data will be deleted. This action cannot be undone.**, toast **Gallery share deleted successfully**, hover **The gallery linked to this share has been deleted**, load error **Back to gallery shares**
- Limits to mention: 50 gallery shares per project: "Gallery share limit reached. You can create up to {{max}} gallery shares per project." The cap is fixed, not per plan. Monthly gallery views follow the plan. The share screen does not show the number. When the workspace reaches it, the client sees **Gallery unavailable** / "This gallery isn't available right now. Please contact {{workspaceName}}." The photographer email subject is "You've reached your gallery view limit". The body says galleries are temporarily unavailable until the limit resets on the first day of next month. Do not list plan numbers.
- Writer notes: There is no workspace-sidebar Gallery shares item. The project header tab **Gallery shares** shows a count and opens `/projects/:projectId/gallery-shares` (`GallerySharesPage`) inside the project overlay. That list stays in this article: open, rename, copy the link, delete. It is a table, newest first. It has no search, filter, sort control, view toggle, or **New**. Count columns (**Visits**, **Favorites**, **Gallery downloads**, **Photo downloads**) are this list; the activity tables are the later articles. Create from an open gallery: toolbar **Share gallery** (the label hides on a narrow screen) then **Create link**. The sheet is titled **Share gallery**. **Create link** walks **Security**, **Favorites**, **Download**, **Review**, and **Overview**, then **Create link**. Name those steps and link the later articles; do not explain each switch here. Creating a share can also start from **Compose email** on the gallery; that workflow belongs to the future Emails section. That is the only email sentence in this article. Do not document compose, resend, delivery, the workspace **Emails** → **Gallery shares** list, or templates. The share sheet also has an **Emails** tab; do not document it. Closing a dirty **Create link** sheet asks **Discard gallery share?**. Success returns to the Gallery shares list. There is no success toast. The share name is copied from the gallery. A new share starts online. Click the row, the hover **⋯**, or right-click. **Open** opens the gallery share page (`GallerySharePage`), a sheet titled **Gallery share**, not the share name, on **Info**. **Rename** is a command dialog headed **Options**. No success toast. **Gallery share link** on the table and on the Info card copies the URL. **Visibility** is a switch on the table and on that card; it saves with no success toast. **Open live** opens the client gallery in a new tab. If the share is off, **Publish gallery share online?** offers **Publish and open**. Failure toasts **Failed to update visibility**. Delete toasts **Gallery share deleted successfully**. A share whose gallery was deleted stays in the list with the hover **The gallery linked to this share has been deleted**. **Access type** is **Password** or **Public** and belongs to Security. **Back to gallery shares** is the load-error action. Inside the share page, name Security, Favorites, Downloads, and Reviews and link them. Settings and activity for each job stay in that article. Do not invent an Activity tab. Do not document gallery design, folders, or the cover.
- Cross-links: /guides/gallery-shares/security, /guides/gallery-shares/favorites, /guides/gallery-shares/downloads, /guides/gallery-shares/reviews; future Emails section (**Compose email** on the gallery); Galleries (the gallery you share; deleting a gallery invalidates its shares); Media folders; Projects; Billing or Plans when that section exists (monthly gallery views)
- Sources:
  - diamond-app/src/pages/projects/project/(root)/_layouts/HeaderLayout.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/(root)/GallerySharesPage.jsx, gallery-shares/(root)/_layouts/GallerySharesLayout.jsx, GalleryShareLayout.jsx
  - diamond-app/src/pages/projects/project/project-content/gallery/_layouts/ToolbarLayout.jsx, ShareGalleryLinkLayout.jsx, ShareGalleryEmailLayout.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/(root)/GallerySharePage.jsx, gallery-share/(root)/_layouts/HeaderLayout.jsx
  - diamond-app/src/components/gallery-share/GalleryShareInfiniteTable.jsx, GalleryShareOptions.jsx, CreateGalleryShare.jsx, UpdateGalleryShareName.jsx, DeleteGalleryShare.jsx, CopyGalleryShareLink.jsx, UpdateGalleryShareIsOnline.jsx, OpenLiveGalleryShare.jsx
  - diamond-app/src/core/project/projectSchema.jsx (`MAX_GALLERY_SHARES: 50`)
  - diamond-app/src/core/gallery-share/galleryShareSchema.jsx (`createGalleryShareInitials`)
  - diamond-server/src/services/gallery-share-service.js (name copied from the gallery)
  - diamond-server/src/models/gallery-share-model.js (`isOnline` default true)
  - diamond-server/src/helpers/gallery-share-helpers.js (`buildGalleryShareListSort`, `createdAt` descending)
  - diamond-server/src/helpers/project-helpers.js (`assertGalleryShareLimit`)
  - diamond-server/src/i18n/locales/en/emails.js (gallery view limit email)
  - diamond-site/src/core/app/appRouter.jsx (`/g/:galleryShareId`)
  - diamond-site/public/locales/en/layouts/gallery.json
  - diamond-app/public/locales/en/pages/project.json, pages/gallery.json, pages/gallery-shares.json, pages/gallery-share.json, features/gallery-share.json
  - diamond-app/src/constants/links.js (`/projects/:projectId/gallery-shares`)
  - diamond-app/src/layouts/app/components/AppNavigation.jsx

### 2. Set a password and expiry
- File: guides/gallery-shares/security.mdx
- sidebarTitle: Security
- description: Require a password, set an expiration date, or leave the gallery open.
- Reader goal: Decide who can open the link, and until when.
- H2 outline:
  - Require a password
  - Set an expiration date
  - What the client sees
- UI strings (spelling reference, verbatim): step **Security**, card **Security settings**, "Control who can view the gallery and for how long.", **Password protected**, **Password**, placeholder **Enter password**, **Generate**, wizard switch **Expiration date**, Info switch **Expires**, field **Expiration date**, placeholder **Select an expiration date**, overview **On** / **Off**, list **Access type** **Password** / **Public**
- Limits to mention: none
- Writer notes: These settings are in scope on the **Security** step of **Create link** and on the gallery share page Info card **Security settings** (password, expiry). Do not document them inside **Compose email**. A new share has both switches off. **Generate** fills 8 characters. A password is still stored when **Password protected** is off; the client is not asked for it until the switch is on. Do not mention a minimum of 8. `MIN_PASSWORD` in `rules.js` is not applied here. The password field hides while the switch is off. On Info, the expiry switch is **Expires**, then the field **Expiration date**. In the wizard the switch itself is labeled **Expiration date**. The date field hides while the switch is off. There is no maximum window. Changes on Info save immediately. No success toast. **Access type** on the list becomes **Password** or **Public**. One sentence on what the client sees: a password gate, or **Gallery no longer available** once the date has passed. **Visibility** is the Overview article, not this one. The download PIN is the Downloads article.
- Cross-links: /guides/gallery-shares/overview, /guides/gallery-shares/downloads
- Sources:
  - diamond-app/src/components/gallery-share/CreateGalleryShare.jsx
  - diamond-app/src/components/gallery-share/UpdateGalleryShareHasPassword.jsx, UpdateGallerySharePassword.jsx, UpdateGalleryShareHasExpireDate.jsx, UpdateGalleryShareExpireDate.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/info/_layouts/SecuritySettingsLayout.jsx
  - diamond-app/src/core/gallery-share/galleryShareSchema.jsx (`hasPassword: false`, `hasExpireDate: false`, `generatePassword(8)`)
  - diamond-server/src/helpers/gallery-share-helpers.js (`getPassword` returns null unless `hasPassword`)
  - diamond-site/public/locales/en/layouts/gallery.json, features/gallery-share.json
  - diamond-app/public/locales/en/features/gallery-share.json (`create_gallery_share.security_fields`, `update_gallery_share_has_expire_date`)
  - diamond-app/public/locales/en/pages/gallery-share-settings.json

### 3. Collect favorites
- File: guides/gallery-shares/favorites.mdx
- sidebarTitle: Favorites
- description: Let clients mark favorite photos, cap how many, then copy their picks into a media folder.
- Reader goal: Collect the photos a client likes and bring them into the project.
- H2 outline:
  - Allow favorites
  - Set a favorites limit
  - Review favorite photos
  - Copy favorites to a folder
- UI strings (spelling reference, verbatim): step **Favorites**, card **Favorites settings**, "Let visitors mark their favorite photos in the gallery.", **Allow photo favorites**, **Photo favorites limit**, Info field **Favorites limit**, tab **Favorites**, toolbar **Favorite photos**, **Copy to folder**, **Copy filenames**, columns **Comment**, **Favorited at**, **Photo**, **Photo name**, row **Copy filename**, **Download**, **Quick view**, **Delete**, **Click to zoom**, dialog **Copy to folder** / **Name** / **Enter folder name**, **Copy filenames** tabs **Lightroom**, **Capture One**, **Mac & Windows**, toast **Filenames copied successfully**, partial **Copied {{count}} of {{expected}} photos**, **Download favorite photo**, **Choose photo file**, **Original photo file**, **Web optimized photo file**, **Download photo**, delete "Are you sure? This will remove this photo from favorites. This action cannot be undone.", toast **Favorite photo deleted successfully**, empty **No favorite photos yet** / **When gallery viewers favorite photos, they will appear here.**
- Limits to mention: a limit the photographer turns on is 1 to 500: "Photo favorites limit cannot exceed {{max}}". With **Photo favorites limit** off, a client can still favorite up to 500. A new share allows favorites, leaves the limit switch off, and stores 25, which is not enforced until the switch is on.
- Writer notes: Settings are in scope on the **Favorites** step of **Create link** and on the gallery share page Info card **Favorites settings** (allow, cap). Do not document those switches inside **Compose email**. The number field hides until **Photo favorites limit** is on. Info labels that field **Favorites limit**. No success toast when the settings change. Activity for this share is the **Favorites** tab: the favorites list for that share. This is the primary activity article. Gallery downloads and photo downloads stay in Downloads. Do not fold them into this article. There is no Activity tab. **Copy to folder** asks for a **Name** and creates a media folder in this project; creating and opening folders belongs to Media folders. A complete copy does not toast. A partial copy toasts **Copied {{count}} of {{expected}} photos**. **Copy filenames** is for Lightroom, Capture One, or a file manager. Download one favorite from the row; there is no success toast. **Web optimized photo file** and **Original photo file** are the choices. Delete removes it from this share's favorites and toasts. The **Comment** column is what the client wrote. Do not document the client's **Share favorites** screen. Empty state has no button.
- Cross-links: /guides/gallery-shares/overview, /guides/gallery-shares/downloads; Media folders (the folder **Copy to folder** creates)
- Sources:
  - diamond-app/src/components/gallery-share/UpdateGalleryShareAllowFavorites.jsx, UpdateGalleryShareHasFavoritesLimit.jsx, UpdateGalleryShareFavoritesLimit.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/info/_layouts/FavoritesSettingsLayout.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/favorite-photos/GalleryShareFavoritePhotosPage.jsx
  - diamond-app/src/core/gallery-share/galleryShareSchema.jsx (`allowFavorites: true`, `hasFavoritesLimit: false`, `favoritesLimit: 25`, `MAX_FAVORITES_LIMIT: 500`)
  - diamond-server/src/helpers/gallery-share-helpers.js (`assertFavoriteLimit` uses 500 when the switch is off)
  - diamond-app/public/locales/en/features/gallery-share.json, features/favorite-photo.json, pages/favorite-photos.json
  - diamond-site/public/locales/en/features/photo.json (`favorite_limit`)

### 4. Allow downloads
- File: guides/gallery-shares/downloads.mdx
- sidebarTitle: Downloads
- description: Choose what your clients can download, lock downloads with a PIN, and see what they took.
- Reader goal: Control downloads and check what a client took.
- H2 outline:
  - Require a download PIN
  - Allow a gallery download
  - Allow photo downloads
  - See download activity
- UI strings (spelling reference, verbatim): step **Download**, "Choose how visitors can download the gallery and photos.", **PIN protected**, Info card **Download PIN settings**, field **PIN**, **Allow gallery download**, **Gallery download limit**, **Gallery download files**, **Original file**, **Web optimized file**, card **Gallery download settings**, **Allow photo download**, **Photo download limit**, **Photo download files**, card **Photo download settings**, tab **Gallery downloads**, empty **No gallery downloads yet** / **When gallery viewers download galleries, those downloads will appear here.**, status **Failed**, **Partial**, **Pending**, **Success**, **No status**, tab **Photo downloads**, empty **No photo downloads yet** / **When gallery viewers download photos, those downloads will appear here.**, bandwidth toast "You've used this month's download bandwidth. Upgrade your plan or wait until next month."
- Limits to mention: gallery download limit 1 to 50: "Gallery download limit cannot exceed {{max}}". A new share allows gallery download with the limit on at 5. With **Gallery download limit** off, a client still stops at 50. Photo download limit 1 to 500: "Photo download limit cannot exceed {{max}}". A new share allows photo download with the limit off and stores 50, which is not enforced until the switch is on. With that switch off, a client still stops at 500. The PIN field is 4 digits. Bandwidth follows the plan; the message does not name a number. Do not list plan gigabytes.
- Writer notes: Settings are in scope on the **Download** step of **Create link** and on the gallery share page: **Download PIN settings** (PIN), **Gallery download settings** (gallery limit and file types), and **Photo download settings** (photo limit and file types). Do not document those controls inside **Compose email**. **PIN protected** is off on a new share. A 4-digit PIN is still stored; the client is not asked for it until the switch is on. Both download switches start on. Both file lists start with **Original file** and **Web optimized file** checked. The client can download only a type that stays checked. Do not say one box must stay checked. Limit fields hide until their switches are on. Settings save with no success toast. Activity on that share is the **Gallery downloads** and **Photo downloads** tabs: read what was downloaded. They are read-only tables with a title and no row menu. Favorites stay in the Favorites article. Do not fold favorites, gallery downloads, and photo downloads into one Activity article. There is no Activity tab. Gallery download status uses **Failed**, **Partial**, **Pending**, **Success**, and **No status**. The photo download type cell shows the stored value `original` or `web`, not **Original file**. Say "original or web-optimized" in prose rather than inventing a badge label. A gallery download is prepared for the client and can sit at **Pending**. The 100 GB gallery storage dialog belongs to Galleries. One sentence on the client: they enter the PIN in **Unlock downloads** before a download, and a watermarked photo cannot be downloaded. Do not write the client's download-page states.
- Cross-links: /guides/gallery-shares/overview, /guides/gallery-shares/security, /guides/gallery-shares/favorites; Galleries (gallery storage); Watermarks when that section exists; Billing or Plans when that section exists (bandwidth)
- Sources:
  - diamond-app/src/components/gallery-share/UpdateGalleryShareHasPin.jsx, UpdateGallerySharePin.jsx, UpdateGalleryShareAllowGalleryDownload.jsx, UpdateGalleryShareHasGalleryDownloadLimit.jsx, UpdateGalleryShareGalleryDownloadLimit.jsx, UpdateGalleryShareGalleryDownloadTypes.jsx, UpdateGalleryShareAllowPhotoDownload.jsx, UpdateGalleryShareHasPhotoDownloadLimit.jsx, UpdateGallerySharePhotoDownloadLimit.jsx, UpdateGallerySharePhotoDownloadTypes.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/info/GalleryShareSettingsPage.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/gallery-downloads/GalleryShareDownloadsPage.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/photo-downloads/GallerySharePhotoDownloadsPage.jsx
  - diamond-app/src/components/photo-download/PhotoDownloadInfiniteTable.jsx (`downloadType` rendered raw)
  - diamond-app/src/core/gallery-share/galleryShareSchema.jsx (PIN 4, gallery limit default 5 and max 50, photo limit default 50 and max 500)
  - diamond-server/src/helpers/gallery-share-helpers.js (`assertGalleryDownloadLimit`, `assertPhotoDownloadLimit`, `getDownloadPin`)
  - diamond-server/src/models/gallery-share-model.js
  - diamond-app/public/locales/en/features/gallery-share.json, features/gallery-download.json, features/photo.json
  - diamond-site/public/locales/en/pages/gallery.json, features/gallery-download.json

### 5. Collect reviews
- File: guides/gallery-shares/reviews.mdx
- sidebarTitle: Reviews
- description: Let clients leave a review, choose which questions they see, and read what they submit.
- Reader goal: Turn reviews on and read them.
- H2 outline:
  - Allow reviews
  - Choose the questions
  - Read a review
- UI strings (spelling reference, verbatim): step **Review**, card **Review settings**, "Let visitors leave a review. Choose which fields to include.", **Allow reviews**, **Review fields**, **Overall experience**, **Communication**, **Photo session**, **Price/quality**, **Photo quality**, **Title**, **Message**, **Recommendation**, tab **Reviews**, columns **Contact**, **Gallery**, **Rating**, **Status**, **Submitted at**, status **Waiting**, **Approved**, **Declined**, **No status**, empty **No reviews yet** / **When gallery viewers submit reviews, those reviews will appear here.**
- Limits to mention: none
- Writer notes: Settings are in scope on the **Review** step of **Create link** and on the gallery share page Info card **Review settings** (the questions). Do not document those switches inside **Compose email**. A new share has **Allow reviews** on and all eight questions on. The question checkboxes hide until reviews are allowed. On Info they are grouped as **Review fields**. Changes save with no success toast. Use the photographer's question labels. The client's form words some of them differently (**Photoshoot**, **Price / quality**, **Final photo quality**, **In a few words**, **Your experience**) and also asks for name, email, and consent. Those are not settings. Activity on that share is the **Reviews** tab: submissions. It is a read-only table. Status is a badge only. There is no approve or decline action. Empty state has no button. Do not fold this tab into an Activity article. There is no Activity tab.
- Cross-links: /guides/gallery-shares/overview
- Sources:
  - diamond-app/src/components/gallery-share/UpdateGalleryShareAllowReviews.jsx, UpdateGalleryShareReviewFields.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/info/_layouts/ReviewSettingsLayout.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/reviews/GalleryShareReviewsPage.jsx, reviews/_layouts/ReviewsLayout.jsx
  - diamond-app/src/components/review/ReviewStatusBadge.jsx
  - diamond-app/src/core/gallery-share/galleryShareSchema.jsx (all eight review flags default true)
  - diamond-app/public/locales/en/features/gallery-share.json (`review_fields`), features/review.json
  - diamond-app/public/locales/en/pages/gallery-share.json, pages/gallery-share-settings.json

## Do not document
- **Learn more** on the empty gallery shares list: the button has no click handler (diamond-app/src/components/gallery-share/GalleryShareInfiniteTable.jsx)
- A workspace-sidebar entry that opens the project shares table: workspace nav is Notifications, Tasks, Notes, Emails, Projects, and Contacts. **Emails** opens the sent-email list (diamond-app/src/layouts/app/components/AppNavigation.jsx)
- **New**, search, filter, sort, or reorder on the project Gallery shares tab: the page is the table only, newest first (diamond-app/src/pages/projects/project/gallery-shares/(root)/_layouts/GallerySharesLayout.jsx, diamond-server/src/helpers/gallery-share-helpers.js `buildGalleryShareListSort`)
- A name field while creating a share: the name is copied from the gallery (diamond-server/src/services/gallery-share-service.js). Rename is after it exists
- Success toasts for create link, rename, visibility, and every Info-tab setting: `showSuccessMsg` stays off. Delete toasts **Gallery share deleted successfully**. Copy link toasts. A partial copy-to-folder toasts. A complete copy-to-folder does not
- **Back to gallery shares** as a normal control: it is the load-error action
- A keyboard shortcut for the shares list: the project Gallery shares table has none
- An enable/disable control besides **Visibility**: `isEnabled` defaults to true and has no photographer control (diamond-server/src/models/gallery-share-model.js)
- Approving or declining a review: **Reviews** is a read-only table. **Approved**, **Declined**, and **Waiting** are badges only (diamond-app/src/components/review/ReviewStatusBadge.jsx)
- A maximum of 10 reviews: `MAX_REVIEWS` is 10 and the server throws `Review limit exceeded`, and the app never shows that number (diamond-app/src/core/gallery-share/galleryShareSchema.jsx, diamond-server/src/helpers/gallery-share-helpers.js)
- Plan tables for gallery views or bandwidth: the gallery view limit email and the bandwidth toast do not name a number (diamond-server/src/scripts/config/plans.js, diamond-server/src/i18n/locales/en/emails.js)
- Name and password length, characters, or language checks: field validation. App caps are name 64 and password 64 (diamond-app/src/constants/rules.js, diamond-app/src/core/gallery-share/galleryShareSchema.jsx)
- A minimum password of 8: `MIN_PASSWORD` is not applied to gallery share passwords. **Generate** happens to use 8 characters (diamond-app/src/constants/rules.js, diamond-app/src/core/gallery-share/galleryShareSchema.jsx)
- "Unlimited" favorites or downloads when the limit switch is off: the server still stops favorites at 500, gallery downloads at 50, and photo downloads at 500 (diamond-server/src/helpers/gallery-share-helpers.js)
- The stored password or PIN as something the client must enter while the switch is off: `getPassword` and `getDownloadPin` return null until the switch is on
- Gallery design, media folders on the gallery, and the cover: owned by Galleries (diamond-app/src/pages/projects/project/project-content/gallery/_layouts/ToolbarLayout.jsx)
- **View preview**: that is the gallery preview, not the share link (Galleries map)
- Uploading, sorting, or downloading the photographer's own folder photos: owned by Media folders. Downloading one favorite from the share is this group
- Project tasks, notes, and the activity feed: other project tabs. The header **New task** is on every project tab, including Gallery shares
- An Activity tab that combines favorites, gallery downloads, and photo downloads: those are separate tabs on the gallery share page, documented on Favorites, Downloads, and Reviews
- Duplicate, archive, or a status on a gallery share: the row menu is **Open**, **Open live**, **Rename**, and **Delete** (diamond-app/src/components/gallery-share/GalleryShareOptions.jsx)
- List filters for online, password, or expiry: `buildGalleryShareListQuery` can match them, and the app list does not send them (diamond-server/src/helpers/gallery-share-helpers.js, diamond-server/src/api/app/gallery-share/gallery-share-validations.js `checkList`)
- Seeded workspace filter fields for shares: entity seeding covers contacts, projects, tasks, and notes (diamond-server/src/helpers/entity-helpers.js)
- Zip part sizes, a 10-zip cap, download attempts, or a 3-day download-link expiry as photographer instructions: no app sentence states them. The 100 GB dialog is Galleries
- A rule that at least one of **Original file** or **Web optimized file** must stay checked: no such message
- Photo download history labels **Original file** and **Web optimized file**: the cell shows `original` or `web` (diamond-app/src/components/photo-download/PhotoDownloadInfiniteTable.jsx)
- The client's cover, theme, slideshow, or gallery navigation: the client opens a gallery share; those screens belong to the gallery design, not this task
- Client review fields **Name**, **Email**, and the consent line as settings the photographer turns on

## Future Emails section

Not a Gallery shares article. Do not add `guides/gallery-shares/emails.mdx`. Do not document this scope in Overview, Security, Favorites, Downloads, or Reviews. A later Guides section owns compose, resend, delivery, the workspace **Emails** → **Gallery shares** list, and templates. Gallery shares Overview keeps one cross-link: creating a share can also start from **Compose email** on the gallery.

Carry these findings into that section. They are listed so writers do not guess them into Gallery shares.

- **Share gallery** → **Compose email** adds an **Email** step before **Security**, **Favorites**, **Download**, **Review**, and **Overview**, then **Send email**. That creates the share and sends the message. No success toast. From a share that already exists, the **Emails** tab → **Compose email** opens **Compose gallery share email** with **Cancel** and **Send email**. No success toast. The share's **Emails** tab has no search, filter, or sort.
- The message that is sent includes the password only when **Password protected** is on, and the PIN only when **PIN protected** is on. The preview on an existing share can still show a stored password or PIN when those switches are off. Describe what is sent, not that preview. **View gallery** in the preview cannot be clicked.
- **Insert email template** shows only while the body is empty. **Save as email template** toasts success. The template library, the **Templates** tab, and **New** stay a future Templates section, not Gallery shares and not this group's articles.
- Status on the row is the delivery state. Opening a row shows **Email events** or **No activity recorded yet.** Every sent gallery share email is also under workspace **Emails**, which opens on the **Gallery shares** tab at `/emails/gallery-shares`. `/` opens search unless an email is already open. Search runs when the box is empty or has at least 2 characters. Default sort is **Sent date**, descending.
- A contact's **Emails** tab is the same messages for that contact, with no compose. Say it exists and link Contacts when that section is written. Project **Activity** can mention a sent email; do not document that feed.
- **Learn more** on the empty email list has no handler. **Compose email** on that empty state does. **Email sending paused** is a blocking dialog, not a plan limit. Do not say a plan is required to send email.
- Limits: 50 emails per share: "You have reached the maximum number of emails for this gallery share. The maximum is {{max}} emails." The cap is fixed, not per plan. Saving a template can hit "You have reached the maximum number of email templates. The maximum is {{max}} email templates." Typing a new address in **To** can hit "You have reached the maximum number of contacts. The maximum is {{max}} contacts."
- UI strings (spelling reference, verbatim): **Compose email**, step **Email**, **To**, **Type a name or email...**, **Subject**, **Enter email subject**, **Start typing your email...**, **Email templates**, **Insert email template**, **Save as email template**, **Send email**, dialog **Compose gallery share email**, **Cancel**, **Send email**, preview **View gallery**, **Use the following password to view the gallery:**, **Use the following PIN to download the photos:**, tab **Emails**, toolbar **Email history**, columns **Created at**, **Gallery**, **Recipient**, **Status**, **Subject**, status **Waiting**, **Sent**, **Delayed**, **Undeliverable**, **Delivered**, **Opened**, **Clicked**, **Bounced**, **Complained**, **Blocked**, **No status**, dialog **Gallery share email**, **Email events**, **No activity recorded yet.**, **Preview**, empty on the share **No emails found** / **No emails sent yet. Compose an email to share this gallery.** / **Compose email**, workspace **Emails**, tab **Gallery shares**, **Search gallery share emails**, **Search by recipient, subject, or gallery...**, **Filter**, **Clear filters**, **Status**, **Sent date**, **This week**, **This month**, **This quarter**, **This year**, **Sorted by**, **Sent date**, **Last updated**, **Ascending**, **Descending**, empty **No gallery share emails yet** / **Gallery share emails you send will appear here.**, save dialog **Save email template**, **Title**, **Untitled template**, **Content**, **Save template**, toast **Email template saved successfully**, paused **Email sending paused** / **Email sending for this workspace has been paused after repeated spam complaints. Contact support to restore access.** / **OK**, invalid share **This gallery share is no longer valid. The gallery was deleted.**
- Cross-links when that section is written: Gallery shares Overview, Security (password in the sent message), Downloads (PIN in the sent message); Contacts (a new contact from **To**, and the contact **Emails** tab); Templates when that section exists (the template library); Activity when that section exists
- Sources:
  - diamond-app/src/pages/projects/project/project-content/gallery/_layouts/ShareGalleryEmailLayout.jsx
  - diamond-app/src/components/gallery-share/CreateEmailGalleryShare.jsx
  - diamond-app/src/components/gallery-share-email/CreateGalleryShareEmail.jsx, GalleryShareEmailPreview.jsx, InsertEmailTemplate.jsx, SaveEmailAsTemplate.jsx, GalleryShareEmailInfiniteTable.jsx, GalleryShareEmailStatusBadge.jsx, SearchGalleryShareEmail.jsx
  - diamond-app/src/pages/projects/project/gallery-shares/gallery-share/gallery-share-emails/GalleryShareEmailsPage.jsx, gallery-share-emails/_layouts/ToolbarLayout.jsx, CreateGalleryShareEmailLayout.jsx, GalleryShareEmailLayout.jsx
  - diamond-app/src/pages/emails/gallery-share-emails/(root)/GalleryShareEmailsPage.jsx, _layouts/ToolbarLayout.jsx, SearchGalleryShareEmailLayout.jsx
  - diamond-app/src/pages/emails/gallery-share-emails/(root)/galleryShareEmailsAtom.jsx (default `createdAt` descending)
  - diamond-app/src/layouts/app/components/AppNavigation.jsx
  - diamond-app/src/core/gallery-share/galleryShareSchema.jsx (`MAX_EMAILS: 50`)
  - diamond-server/src/helpers/gallery-share-helpers.js (`getPassword`, `getDownloadPin`, `assertEmailLimit`)
  - diamond-server/src/services/gallery-share-email-service.js
  - diamond-server/src/middlewares/quota/plan-feature.js (`validateFeature` is never mounted)
  - diamond-server/src/scripts/config/plans.js (`emails` flag is not enforced on send)
  - diamond-app/public/locales/en/features/gallery-share-email.json, features/gallery-share.json, pages/gallery-share-emails.json, pages/root-emails.json, layouts/dialogs.json
  - diamond-app/src/constants/links.js (`/emails/gallery-shares`)

Do not document (owned by the future Emails section, not by Gallery shares):
- **Learn more** on the empty emails list: the button has no click handler (diamond-app/src/components/gallery-share-email/GalleryShareEmailInfiniteTable.jsx)
- Success toasts for compose: `showSuccessMsg` stays off. Save template toasts **Email template saved successfully**
- **Back to emails** as a normal control: it is a load-error action
- `/` as a shortcut on the project shares list: `/` searches gallery share emails on the workspace Emails page
- A plan requirement to send email: Trial has `emails: false` in diamond-server/src/scripts/config/plans.js, and `validateFeature` is never mounted (diamond-server/src/middlewares/quota/plan-feature.js)
- Subject and body length, characters, or language checks: field validation. App caps are subject 48, HTML body 5000, editor plain text 3000 (diamond-app/src/core/gallery-share-email/galleryShareEmailSchema.jsx)
- **View gallery** in the email preview as a working link: the button has `pointer-events-none` (diamond-app/src/components/gallery-share-email/GalleryShareEmailPreview.jsx)
- The compose preview as proof of what the client receives: that preview shows a stored password and PIN even when the switches are off. The sent email does not
- **Insert email template** after the body has text: the control renders only while the body is empty
- The email template library, the **Templates** tab, and **New**: insert and save-from-compose belong to the future Emails section. The library is a future Templates section
- Per-minute create limits (20 email creates, 30 searches) as a number the photographer plans around: the toast is "You've tried too many times. Try again in a few minutes." (diamond-server/src/api/app/gallery-share-email/gallery-share-email-limits.js, diamond-app/public/locales/en/layouts/errors.json)
- Project **Activity** mentioning a sent email: do not document that feed as part of emailing a share

## Open questions
- none
