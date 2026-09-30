# Tasks: Guides article map

Group: Tasks
Slug: guides/tasks/
Sources reviewed: 2026-09-30, diamond-app 58e04146, diamond-server 40635e9

Tasks is a workspace list under **Tasks**. The same tasks also appear on a project's **Tasks** tab and a contact's **Tasks** tab. A task is a description, with an optional due date, project, and contact. Projects, contacts, and notification preferences belong to their own groups.

## Articles (sidebar order)

### 1. Tasks
- File: guides/tasks/overview.mdx
- sidebarTitle: Overview
- description: Create a task for a shoot, then link it, update it, or delete it.
- Reader goal: Write down a piece of shoot work and attach it to the right project or client.
- H2 outline:
  - Create a task
  - Open a task
  - Link a project or contact
  - Delete a task
  - On a project or contact
- UI strings (spelling reference, verbatim): **Tasks**, **New**, **Create task**, **Cancel**, placeholders **What needs to be done?**, **Set due date**, **Select a project**, **Select a contact**, date presets **Today**, **Tomorrow**, **Next week**, **Open**, **Update task**, **Delete**, **Delete task**, "Are you sure? This will delete this task. This action cannot be undone.", empty **No tasks found** / **No tasks found. Create a new task to get started.**, columns **Task**, **Due date**, **Project**, **Contact**, **Actions**, project and contact tab tooltip **New task**, sidebar **Tasks**
- Limits to mention: 5000 tasks per workspace: "You have reached the maximum number of tasks. The maximum is 5000 tasks."; 500 open tasks: "You have reached the maximum number of open tasks. The maximum is 500 open tasks." Both show as an alert in the create dialog.
- Writer notes: There is no title field. The words the photographer types are the description, and the column is labeled **Task**. The form has placeholders and no field labels. **New** is on the Tasks header. The empty state uses **Create task**. Click a row, or choose **Open** from the row ⋯ menu or a right-click, to open **Update task**. Create does not toast success. Update toasts "Task updated successfully". Delete toasts "Task deleted successfully" and shows the description above the confirmation. Due date cannot be in the past (`disablePast` on create and update). The presets are **Today**, **Tomorrow**, and **Next week**. The date, project, and contact controls can be cleared; those resets have no text label. Creating from a project preselects that project. Creating from a contact preselects that contact. The project or contact can still be changed or cleared. The sidebar **Tasks** badge counts open tasks and hides at zero. A project or contact **Tasks** tab badge counts every task on that record, including completed ones. **New task** on the project and contact tab toolbar is an icon on every tab of that overlay, not only the Tasks tab. On a narrow screen the nested Tasks header shows the plus icon without the word **New**. There is no search.
- Cross-links: /guides/tasks/complete, /guides/tasks/filter; project and contact pickers point at Projects and Contacts. The preference **Task due reminder** ("Get reminded one day before a task is due.") lives on the Notifications settings page, not in this group.
- Sources:
  - diamond-app/src/pages/tasks/_layouts/HeaderLayout.jsx (New)
  - diamond-app/src/pages/tasks/_layouts/CreateTaskLayout.jsx (no success toast)
  - diamond-app/src/pages/tasks/_layouts/TasksLayout.jsx (row click opens update)
  - diamond-app/src/pages/projects/project/(root)/_layouts/HeaderLayout.jsx (New task on every project tab; Tasks tab badge)
  - diamond-app/src/pages/projects/project/(root)/_layouts/CreateTaskLayout.jsx (preselects the project)
  - diamond-app/src/pages/contacts/contact/(root)/_layouts/HeaderLayout.jsx
  - diamond-app/src/pages/contacts/contact/(root)/_layouts/CreateTaskLayout.jsx (preselects the contact)
  - diamond-app/src/components/task/CreateTask.jsx, UpdateTask.jsx, DeleteTask.jsx, TaskOptions.jsx, TaskTableColumns.jsx
  - diamond-app/src/core/task/taskSchema.jsx (`MAX: 5000`, `MAX_OPEN: 500`)
  - diamond-app/src/layouts/app/components/AppNavigation.jsx (sidebar badge is `openTaskCount`)
  - diamond-app/public/locales/en/features/task.json, pages/tasks.json, pages/project.json, pages/contact.json, layouts/app.json
  - diamond-app/public/locales/en/integrations/novu.json (`task-due-reminder`)

### 2. Complete a task
- File: guides/tasks/complete.mdx
- sidebarTitle: Complete
- description: Mark a task done, then switch between what is still open and already finished.
- Reader goal: Clear finished work and see what is still due.
- H2 outline:
  - Mark a task complete
  - Show open or completed tasks
  - How open tasks are grouped
