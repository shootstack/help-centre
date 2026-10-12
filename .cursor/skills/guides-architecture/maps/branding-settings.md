# Branding settings: Guides article map

Group: Branding settings
Slug: guides/branding-settings/
Sources reviewed: 2026-10-01, diamond-app 58e04146, diamond-server 40635e9, diamond-site 9ff5fa8
Status: Approved by the user, written, and individually voice-reviewed on 2026-10-01. Validation and broken-link checks passed.

## Scope and article decisions

This group covers the six tabs on **Branding settings**: **Logo**, **Color palettes**, **Watermarks**, **Contact info**, **Social media**, and **Legal info**. Open it from the workspace name at the top of the app sidebar and choose **Branding settings**, or choose **Branding** under **Workspace** in the settings sidebar. `/settings/branding` opens the Logo tab. Each tab has its own route and controls, so each gets one task article.

Overview plus six task articles exceeds the skill's six-article threshold. Propose one nested **Business details** subgroup for Contact info, Social media, and Legal info. Business details is an editorial navigation label, not an app tab. Put the Branding settings group inside the existing Settings wrapper. Keep all seven MDX files together in `guides/branding-settings/`; a sidebar subgroup does not require another filesystem folder.

Proposed sidebar order:

1. Overview
2. Logos
3. Color palettes
4. Watermarks
5. Business details (nested group)
   - Contact info
   - Social media
   - Legal info

Settings are preferences and reusable assets, not a single object to create, rename, or delete. Overview provides entry and orientation; asset creation, editing, and deletion belong in their respective articles. No forced create/rename/delete headings in Overview.

Branding owns reusable palettes and watermarks. Choosing a palette for a gallery belongs to Galleries; choosing a watermark when creating or duplicating a media folder belongs to Media folders. Workspace name, icon, domain, subscription, and usage belong to Workspace settings. Personal appearance belongs to Personal settings. Cross-link those workflows instead of repeating them.

Three parallel research passes checked controls and English labels, limits and server behavior, and entry points and viewer output. Current files were used to verify the app's stale graph index. The workspace-menu English locale has an existing uncommitted change; the entry labels here reflect the current working tree. This map does not edit articles, navigation, or app code.

## Articles (sidebar order)

### 1. Branding settings
- File: guides/branding-settings/overview.mdx
- sidebarTitle: Overview
- description: Find the branding settings you need for your photography business.
- Reader goal: Find the right branding tab and understand which settings affect galleries or reusable assets.
- H2 outline:
  - Open branding settings
  - Find the setting you need
  - Return to your workspace
- UI strings (spelling reference, verbatim): **Branding settings**, **Settings**, **Workspace**, **Branding**, **Logo**, **Color palettes**, **Watermarks**, **Contact info**, **Social media**, **Legal info**
- Limits to mention: none
- Writer notes: Use the workspace-name menu as the primary entry; the settings-sidebar Branding entry is an alternative. Branding opens on Logo. Give one short purpose and a link for each task article. Logos are used on supported gallery surfaces; palettes can be selected in gallery design; watermarks can be selected for media folders; social and legal links appear in gallery footers. Describe Contact info as maintaining business contact details, without saying those fields appear to clients: the viewer receives the data but has no mounted display for it. Clicking the Settings sidebar header returns to app home. Do not claim all six tabs change every existing gallery immediately. Mention separately owned settings only when useful for finding the correct destination.
- Cross-links: /guides/branding-settings/logo, /guides/branding-settings/color-palettes, /guides/branding-settings/watermarks, /guides/branding-settings/contact-info, /guides/branding-settings/social-media, /guides/branding-settings/legal-info, /guides/workspace-settings/general, /guides/galleries/design, /guides/media-folders/overview
- Sources:
  - diamond-app/src/layouts/app/components/AppNavigation.jsx
  - diamond-app/src/layouts/app/components/WorkspaceSettingsMenu.jsx
  - diamond-app/src/layouts/settings/components/SettingsNavigation.jsx
  - diamond-app/src/core/app/appRouter.jsx
  - diamond-app/src/constants/links.js
  - diamond-app/src/pages/settings/branding/(root)/BrandingSettingsPage.jsx
  - diamond-app/src/pages/settings/branding/(root)/_layouts/TitleLayout.jsx
  - diamond-app/public/locales/en/layouts/app.json
  - diamond-app/public/locales/en/layouts/settings.json
  - diamond-app/public/locales/en/pages/branding-settings.json
  - diamond-site/src/components/workspace/WorkspaceBrand.jsx
  - diamond-site/src/components/workspace/WorkspaceSocial.jsx
  - diamond-site/src/components/workspace/WorkspaceLegal.jsx

