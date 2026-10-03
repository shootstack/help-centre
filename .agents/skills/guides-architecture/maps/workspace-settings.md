# Workspace settings: Guides article map

Group: Workspace settings
Slug: guides/workspace-settings/
Sources reviewed: 2026-10-01, diamond-app 58e04146, diamond-server 40635e9, diamond-site 9ff5fa8
Status: Approved by the user, written, and voice-reviewed on 2026-10-01. Validation and broken-link checks passed.

## Scope and article decisions

This group covers **General**, **Plans**, and **Billing** under **Workspace** in the settings sidebar. Open it from the workspace name at the top of the app sidebar, then **Workspace settings**. The routes are `/settings/workspace`, `/settings/plans`, and `/settings/billing`. General has the page title **Workspace settings**. The new group belongs inside the existing **Settings** navigation wrapper when its articles are written.

**Branding** is excluded at the user's request because it will have its own sidebar group. **Custom fields** is excluded at the user's request because it is not in production, even though it appears in the reviewed development source. Personal settings belongs to the existing Personal settings group.

Five articles fit the 3–6 article convention. Overview provides orientation. Workspace name and icon form one job on General; the icon has upload, crop, and removal dialogs. Plans has its own comparison and checkout workflow. Subscription management has status information and billing-portal entry points on Billing. Current usage has a separate card, its own Refresh control, and plan-dependent limits, so it receives its own article.

These pages manage an existing workspace. Do not force create, open-object, rename-dialog, or delete-workspace headings into Overview. Changing the name and removing the icon belong in the General task article.

Existing subscribers cannot change plans from the Plans table: all selection buttons are disabled for active, past_due, canceled, and unpaid subscriptions. The supported app entry point is **Manage plan** on Billing. New or restartable subscriptions use **Choose plan** and external checkout. Keep these workflows distinct and cross-link them.

Research used three parallel read-only inventories and current source files to confirm stale graph results. The app's workspace-menu locale has unrelated working-tree edits to Help labels; the relevant settings labels are unchanged. Repo paths below are relative to the sibling repositories. UI strings are spelling references; only labels needed to act belong in articles.

## Articles (sidebar order)

### 1. Workspace settings
- File: guides/workspace-settings/overview.mdx
- sidebarTitle: Overview
- description: Find the right workspace settings when you need to make a change or check your subscription.
- Reader goal: Open workspace settings and find the page for the change or information needed.
- H2 outline:
  - Open workspace settings
  - Find the setting you need
  - Return to your workspace
  - Related
- UI strings (spelling reference, verbatim): **Workspace settings**, **Settings**, **Workspace**, **General**, **Plans**, **Billing**, **Your unique domain**; description "This can't be changed."
- Limits to mention: none
- Writer notes: Start from the workspace name at the top of the app sidebar and choose **Workspace settings**. Distinguish **General** under Workspace from General under Personal. Give a short list: General for workspace name and icon, Plans for comparison and choosing a subscription, Billing for subscription details, billing management, and current usage. General also shows the existing unique domain as a read-only value; a one-line explanation is enough. The Settings header returns to the app's home destination, currently Projects, rather than the previous page. Briefly name Branding as separately owned and add its link only when that group exists. Do not describe a workspace switcher or creation/deletion workflow. Link the four task articles rather than repeating their steps.
- Cross-links: /guides/workspace-settings/general, /guides/workspace-settings/plans, /guides/workspace-settings/billing, /guides/workspace-settings/usage. Personal settings and the future Branding group can be named in orientation; link Branding only after it exists.
- Sources:
  - diamond-app/src/layouts/app/components/AppNavigation.jsx
  - diamond-app/src/layouts/app/components/WorkspaceSettingsMenu.jsx
  - diamond-app/src/layouts/settings/components/SettingsNavigation.jsx
  - diamond-app/src/core/app/appRouter.jsx
  - diamond-app/src/constants/links.js
  - diamond-app/src/pages/settings/workspace/WorkspaceSettingsPage.jsx
  - diamond-app/src/pages/settings/workspace/_layouts/ProfileLayout.jsx
  - diamond-app/src/components/workspace/WorkspaceSlugPreview.jsx
  - diamond-app/public/locales/en/layouts/app.json
  - diamond-app/public/locales/en/layouts/settings.json
  - diamond-app/public/locales/en/pages/workspace-settings.json
  - diamond-app/public/locales/en/features/workspace.json