- UI strings (spelling reference, verbatim): checkbox **Completed**, **Mark as complete**, **Mark as incomplete**, **Open tasks**, **Completed tasks**, tooltips **Switch to completed tasks**, **Switch to open tasks**, groups **Today**, **Upcoming**, **No due date**, **Open**, **Completed**, due-date text **Today**, "Due {{count}} day ago" / "Due {{count}} days ago", "Due in {{count}} day" / "Due in {{count}} days"
- Limits to mention: 500 open tasks: marking a completed task incomplete toasts "You have reached the maximum number of open tasks. The maximum is 500 open tasks."
- Writer notes: The checkbox and **Mark as complete** / **Mark as incomplete** both toast "Task updated successfully". On the workspace Tasks page the toolbar button is labeled with the list you are looking at. On the open list it reads **Open tasks** (tooltip **Switch to completed tasks**). On the completed list it reads **Completed tasks** (tooltip **Switch to open tasks**). The open list is grouped **Today**, then **Upcoming**, then **No due date**. Overdue tasks sit in **Today**; there is no Overdue group. A due date within the next 7 days reads "Due in N days". A date further out shows the calendar date. The completed workspace list is not grouped. Project and contact task tables have no open/completed toggle. They group the same table into **Open** and **Completed**, with completed tasks included in the tab badge.
- Cross-links: /guides/tasks/overview, /guides/tasks/filter
- Sources:
  - diamond-app/src/components/task/UpdateTaskCompleted.jsx
  - diamond-app/src/components/task/TaskOptions.jsx
  - diamond-app/src/components/task/TaskTableColumns.jsx (`getDueDateGroup` puts `diff <= 0` in Today; helper threshold is 7 days)
  - diamond-app/src/pages/tasks/_layouts/ToolbarLayout.jsx
  - diamond-app/src/pages/tasks/_layouts/TasksLayout.jsx (completed list is `TaskEntityInfiniteTable`, open list is `TaskEntityTable`)
  - diamond-app/src/components/task/TaskTable.jsx (project and contact group by completed)
  - diamond-app/public/locales/en/features/task.json, pages/tasks.json

### 3. Filter and sort tasks
- File: guides/tasks/filter.mdx
- sidebarTitle: Filter
- description: Narrow the task list by date, then sort it by due date or when it changed.
- Reader goal: Pull up the tasks that fall in a stretch of time.
- H2 outline:
  - Filter tasks
  - Sort tasks
- UI strings (spelling reference, verbatim): **Filter**, **Filters**, **Clear filters**, **Due date**, **Created at**, **Updated at**, periods **This week**, **This month**, **This quarter**, **This year**, **Sorted by**, **Due date**, **Last updated**, **Creation date**, **Ascending**, **Descending**
- Limits to mention: none
- Writer notes: Filter and sort exist only on the workspace Tasks page. Project and contact task tabs have neither. A new workspace sorts by **Due date**, **Ascending**. The same default is the app fallback when sorting is missing. The filter menu only renders date fields: **Due date**, **Created at**, and **Updated at**. Each offers **This week**, **This month**, **This quarter**, and **This year**. **Project** and **Contact** are seeded as filterable text fields, and the menu drops text fields, so they never appear. **Description** and **Completed** are not filterable. Open versus completed is the toolbar in the Complete article. There is no columns control on Tasks. Filter and sort do not toast success.
- Cross-links: /guides/tasks/overview, /guides/tasks/complete
- Sources:
  - diamond-app/src/pages/tasks/_layouts/ToolbarLayout.jsx
  - diamond-app/src/components/entity/UpdateEntityFiltering.jsx (date, boolean, and option fields only; text fields return null)
  - diamond-app/src/components/entity/UpdateEntitySorting.jsx (task sort options)
  - diamond-server/src/helpers/task-helpers.js (`getInitialTaskFields`)
  - diamond-server/src/helpers/entity-helpers.js (Due date, Ascending)
  - diamond-app/src/components/entity/entityUtils.jsx (`DEFAULT_ENTITY_SORTING` for tasks)
  - diamond-app/public/locales/en/features/entity.json

## Do not document
- **Learn more** on every empty state: rendered without a click handler (`TaskEntityTable.jsx`, `TaskEntityInfiniteTable.jsx`, project and contact `TasksLayout.jsx`)
- A success toast for creating a task: the string "Task created successfully" exists, and create layouts never pass `showSuccessMsg` (`CreateTask.jsx` defaults it to false)
- A task title, priority, or assignee: the model stores `_assignee` as the creator, and the app forms and `taskMapper.jsx` never show it
- Search on any task list
- Filter, sort, or a columns picker on a project or contact Tasks tab
- Custom fields or a columns menu for tasks: **Custom fields** settings cover projects and contacts only (`src/pages/settings/entity/`)
- Filtering by **Project**, **Contact**, **Description**, or **Completed**: description and completed are not filterable; project and contact are text fields the filter menu does not render
- An Overdue group: overdue rows are inside **Today**
- Favorites for tasks: sidebar favorites are projects and contacts only
- A client-facing task page: no task surface in diamond-site
- Plan-based task limits: 5000 and 500 are fixed in `TaskRules`
- Description length (500), the required-description message, and the profanity check: field validation, not a planning limit
- Keyboard shortcuts: none on these pages
- A task preview card: `src/components/task/` has tables, badges, and dialogs only

## Open questions
- none