### 2. Upload your logos
- File: guides/branding-settings/logo.mdx
- sidebarTitle: Logos
- description: Add logos for light and dark backgrounds in your shared galleries.
- Reader goal: Upload or replace each logo variant, and remove a logo when needed.
- H2 outline:
  - Upload a logo for light backgrounds
  - Upload a logo for dark backgrounds
  - Replace a logo
  - Remove a logo
- UI strings (spelling reference, verbatim): **Logo**, **Logo for dark backgrounds**, **Upload logo**, **Remove logo**, **Delete logo**, **Delete inverted logo**, **Delete**, **Cancel**; helpers "Used on light backgrounds in your contact galleries." and "Used on dark backgrounds and images in your contact galleries."; confirmation "Are you sure? This will remove the logo. This action cannot be undone." / "Are you sure? This will remove the inverted logo. This action cannot be undone."
- Limits to mention: Each original image up to 5 MB (5,000,000 bytes), no more than 2048 pixels wide or high; JPG/JPEG, PNG, or WebP. Exact validation references: "Size cannot exceed {{max}}", "Width cannot exceed {{max}} pixels", "Height cannot exceed {{max}} pixels", "Content type is invalid". State useful file limits plainly and suggest resizing or choosing another file; do not paste errors.
- Writer notes: Both cards use identical Upload logo and Remove logo labels, so always identify the card heading. Upload opens native file selection and saves the valid image directly; there is no crop dialog or separate Save button. A transparent background is recommended by the helper, not required by validation. Use Upload logo again to replace that variant. Remove logo appears only when its variant exists and opens its own confirmation; put a warning immediately before removal steps. Removing one variant does not delete the workspace or gallery photos. Logo display depends on the gallery surface: some covers choose by background, some photo covers/access/download surfaces use the dark-background variant, and some cover designs do not show a logo. Avoid a claim that every cover displays it. The viewer reads current workspace branding when fetched; do not promise updates to already-open client tabs. Workspace name/icon edits are a cross-link, not steps here. The locale helper lists JPG/PNG, while the wired picker and validation also support WebP.
- Cross-links: /guides/branding-settings/overview, /guides/workspace-settings/general, /guides/galleries/cover, /guides/galleries/design
- Sources:
  - diamond-app/src/pages/settings/branding/logo/LogoSettingsPage.jsx
  - diamond-app/src/pages/settings/branding/logo/_layouts/LogoLayout.jsx
  - diamond-app/src/pages/settings/branding/logo/_layouts/LogoInvertedLayout.jsx
  - diamond-app/src/pages/settings/branding/logo/_layouts/DeleteWorkspaceLogoLayout.jsx
  - diamond-app/src/pages/settings/branding/logo/_layouts/DeleteWorkspaceLogoInvertedLayout.jsx
  - diamond-app/src/components/workspace/UpdateWorkspaceLogo.jsx
  - diamond-app/src/components/workspace/UpdateWorkspaceLogoInverted.jsx
  - diamond-app/src/components/workspace/DeleteWorkspaceLogo.jsx
  - diamond-app/src/components/workspace/DeleteWorkspaceLogoInverted.jsx
  - diamond-app/src/core/workspace/workspaceSchema.jsx
  - diamond-app/src/utils/image.js
  - diamond-app/public/locales/en/features/workspace.json
  - diamond-app/public/locales/en/pages/logo-settings.json
  - diamond-app/public/locales/en/schemas/workspace.json
  - diamond-server/src/models/workspace-model.js
  - diamond-server/src/services/workspace-service.js
  - diamond-site/src/components/workspace/WorkspaceBrand.jsx
  - diamond-site/src/pages/gallery/(root)/_layouts/CoverLayout.jsx
  - diamond-site/src/layouts/gallery/components/GalleryAccessView.jsx
  - diamond-site/src/pages/gallery-download/_layouts/HeaderLayout.jsx

### 3. Create color palettes
- File: guides/branding-settings/color-palettes.mdx
- sidebarTitle: Color palettes
- description: Create reusable colors for your galleries, then edit or remove palettes you no longer use.
- Reader goal: Create, edit, or delete a custom palette and find where to use it in a gallery.
- H2 outline:
  - Create a color palette
  - Edit a color palette
  - Use a palette in a gallery
  - Delete a color palette