### 2. Change your workspace name and icon
- File: guides/workspace-settings/general.mdx
- sidebarTitle: General
- description: Keep your workspace name and icon up to date.
- Reader goal: Update the workspace identity shown in Shootstack and shared gallery headers.
- H2 outline:
  - Change your workspace name
  - Upload or replace your workspace icon
  - Remove your workspace icon
  - Related
- UI strings (spelling reference, verbatim): **Workspace settings**, **Workspace**, **General**, **Name**, **Enter workspace name**, **Workspace icon (optional)**, **Upload icon**, **Crop icon**, **Zoom**, **Apply**, **Cancel**, **Remove icon**, **Delete workspace icon**, **Delete**; name description "Shown to your contacts. Usually your company name."; deletion confirmation "Are you sure? This will remove the workspace icon. This action cannot be undone."
- Limits to mention: Original icon file up to 5 MB (5,000,000 bytes) and no more than 2048 pixels wide or high. JPG/JPEG, PNG, and WebP are accepted. Exact validation references: "Size cannot exceed {{max}}" (5 MB), "Width cannot exceed {{max}} pixels" (2048), "Height cannot exceed {{max}} pixels" (2048), "Content type is invalid". State limits in plain words with resizing or choosing another file as the next step; do not paste errors.
- Writer notes: Name is an inline field that saves after typing stops; there is no Save button or rename dialog. **Upload icon** also replaces an existing icon. Choose a valid file, position the square crop, adjust **Zoom** if needed, then **Apply**. **Cancel** discards the selection. Original-file validation happens before cropping, so resize an oversized source before uploading. The visible helper mentions JPG/PNG, while the wired accept list and app/server validation also accept WebP; preserve button labels and describe actual supported formats. **Remove icon** appears only when an icon exists and opens a confirmation. Place a warning immediately before removal steps; say it removes the workspace icon and cannot be undone, without implying it deletes the workspace. Workspace name/icon appear in the app sidebar and shared gallery header. Gallery logos and other client-facing design settings belong to Branding and Galleries. Do not claim that changing the name changes the unique domain.
- Cross-links: /guides/workspace-settings/overview, /guides/personal-settings/profile, /guides/galleries/design. Add a Branding link when its group exists.
- Sources:
  - diamond-app/src/pages/settings/workspace/_layouts/ProfileLayout.jsx
  - diamond-app/src/pages/settings/workspace/_layouts/DeleteWorkspaceIconLayout.jsx
  - diamond-app/src/components/workspace/UpdateWorkspaceName.jsx
  - diamond-app/src/components/workspace/UpdateWorkspaceIcon.jsx
  - diamond-app/src/components/workspace/DeleteWorkspaceIcon.jsx
  - diamond-app/src/components/_common/ImageCropper.jsx
  - diamond-app/src/core/workspace/workspaceSchema.jsx
  - diamond-app/src/utils/image.js
  - diamond-app/src/layouts/app/components/AppNavigation.jsx
  - diamond-app/public/locales/en/features/workspace.json
  - diamond-app/public/locales/en/schemas/workspace.json
  - diamond-server/src/models/workspace-model.js
  - diamond-server/src/api/app/workspace/workspace-validations.js
  - diamond-site/src/pages/gallery/(root)/_layouts/HeaderLayout.jsx
  - diamond-site/src/components/workspace/WorkspaceAvatarBadge.jsx

### 3. Choose a plan
- File: guides/workspace-settings/plans.mdx
- sidebarTitle: Plans
- description: Compare plans and start a subscription that fits your workspace.
- Reader goal: Compare available plans and open checkout for a new or restartable subscription.
- H2 outline:
  - Compare plans
  - Start your subscription
  - Related
