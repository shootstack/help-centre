# Galleries: Guides article map

Group: Galleries
Slug: guides/galleries/
Sources reviewed: 2026-09-27, diamond-app 702f16c5, diamond-server 00f52a2

Galleries live only inside a project's Content tab: the left sidebar row **Galleries**, then the gallery grid. Opening one shows a preview. Media folders, design, and the cover belong to this group. Gallery shares (including password, PIN, expiry, favorites, downloads, and reviews) are named here and documented in their own group.

## Articles (sidebar order)

### 1. Galleries
- File: guides/galleries/overview.mdx
- sidebarTitle: Overview
- description: Create a gallery to show a client the photos from a shoot, then rename or delete it.
- Reader goal: Start a gallery for a shoot and find it again from the project.
- H2 outline:
  - Where galleries live
  - Create a gallery
  - Open a gallery
  - Rename a gallery
  - Delete a gallery
  - Inside a gallery
- UI strings (spelling reference, verbatim): **Galleries**, **New**, **Create gallery**, **Name**, **Enter gallery name**, **Cancel**, header **No galleries** / **{{count}} gallery** / **{{count}} galleries**, empty **No galleries found** / **No galleries found. Create a new gallery to get started.** / **Create gallery**, **Open**, **Rename**, command heading **Options**, **Enter new gallery name**, **Rename gallery to "{{input}}"**, **Delete**, **Delete gallery**, "Are you sure? This will delete this gallery and invalidate all related gallery shares. This action cannot be undone.", toast **Gallery deleted successfully**, hover preview **Updated at:** / **Created at:**, preview notice "This is a preview of how your gallery will look. Not all photos or elements may appear here. Create a gallery share when you're ready to send it to your contacts.", **View preview**, toolbar **Share gallery**, **Compose email**, **Create link**, load error **Back to galleries**
- Limits to mention: 25 galleries per project: "You have reached the maximum number of galleries. The maximum is {{max}} galleries." The sidebar also shows "Limit reached: {{count}}/{{limit}}". The cap is fixed, not per plan.
- Writer notes: **New** is on the gallery-grid header and hides its label on mobile; the Content sidebar uses an icon-only plus on the **Galleries** row; the empty state uses **Create gallery**. Both **New** and the plus disable at 25. The grid card has no always-visible ⋯ until hover: right-click, the ⋯ menu, or click the card to open. The sidebar row has a hover ⋯ menu and right-click. There is no rename or delete on the open gallery's toolbar. Create and rename do not toast success. Delete toasts "Gallery deleted successfully". Deleting from the Content sidebar returns to the galleries list; deleting from the grid only closes the dialog. Galleries are listed oldest first and cannot be reordered. Opening a gallery shows the live preview and a closable notice; **View preview** opens that preview in a new tab. It is not the link you send. **Share gallery** only starts a gallery share.
- Cross-links: /guides/galleries/folders, /guides/galleries/design, /guides/galleries/cover; Gallery shares (Compose email and Create link); Media folders (photos live in folders)
- Sources:
  - diamond-app/src/pages/projects/project/project-content/(root)/ProjectContentPage.jsx
  - diamond-app/src/pages/projects/project/project-content/(root)/_layouts/GalleriesLayout.jsx
  - diamond-app/src/pages/projects/project/project-content/galleries/GalleriesPage.jsx, galleries/_layouts/HeaderLayout.jsx, galleries/_layouts/GalleriesLayout.jsx, galleries/_layouts/DeleteGalleryLayout.jsx
  - diamond-app/src/pages/projects/project/project-content/(root)/_layouts/DeleteGalleryLayout.jsx
  - diamond-app/src/pages/projects/project/project-content/gallery/GalleryPage.jsx, gallery/_layouts/ToolbarLayout.jsx, gallery/_layouts/GalleryPreviewLayout.jsx
  - diamond-app/src/components/gallery/GalleryList.jsx, GalleryGrid.jsx, GalleryOptions.jsx, CreateGallery.jsx, UpdateGalleryName.jsx, DeleteGallery.jsx, GalleryPreview.jsx, GalleryLivePreview.jsx
  - diamond-app/src/core/project/projectSchema.jsx (MAX_GALLERIES: 25), diamond-app/src/core/gallery/gallerySlice.jsx (createdAt ascending)
  - diamond-app/public/locales/en/features/gallery.json, pages/galleries.json, pages/gallery.json
  - diamond-app/src/constants/links.js (`/projects/:projectId/content/galleries`)
  - diamond-app/src/layouts/app/components/AppNavigation.jsx (no Galleries item)