- UI strings (spelling reference, verbatim): **Color palettes**, **Create color palette**, **Name**, **Enter color palette name**, **Brand color**, **Select a brand color**, **Cover color**, **Select a cover color**, **Cover text color**, **Select a cover text color**, **Open**, **Edit**, **Update color palette**, **Delete color palette**, **Delete**, **Cancel**; confirmation "Are you sure? This will delete this color palette. This action cannot be undone."
- Limits to mention: Up to 10 custom color palettes per workspace; system palettes do not count. Fixed cap, not a plan allowance. Exact reference: "You have reached the maximum number of color palettes. The maximum is {{max}} color palettes." State the limit plainly; edit an existing custom palette or remove an unused one before adding another.
- Writer notes: Create color palette opens a dialog with Name and three color-picker fields. Brand color is for buttons, links, and highlights; Cover color is the cover background; Cover text color is text on covers. Submit Create color palette. A custom row's ellipsis or right-click menu offers Open, Edit, and Delete; Open and Edit both open Update color palette. Editing includes renaming in the same dialog and requires Update color palette. System rows have no edit/delete menu. No row-click opening, search, filter, or sorting workflow. Keep Use a palette in a gallery to a short explanation and link to Design; do not reproduce selection steps. Deleting opens a named confirmation and is irreversible. The server permits deleting a palette referenced by a gallery and does not select a replacement; do not promise a fallback palette or unchanged gallery colors. Detailed handling of existing gallery references remains excluded pending clarification.
- Cross-links: /guides/branding-settings/overview, /guides/galleries/design
- Sources:
  - diamond-app/src/pages/settings/branding/color-palettes/_layouts/ColorPalettesLayout.jsx
  - diamond-app/src/pages/settings/branding/color-palettes/_layouts/CreateColorPaletteLayout.jsx
  - diamond-app/src/pages/settings/branding/color-palettes/_layouts/UpdateColorPaletteLayout.jsx
  - diamond-app/src/components/color-palette/CreateColorPalette.jsx
  - diamond-app/src/components/color-palette/UpdateColorPalette.jsx
  - diamond-app/src/components/color-palette/DeleteColorPalette.jsx
  - diamond-app/src/components/color-palette/ColorPaletteOptions.jsx
  - diamond-app/src/components/color-palette/ColorPaletteTable.jsx
  - diamond-app/src/core/color-palette/colorPaletteSchema.jsx
  - diamond-app/src/components/gallery/UpdateGalleryColorPalette.jsx
  - diamond-app/public/locales/en/features/color-palette.json
  - diamond-app/public/locales/en/pages/color-palettes-settings.json
  - diamond-server/src/models/color-palette-model.js
  - diamond-server/src/helpers/color-palette-helpers.js
  - diamond-server/src/services/color-palette-service.js
  - diamond-server/src/api/site/gallery/gallery-controller.js
  - diamond-server/src/api/site/gallery/gallery-mapper.js

### 4. Create watermarks
- File: guides/branding-settings/watermarks.mdx
- sidebarTitle: Watermarks
- description: Create an image watermark to use with proofing photos in media folders.
- Reader goal: Create a named watermark, upload its image, set its appearance, and find where to use it.
- H2 outline:
  - Create a watermark
  - Upload the watermark image
  - Set its position, scale, and opacity
  - Use a watermark in a media folder
  - Edit or delete a watermark
- UI strings (spelling reference, verbatim): **Watermarks**, **Create watermark**, **Name**, **Enter watermark name**, **Open**, **Edit**, **Update watermark**, **Watermark image**, **Upload watermark**, **Position**, **Select a position**, **Scale landscape**, **Scale portrait**, **Opacity**, **Delete watermark**, **Delete**, **Cancel**; position options **Top left**, **Top center**, **Top right**, **Middle left**, **Middle center**, **Middle right**, **Bottom left**, **Bottom center**, **Bottom right**; confirmation "Are you sure? This will delete this watermark. This action cannot be undone."
- Limits to mention: Up to 3 custom watermarks per workspace; system watermarks do not count. Fixed cap, not a plan allowance. Exact cap reference: "You have reached the maximum number of watermarks. The maximum is {{max}} watermarks." Original image up to 5 MB (5,000,000 bytes), no more than 2048 pixels wide or high; JPG/JPEG, PNG, or WebP. Exact validation references: "Size cannot exceed {{max}}", "Width cannot exceed {{max}} pixels", "Height cannot exceed {{max}} pixels", "Content type is invalid". State useful limits plainly, not as error transcripts.
- Writer notes: Create watermark is a name-only dialog. Successful creation closes that dialog; it does not automatically open editing. Next use the new custom row's menu and choose Edit (Open reaches the same dialog). Upload watermark selects and uploads the image directly, separately from the settings form. Set Position, Scale landscape, Scale portrait, and Opacity, then submit Update watermark. Do not claim Cancel reverses an image already uploaded. Each slider runs from 10 to 100; defaults are Middle center, landscape scale 60, portrait scale 80, opacity 60. These are control references, not quota notes; focus the article on adjusting the result. On larger screens the preview has two unlabeled orientation icons; describe the wide and tall icons without inventing button text. The preview is hidden on smaller screens. No cropper, text-watermark editor, or separate Remove image control. System rows have no edit/delete menu. Link to Media folders for assigning a watermark when creating or duplicating a folder; do not repeat the workflow here. Deletion opens a named confirmation, removes the preset and its source image, and does not reprocess existing photos or clear their stored watermark references. Do not promise that editing/deleting the preset retroactively changes existing photos or their download restrictions. The helper says PNG, but the wired picker and validation also accept JPEG/WebP.
- Cross-links: /guides/branding-settings/overview, /guides/media-folders/overview, /guides/media-folders/upload
- Sources:
  - diamond-app/src/pages/settings/branding/watermarks/_layouts/WatermarksLayout.jsx
  - diamond-app/src/pages/settings/branding/watermarks/_layouts/CreateWatermarkLayout.jsx
  - diamond-app/src/pages/settings/branding/watermarks/_layouts/UpdateWatermarkLayout.jsx
  - diamond-app/src/components/watermark/CreateWatermark.jsx
  - diamond-app/src/components/watermark/UpdateWatermark.jsx
  - diamond-app/src/components/watermark/UpdateWatermarkImage.jsx
  - diamond-app/src/components/watermark/WatermarkImagePreview.jsx
  - diamond-app/src/components/watermark/DeleteWatermark.jsx
  - diamond-app/src/components/watermark/WatermarkOptions.jsx
  - diamond-app/src/components/watermark/WatermarkTable.jsx
  - diamond-app/src/core/watermark/watermarkSchema.jsx
  - diamond-app/src/components/photo-folder/CreatePhotoFolder.jsx
  - diamond-app/src/components/photo-folder/DuplicatePhotoFolder.jsx
  - diamond-app/src/utils/image.js
  - diamond-app/public/locales/en/features/watermark.json
  - diamond-app/public/locales/en/pages/watermarks-settings.json
  - diamond-app/public/locales/en/schemas/watermark.json
  - diamond-server/src/models/watermark-model.js
  - diamond-server/src/helpers/watermark-helpers.js
  - diamond-server/src/services/watermark-service.js
  - diamond-server/src/services/photo-service.js
  - diamond-server/src/helpers/photo-helpers.js

