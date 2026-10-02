# Personal settings: Guides article map

Group: Personal settings
Slug: guides/personal-settings/
Sources reviewed: 2026-10-01, diamond-app 58e04146, diamond-server 40635e9, diamond-site 9ff5fa8
Status: Approved by the user, written, and voice-reviewed on 2026-10-01. Validation and broken-link checks passed.

## Scope and article decisions

This group covers the settings sidebar's **Personal** group: **General**, **Appearance**, and **Notifications**. **General** opens the page headed **Personal settings**. The entry is **Personal settings** in the workspace-name menu at the top of the app sidebar, not the user-name menu at the bottom. The routes are `/settings/user`, `/settings/appearance`, and `/settings/notifications`; `/settings` opens General.

Workspace Settings is out of scope, including workspace General, Branding, Plans, Billing, and Custom fields. The footer's separate account modal is an unverified external surface, not part of these three pages. The notification inbox is also a separate surface.

Five articles fit the existing 3–6 article convention. Overview provides entry and orientation. Profile has its own upload, crop, and removal dialogs. Language, country, and timezone form one job on General: choose the account's local settings. Appearance has its own page. Notifications has its own page; its fixed business-hours switch is a single-click change folded into that article. Per-notification-type switches are excluded because their current save callback is defective.

Settings are preferences, not objects to create, rename, or delete. Do not force those headings into Overview. Removing a profile photo belongs in Profile. The approved **Personal settings** group belongs inside the existing **Settings** navigation wrapper.

Research used current source files to verify the app's stale graph results. The reviewed workspace-menu locale has an uncommitted change; the labels below reflect that working tree.

## Articles (sidebar order)

### 1. Personal settings
- File: guides/personal-settings/overview.mdx
- sidebarTitle: Overview
- description: Find the personal settings that help you work comfortably in Shootstack.
- Reader goal: Find the right page for a personal preference and return to the workspace afterward.
- H2 outline:
  - Open personal settings
  - Find the setting you need
  - Return to your workspace
- UI strings (spelling reference, verbatim): **Personal settings**, **Settings**, **Personal**, **General**, **Appearance**, **Notifications**
- Limits to mention: none
- Writer notes: Start from the workspace name at the top of the app sidebar, then choose **Personal settings**. Explain the three pages in a short list and link to the four task articles. **General** holds profile details, language, country, and timezone. **Appearance** holds the app theme and color. **Notifications** holds notification preferences. Clicking the **Settings** header returns to app home. Keep detailed edits in the task articles. Do not direct readers to the footer account menu for these pages. Profile and local settings belong to the account; appearance is saved in this browser. Do not claim every preference is synchronized across devices. Workspace settings and Branding are separately owned; name them only when needed to distinguish the destination, and add links once those sections exist.
- Cross-links: /guides/personal-settings/profile, /guides/personal-settings/language-region, /guides/personal-settings/appearance, /guides/personal-settings/notifications
- Sources:
  - diamond-app/src/core/app/appRouter.jsx
  - diamond-app/src/constants/links.js
  - diamond-app/src/layouts/app/components/AppNavigation.jsx
  - diamond-app/src/layouts/app/components/WorkspaceSettingsMenu.jsx
  - diamond-app/src/layouts/app/components/UserSettingsMenu.jsx
  - diamond-app/src/layouts/settings/components/SettingsNavigation.jsx
  - diamond-app/public/locales/en/layouts/app.json
  - diamond-app/public/locales/en/layouts/settings.json
  - diamond-app/public/locales/en/pages/user-settings.json

### 2. Update your profile
- File: guides/personal-settings/profile.mdx
- sidebarTitle: Profile
- description: Keep your name and profile photo up to date.
- Reader goal: Update the name and photo shown for the account.
- H2 outline:
  - Change your name
  - Upload or replace your profile photo
  - Remove your profile photo