### 2. Add media folders
- File: guides/galleries/folders.mdx
- sidebarTitle: Folders
- description: Choose which media folders appear in a gallery, then reorder or remove them.
- Reader goal: Put the right photos in the gallery without uploading a second copy.
- H2 outline:
  - Add a media folder
  - Reorder media folders
  - Remove a media folder
  - When the gallery is full
- UI strings (spelling reference, verbatim): **Media folder**, **Media folder** / **Media folders** with a count badge, **Search folder...**, empty **No folders added yet.**, **Limit reached: {{count}}/{{limit}}**, **Gallery storage limit reached**, "You have reached the maximum gallery storage. The maximum is {{max}}.", **OK**
- Limits to mention: 10 media folders: "Limit reached: {{count}}/{{limit}}". Combined folder size 100 GB: "You have reached the maximum gallery storage. The maximum is {{max}}." (`{{max}}` formats as "100 GB"). The same dialog appears when the download would need more than 10 zip files; the dialog does not say "zip".
- Writer notes: The control is on the open gallery's toolbar, not on the galleries grid. With no folders it reads **Media folder**. With folders it reads **Media folder** or **Media folders** plus the count. Adding opens a menu of this project's media folders that are not already in the gallery; picking one adds it. Drag a row to reorder. Remove is an icon button with no text label. There is no success toast. A watermarked folder shows a different folder icon; changing the watermark belongs to Media folders. The cover picker stays empty until a folder is added ("No photos found" / "Add a media folder to get started.").
- Cross-links: /guides/galleries/overview, /guides/galleries/cover; Media folders; Watermarks
- Sources:
  - diamond-app/src/components/gallery/UpdateGalleryPhotoFolders.jsx
  - diamond-app/src/pages/projects/project/project-content/gallery/_layouts/ToolbarLayout.jsx
  - diamond-app/src/core/gallery/gallerySchema.jsx (MAX_PHOTO_FOLDERS: 10)
  - diamond-app/src/core/gallery-download/galleryDownloadSchema.jsx (MAX_TOTAL_SIZE: 100 GB)
  - diamond-server/src/helpers/gallery-download-helpers.js, diamond-server/src/models/gallery-download-model.js (MAX_ZIPS: 10)
  - diamond-app/public/locales/en/features/gallery.json (`update_gallery_photo_folders`), features/gallery-photo.json
  - diamond-app/src/utils/format.js (`formatBytes`, base 1000)

### 3. Design a gallery
- File: guides/galleries/design.mdx
- sidebarTitle: Design
- description: Choose how a gallery looks to your clients, then add a short introduction.
- Reader goal: Make the gallery look right before anyone else sees it.
- H2 outline:
  - Open design settings
  - Choose a theme, font, and color palette
  - Change the photo grid
  - Write an introduction