### 5. Update contact info
- File: guides/branding-settings/contact-info.mdx
- sidebarTitle: Contact info
- description: Keep the contact details for your photography business up to date.
- Reader goal: Maintain the workspace's business contact details in Branding settings.
- H2 outline:
  - Open contact info
  - Update your business contact details
  - Clear a contact detail
- UI strings (spelling reference, verbatim): **Contact info**, **Your contact info**, **Website**, **Enter website URL**, **Email**, **Enter email address**, **Phone**, **Enter phone number**
- Limits to mention: none
- Writer notes: Place this article in Business details in the proposed sidebar. Website, Email, and Phone are optional independent fields. An edit saves when the field loses focus or Enter is pressed; no separate Save button. Clearing a field removes that saved detail. These are the business details for the workspace, not a client's Contact record or the account's sign-in email. Do not add address, business hours, contact-form, or client-contact steps. Although the Branding page description says details are visible to contacts and the site receives these values, no current viewer component renders Website, Email, or Phone. Document the verified settings edits only; omit promises of client visibility or instructions to find them in a gallery.
- Cross-links: /guides/branding-settings/overview, /guides/branding-settings/social-media, /guides/contacts/details
- Sources:
  - diamond-app/src/pages/settings/branding/contact-info/ContactInfoSettingsPage.jsx
  - diamond-app/src/pages/settings/branding/contact-info/_layouts/ContactInfoLayout.jsx
  - diamond-app/src/components/workspace/UpdateWorkspaceContact.jsx
  - diamond-app/src/core/workspace/workspaceSchema.jsx
  - diamond-app/public/locales/en/features/workspace.json
  - diamond-app/public/locales/en/pages/contact-info-settings.json
  - diamond-server/src/models/workspace-model.js
  - diamond-server/src/api/site/workspace/workspace-mapper.js
  - diamond-site/src/api/workspace/workspaceMapper.jsx
  - diamond-site/src/api/gallery-preview/galleryPreviewMapper.jsx
  - diamond-site/src/components/workspace/index.js

### 6. Add social media links
- File: guides/branding-settings/social-media.mdx
- sidebarTitle: Social media
- description: Add social media links to your shared galleries.
- Reader goal: Add, update, or remove the social profiles clients can open from gallery footers.
- H2 outline:
  - Add or change a social media link
  - Remove a social media link
  - Where clients see your links