- UI strings (spelling reference, verbatim): **Workspace**, **Plans**, **Monthly**, **Yearly**, **Usage**, **Core features**, **Photo storage**, **Contact file storage**, **Download bandwidth / month**, **Gallery views / month**, **Galleries**, **Contacts**, **Contact files**, **Emails**, **Choose plan**, **Current plan**, **Billed monthly**, **Billed yearly**, **per month**, **Fair Use Policy**, **contact us**
- Limits to mention: Plan quotas are dynamic. Direct readers to the amounts shown in Plans for photo storage, contact file storage, monthly download bandwidth, and monthly gallery views. Do not publish seed prices or a fixed quota comparison table. Existing-plan selection restrictions belong in prose, without an enum/status table.
- Writer notes: Open Plans under Workspace. Monthly is the initial comparison interval; Yearly changes the displayed plan variants. Prices display per month with a **Billed monthly** or **Billed yearly** label; explain the billing interval without promising a particular annual discount, tax amount, or charge total. Compare the visible quotas and feature availability, then click **Choose plan** to open external checkout in the same tab. Stop at the checkout handoff; hosted checkout field names, payment methods, and return-screen details are not verified. **Choose plan** on Billing's free-trial card is a verified faster route to Plans. For a workspace with an existing plan, the table's selection buttons are disabled even after changing the interval; direct the reader to the Billing article and **Manage plan**. **Current plan** is a comparison marker when the matching plan variant is visible. Do not describe it as an editable selector. Do not repeat the FAQ/footer claim that every plan or trial includes every feature: the seeded configuration contradicts it.
- Cross-links: /guides/workspace-settings/overview, /guides/workspace-settings/billing, /guides/workspace-settings/usage
- Sources:
  - diamond-app/src/pages/settings/plans/PlansSettingsPage.jsx
  - diamond-app/src/pages/settings/plans/plansSettingsAtom.jsx
  - diamond-app/src/pages/settings/plans/_layouts/PlansLayout.jsx
  - diamond-app/src/pages/settings/plans/_layouts/TitleLayout.jsx
  - diamond-app/src/components/plan/PlanTable.jsx
  - diamond-app/src/components/subscription/SubscriptionTrial.jsx
  - diamond-app/src/core/plan/planSchema.jsx
  - diamond-app/src/core/subscription/subscriptionSchema.jsx
  - diamond-app/src/utils/common.js
  - diamond-app/public/locales/en/features/plan.json
  - diamond-app/public/locales/en/pages/plans-settings.json
  - diamond-server/src/services/billing-service.js
  - diamond-server/src/services/plan-service.js
  - diamond-server/src/helpers/subscription-helpers.js
  - diamond-server/src/scripts/config/plans.js

### 4. Manage your subscription
- File: guides/workspace-settings/billing.mdx
- sidebarTitle: Billing
- description: Review your workspace subscription and open the billing portal when you need to manage payments.
- Reader goal: Find subscription information and open the appropriate billing-portal entry point.
- H2 outline:
  - Review your subscription
  - Open plan management
  - Open billing management
  - Related
- UI strings (spelling reference, verbatim): **Workspace**, **Billing**, **Free trial**, **Choose plan**, **Manage plan**, **Manage billing**, **Update payment**, **Pay invoice**, **Contact support**, **No active plan**; billing description "Manage your payment method, billing information, and invoices". Status reference only: Active, Canceled, Ended, Incomplete, Expired, Overdue, Paused, Unpaid, Not found, Ending soon.
- Limits to mention: none in the initial article. Trial length, cancellation/access cutoffs, grace periods, and retention guarantees are excluded until the conflicting claims below are resolved. Refer to the dates shown on the reader's Billing page without making an independent promise about deactivation or deletion.
- Writer notes: Open Billing under Workspace. Trial and plan cards show the current subscription information and relevant dates. **Choose plan** routes to Plans. **Manage plan**, **Update payment**, and **Pay invoice** open the same external billing portal for their respective subscription situations. The separate **Manage billing** card also opens that portal and is available for active, past_due, canceled, or unpaid subscriptions. Use the visible action rather than reproducing a matrix of statuses. The app describes billing management as covering payment method, billing information, and invoices; explain that purpose and stop at opening the portal. It opens in the same tab, not a new tab. Do not invent the portal's internal buttons, cancellation confirmation, upgrade/downgrade timing, proration, refunds, or reactivation steps. **Contact support** opens support chat when no plan is found; a support@shootstack.com link is an appropriate fallback. Exact hosted workflows can be added only after verification. Current usage belongs to its own linked article.
- Cross-links: /guides/workspace-settings/overview, /guides/workspace-settings/plans, /guides/workspace-settings/usage, mailto:support@shootstack.com
- Sources:
  - diamond-app/src/pages/settings/billing/SubscriptionSettingsPage.jsx
  - diamond-app/src/pages/settings/billing/_layouts/SubscriptionLayout.jsx
  - diamond-app/src/components/subscription/SubscriptionTrial.jsx
  - diamond-app/src/components/subscription/SubscriptionPlan.jsx
  - diamond-app/src/components/subscription/SubscriptionBillingDetails.jsx
  - diamond-app/src/components/subscription/subscriptionUtils.jsx
  - diamond-app/src/core/subscription/subscriptionSchema.jsx
  - diamond-app/src/core/billing/billingHooks.jsx
  - diamond-app/src/utils/common.js
  - diamond-app/public/locales/en/features/subscription.json
  - diamond-app/public/locales/en/pages/subscription-settings.json
  - diamond-server/src/lib/stripe.js
  - diamond-server/src/helpers/subscription-helpers.js

