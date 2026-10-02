# Media folders: Guides article map

Group: Media folders
Slug: guides/media-folders/
Sources reviewed: 2026-09-26, diamond-app 702f16c5, diamond-server 1d901c6

Media folders live only inside a project's Content tab: the left sidebar row **Media folders**, then the folder grid. Photos inside a folder belong to this group. Galleries, gallery shares, watermarks, tasks, and notes are named here and documented in their own groups.

## Articles (sidebar order)

### 1. Media folders
- File: guides/media-folders/overview.mdx
- sidebarTitle: Overview
- description: Create a media folder to hold a shoot's photos, then rename, duplicate, or delete it.
- Reader goal: Start a folder for a shoot and find it again from the project.
- H2 outline:
  - Where media folders live
  - Create a media folder
  - Open a media folder
  - Rename a media folder
  - Duplicate a media folder
  - Delete a media folder
  - Inside a media folder
- UI strings (spelling reference, verbatim): **Media folders**, **New**, **Create media folder**, **Name**, **Enter folder name**, **Watermark (optional)**, **Select a watermark**, **System watermarks**, **Your watermarks**, **Enable manual sorting**, **Cancel**, **Create folder**, **Open**, **Rename**, **Enter new folder name**, **Rename folder to**, **Duplicate**, **Duplicate media folder**, **Duplicate folder**, watermark label on duplicate **Watermark**, **Delete**, **Delete folder**, "Are you sure? This will delete this folder and all its photos. This action cannot be undone.", empty **No media folders found** / **Create folder**, sidebar **Limit reached: {{count}}/{{limit}}**, hover preview **Watermarked**, **Photos:**, **Storage:**, **Updated at:**, **Created at:**
- Limits to mention: 25 folders per project: "You have reached the maximum number of media folders. The maximum is {{max}} folders." Name max 64: "Media folder name cannot exceed {{max}} characters", plus "Please enter a media folder name", "Media folder name contains invalid characters", "Media folder name contains inappropriate language". Duplicate stops above 500 photos: "This folder has too many photos to duplicate. The maximum is {{max}} photos." Duplicate can also show "Your photo storage is full. Upgrade your plan or delete photos to free space."
- Writer notes: **New** is on the folder-grid header; the Content sidebar uses an icon-only plus on the **Media folders** row; the empty state uses **Create folder**. The grid card has no ⋯ menu: right-click, or click the card to open. The sidebar row has a hover ⋯ menu and right-click. Duplicate starts with a blank name and no watermark selected; it copies the photos into the new folder. Manual sorting defaults to on; point at Sort for the modes. Create, rename, and duplicate do not toast success. Delete toasts "Folder deleted successfully". Folders are listed oldest first and cannot be reordered. Choosing a watermark is documented here; creating one belongs to Watermarks.
- Cross-links: /guides/media-folders/upload, /guides/media-folders/sort, /guides/media-folders/view, /guides/media-folders/download, /guides/media-folders/organize; Galleries (a gallery picks folders from its own toolbar); Gallery shares (the only place a client sees these photos); Watermarks
- Sources:
  - diamond-app/src/pages/projects/project/project-content/(root)/ProjectContentPage.jsx
  - diamond-app/src/components/photo-folder/PhotoFolderList.jsx, PhotoFolderOptions.jsx, CreatePhotoFolder.jsx, DuplicatePhotoFolder.jsx, DeletePhotoFolder.jsx, UpdatePhotoFolderName.jsx
  - diamond-app/src/core/photo-folder/photoFolderSchema.jsx, diamond-app/src/core/project/projectSchema.jsx (MAX_PHOTO_FOLDERS: 25)
  - diamond-app/public/locales/en/features/photo-folder.json, pages/photo-folders.json

### 2. Upload photos
- File: guides/media-folders/upload.mdx
- sidebarTitle: Upload
- description: Add photos to a media folder.
- Reader goal: Get a set of photos into the folder they have open.
- H2 outline:
  - Upload photos
  - Skip or replace duplicates
  - File types and size
  - When an upload is blocked
- UI strings (spelling reference, verbatim): **Upload**, **Upload photos**, **Drag and drop photos here to upload**, **Browse photos**, **Skip duplicates** / **Skip**, **Replace duplicates** / **Replace**, "Up to {{maxBatch}} photos at a time, max {{maxSize}} per file.", queue badges **Pending**, **Added**, **Uploading**, **Finished**, **Canceled**, **Error**, **Aborted**, **Skipped**, **Replaced**, **Invalid**, **Invalid file**, **Cancel upload**, **Retry failed**
- Limits to mention: 100 MB per file (formatBytes → "100 MB"); JPEG, PNG, and WebP only: "Content type is invalid". Auto-sort folders hold 2,500 photos: "This folder has too many photos. The maximum is {{max}} photos." Manual-sort folders hold 500 (the create checkbox says "Manual sorting supports up to {{max}} photos."). Storage full: "Your photo storage is full. Upgrade your plan or delete photos to free space."
- Writer notes: **Upload** opens an overlay and returns to the folder on close. Default duplicate behavior is **Skip**. Uploads are sent in groups of 50 automatically; do not write that as a limit the photographer has to manage. The storage sentence does not include a gigabyte number; leave plan sizes out of this article. Do not mention the 15,000 px processing cap.
- Cross-links: /guides/media-folders/overview, /guides/media-folders/sort
- Sources:
  - diamond-app/src/pages/projects/project/project-content/upload-photo-folder/UploadPhotosPage.jsx
  - diamond-app/src/components/photo/UploadPhoto.jsx
  - diamond-app/src/core/photo/photoSchema.jsx, diamond-app/src/core/photo-folder/photoFolderSchema.jsx
  - diamond-app/public/locales/en/features/photo.json, pages/upload-photos.json