- UI strings (spelling reference, verbatim): **Social media**, **Your social media**, **Facebook**, **Instagram**, **X (Twitter)**, **TikTok**, **YouTube**, **LinkedIn**, **Pinterest**, **Enter username or URL**
- Limits to mention: none
- Writer notes: Place this article in Business details. Each supported platform has one optional field accepting a username or profile URL. UrlInput converts a username to the platform URL. Fields save independently on blur or Enter, with no Save button. Clearing a field removes its link. Clients see icons only for populated links in gallery, gallery-download, access/password, and status footers; links open in a new tab. A gallery preview also renders them but disables pointer interaction, so do not instruct readers to test links by clicking inside the preview. No arbitrary platform, second profile for one platform, custom icon, or label editor. This adds outbound profile links; it does not connect social accounts, publish photos, or import content.
- Cross-links: /guides/branding-settings/overview, /guides/branding-settings/contact-info, /guides/gallery-shares/overview
- Sources:
  - diamond-app/src/pages/settings/branding/social-info/SocialInfoSettingsPage.jsx
  - diamond-app/src/pages/settings/branding/social-info/_layouts/SocialLayout.jsx
  - diamond-app/src/components/workspace/UpdateWorkspaceSocial.jsx
  - diamond-app/src/components/_common/UrlInput.jsx
  - diamond-app/src/utils/format.js
  - diamond-app/src/core/workspace/workspaceSchema.jsx
  - diamond-app/public/locales/en/features/workspace.json
  - diamond-app/public/locales/en/pages/social-info-settings.json
  - diamond-site/src/components/workspace/WorkspaceSocial.jsx
  - diamond-site/src/pages/gallery/(root)/_layouts/FooterLayout.jsx
  - diamond-site/src/pages/gallery-download/_layouts/FooterLayout.jsx
  - diamond-site/src/pages/gallery-preview/_layouts/FooterLayout.jsx
  - diamond-site/src/layouts/gallery/components/GalleryAccessView.jsx
  - diamond-site/src/layouts/gallery/components/GalleryStatusView.jsx

### 7. Add legal links
- File: guides/branding-settings/legal-info.mdx
- sidebarTitle: Legal info
- description: Add links to your privacy policy, cookie policy, and terms of service.
- Reader goal: Link clients to existing policy pages and remove a link when needed.
- H2 outline:
  - Add or change a legal link
  - Remove a legal link
  - Where clients see your links
- UI strings (spelling reference, verbatim): **Legal info**, **Your legal info**, **Terms of service**, **Enter terms of service URL**, **Privacy policy**, **Enter privacy policy URL**, **Cookie policy**, **Enter cookie policy URL**; viewer labels **Terms of Service**, **Privacy Policy**, **Cookie Policy**
- Limits to mention: none
- Writer notes: Place this article in Business details. These are three optional URL fields for existing external pages, not document editors. Enter the full policy-page URL; each field saves on blur or Enter with no Save button. Clearing the field removes its footer link. Footer labels are fixed and use different capitalization from the settings field labels; quote the relevant screen's exact label. Populated links appear in gallery, download, access/password, and status footers, opening in a new tab. The preview renders them without pointer interaction. There are no default policy URLs, custom link labels, policy generation, upload, signature, or acceptance controls in this surface. Do not give legal advice or promise compliance, consent collection, or cookie blocking from adding these links.
- Cross-links: /guides/branding-settings/overview, /guides/branding-settings/social-media, /guides/gallery-shares/overview
- Sources:
  - diamond-app/src/pages/settings/branding/legal-info/LegalInfoSettingsPage.jsx
  - diamond-app/src/pages/settings/branding/legal-info/_layouts/LegalLayout.jsx
  - diamond-app/src/components/workspace/UpdateWorkspaceLegal.jsx
  - diamond-app/src/core/workspace/workspaceSchema.jsx
  - diamond-app/public/locales/en/features/workspace.json
  - diamond-app/public/locales/en/pages/legal-info-settings.json
  - diamond-site/src/components/workspace/WorkspaceLegal.jsx
  - diamond-site/public/locales/en/features/workspace.json
  - diamond-site/src/pages/gallery/(root)/_layouts/FooterLayout.jsx
  - diamond-site/src/pages/gallery-download/_layouts/FooterLayout.jsx
  - diamond-site/src/pages/gallery-preview/_layouts/FooterLayout.jsx
  - diamond-site/src/layouts/gallery/components/GalleryAccessView.jsx
  - diamond-site/src/layouts/gallery/components/GalleryStatusView.jsx

## Do not document