- UI strings (spelling reference, verbatim): **Design settings**, tabs **Gallery**, **Cover**, **Intro**, **Theme**, **Select a theme**, **Light**, **Dark**, **System**, **Font**, **Select a font**, **Search font...**, **Fonts**, **No font found**, **Color palette**, **Select a color palette**, **Search color palettes...**, **Color palettes**, **No color palette found**, **Grid layout**, **Photo size**, **S**, **M**, **L**, **Photo spacing**, **Introduction text**, **Type a personalized introduction for your gallery...**
- Limits to mention: none
- Writer notes: **Design settings** is on the gallery toolbar. On a large screen it opens a side card and starts open. Below that breakpoint the card closes and the same controls open in a sheet titled **Design settings**. Changes save as you make them. No success toast. New galleries start on **Light**, a column-style grid, photo size **M**, and spacing 10. Do not name a starting font, color palette, or cover template. **Grid layout** is three icons with no text labels, in order column, row, then grid: describe them from the preview, and do not invent button names. **Photo size** labels are **S**, **M**, and **L**. **Photo spacing** is a slider from 0 to 100. Seeded fonts: Noto Sans, Geist, Antonio, Instrument Serif, Marcellus, Spectral, Amatic SC, Oooh Baby, Ms Madi. Seeded palettes: Neutral, Slate, Taupe, Mauve, Mist, Olive. Creating a palette belongs to Branding. There is no font-creation screen. The **Cover** tab is the next article. The introduction is the **Intro** tab, one text field.
- Cross-links: /guides/galleries/overview, /guides/galleries/cover; Branding (color palettes)
- Sources:
  - diamond-app/src/pages/projects/project/project-content/gallery/GalleryPage.jsx, gallery/_layouts/DesignSettingsLayout.jsx, gallery/galleryAtom.jsx (`galleryDesignSidebarAtom` defaults true)
  - diamond-app/src/components/gallery/UpdateGalleryTheme.jsx, UpdateGalleryFont.jsx, UpdateGalleryColorPalette.jsx, UpdateGalleryGridLayout.jsx, UpdateGalleryGridPhotoSize.jsx, UpdateGalleryGridPhotoSpacing.jsx, UpdateGalleryIntro.jsx
  - diamond-app/src/core/gallery/gallerySchema.jsx (GalleryTheme, GalleryGridLayout, GalleryGridPhotoSize, spacing 0–100)
  - diamond-server/src/models/gallery-model.js (defaults: theme light, grid layout column, photo size medium, spacing 10)
  - diamond-server/src/scripts/config/fonts.js, color-palettes.js
  - diamond-app/public/locales/en/pages/gallery.json, features/gallery.json
  - diamond-app/src/constants/links.js (`/settings/branding/color-palettes`; no fonts settings route)

### 4. Set the cover
- File: guides/galleries/cover.mdx
- sidebarTitle: Cover
- description: Set up the first screen your clients see when they open a gallery.
- Reader goal: Set the first thing a client sees when the gallery opens.
- H2 outline:
  - Choose a cover template
  - Set the title and subtitle
  - Choose the cover photo
  - Set the focal point
  - Add extra covers
- UI strings (spelling reference, verbatim): **Cover**, **Cover template**, **Select a cover template**, **Search cover template...**, **Cover templates**, **No cover template found**, **Title**, **Enter cover title**, **Subtitle**, **Enter cover subtitle**, **Cover photos**, **Select cover**, sheet **Select cover**, empty **No photos found** / **Add a media folder to get started.**, **No cover selected**, **Extra cover {{number}}**, **Extra cover limit reached**, "This cover template does not allow more extra covers.", **OK**, accessible name **Focal point**
- Limits to mention: extra covers only for a template with more than one photo. Seeded **Stories** has 5 extra cover slots. The other seeded templates have one cover photo and show no extra slots. If the server rejects another extra cover, the dialog is "This cover template does not allow more extra covers." It does not state a number.
- Writer notes: Cover settings are the **Cover** tab inside **Design settings**. Template names: Pure, Signature, Editorial, Artist, Contour, Muse, Stories. **Title** and **Subtitle** render only when that template has them. Pure has neither. Artist has a title and no subtitle. Signature, Editorial, Contour, Muse, and Stories have both. **Select cover** opens a sheet of photos from the gallery's media folders and stays open after you pick one. Dragging the cover image sets the focal point; it saves on its own (800 ms) and there is no **Done** button. No success toast. A failed focal-point save toasts "Failed to update focal point". Extra slots appear in order; **Select cover** on a later slot stays disabled until the slot before it has a photo. Extra cover thumbnails use the same focal-point drag. Do not tell readers a maximum of 9.
- Cross-links: /guides/galleries/overview, /guides/galleries/design, /guides/galleries/folders
- Sources:
  - diamond-app/src/pages/projects/project/project-content/gallery/_layouts/DesignSettingsLayout.jsx
  - diamond-app/src/components/gallery/UpdateGalleryCoverTemplate.jsx, UpdateGalleryCoverTitle.jsx, UpdateGalleryCoverSubTitle.jsx, UpdateGalleryCover.jsx, UpdateGalleryCoverFp.jsx, UpdateGalleryExtraCovers.jsx, GalleryCoverSlots.jsx, SelectGalleryCoverPhoto.jsx
  - diamond-app/src/components/_common/ImageFocalPoint.jsx
  - diamond-app/src/core/gallery/galleryHooks.jsx (`useGalleryExtraCoverSlots`)
  - diamond-server/src/scripts/config/cover-templates.js
  - diamond-app/public/locales/en/features/gallery.json, features/gallery-photo.json, pages/gallery.json