### 3. Sort photos
- File: guides/media-folders/sort.mdx
- sidebarTitle: Sort
- description: Drag photos into order, or switch the folder to auto sorting by name or date.
- Reader goal: Control the order clients will see.
- H2 outline:
  - Sort photos by hand
  - Sort by name, date, or random
  - Switch to auto sorting
  - Switch back to manual sorting
- UI strings (spelling reference, verbatim): **Manual sorting**, **Name**, **Date**, **Ascending**, **Descending**, **Random**, **Auto sorting**, **Sorted by {{sortBy}}**, **Enable manual sorting**, **Switch to auto sorting**, **Continue**, **Cancel**. Enable body: "Enable drag-and-drop manual sorting for this folder. Manual sorting is only recommended for folders with fewer than {{maxPhotos}} photos due to performance limitations." Switch-to-auto body: "Switch to auto sorting for better performance with no photo limits. You can still sort by name, upload date and creation date."
- Limits to mention: manual sorting max 500: "This folder has too many photos for manual sorting. The maximum is {{max}} photos." Auto sorting max 2,500. New folders start in manual sorting; new photos are added at the end of that order. Stored auto sort, used after the switch, defaults to **Name** + **Ascending**.
- Writer notes: Drag handles exist only while manual sorting is on. Name, Date, and Random in manual mode reorder the folder and leave it manual. No success toast. Use the menu label **Date**. The switch-to-auto sentence mentions upload date and creation date, but the menu only offers **Name** and **Date** (`creationDate`). Leave upload date out as its own sort. See Open questions.
- Cross-links: /guides/media-folders/overview, /guides/media-folders/upload
- Sources:
  - diamond-app/src/components/photo-folder/UpdatePhotoFolderSorting.jsx
  - diamond-app/src/components/photo/PhotoSortableGrid.jsx, PhotoGridItem.jsx
  - diamond-app/public/locales/en/features/photo-folder.json (`update_photo_folder_sorting`)
  - diamond-server/src/models/photo-folder-model.js

### 4. View photos
- File: guides/media-folders/view.mdx
- sidebarTitle: View
- description: Find a photo in a folder and open it full screen to check its file info.
- Reader goal: Find one photo and see what the file is.
- H2 outline:
  - Search photos
  - Open a photo
  - Quick view
  - File info
- UI strings (spelling reference, verbatim): **Search photo...**, dialog heading **Photos**, empty **No photos found**, **Open**, **Quick view**, **Copy filename**, toast **Filename copied successfully**, viewer tooltips **Close**, **Previous photo**, **Next photo**, **Play slideshow** / **Pause slideshow**, **Zoom in**, **Zoom out**, **Reset**, **Info**, panel **File info**, sections **Original file**, **Web optimized file**, **Exposure triangle**, **Camera & lens**, status **Processing**, **Processed**, **Couldn't process photo**
- Limits to mention: search runs when the box is empty or has at least 2 characters; max search length 100
- Writer notes: `/` opens search unless a photo is already open or focus is in a field. A single click selects the photo (that belongs in Organize). Double-click, **Open**, or Enter on a focused grid opens the viewer. Space quick-views. Arrow keys move the highlight. Slideshow advances about every 5 seconds. File-info sections hide when empty. **Back to media folder** is the load-error path, not a normal control. Search does not toast "Search completed".
- Cross-links: /guides/media-folders/download, /guides/media-folders/organize
- Sources:
  - diamond-app/src/components/photo/SearchPhoto.jsx, PhotoOptions.jsx, PhotoGridItem.jsx, usePhotoGridKeyboard.jsx
  - diamond-app/src/pages/projects/project/project-content/photo-folder/photo/_layouts/PhotoInfoLayout.jsx
  - diamond-app/public/locales/en/features/photo.json, pages/photo.json

### 5. Download photos
- File: guides/media-folders/download.mdx
- sidebarTitle: Download
- description: Download the web-optimized file or the original for one photo.
- Reader goal: Save the file they need without grabbing the wrong version.
- H2 outline:
  - Download one photo
  - Choose the file
  - When a download is blocked
