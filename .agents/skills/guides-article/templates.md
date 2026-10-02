# Article templates

Two skeletons. Replace every `<...>`; delete sections the feature does not have. Keep the component set to `Steps`, `Step`, `Note`, `Warning`, `Tip`, and commented `Frame` placeholders.

Every `<...>` slot is written for a photographer. Labels are verbatim; the sentences around them are yours.

## Overview (first article in a group)

```mdx
---
title: <Feature, plural, as the app labels it>
sidebarTitle: Overview
description: <One sentence, at most 20 words, on what the reader gets done. No bold, no click path.>
---

A <object> <what it is in one clause>. <What a photographer uses it for, in one sentence, using Diamond terms.>

Open **<Sidebar entry>** in the workspace menu to see every <object> in your workspace.

{/* TODO screenshot: <page> overview
<Frame>
  <img className="block dark:hidden" src="/assets/images/guides/<section>/overview-page-1.png" alt="<What is visible>" />
  <img className="hidden dark:block" src="/assets/images/guides/<section>/overview-page-1-dark.png" alt="<What is visible>" />
</Frame>
*/}

## Create a <object>

<Optional: when in the shoot you do this, or why it matters for the client. Delete this line if it would only restate the heading.>

<Steps>
  <Step title="Open <Page>">
    In the workspace menu, click **<Sidebar entry>**.
  </Step>
  <Step title="Start a new <object>">
    Click **<New button>**.
    {/* TODO screenshot: <Page> with <New button> highlighted
    <Frame>
      <img className="block dark:hidden" src="/assets/images/guides/<section>/overview-create-1.png" alt="<What is visible>" />
      <img className="hidden dark:block" src="/assets/images/guides/<section>/overview-create-1-dark.png" alt="<What is visible>" />
    </Frame>
    */}
  </Step>
  <Step title="Name the <object>">
    In **<Field label>**, enter the name. <Optional: why the choice matters, one clause.>
  </Step>
  <Step title="Create the <object>">
    Click **<Submit label>**. <What the reader sees next, in plain words.>
  </Step>
</Steps>

<Note>
<One limit a photographer plans around, with the number. For example: A project holds up to 25 media folders. Skip name length and other field validation. Skip a safety cap a photographer will not reach in normal use, including a 15,000-pixel side.>
</Note>

## Open a <object>

<One sentence: how to open it and what opens.>

## Rename a <object>

<Steps>
  <Step title="Open the <object> menu">
    <Where the menu is, on the list and inside the object.>
  </Step>
  <Step title="Choose Rename">
    Click **Rename**, type the new name, and confirm.
  </Step>
</Steps>

## <Other single-click change>

<One sentence of prose. No Steps for one click.>

## Delete a <object>

<Warning>
<What is deleted, in plain words. This can't be undone.>
</Warning>

<Steps>
  <Step title="Open the <object> menu">
    <Where.>
  </Step>
  <Step title="Choose Delete">
    Click **Delete**.
  </Step>
  <Step title="Confirm">
    In **<Dialog title>**, click **Delete**.
  </Step>
</Steps>

## Inside a <object>

<One sentence per tab or section that other groups document, as a short list with links where the article exists.>

## Related

- [<Task article>](/guides/<section>/<slug>)
- [<Task article>](/guides/<section>/<slug>)
```

## Task article (one job)

```mdx
---
title: <Verb + object, for example Upload photos>
sidebarTitle: <One or two words>
description: <One sentence, at most 20 words, on what the reader gets done. No bold, no click path.>
---

<One or two sentences: what this job is for and when a photographer does it.>

## <First job, verb first>

<Optional: when in the shoot you do this, or why it matters for the client. Delete this line if it would only restate the heading.>

<Steps>
  <Step title="<Action>">
    <One action, bold labels. Optional second sentence: why, or what you see.>
    {/* TODO screenshot: <screen and control>
    <Frame>
      <img className="block dark:hidden" src="/assets/images/guides/<section>/<article>-<task>-1.png" alt="<What is visible>" />
      <img className="hidden dark:block" src="/assets/images/guides/<section>/<article>-<task>-1-dark.png" alt="<What is visible>" />
    </Frame>
    */}
  </Step>
  <Step title="<Action>">
    <One action.>
  </Step>
  <Step title="<Result>">
    <What the reader sees when it worked, in plain words.>
  </Step>
</Steps>

<Note>
<One limit with the number, and what to do about it. Omit if there is none.>
</Note>

## <Second job>

<Prose for a single click, or another Steps block.>

<Tip>
<Shortcut or faster path, only if one exists in code.>
</Tip>

## Related

- [<Overview>](/guides/<section>/overview)
- [<Sibling article>](/guides/<section>/<slug>)
```

## Placeholder snippet

```mdx
{/* TODO screenshot: <screen> with <control> highlighted
<Frame>
  <img className="block dark:hidden" src="/assets/images/guides/<section>/<article>-<task>-<n>.png" alt="<What is visible>" />
  <img className="hidden dark:block" src="/assets/images/guides/<section>/<article>-<task>-<n>-dark.png" alt="<What is visible>" />
</Frame>
*/}
```

To publish a screenshot: save both PNGs at those paths, remove the comment markers and the `TODO` line. Nothing else changes.