- **Workspace name, icon, unique domain, plans, billing, usage, personal appearance, or Contact records:** separately owned sections, not Branding workflows. Checked `diamond-app/src/layouts/settings/components/SettingsNavigation.jsx`, `src/components/workspace/UpdateWorkspaceName.jsx`, `UpdateWorkspaceIcon.jsx`, and `src/components/contact/`.
- **A custom domain, public portfolio/homepage, gallery-share hostname editor, or removing Shootstack attribution:** no corresponding Branding control. The viewer homepage route is commented as future work. Checked `diamond-app/src/pages/settings/branding/`, `src/components/workspace/`, and `diamond-site/src/core/app/appRouter.jsx`.
- **Contact details shown to clients, a business address, contact form, or business-hours editor:** only Website, Email, and Phone are mounted in `diamond-app/src/components/workspace/UpdateWorkspaceContact.jsx`; no viewer display of these values is wired in `diamond-site/src`. API mappings alone do not establish a screen.
- **Text watermarks, image removal without deleting the preset, watermark cropping, or a separate watermark position/scale tutorial:** the type constant does not establish a text editor, and the settings are one watermark-editing job. Checked `diamond-app/src/core/watermark/watermarkSchema.jsx`, `src/components/watermark/{CreateWatermark,UpdateWatermark,UpdateWatermarkImage}.jsx`, and `diamond-server/src/models/watermark-model.js`.
- **Changing existing photo watermarks or restoring downloads by editing/deleting a preset:** deletion does not clear folder/photo references or reprocess photo derivatives; downloads still consult the stored watermark flag. Checked `diamond-server/src/services/watermark-service.js`, `src/services/photo-service.js`, and `src/helpers/photo-helpers.js`.
- **Automatic replacement or a guaranteed gallery-color fallback after deleting an in-use palette:** gallery references remain and viewer population can return null. Checked `diamond-server/src/services/color-palette-service.js`, `src/api/site/gallery/gallery-controller.js`, and `gallery-mapper.js`.
- **Edit/delete built-in presets, duplicate a preset, row-click opening, search, filtering, or sorting presets:** system rows suppress action menus; custom menus expose only Open, Edit, Delete; columns disable sorting. Checked `diamond-app/src/components/color-palette/{ColorPaletteTable,ColorPaletteOptions}.jsx`, `src/components/watermark/{WatermarkTable,WatermarkOptions}.jsx`, and their settings layouts.
- **Logo crop/zoom steps, required aspect ratios, PNG-only watermark uploads, or a promise that every cover shows a logo:** these uploads have no crop/aspect constraint and support JPEG/PNG/WebP. Pure, Artist, and Muse covers do not render WorkspaceBrand. Checked the three upload components, `diamond-app/src/core/{workspace/workspaceSchema,watermark/watermarkSchema}.jsx`, and `diamond-site/src/components/gallery/covers/{Pure,Artist,Muse}.jsx`.
- **Social account connection, arbitrary platforms, custom profile icons/link labels, legal document creation, policy uploads, or consent/compliance guarantees:** these surfaces save optional fixed-platform profile links and three policy URLs only. Checked `diamond-app/src/components/workspace/{UpdateWorkspaceSocial,UpdateWorkspaceLegal}.jsx` and `diamond-site/src/components/workspace/{WorkspaceSocial,WorkspaceLegal}.jsx`.
- **Separate Save buttons for inline business fields, reversing an uploaded image with Cancel, instant updates to already-open clients, success toasts, or transient Draft/Valid statuses as steps:** inline fields and image uploads save independently; gallery clients fetch branding. Checked `diamond-app/src/components/workspace/UpdateWorkspace*.jsx`, `src/components/watermark/UpdateWatermarkImage.jsx`, `diamond-server/src/api/site/workspace/`, and `src/api/app/watermark/watermark-mapper.js`.
- **Routine field validation or request-rate limits:** preset names cap at 32 characters, image filenames at 100, contact email at 254, phone at 20, and URLs at 250; these are not planning quotas. Asset request limits are operational. Checked `diamond-app/src/constants/rules.js`, the three domain schemas, and `diamond-server/src/api/app/{workspace/workspace-limits,watermark/watermark-limits}.js`. Counts and original-image sizes/dimensions belong in the relevant articles instead.
- **Static plan-specific branding quotas or unconditional editing availability:** palette/watermark creation caps are fixed; mutation routes require a valid subscription. Do not turn this into a plan comparison or say reads are blocked. Checked `diamond-server/src/api/app/{color-palette/color-palette-routes,watermark/watermark-routes}.js` and `src/middlewares/quota/valid-subscription.js`.

## Open questions

- **Contact-info visibility:** should Website, Email, and Phone appear on a client-facing screen, or is this tab intended only to store details? The current Branding description promises visibility, while viewer code only maps these values. Until clarified, the proposed article covers saving and clearing the fields without a client-visibility claim. Sources: `diamond-app/public/locales/en/pages/branding-settings.json`, `src/components/workspace/UpdateWorkspaceContact.jsx`, `diamond-site/src/api/workspace/workspaceMapper.jsx`, `src/api/gallery-preview/galleryPreviewMapper.jsx`, and `src/components/workspace/`.
- **File-format helper copy:** should the logo and watermark hints list the actual JPEG/PNG/WebP formats? Both logo helpers list JPG/PNG and the watermark helper lists PNG; all three wired pickers and original-image schemas accept JPEG/PNG/WebP. Articles can state the verified formats while preserving exact control labels. Sources: `diamond-app/public/locales/en/features/{workspace,watermark}.json`, the corresponding upload components, and the workspace/watermark schemas.
- **Deleting presets already in use:** what behavior should the product promise for galleries and existing photos? Current deletion leaves references in place, provides no replacement choice, and does not reprocess photos. Until clarified, exclude replacement/fallback and retroactive watermark claims. Sources: `diamond-server/src/services/{color-palette,watermark,photo}-service.js`, `src/api/site/gallery/{gallery-controller,gallery-mapper}.js`, and `src/helpers/photo-helpers.js`.