### 5. Check workspace usage
- File: guides/workspace-settings/usage.mdx
- sidebarTitle: Usage
- description: Check your workspace's storage and monthly usage against your plan or trial limits.
- Reader goal: Check current usage against the workspace's limits before uploading or sharing more photos.
- H2 outline:
  - Check and refresh usage
  - Check your storage
  - Check monthly gallery usage
  - Related
- UI strings (spelling reference, verbatim): **Workspace**, **Billing**, **Current usage**, **Refresh**, **Total photos**, **Photo storage**, **Contact file storage**, **Download bandwidth / month**, **Gallery views / month**; card description "Current-period usage and plan limits."
- Limits to mention: Amounts depend on the current plan or trial and are shown beside usage. Download bandwidth and gallery views are measured by calendar month and start a new monthly period at the start of each month; photo and contact-file storage are totals, not monthly allowances. Do not invent a universal quota, unlimited storage, or an account-timezone reset time. No static quota table is needed.
- Writer notes: Open Billing and find Current usage. **Refresh** updates the displayed workspace information; it recalculates storage/photo metrics and fetches the current monthly usage record, rather than resetting the counters or freeing space. Explain the five items briefly: Total photos is a count; Photo storage is space used by all workspace photos; Contact file storage is space used by attached contact files; download bandwidth covers photo, gallery, and contact file downloads by the photographer or contacts; gallery views counts shared-gallery page views, not unique visitors. Limits come from the trial configuration while trialing and the plan otherwise. Do not infer unlimited allowance from a missing limit label. For photo storage, link to the existing Media folders guide for deleting photos or changing the plan; for contact-file storage, link to Contacts. For monthly allowances, direct readers to their current limits and the plan-management article. Do not teach uploads, contact-file deletion, gallery sharing, or downloads here.
- Cross-links: /guides/workspace-settings/billing, /guides/workspace-settings/plans, /guides/media-folders/organize, /guides/contacts/files
- Sources:
  - diamond-app/src/components/subscription/SubscriptionUsage.jsx
  - diamond-app/src/components/subscription/subscriptionUtils.jsx
  - diamond-app/src/core/workspace/workspaceHooks.jsx
  - diamond-app/public/locales/en/features/subscription.json
  - diamond-server/src/api/app/workspace/workspace-controller.js
  - diamond-server/src/api/app/workspace/workspace-routes.js
  - diamond-server/src/api/app/workspace/workspace-mapper.js
  - diamond-server/src/helpers/workspace-usage-helpers.js
  - diamond-server/src/services/workspace-metrics-service.js
  - diamond-server/src/services/workspace-usage-service.js
  - diamond-server/src/events/contact-file-events.js
  - diamond-server/src/events/gallery-share-events.js
  - diamond-server/src/api/site/gallery/gallery-controller.js

## Do not document

