# Projects — Guides article map

Group: Projects
Slug: guides/projects/
Sources reviewed: 2026-09-26, diamond-app 702f16c5, diamond-server 1d901c6

## Articles (sidebar order)

### 1. Projects
- File: guides/projects/overview.mdx
- sidebarTitle: Overview
- description: Create a project for each shoot, then rename it, set its cover, or delete it.
- Reader goal: Start a project for a shoot and find their way around it.
- H2 outline:
  - Create a project
  - Open a project
  - Rename a project
  - Set the cover photo
  - Search projects
  - Delete a project
  - Inside a project
- UI strings (spelling reference, verbatim): **Projects**, **New**, **Create project**, **Name**, **Enter project name**, **Open**, **Rename**, **Enter new project name**, **Rename project to**, **Choose photo**, **Upload cover photo**, **Change focal point**, **Done**, **Search project...**, **Delete**, **Delete project**, "Are you sure? This will delete this project and all its photos and galleries. This action cannot be undone.", tabs **Content**, **Gallery shares**, **Tasks**, **Notes**, **Activity**
- Limits to mention: name max 64 characters (`MAX_NAME`); 1000 projects per workspace — "You have reached the maximum number of projects. The maximum is 1000 projects."; search runs at 2+ characters
- Cross-links: /guides/projects/status, /guides/projects/favorites; tabs point to Media folders, Galleries, Gallery shares, Tasks, Notes sections when they exist
- Sources:
  - diamond-app/src/pages/projects/(root)/_layouts/HeaderLayout.jsx (New, search icon, `/` shortcut)
  - diamond-app/src/pages/projects/(root)/_layouts/CreateProjectLayout.jsx
  - diamond-app/src/pages/projects/(root)/_layouts/ProjectsLayout.jsx (card click opens project)
  - diamond-app/src/pages/projects/(root)/_layouts/UpdateProjectCoverFpLayout.jsx
  - diamond-app/src/pages/projects/project/(root)/_layouts/HeaderLayout.jsx (header ⋯ menu, tabs)
  - diamond-app/src/components/project/ProjectOptions.jsx, UpdateProjectName.jsx, UpdateProjectCoverLayout (Content sidebar), DeleteProject.jsx, SearchProject.jsx
  - diamond-app/src/core/project/projectSchema.jsx (MAX 1000, NAME_MAX, search min 2)
  - diamond-app/public/locales/en/features/project.json, pages/projects.json, pages/project.json
  - diamond-app/src/hooks/useSearchShortcut.jsx

### 2. Manage projects by status
- File: guides/projects/status.mdx
- sidebarTitle: Status
- description: Mark a project as Todo, In progress, or Done, then filter and sort the list to find it.
- Reader goal: Track where each shoot is and pull up the right projects fast.
- H2 outline:
  - Set a project's status
  - Filter projects
  - Sort projects
- UI strings (spelling reference, verbatim): **Status**, **No status**, **Todo**, **In progress**, **Done**, **Filter**, **Clear filters**, filter fields **Status**, **Is favorite** (Yes / No), **Created At**, **Updated At** (This week, This month, This quarter, This year), **Sorted by**, **Name**, **Last updated**, **Creation date**, **Ascending**, **Descending**
- Limits to mention: none
- Cross-links: /guides/projects/overview, /guides/projects/favorites
- Sources:
  - diamond-app/src/components/project/ProjectOptions.jsx (Status submenu, radio)
  - diamond-app/src/components/project/ProjectStatusBadge.jsx (status shown on card icon and preview badge)
  - diamond-app/src/pages/projects/(root)/_layouts/ToolbarLayout.jsx (Filter, Sorted by)
  - diamond-server/src/helpers/project-helpers.js (seeded filter fields: Status, Is favorite, Created At, Updated At, plus custom fields)
  - diamond-server/src/helpers/entity-helpers.js (default sort: Creation date, Descending)
  - diamond-app/public/locales/en/features/entity.json (Filter, Clear filters, sort labels, date periods)
  - diamond-app/public/locales/en/features/project.json (status labels)

### 3. Favorites
- File: guides/projects/favorites.mdx
- sidebarTitle: Favorites
- description: Pin up to 10 projects to the sidebar so your active shoots are one click away.
- Reader goal: Keep current shoots at hand without searching.
- H2 outline:
  - Add a project to favorites
  - Open a favorite project
  - Remove a project from favorites
- UI strings (spelling reference, verbatim): **Add to favorites**, **Remove from favorites**, sidebar group **Favorite projects**, sidebar row tooltip **Remove from favorites**, filter **Is favorite**. The stars on the card preview and project header have no tooltip; the strings **Add favorite** / **Remove favorite** belong to an unused variant.
- Limits to mention: 10 favorites — "You can favorite up to 10 projects"
- Cross-links: /guides/projects/overview, /guides/projects/status
- Sources:
  - diamond-app/src/components/project/ProjectOptions.jsx (Add to favorites / Remove from favorites)
  - diamond-app/src/components/project/UpdateProjectFavorite.jsx (star; tooltips Add favorite / Remove favorite)
  - diamond-app/src/components/project/ProjectPreview.jsx (star on hover preview)
  - diamond-app/src/pages/projects/project/(root)/_layouts/HeaderLayout.jsx (star in project header)
  - diamond-app/src/layouts/app/components/AppNavigation.jsx (Favorite projects group; only shown with 1+ favorite)
  - diamond-app/src/core/project/projectSchema.jsx (MAX_FAVORITES 10)
  - diamond-app/public/locales/en/features/project.json, favorite-project.json, layouts/app.json

## Do not document
- Archive a project — no component under diamond-app/src/components/project/
- Duplicate a project — not in ProjectOptions.jsx
- Status board or grouping by status — the list is a single card grid (ProjectEntityInfiniteGrid.jsx)
- Favorites section or tab on the Projects page — favorites only appear in the sidebar group and as a star
- **Learn more** button in the empty state — rendered without a click handler (project.json `project_entity_grid.empty.learn_more_button`)
- Changing the cover from the list card menu — cover is set only from the Content sidebar; the card menu only offers **Change focal point** once a cover exists
- Plan-based project limits — the 1000 cap is fixed, not per plan
- Success toasts for create, status change, and starring — `showSuccessMsg` is off for these; only delete and sidebar unfavorite toast
- **Done** saving the focal point — dragging saves automatically (800 ms debounce, UpdateProjectCoverFp.jsx); **Done** only closes the dialog
- **Upload cover photo** dropzone when a cover already exists — it renders only while the project has no cover

## Open questions
- none