- UI strings (spelling reference, verbatim): **General**, **Personal settings**, **First name**, **Enter first name**, **Last name**, **Enter last name**, **Profile photo (optional)**, **Upload photo**, **Crop photo**, **Zoom**, **Apply**, **Cancel**, **Remove photo**, **Delete user profile photo**, **Delete**; confirmation "Are you sure? This will remove the user profile photo. This action cannot be undone."
- Limits to mention: Original photo up to 10 MB (10,000,000 bytes); JPG/JPEG, PNG, or WEBP. Exact validation references: "Size cannot exceed {{max}}" (10 MB), "Content type is invalid". State the size limit in plain words, with exporting a smaller copy as the next step; do not paste errors. Do not mention the 15,000-pixel side cap.
- Writer notes: Names are inline fields that save after typing stops; there is no Save button. **Upload photo** opens file selection even when replacing a photo. A valid image opens **Crop photo**; position the crop, adjust **Zoom** if needed, and click **Apply**. **Cancel** discards the selection. Original-file validation happens before cropping. **Remove photo** appears when a photo exists and opens the confirmation; place a warning before the removal steps. Photo changes use the account photo. Do not promise changes to client-facing branding or gallery photos. The visible helper text says JPG/PNG while the actual accept list and validation also support WEBP; copy labels verbatim, but describe formats from the wired validation. Success toasts and numeric crop-slider values are reference details, not article content.
- Cross-links: /guides/personal-settings/overview, /guides/personal-settings/language-region
- Sources:
  - diamond-app/src/pages/settings/user/UserSettingsPage.jsx
  - diamond-app/src/pages/settings/user/_layouts/ProfileLayout.jsx
  - diamond-app/src/pages/settings/user/_layouts/DeleteUserProfileImageLayout.jsx
  - diamond-app/src/components/user/UpdateUserFirstName.jsx
  - diamond-app/src/components/user/UpdateUserLastName.jsx
  - diamond-app/src/components/user/UpdateUserProfileImage.jsx
  - diamond-app/src/components/user/DeleteUserProfileImage.jsx
  - diamond-app/src/components/_common/ImageCropper.jsx
  - diamond-app/src/core/user/userSchema.jsx
  - diamond-app/src/utils/image.js
  - diamond-app/public/locales/en/features/user.json
  - diamond-app/public/locales/en/schemas/user.json

### 3. Set your language and region
- File: guides/personal-settings/language-region.mdx
- sidebarTitle: Local settings
- description: Choose the language and local settings Shootstack uses for your account.
- Reader goal: Use the preferred language and keep account location settings current.
- H2 outline:
  - Change your preferred language
  - Choose your country
  - Set your timezone
- UI strings (spelling reference, verbatim): **General**, **Personal settings**, **Language & region**, **Preferred language**, **Select a preferred language**, **Country**, **Select a country**, **Countries**, **Search country...**, **No country found**, **Timezone**, **Select a timezone**, **Search timezone...**, **No timezone found**, **Other**
- Limits to mention: none
- Writer notes: All three controls are on General and save on selection, without a Save button. The language picker offers English, Dutch, German, and French; native option names and English descriptions come from `Intl.DisplayNames`, not fixed locale labels. Do not invent a fifth language or promise translation of client gallery content. Country is searchable. Timezone is searchable and shows zones for the chosen country first, then all zones under **Other**; choices include UTC offsets where available. Choosing a country does not change the timezone automatically. These are account preferences, separate from workspace region. The app uses them when configuring language and date display, but do not promise every date format is controlled by country alone, or that every date-only field shifts when timezone changes. Do not connect timezone to notification business hours until the open question below is resolved.
- Cross-links: /guides/personal-settings/overview, /guides/personal-settings/profile
- Sources:
  - diamond-app/src/pages/settings/user/_layouts/LocaleLayout.jsx
  - diamond-app/src/pages/settings/user/_layouts/TimezoneLayout.jsx
  - diamond-app/src/components/user/UpdateUserLocale.jsx
  - diamond-app/src/components/user/UpdateUserCountry.jsx
  - diamond-app/src/components/user/UpdateUserTimezone.jsx
  - diamond-app/src/components/_common/CountryPicker.jsx
  - diamond-app/src/core/user/userSchema.jsx
  - diamond-app/src/core/user/userHooks.jsx
  - diamond-app/src/core/app/appHooks.jsx
  - diamond-app/src/lib/dayjs.js
  - diamond-server/src/api/app/user/user-validations.js
  - diamond-server/src/models/user-model.js
  - diamond-server/src/config/rest/locales.js
  - diamond-server/src/config/rest/timezones.js
  - diamond-app/public/locales/en/pages/user-settings.json
  - diamond-app/public/locales/en/features/user.json