These questions affect excluded claims, not the approved seven-article structure. All seven articles were written within the verified boundaries above.

## Writing and voice-review report

The user approved all seven articles and parallel writing on 2026-10-01. Each article received a new article-specific explore pass before drafting. Seven fresh readers each reviewed only the tone guide, the copy exclusions, and their assigned page, without research, map, or sibling context. All seven pages are registered under Settings > Branding settings, Overview first; Contact info, Social media, and Legal info are nested under Business details.

| Page | Reader findings by quality | Applied |
| --- | --- | --- |
| Overview | No findings. | 0. |
| Logos | Helpful: the tab result described the screen; gallery-design wording was a reference fact rather than guidance. Natural/Phrasing: suggested shortening the removal warning. | 2. Retained "that version" in the warning because the two logo cards use identical removal labels and only the selected variant is removed. |
| Color palettes | No findings. | 0 reader rewrites; aligned the workspace-menu entry sentence during sibling consistency. |
| Watermarks | Natural: "Start a watermark" was awkward. Phrasing: deletion warning differed from the shared pattern. | 2. Also aligned image formats and separate size/dimension Notes with Logos during sibling consistency. |
| Contact info | Helpful: the tab result described the screen instead of the task. | 1. Also aligned the workspace-menu entry sentence during sibling consistency. |
| Social media | Natural/Professional: "current value" sounded like form specification language. Helpful/Natural: Twitter URL conversion was a passive reference fact. | 2. |
| Legal info | Helpful: the tab result described the screen. | 1. Used a purpose clause rather than the proposed rewrite's instruction to enter links before the next step. |

Eight reader findings were applied; one was consciously retained. No description or intro changed during voice review. All original draft intros remain in the published files, with UI labels and verified facts preserved.

Two descriptions changed during drafting from the approved map drafts. The briefs above now match the articles:

- Color palettes: before "Create reusable colors for gallery buttons, covers, and cover text."; after "Create reusable colors for your galleries, then edit or remove palettes you no longer use."
- Contact info: before "Keep your business email, phone number, and website up to date."; after "Keep the contact details for your photography business up to date."

Contact info no longer carries an article comment. The open question stays here: confirm the intended client-facing placement of Website, Email, and Phone before adding a visibility claim. The page documents saving and clearing the fields and makes no client-visibility claim. File-format hints and deletion-reference behavior remain product questions in this map; no unsupported restriction, replacement, or retroactive photo effect appears in the articles. The other six pages have no factual TODOs.

The Branding sidebar icon is copied from the app's SwatchIcon, with the existing asset color and SVG conventions. Screenshot placeholders remain commented; no screenshots were captured. No commit or deployment was made.

Verification: guide lint passed with zero warnings; all bold controls/screens match the current English locales, with code-backed keyboard/menu symbols. All seven descriptions match their briefs and fit the 20-word limit. `npm run validate` passed, including the Academy/catalog checks and Mintlify build validation. The build succeeded after granting access to Mintlify's local preview cache. `npm run broken-links` found no broken links. `git diff --check` and whitespace checks on the new files passed. The generated app catalog added exactly seven articles and preserved all 54 existing entries, for 61 total. The nested navigation order and Branding icon were verified.

## Screenshots to capture

Each entry needs the listed light WebP and a matching `-dark.webp` version. All are commented placeholders. Use demo workspace data.

### Branding settings
- `/assets/images/guides/branding-settings/overview-open-1.webp`: App sidebar with the workspace-name menu open and Branding settings highlighted.
- `/assets/images/guides/branding-settings/overview-open-2.webp`: Branding settings page with the Logo tab selected.
- `/assets/images/guides/branding-settings/overview-find-1.webp`: Branding settings with all six tabs visible.
- `/assets/images/guides/branding-settings/overview-return-1.webp`: Settings sidebar header with the Settings back button highlighted.

### Upload your logos
- `/assets/images/guides/branding-settings/logo-open-1.webp`: Workspace menu with Branding settings highlighted.
- `/assets/images/guides/branding-settings/logo-open-2.webp`: Branding settings with Logo and both logo cards visible.
- `/assets/images/guides/branding-settings/logo-light-1.webp`: Logo card with Upload logo highlighted.
- `/assets/images/guides/branding-settings/logo-dark-1.webp`: Logo for dark backgrounds with Upload logo highlighted.
- `/assets/images/guides/branding-settings/logo-remove-1.webp`: Logo card with Remove logo highlighted.
- `/assets/images/guides/branding-settings/logo-remove-2.webp`: Delete logo with Delete highlighted.