- UI strings (spelling reference, verbatim): **Download**, **Choose photo file**, **Web optimized photo file**, **Original photo file**, **Cancel**, **Download photo**, "You've used this month's download bandwidth. Upgrade your plan or wait until next month."
- Limits to mention: one photo at a time. Bandwidth follows the plan; the message does not name a number. No success toast.
- Writer notes: The same dialog opens from the photo menu and from the viewer. The selection bar has no download action. Web optimized is the default.
- Cross-links: /guides/media-folders/view; Billing or Plans when that section exists
- Sources:
  - diamond-app/src/components/photo/DownloadPhoto.jsx
  - diamond-app/public/locales/en/features/photo.json (`download_photo`)

### 6. Organize photos
- File: guides/media-folders/organize.mdx
- sidebarTitle: Organize
- description: Select photos, then copy them to another folder, move them, or delete them.
- Reader goal: Put photos in the right folder, or remove the ones they do not want.
- H2 outline:
  - Select photos
  - Copy photos
  - Move photos
  - Delete photos
- UI strings (spelling reference, verbatim): **{{count}} selected**, **Copy to**, **Move to**, **Delete**, **Select a folder to copy to**, **Select a folder to move to**, **Search folder...**, empty **No folders available** / **No other folders found in this project.** / **Create folder**, toasts **Photo is being copied**, **Photos are being copied**, **Photo is being moved**, **Photos are being moved**, partial **Copied {{count}} of {{expected}} photos** and **Moved {{count}} of {{expected}} photos**, **Delete photo**, "Are you sure? This will delete this photo. This action cannot be undone.", **Delete selected photos**, "Are you sure? This will delete {{count}} photo(s). This action cannot be undone.", **Photo deleted successfully**, **Photos deleted successfully**
- Limits to mention: copy, move, and delete each stop at 500 at once: "You have selected {{count}} photos, but only {{max}} can be copied at once. Reduce your selection." (move uses "moved", delete uses "deleted"). The destination folder still has the 2,500 / 500 photo cap. Copy and move can hit "Your photo storage is full. Upgrade your plan or delete photos to free space." Cmd/Ctrl+A selects all only while manual sorting is on.
- Writer notes: A plain click selects. Cmd/Ctrl-click and Shift-click change the selection. The count button clears it. Copy and move are command dialogs with no **Cancel** button; picking a folder runs the action. Over the batch cap, the action does not run. Delete of one photo and of a selection both toast.
- Cross-links: /guides/media-folders/overview, /guides/media-folders/view, /guides/media-folders/sort
- Sources:
  - diamond-app/src/components/photo/SelectedPhotoOptions.jsx, CopyPhoto.jsx, CopyManyPhotos.jsx, MovePhoto.jsx, MoveManyPhotos.jsx, DeletePhoto.jsx, DeleteManyPhotos.jsx
  - diamond-app/src/core/photo-folder/photoFolderSchema.jsx (MAX_COPY_BATCH, MAX_DELETE_BATCH)

## Do not document
- **Learn more** on the empty folder grid and both photo grids: the button has no click handler (diamond-app/src/pages/projects/project/project-content/photo-folders/_layouts/PhotoFoldersLayout.jsx, diamond-app/src/components/photo/PhotoInfiniteGrid.jsx, diamond-app/src/components/photo/PhotoSortableGrid.jsx)
- A workspace-sidebar entry, a folder search, a folder filter, a folder sort control, or a list view: the folder page is a grid only
- Reordering media folders: the list is createdAt ascending in diamond-app/src/core/photo-folder/photoFolderSlice.jsx
- Changing the watermark after the folder exists: watermark is only on create and duplicate
- Renaming a photo: diamond-app/src/components/photo/PhotoOptions.jsx has no rename
- Downloading a selection: the selection bar is copy, move, and delete
- Cmd/Ctrl+A on an auto-sorted folder: select-all is passed only for the manual grid
- Upload date as its own sort option: menu key `creation_date` is labeled **Date**
- Success toasts for create, rename, duplicate, sort, download, and search: `showSuccessMsg` stays off
- Client browsing of a media folder outside a gallery share: diamond-site shows folder photos only at `/g/:galleryShareId`
- Favorites, tasks, and notes on the folder page: they are project tabs or gallery-share behavior
- The gallery toolbar picker labeled **Media folder** / **Media folders**: owned by Galleries
- Plan gigabyte tables: the UI only says storage is full or bandwidth is used up
- The 25-folder cap as a per-plan limit: it is fixed per project
- The 15,000 px processing cap: a safety ceiling above a normal camera file (`PhotoRules.MAX_WIDTH` / `MAX_HEIGHT`). Do not mention it. The 100 MB file size stays

## Open questions
- What **Date** sorts by. The field is `creationDate`, which defaults to now on the photo model, and the switch-to-auto dialog mentions both upload date and creation date. The menu only shows **Date**. The article should keep the label **Date** until product confirms whether that is the camera date.