### 4. Change appearance
- File: guides/personal-settings/appearance.mdx
- sidebarTitle: Appearance
- description: Choose the app's theme and accent color for your browser.
- Reader goal: Adjust the app's appearance in the current browser.
- H2 outline:
  - Choose a theme
  - Choose a color
- UI strings (spelling reference, verbatim): **Personal**, **Appearance**, **Theme**, **Light**, **Dark**, **System**, **Color**, **Neutral**, **Slate**, **Taupe**, **Mauve**, **Mist**, **Olive**
- Limits to mention: none
- Writer notes: Selecting a theme or color applies directly. **System** uses the device's light or dark preference when the theme is applied; avoid promising continuous live tracking of operating-system changes. Preferences persist in this browser's local storage, not on the account or workspace. Despite the page's workspace wording, this does not change other members' appearance or gallery design. There is no custom color or hex-value input. Gallery design is separately owned and should be linked if the reader wants to change the gallery clients see.
- Cross-links: /guides/personal-settings/overview, /guides/galleries/design
- Sources:
  - diamond-app/src/pages/settings/appearance/AppearanceSettingsPage.jsx
  - diamond-app/src/pages/settings/appearance/_layouts/ThemeLayout.jsx
  - diamond-app/src/components/app/UpdateAppTheme.jsx
  - diamond-app/src/components/app/UpdateAppColor.jsx
  - diamond-app/src/core/root/rootProvider.jsx
  - diamond-app/src/hooks/useTheme.jsx
  - diamond-app/src/constants/localStorage.js
  - diamond-app/src/layouts/app/components/WorkspaceSettingsMenu.jsx
  - diamond-app/public/locales/en/features/app.json
  - diamond-app/public/locales/en/pages/appearance-settings.json
  - diamond-app/public/locales/en/layouts/app.json

### 5. Choose notification preferences
- File: guides/personal-settings/notifications.mdx
- sidebarTitle: Notifications
- description: Choose how you receive notifications and keep them within business hours.
- Reader goal: Choose account notification channels and enable the fixed business-hours schedule.
- H2 outline:
  - Choose how you receive notifications
  - Limit notifications to business hours
- UI strings (spelling reference, verbatim): **Personal**, **Notifications**, **Email notifications**, **In-app notifications**, **Only receive notifications during business hours**; schedule description "You will only receive notifications Monday - Friday from 8:00 AM to 6:00 PM." Reference-only excluded workflow labels: **Email**, **In-app**, **Task due reminder**, **Gallery download**, **Review received**, **Favorites selected**, **Favorite photo comment**
- Limits to mention: Business-hours schedule is fixed to Monday–Friday, 8:00 AM–6:00 PM, with weekends excluded. No custom days or hours. The schedule description above is the exact UI reference, not text to paste into a Note. The schedule timezone is unverified; do not add a timezone or claim it follows the General page's setting.
- Writer notes: Open Notifications under Personal, then change **Email notifications** or **In-app notifications** to choose account-wide channels. The business-hours switch updates a fixed weekly schedule; fold it into this article rather than creating a one-toggle article. Preferences save directly without a Save button. Global switches are disabled without a global preference object; the schedule switch is disabled without a schedule. Do not promise defaults for a new account. The five visible workflow rows are currently excluded from instructional steps because their callbacks do not pass the mutation's expected values. Record this in the map, not as developer detail in the customer article. Do not infer how delayed notifications are delivered afterward or promise the channel settings control client gallery share emails. Inbox read, archive, and snooze actions belong to a separate Notifications article when planned; no placeholder internal link.
- Cross-links: /guides/personal-settings/overview, /guides/tasks/complete; Notifications inbox when its own section exists
- Sources:
  - diamond-app/src/pages/settings/notifications/NotificationsSettingsPage.jsx
  - diamond-app/src/pages/settings/notifications/_layouts/PreferencesLayout.jsx
  - diamond-app/src/integrations/novu/NovuGlobalPreferences.jsx
  - diamond-app/src/integrations/novu/NovuSchedulePreferences.jsx
  - diamond-app/src/integrations/novu/NovuWorkflowPreferences.jsx
  - diamond-app/src/integrations/novu/novuHooks.jsx
  - diamond-app/src/integrations/novu/NovuProvider.jsx
  - diamond-server/src/lib/novu.js
  - diamond-server/src/api/app/user/user-jobs.js
  - diamond-app/public/locales/en/pages/notifications-settings.json
  - diamond-app/public/locales/en/integrations/novu.json