- **Branding settings:** out of scope by user instruction. Logos, color palettes, watermarks, contact information, social information, and legal information belong to the future Branding group. Checked `diamond-app/src/pages/settings/branding/` and `diamond-app/src/layouts/settings/components/SettingsNavigation.jsx`.
- **Custom fields:** out of scope by user instruction because they are not in production. Do not include the development sidebar's Contact custom fields in this map. Checked `diamond-app/src/layouts/settings/components/SettingsNavigation.jsx` and `diamond-app/src/pages/settings/entity/`.
- **Personal profile, language/region, appearance, and notifications:** owned by Personal settings. Cross-link that group rather than duplicating it. Checked `diamond-app/src/layouts/settings/components/SettingsNavigation.jsx` and the existing `maps/personal-settings.md`.
- **Create, switch, or delete a workspace; invite or manage members; change the workspace region:** no corresponding settings or workspace-menu UI found in `diamond-app/src/layouts/`, `src/pages/`, `src/components/`, `src/core/workspace/`, and `src/api/workspace/`. Server member models or administrative cleanup scripts do not establish an end-user workflow. General's Delete dialog removes the icon only.
- **Set, edit, or replace the unique domain; connect a custom domain:** General renders a disabled, read-only domain preview. Claiming the Shootstack subdomain is an onboarding workflow, not a settings action. Checked `diamond-app/src/components/workspace/WorkspaceSlugPreview.jsx`, `CreateWorkspaceSlug.jsx`, `src/pages/onboarding/workspace/_layouts/WorkspaceLayout.jsx`, and `src/core/app/appProvider.jsx`.
- **Change an existing subscription by selecting another plan in Plans:** all Choose plan buttons are disabled for valid-plan statuses, regardless of the interval switch. Use Billing's portal entry point. Checked `diamond-app/src/components/plan/PlanTable.jsx` and `src/core/subscription/subscriptionSchema.jsx`.
- **Hosted checkout or billing-portal steps and guarantees:** exact external field/button labels, payment methods, cancellation confirmation, upgrade/downgrade timing, proration, refunds, and reactivation are unverified. The server creates a default portal session without configuring its features in code. Checked `diamond-server/src/lib/stripe.js`, `src/services/billing-service.js`, and `diamond-app/src/components/subscription/SubscriptionBillingDetails.jsx`.
- **Firm cancellation/access/deletion timing or full-access trial promises:** current FAQ, subscription copy, and validity/configuration rules disagree; see Open questions. Do not turn them into guarantees. Checked `diamond-app/public/locales/en/pages/plans-settings.json`, `src/components/subscription/subscriptionUtils.jsx`, `src/core/workspace/workspaceSchema.jsx`, `diamond-server/src/helpers/subscription-helpers.js`, and `src/scripts/config/plans.js`.
- **A permanent plan-price/allowance table or a guaranteed annual discount:** plan data is loaded dynamically; seed amounts and promotional copy do not verify live checkout charges. Checked `diamond-app/src/components/plan/PlanTable.jsx`, `src/pages/settings/plans/_layouts/PlansLayout.jsx`, and `diamond-server/src/scripts/config/plans.js`.
- **Site, Bookings, Video, site views, video storage, or streaming-minute workflows:** PlanTable filters these features/limits out even though locale keys and helper definitions exist. Checked `diamond-app/src/components/plan/PlanTable.jsx` and `public/locales/en/features/plan.json`.
- **Email usage, unique visitor counts, usage reset buttons, or storage reset on renewal:** none is a control/metric on Current usage. Refresh fetches usage and recalculates metrics; it does not reset allowances. Checked `diamond-app/src/components/subscription/SubscriptionUsage.jsx`, `public/locales/en/features/subscription.json`, and `diamond-server/src/api/app/workspace/workspace-controller.js`.
- **Routine field validation, crop-slider numbers, success toasts, transient statuses, or error-message transcripts:** keep these out under help-mdx-copy. Workspace names cap at 32 characters, but this is not a planning quota. Icon file size and dimensions do belong in the General article. Checked `diamond-app/src/core/workspace/workspaceSchema.jsx`, `src/constants/rules.js`, `src/components/_common/ImageCropper.jsx`, and `public/locales/en/schemas/workspace.json`.

## Open questions

- **Hosted portal and checkout:** which controls are enabled in the production portal, and what labels do checkout and portal screens show? Source code only establishes the entry points. The proposed articles can cover those handoffs now; detailed external workflows require verification before writing those steps. Sources: `diamond-server/src/lib/stripe.js`, `src/services/billing-service.js`.
- **Subscription timing:** cancellation copy says access ends at the current period end, while app/server validity rules allow a 14-day grace period for active, past_due, and canceled statuses. Which customer-facing access cutoff is intended, and how does it relate to retention? Until clarified, describe only the dates visible on Billing and omit deactivation/deletion guarantees. Sources: `diamond-app/public/locales/en/features/subscription.json`, `src/components/subscription/subscriptionUtils.jsx`, `src/core/subscription/subscriptionSchema.jsx`, `src/core/workspace/workspaceSchema.jsx`, `diamond-server/src/helpers/subscription-helpers.js`.
- **Trial and feature availability:** the FAQ says 14 days of full access, and the footer says all plans include all features. The seed trial disables contact files, bookings, video, and emails; Starter also lacks some features. Which claims reflect production? Until clarified, use the live Plans comparison and Current usage amounts and omit the blanket promises. Sources: `diamond-app/public/locales/en/pages/plans-settings.json`, `src/components/plan/PlanTable.jsx`, `diamond-server/src/scripts/config/plans.js`.

These questions affect the excluded claims, not the five-page structure. The approved articles were written within the boundaries above.


## Writing and voice-review report