### Create color palettes
- `/assets/images/guides/branding-settings/color-palettes-create-1.webp`: Workspace-name menu with Branding settings highlighted.
- `/assets/images/guides/branding-settings/color-palettes-create-2.webp`: Color palettes tab with Create color palette highlighted.
- `/assets/images/guides/branding-settings/color-palettes-create-3.webp`: Create color palette dialog with the Brand color picker open.
- `/assets/images/guides/branding-settings/color-palettes-edit-1.webp`: Custom color palette row with its menu open.
- `/assets/images/guides/branding-settings/color-palettes-edit-2.webp`: Update color palette dialog with Name and color fields highlighted.
- `/assets/images/guides/branding-settings/color-palettes-delete-1.webp`: Delete color palette confirmation showing the palette name and Delete button.

### Create watermarks
- `/assets/images/guides/branding-settings/watermarks-open-1.webp`: Workspace-name menu with Branding settings highlighted.
- `/assets/images/guides/branding-settings/watermarks-open-2.webp`: Branding settings with Watermarks highlighted.
- `/assets/images/guides/branding-settings/watermarks-create-1.webp`: Watermarks page with Create watermark highlighted.
- `/assets/images/guides/branding-settings/watermarks-create-2.webp`: Create watermark dialog with Name highlighted.
- `/assets/images/guides/branding-settings/watermarks-create-3.webp`: Named watermark in Create watermark dialog.
- `/assets/images/guides/branding-settings/watermarks-create-4.webp`: Watermarks list showing newly created custom watermark.
- `/assets/images/guides/branding-settings/watermarks-upload-1.webp`: Custom watermark row menu with Edit highlighted.
- `/assets/images/guides/branding-settings/watermarks-upload-2.webp`: Update watermark dialog with Upload watermark highlighted.
- `/assets/images/guides/branding-settings/watermarks-upload-3.webp`: Update watermark dialog showing the uploaded image.
- `/assets/images/guides/branding-settings/watermarks-adjust-1.webp`: Update watermark dialog with Position menu open.
- `/assets/images/guides/branding-settings/watermarks-adjust-2.webp`: Update watermark dialog with Scale landscape highlighted.
- `/assets/images/guides/branding-settings/watermarks-adjust-3.webp`: Update watermark dialog with Scale portrait highlighted.
- `/assets/images/guides/branding-settings/watermarks-adjust-4.webp`: Update watermark dialog with Opacity highlighted.
- `/assets/images/guides/branding-settings/watermarks-adjust-5.webp`: Update watermark dialog with Update watermark highlighted.
- `/assets/images/guides/branding-settings/watermarks-delete-1.webp`: Custom watermark row menu with Delete highlighted.
- `/assets/images/guides/branding-settings/watermarks-delete-2.webp`: Delete watermark dialog with watermark name and Delete highlighted.

### Update contact info
- `/assets/images/guides/branding-settings/contact-info-open-1.webp`: Workspace-name menu with Branding settings highlighted.
- `/assets/images/guides/branding-settings/contact-info-open-2.webp`: Branding settings on Contact info with the three fields visible.
- `/assets/images/guides/branding-settings/contact-info-update-1.webp`: Contact info fields with a business email entered and focus in another field.
- `/assets/images/guides/branding-settings/contact-info-clear-1.webp`: Contact info with the clear icon on a filled Email field highlighted.

### Add social media links
- `/assets/images/guides/branding-settings/social-media-add-1.webp`: Workspace menu with Branding settings highlighted.
- `/assets/images/guides/branding-settings/social-media-add-2.webp`: Social media tab with Your social media fields visible.
- `/assets/images/guides/branding-settings/social-media-add-3.webp`: Social media settings with a username entered in Instagram.
- `/assets/images/guides/branding-settings/social-media-remove-1.webp`: Instagram field with the clear icon highlighted.
- `/assets/images/guides/branding-settings/social-media-links-1.webp`: Shared gallery footer with social media icons highlighted.

### Add legal links
- `/assets/images/guides/branding-settings/legal-info-add-1.webp`: Workspace-name menu with Branding settings highlighted.
- `/assets/images/guides/branding-settings/legal-info-add-2.webp`: Branding settings with Legal info highlighted.
- `/assets/images/guides/branding-settings/legal-info-add-3.webp`: Legal info tab with Your legal info fields visible.
- `/assets/images/guides/branding-settings/legal-info-add-4.webp`: Your legal info with a policy-page URL entered.
- `/assets/images/guides/branding-settings/legal-info-remove-1.webp`: Your legal info with an empty Privacy policy field.
- `/assets/images/guides/branding-settings/legal-info-links-1.webp`: Shared gallery footer with policy links highlighted.

Total: 47 light/dark pairs (94 WebP files).