## Do not document
- Workspace General, Branding, Plans, Billing, or Custom fields: explicitly out of scope; separate sidebar group in `diamond-app/src/layouts/settings/components/SettingsNavigation.jsx` and `public/locales/en/layouts/settings.json`.
- Per-notification-type changes as working: both workflow switches call `handleUpdatePreferences` with one object, but the handler expects three positional arguments; the mutation then receives a wrapper without `update()`. Verified in `diamond-app/src/integrations/novu/NovuWorkflowPreferences.jsx` and `novuHooks.jsx`. Recheck after a product fix before expanding the notification article.
- Custom business hours, a day selector, per-day time ranges, or a selected-timezone guarantee: `diamond-app/src/integrations/novu/NovuSchedulePreferences.jsx` exposes one fixed-schedule switch; `novuHooks.jsx` sends no timezone. The server's `src/lib/novu.js` does not establish a timezone mapping.
- Account email/password changes, two-factor authentication, connected accounts, or deleting the account as actions on General: none are mounted by `diamond-app/src/pages/settings/user/UserSettingsPage.jsx`. The footer's Clerk account modal is a different surface with unverified third-party labels; see Open questions, rather than claiming these capabilities are absent everywhere.
- Referral, specialties, onboarding status, or resetting setup from General: components exist but are not mounted in `diamond-app/src/pages/settings/user/UserSettingsPage.jsx` and its `_layouts/`.
- Creating, renaming, or deleting a personal-settings record: `diamond-app/src/pages/settings/{user,appearance,notifications}/` renders preferences, not an object list. Photo removal is the only deletion covered here.
- A separate Save button, successful-save toasts, or debounce timing as steps: `diamond-app/src/components/user/UpdateUser*.jsx` saves inline and suppresses success messages by default; the appearance and Novu controls apply directly.
- Name length, allowed characters, profanity checks, country-code length, timezone-string length, or photo filename validation: field validation from `diamond-app/src/core/user/userSchema.jsx` and `public/locales/en/schemas/user.json`, not planning limits.
- The 15,000-pixel profile-photo cap: a safety ceiling in `userSchema.jsx`, above a normal photo. The 10 MB size limit stays.
- Plan-based personal-setting quotas, the backend user cap, or update request rate limits: no plan gate is wired to these personal pages. `diamond-server/src/models/user-model.js` and `src/api/app/user/user-limits.js` hold operational rules, not guide topics.
- Appearance synchronization across accounts/devices, a shared workspace appearance, a custom accent color, or live tracking of OS-theme changes: `diamond-app/src/hooks/useTheme.jsx` uses browser-local storage and reads the OS preference without a change listener; `src/components/app/UpdateAppColor.jsx` exposes six choices.
- Client-facing gallery design or branding changes through Appearance: those controls belong to Galleries and Branding. Personal settings has no viewer route in `diamond-site/src/core/app/appRouter.jsx`; gallery appearance comes from `diamond-site/src/core/gallery/galleryProvider.jsx`.
- Inbox filters, reading, archiving, snoozing, and notification-opening actions: separate drawer owned by `diamond-app/src/layouts/app/components/AppNotifications.jsx` and `src/integrations/novu/{NovuInbox,NotificationOptions}.jsx`.
- Changing country as an automatic timezone change: `diamond-app/src/components/user/UpdateUserCountry.jsx` updates only country; `UpdateUserTimezone.jsx` has a separate selection.

