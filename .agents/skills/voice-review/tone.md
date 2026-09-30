# Tone of voice

Every Help Center page sounds like one person: a colleague who knows Shootstack well, standing next to a photographer who is mid-task. Helpful, professional, calm, supportive, and above all natural. This file is the only place that defines how a page sounds. `.cursor/rules/help-mdx-copy.mdc` covers the mechanics (frontmatter, terminology, bold labels, what stays out, components) and the tab rules cover shape. Use this file to review a page and to write one.

Reference point: the [Attio Help Center](https://attio.com/help/reference/productivity-collaborating/tasks). Benefit first, then the clicks. Alternatives as a light list. One reassuring sentence where a reader would worry. Direct answers.

## The five qualities

Each quality has what it sounds like, how it drifts, and a fix. The "after" lines come from real Guides articles. Same facts, same labels; the difference is that the "after" is something you would say to a photographer standing next to you.

### Helpful

The reader leaves knowing what to click and what it does for their shoot or their client.

Sounds like: an action, then what it is for or what you see. `Shootstack skips duplicates by default, so you can't upload a set twice by accident.`

Drifts into:

- Bare commands. `Click **Skip duplicates**. Click **Skip** or **Replace**.` Correct, and no help.
- Describing the screen instead of guiding. `The dialog has a Name field and a Create button.` Or what a dialog lacks: `There is no **Cancel** button.`
- A reference fact where the action or outcome should be. `Those words show in the **Task** column.` Defaults, statuses, and where else a control appears go in only if the reader needs them to act.
- A step title that is not an action. `Read a row` is not something you do.
- Ending a job with no idea what comes next.

Fix: one clause of purpose or outcome per job, and per step whose reason is not obvious. Anticipate the next question (`To change it later, open the share from the project's **Gallery shares** list.`).

Before: `Click **Skip duplicates**. Click **Skip** or **Replace**.`

After: `Click **Skip duplicates**, then choose **Skip** to keep the photos already in the folder, or **Replace** to overwrite them with the new files.`

Before: `Turn on **Photo favorites limit**. It only shows while **Allow photo favorites** is on. The number starts at 25.`

After: `Turn on **Photo favorites limit**, then enter the most photos a client can pick in **Favorites limit**.`

Before: `In **Watermark (optional)**, choose a watermark to protect the photos, or leave it empty if clients should be able to download them from a gallery share.`

After: `Under **Watermark (optional)**, pick a watermark if these are proofing photos you want to protect. Leave it empty for final photos your clients will download.`

Before: `Choosing **Replace** changes the button to **Replace duplicates**. A skipped photo shows **Skipped**. A replaced photo shows **Replaced**.`

After: `Skipped photos keep the version already in the folder. Replaced photos take the new file.`

### Professional

Precise and verified. Every label verbatim, every number from code, every term a Diamond term. No hype, jokes, slang, or exclamation marks. Also no jargon: professional means clear, not technical.

Drifts into:

- Cheerleading. `Boom, your gallery is live!` `A great way to wow your clients.`
- Spec or developer voice. `The share is persisted with access type Public.` `The user can configure...`
- Hedging that sounds unsure. `This should usually work.` `You may want to consider...`

Before: `The gallery share is created without password protection, so access type is set to Public.`

After: `A new gallery share has no password, so anyone with the link can open it.`

### Calm

Even pace, no urgency. A warning says what happens and that it can't be undone, then stops. Nothing is shouted, rushed, or repeated for emphasis.

Drifts into:

- Commands with force. `Always pick a day.` `Never send the password by email.` `Be careful:`
- Alarm. Caps, `!`, `immediately`, `permanently destroy`, `critical`. Pasting the dialog (`Are you sure? This action cannot be undone.`).
- Cramming. Four facts in one paragraph reads as rushed even when every sentence is short. More than two UI locations in one sentence; longer paths become steps.
- Saying the same thing in the intro, the H2 opener, and the step.

Before: `Always pick a day once the switch is on. With no date, your clients can't open the link.`

After: `Once the switch is on, pick a day. Without one, your clients can't open the link.`

Before: `Are you sure? This will delete this folder and all its photos. This action cannot be undone.`

After: `Deleting a media folder also deletes every photo inside it. This can't be undone.`

### Supportive

The reader is competent and busy. Nothing is their fault. Limits and failures are framed as what to do next, not what they did wrong. Where a photographer would worry, one sentence settles it.

Drifts into:

- Lecturing. `Make sure you`, `don't forget to`, `you must`, `you need to`, `note that you cannot`, `remember`, `obviously`.
- Blame. `If you forgot to set a date...` `If you uploaded the wrong file...`
- Dead ends. A limit with nothing to do about it, or the error message quoted instead of the way out.

Before: `You must give the password to your client, otherwise they cannot access the gallery.`

After: `Then give it to your client.`

Before: `You can copy up to 500 photos at once. If you select more, Shootstack names how many you selected and says only 500 can be copied at once. The photos stay in this folder. If storage is full, Shootstack shows "Your photo storage is full. Upgrade your plan or delete photos to free space."`

After: `You can copy up to 500 photos at a time. For a bigger set, copy it in a few rounds.`

Reassure where it helps, the way Attio does (`Your sort, group, and filter settings are unique to you. Changes you make will not affect your team members' views.`): `Changes save right away.` `Shootstack skips duplicates by default, so you can't upload a set twice by accident.`

### Natural

The test for everything above. Read the sentence out loud. If you would not say it to a colleague standing next to you, rewrite it.

Sounds like: short sentences, plain words, contractions (`you'll`, `can't`, `it's`), everyday verbs (`pick`, `open`, `type`), light connectors (`Or, in an empty folder, ...`, `If you need to stop partway, ...`, `Once you have a media folder, ...`), sentences that vary in length. `Your clients`, `your shoot`, `your photos`.

Drifts into:

- Label chains. Three or more bold labels in one sentence.
- Every sentence starting the same way. `Click ... Click ... Click ...`
- Written-only words. `the following`, `in the event that`, `utilize`, `prior to`, `via`, `as well as`, `e.g.`
- Nominalizations. `the creation of a task` for `creating a task`.
- Pointing words. `that share`, `on that share`, `this option`. Say `the share`.
- Translation feel. Correct, and nobody talks like that. `Where you see **What needs to be done?**, type the work.`
- The em dash (U+2014). Never use this character in Help Center copy or supporting writing. Use a period, comma, or colon instead.

Before: `Click **Upload** at the right of the toolbar or, when the folder is empty, click the **Upload photos** button in order to begin the upload process.`

After: `Click **Upload** at the right of the toolbar. Or, in an empty folder, click **Upload photos**.`

Before: `In **Options**, type over the current name, then choose **Rename folder to** followed by that name.`

After: `Type the new name and click **Rename folder to** to confirm.`

Before: `Where you see **What needs to be done?**, type the work.`

After: `In **What needs to be done?**, describe the task.`

## Where drift starts

Most drift sits in the three lines a writer fills in last: the description, the intro, and the sentence under an H2.

- The description is the outcome, not the table of contents.

  Before: `Create a gallery share from a gallery with Share gallery → Create link, then open, rename, copy the link, and delete it on the project Gallery shares list.`

  After: `Send a client a link to one gallery, then rename, copy, or delete that link.`

- The intro says what the thing is for, not only what it is.

  Before: `A media folder holds the photos for a project.`

  After: `A media folder is where the photos for a shoot live. Most photographers create one folder per set, such as proofs and final edits, so a gallery can show exactly the photos a client should see.`

- The intro names a real moment, not a vague judgment. `Looks right` and `is ready` leave the reader guessing.

  Before: `Create one when that gallery looks right, then send the link.`

  After: `Create one once your photos and design are in place, then send it to your client.`

- An H2 opener earns its place or goes. `Open these settings when you want to change the look` under "Open design settings" says nothing. If the heading already says why, skip the sentence.

  Before: `Open these settings from the gallery toolbar when you want to change the look.`

  After: `On a large screen, **Design settings** is already open beside the preview. On a smaller screen, click **Design settings**.`

## Consistent across pages

Drift between articles is as noticeable as drift inside one. Two checks:

- Same situation, same sentence. Recurring moments use the standard phrasings below. When a page says one of them differently, align it.
- Same register as the sibling. Put three sentences from the page next to three from another article in the same section. If a reader could tell they were written by different people (one uses contractions and says why, the other is clipped), the page is drifting. Move it toward this guide, not toward the sibling's flaws.

### Standard phrasings

The same situations come up in every section. Copy the sentence and swap the `<...>` parts, so every article says them the same way.

| Situation | Sentence |
|---|---|
| Description (frontmatter) | `<Verb> <object> <for whom or why>, then <second job> or <third job>.` At most 20 words. |
| Where it lives (overview) | `Open **<Sidebar entry>** in the workspace menu to see every <object> in your workspace.` |
| Open the menu on a card | `Right-click the <object> card, or hover the <object> in the sidebar and click **⋯**.` |
| Open the menu on a card without a sidebar entry | `Right-click the <object> card, or click **⋯** on it.` |
| Open the menu on a row with **⋯** | `Right-click the <object> row, or click **⋯** on it.` |
| Open the menu on a photo | `Right-click the photo, or click **⋯** on its card.` |
| New with an empty state | `Click **New**. If <the container> has no <objects> yet, click **<Empty button>** instead.` |
| Create result | `Click **<Submit>**. The new <object> appears <where>, ready for <what comes next>.` |
| Rename confirm | `Type the new name, then click **Rename <object> to** to confirm.` |
| Confirm a dialog | `In **<Dialog title>**, click **<Button>**.` |
| Action on a selection or one photo | `With your photos selected, click **<Action>** on the bar. For one photo, right-click it and choose **<Action>**.` |
| Delete warning | `Deleting a <object> also deletes <what goes with it>. This can't be undone.` |
| Delete warning for a standalone item | `Deleting a <object> removes it from <where>. This can't be undone.` |
| Delete warning with another effect | `Deleting a <object> also <verified effect>. This can't be undone.` |
| Count limit | `A <parent> holds up to <n> <objects>.` |
| Batch limit | `You can <verb> up to <n> <items> at a time. For a bigger set, <verb> it in a few rounds.` |
| Storage full | `If your photo storage is full, free up space by deleting photos you no longer need, or upgrade your plan.` |
| Keyboard shortcut (Tip) | `Press **<Key>** <where> to <do what>.` |
| Handing off to another section | `<One sentence naming the feature.> See [<Article>](/guides/<section>/<slug>).` |

## Words

| Avoid | Say |
|---|---|
| make sure you, don't forget to, remember to | drop it, or `Once ..., ...` |
| you must, you need to, you have to | `Click ...`, `Pick ...` |
| you cannot, it is not possible to | `<Thing> holds up to <n>.`, `Without <x>, ...` |
| always, never (as commands) | state the fact: `Without one, your clients can't open the link.` |
| please, note that, keep in mind | drop it |
| the following, in the event that, prior to, via, utilize | `these`, `if`, `before`, `through`, `use` |
| immediately, permanently, be careful, `!` | `right away`, `This can't be undone.` |
| select (a button) | `click`; `pick` or `choose` for a value |
| navigate to, go to | `open` |

`simply`, `easily`, `just`, `in order to`, `it's important to note`, marketing words (`powerful`, `seamless`, `robust`), `the user`, and non-Diamond terms are caught by `npm run lint-guides`. You do not need to look for them.

## Reading a page as a reviewer

Read it once as the photographer: mid-task, app open, wants the answer. Then once per quality:

1. Helpful: does each job say what to click and what it does for the shoot or the client?
2. Professional: any hype, slang, `!`, hedging, or developer words?
3. Calm: any forceful commands, alarm, crammed paragraphs, or repeated points?
4. Supportive: any `make sure`, `must`, `cannot`, blame, or limit without a next step?
5. Natural: read it out loud. Would you say this?

Then the description, intro, and H2 openers against "Where drift starts", and the two consistency checks. Report only lines a photographer would stumble on, or that sound like a different person wrote them.