The user approved all five articles and parallel writing on 2026-10-01. Each article had a refreshed, article-specific explore research pass. Five fresh readers each reviewed only the tone guide, the copy exclusions, and their assigned page. All five pages are registered under Settings > Workspace settings, Overview first.

| Page | Reader findings by quality | Applied |
| --- | --- | --- |
| Overview | Helpful: questioned the purpose of the read-only unique-domain sentence. | 0. Consciously retained the approved one-line orientation so readers understand that the visible domain cannot be edited. No new purpose was guessed. |
| General | No findings. | 0. |
| Plans | Professional/Natural: "external checkout" sounded like implementation language. | 1. Used everyday wording for the checkout handoff. |
| Billing | Helpful/Natural: "address the payment" was abstract. Natural: payment-management opener was awkward. | 2. Named the button and the purpose directly. |
| Usage | Helpful/Supportive: contact-file cleanup lacked a condition. Natural: "Both start a new allowance" was awkward. | 2. Limited cleanup advice to full storage and named the monthly allowances. |

Five reader rewrites were applied; one finding was consciously retained. Sibling consistency added the same workspace-settings result sentence to Plans, Billing, and Usage. Billing's repetitive intro was also shortened. UI labels, actions, and limits were preserved.

All descriptions were retained during voice review. During drafting, three descriptions changed from the approved map drafts to clearer outcomes; the article briefs above now match the files:

- overview: before "Find the settings for your workspace name, icon, subscription, and usage."; after "Find the right workspace settings when you need to make a change or check your subscription.".
- billing: before "Review your subscription and open the billing portal to manage your plan, payment details, and invoices."; after "Review your workspace subscription and open the billing portal when you need to manage payments.".
- usage: before "See how much storage and monthly gallery usage your workspace has used."; after "Check your workspace's storage and monthly usage against your plan or trial limits.".

Billing intro before voice review: "Billing brings together your workspace subscription and payment information. Open it when you want to check the dates for your trial or plan, manage your subscription, or find billing details."

Billing intro after voice review: "Open **Billing** to check the dates for your trial or plan and manage your subscription or payment details."

All other intros were retained. A final source check added contact-file downloads to the bandwidth explanation in Plans and Usage; this is verified by `diamond-server/src/events/contact-file-events.js`, even though the Current usage hint mentions only photos and galleries.

Two non-screenshot TODOs remain in Billing: verify production portal controls/labels and plan-change/cancellation timing before adding hosted steps; verify payment-method, billing-information, and invoice controls before documenting them. No unverified hosted action or access/deletion guarantee appears in the visible articles. The other four pages have no factual TODOs.

The generated app help catalog added exactly five entries and preserved all 49 existing entries. Guide lint passed with zero warnings. `npm run validate` passed, including the Academy/catalog checks and Mintlify build validation. `npm run broken-links` passed with no broken links. `git diff --check` passed. Build validation succeeded after granting access to Mintlify's local preview cache. No commit or deployment was made.

## Screenshots to capture

Each entry needs the listed light WebP and a matching `-dark.webp` version. These pages are simple settings screens, so each article keeps a workspace-menu shot and one page shot. Name, icon, plan, billing, and usage controls stay on that page shot. Crop, delete, and billing-portal dialogs are not separate shots.

### Overview
- `/assets/images/guides/workspace-settings/overview-open-1.webp`: App sidebar with the workspace-name menu open and Workspace settings highlighted.
- `/assets/images/guides/workspace-settings/overview-open-2.webp`: Workspace settings page with General selected in the Workspace sidebar group.

### General
- `/assets/images/guides/workspace-settings/general-open-1.webp`: Workspace menu with Workspace settings highlighted.
- `/assets/images/guides/workspace-settings/general-open-2.webp`: Workspace settings with the name and icon controls visible.

### Plans
- `/assets/images/guides/workspace-settings/plans-open-1.webp`: App sidebar with the workspace-name menu open and Workspace settings highlighted.
- `/assets/images/guides/workspace-settings/plans-open-3.webp`: Plans page with the plan comparison visible.

### Billing
- `/assets/images/guides/workspace-settings/billing-open-1.webp`: App sidebar with the workspace-name menu open and Workspace settings highlighted.
- `/assets/images/guides/workspace-settings/billing-open-3.webp`: Billing page with the subscription card and its dates visible.

### Usage
- `/assets/images/guides/workspace-settings/usage-open-1.webp`: Workspace menu with Workspace settings highlighted.
- `/assets/images/guides/workspace-settings/usage-refresh-1.webp`: Current usage card with Refresh and the usage rows visible.