## Open questions
- Which timezone governs the fixed notification business-hours schedule? The reviewed app/server code does not map the account timezone to the schedule. Resolve before describing local-time behavior; the existing label and fixed days/hours can be referenced without a timezone claim.
- Should the per-workflow notification callback be corrected before writing its steps? This map excludes those steps until a fix is verified; no app code change is authorized by this documentation-planning request.
- The photo helper says JPG/PNG while the wired picker and schema accept WEBP too. The article can accurately use the wired formats, but the product copy mismatch remains to reconcile.
- Should the separate footer account modal receive its own future Guides scope? Shootstack source only proves the `UserButton` entry with `userProfileMode='modal'` in `diamond-app/src/layouts/app/components/UserSettingsMenu.jsx`. Its email/security/deletion controls and labels have not been verified and are excluded from this map.

## Writing and voice review record

All five articles were written on 2026-10-01 using a fresh, source-backed research pass for each article. Each article then had a separate fresh voice-review reader who saw only the tone guide, copy rules, and that page.

| Page | Reader findings by quality | Applied |
| --- | --- | --- |
| Overview | Natural: awkward wording when General opens. Professional/Natural: vague "local settings". | 2. Used active wording and named language, country, and timezone explicitly. |
| Profile | No findings. | 1 sibling-consistency edit to use the same opening sentence as Overview. |
| Language and region | No findings. | 0. |
| Appearance | Natural: "workspace-name menu" was awkward spoken wording. | 1. Changed it to "click the workspace name". |
| Notifications | No findings. | 0. |

All descriptions and intros were retained during voice review. During drafting, the Appearance description changed from "Choose a theme and accent color that suit how you work." to "Choose the app's theme and accent color for your browser." The article brief above matches the final description.

All controls in bold were checked against the current English locale files. The section is registered under Settings in approved order, Overview first. The generated app help catalog added exactly five entries and preserved the existing entries.

Verification: `npm run validate` passed, including the catalog check, guide lint with zero warnings, and Mintlify build validation. `npm run broken-links` passed with no broken links. `git diff --check` passed. No commit or deployment was made.

Remaining non-screenshot TODO: verify which timezone the notification service uses for business hours. The notification article includes an internal comment and makes no timezone claim. The broken per-workflow switches remain excluded.

## Screenshots to capture

Each entry needs the listed light PNG and a matching `-dark.png` version. These 11 pairs are commented placeholders; no screenshots have been captured in this writing task.

### Overview
- `/assets/images/guides/personal-settings/overview-open-1.png`: Workspace menu with Personal settings highlighted.
- `/assets/images/guides/personal-settings/overview-open-2.png`: Personal settings page with General selected and profile details visible.

### Profile
- `/assets/images/guides/personal-settings/profile-open-1.png`: Workspace menu with Personal settings highlighted.
- `/assets/images/guides/personal-settings/profile-open-2.png`: General settings with profile details visible.

### Language and region
- `/assets/images/guides/personal-settings/language-region-open-1.png`: Workspace menu with Personal settings highlighted.
- `/assets/images/guides/personal-settings/language-region-open-2.png`: General page with Language & region and Timezone visible.

### Appearance
- `/assets/images/guides/personal-settings/appearance-theme-1.png`: Workspace menu with Personal settings highlighted.
- `/assets/images/guides/personal-settings/appearance-theme-2.png`: Settings sidebar with Appearance highlighted under Personal.
- `/assets/images/guides/personal-settings/appearance-theme-3.png`: Appearance page with the Theme section highlighted.

### Notifications
- `/assets/images/guides/personal-settings/notifications-channels-1.png`: Workspace menu with Personal settings highlighted.
- `/assets/images/guides/personal-settings/notifications-channels-2.png`: Settings sidebar with Notifications selected under Personal.