## Do not document
- **Learn more** on the empty gallery grid: the button has no click handler (diamond-app/src/pages/projects/project/project-content/galleries/_layouts/GalleriesLayout.jsx)
- A workspace-sidebar Galleries entry or a `/galleries` route: workspace nav is Notifications, Tasks, Notes, Emails, Projects, and Contacts (diamond-app/src/layouts/app/components/AppNavigation.jsx, diamond-app/src/core/app/appRouter.jsx)
- Gallery status, duplicate, or archive: `GalleryOptions` is only **Open**, **Rename**, and **Delete** (diamond-app/src/components/gallery/GalleryOptions.jsx)
- Gallery search, a gallery filter, a gallery sort control, or a list-versus-grid toggle: the list page is a header plus `GalleryGrid` (diamond-app/src/pages/projects/project/project-content/galleries/GalleriesPage.jsx)
- Reordering galleries: the list is `createdAt` ascending (diamond-app/src/core/gallery/gallerySlice.jsx)
- Rename or delete from the open gallery toolbar: that toolbar is media folders, **Design settings**, and **Share gallery** (diamond-app/src/pages/projects/project/project-content/gallery/_layouts/ToolbarLayout.jsx)
- Success toasts for create, rename, theme, font, palette, grid, spacing, size, cover, focal point, title, subtitle, extra covers, introduction, and media folders: `showSuccessMsg` stays off. Only delete toasts "Gallery deleted successfully"
- **Back to galleries** as a normal control: it is the load-error action (diamond-app/src/pages/projects/project/project-content/gallery/GalleryPage.jsx)
- A keyboard shortcut for galleries
- English names for the three **Grid layout** icons: the tabs have icons only (diamond-app/src/components/gallery/UpdateGalleryGridLayout.jsx)
- **Title**, **Subtitle**, and extra covers as if every template shows them: they follow `hasTitle`, `hasSubTitle`, and `imageCount` (diamond-server/src/scripts/config/cover-templates.js)
- A maximum of 9 extra covers: `MAX_EXTRA_COVERS` is 9 in diamond-app/src/core/gallery/gallerySchema.jsx, and the dialog never states that number
- "10 zip files" as its own message: crossing `MAX_ZIPS` uses the gallery storage dialog (diamond-server/src/helpers/gallery-download-helpers.js)
- Name, cover title, cover subtitle, and introduction length, characters, or language checks: field validation. App caps are name 64, title 48, subtitle 250, introduction text 600 (diamond-app/src/constants/rules.js, diamond-app/src/core/gallery/gallerySchema.jsx)
- Photo spacing error strings: the control is a 0–100 slider
- Plan-based gallery counts: `features.galleries` is a boolean on every seeded plan (diamond-server/src/models/plan-model.js, diamond-server/src/scripts/config/plans.js). Monthly gallery views are a gallery-share quota, not a cap on how many galleries you can create
- The share wizard (**Security**, **Favorites**, **Download**, **Review**, **Overview**, **Email**), password, PIN, expiry, favorites limits, download limits, and reviews: owned by Gallery shares (diamond-app/public/locales/en/pages/gallery.json `share_gallery_link_layout` / `share_gallery_email_layout`, diamond-server/src/models/gallery-share-model.js)
- Creating a font: branding settings has logo, color palettes, and watermarks, not fonts (diamond-app/src/constants/links.js)
- Editing a watermark from the gallery folder row: the row only swaps the folder icon (diamond-app/src/components/gallery/UpdateGalleryPhotoFolders.jsx)
- A preview-section switcher: `previewSectionAtom` stays `'cover'` and nothing writes it (diamond-app/src/pages/projects/project/project-content/gallery/galleryAtom.jsx)
- The client gallery at `/g/:galleryShareId`, favorites, downloads, password, PIN, and reviews on diamond-site: clients see a gallery share, not this screen (diamond-site/src/core/app/appRouter.jsx)
- Which cover template, font, or color palette a new gallery starts on: those ids come from env defaults and this repo does not name them (diamond-server/src/config/keys.js, diamond-server/src/models/gallery-model.js)

## Open questions
- none
