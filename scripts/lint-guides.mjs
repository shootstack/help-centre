import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Mechanical checks for guides/**/*.mdx so the voice and shape rules in
// .cursor/rules/help-mdx-copy.mdc and help-guides.mdc do not drift.
// Exit 1 on any error. Budgets are warnings.

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const guidesDir = path.join(root, 'guides');
const shapeExempt = new Set(['introduction']);

const bannedPhrases = [
  [/are you sure/i, 'pasted dialog copy ("Are you sure") — say what is deleted in plain words'],
  [/\bsuccessfully\b/i, 'toast copy ("successfully") — leave success toasts out'],
  [/\bin order to\b/i, 'filler ("in order to")'],
  [/it'?s important to note/i, 'filler ("it\'s important to note")'],
  [/\b(simply|easily|seamless(ly)?|powerful|robust)\b/i, 'marketing or editorializing word'],
  [/\bjust\b/i, 'editorializing ("just")'],
  [/\b(album|collection|client area)s?\b/i, 'non-Diamond term — use Gallery, Media folder, Gallery share'],
  [/\bthe user\b/i, '"the user" — talk to the photographer as "you"'],
  [/\b(entity|entities|schema|atom|endpoint)\b/i, 'technical noun'],
  [/\bAPI\b/, 'technical noun (API)'],
  [/\bthere is no \*\*/i, 'describes what a dialog lacks — leave it out'],
  [/→|->/, 'arrow chain — write the path as a sentence or as steps'],
];

const softPhrases = [
  [/\bwhen you want to\b/i, '"when you want to" often restates the heading — keep only if it adds a real moment'],
];
const descriptionMaxWords = 20;

const statusLabels = ['Pending', 'Added', 'Uploading', 'Finished', 'Canceled', 'Error', 'Aborted', 'Skipped', 'Replaced', 'Processing', 'Processed'];
const bannedComponents = ['Info', 'Check', 'Tabs', 'CodeGroup', 'Expandable', 'Accordion', 'AccordionGroup'];
const budgets = { overview: 550, task: 400 };

const problems = [];
const warnings = [];

for (const file of listMdx(guidesDir)) {
  lintFile(file);
}

for (const w of warnings) console.warn(`warning ${w}`);
for (const p of problems) console.error(`error   ${p}`);

if (problems.length) {
  console.error(`\nlint-guides: ${problems.length} error(s), ${warnings.length} warning(s)`);
  process.exit(1);
}
console.log(`lint-guides: ok (${warnings.length} warning(s))`);

function lintFile(file) {
  const rel = path.relative(root, file);
  const section = path.basename(path.dirname(file));
  const slug = path.basename(file, '.mdx');
  const isOverview = slug === 'overview';
  const source = readFileSync(file, 'utf8');
  const lines = source.split('\n');
  const report = (line, msg) => problems.push(`${rel}:${line}: ${msg}`);
  const warn = (line, msg) => warnings.push(`${rel}:${line}: ${msg}`);

  const { frontmatter, bodyStart } = splitFrontmatter(lines);
  if (!frontmatter) {
    report(1, 'missing frontmatter');
    return;
  }
  for (const key of ['title', 'sidebarTitle', 'description']) {
    if (!frontmatter.has(key)) report(1, `frontmatter is missing "${key}"`);
  }
  if (isOverview && !shapeExempt.has(section) && frontmatter.get('sidebarTitle') !== 'Overview') {
    report(1, 'overview.mdx must have sidebarTitle: Overview');
  }
  const description = frontmatter.get('description');
  if (description) {
    checkDescription(description, lines.findIndex((l) => l.startsWith('description:')) + 1, report);
  }

  // Classify lines: prose, comment (placeholder), or tag; track components.
  let inComment = false;
  let inFence = false;
  let inNote = false;
  let stepsOpenLine = 0;
  let stepCount = 0;
  let pendingDeleteWarning = null;
  let sawWarningSinceH2 = false;
  let relatedLine = 0;
  let relatedLinks = 0;
  let afterRelated = false;
  const proseWords = [];

  for (let i = bodyStart; i < lines.length; i++) {
    const n = i + 1;
    const line = lines[i];
    const trimmed = line.trim();

    if (inComment) {
      if (trimmed.includes('*/}')) inComment = false;
      continue;
    }
    if (trimmed.startsWith('{/*')) {
      if (/^\{\/\*\s*TODO\s*\*\/\}/.test(trimmed)) report(n, 'empty TODO — say what is unverified');
      if (trimmed.startsWith('{/* TODO screenshot:')) {
        checkPlaceholder(lines, i, section, slug, report);
      }
      if (!trimmed.includes('*/}')) inComment = true;
      continue;
    }

    if (trimmed.startsWith('```')) {
      if (!inFence) report(n, 'code block in a customer article');
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    for (const name of bannedComponents) {
      if (new RegExp(`<${name}(\\s|>)`).test(trimmed)) report(n, `<${name}> is not allowed in Guides`);
    }

    if (/^<Steps>/.test(trimmed)) {
      stepsOpenLine = n;
      stepCount = 0;
    } else if (/^<\/Steps>/.test(trimmed)) {
      if (stepCount > 5) report(stepsOpenLine, `${stepCount} steps in one block — at most 5`);
      if (stepCount < 2) report(stepsOpenLine, 'Steps block with fewer than 2 steps — use one sentence of prose');
      stepsOpenLine = 0;
    } else if (/^<Step\b/.test(trimmed)) {
      stepCount++;
      const title = /title="([^"]*)"/.exec(trimmed)?.[1] ?? '';
      if (!title) report(n, 'Step without a title');
      else if (/^(in|on|at|under|from) /i.test(title)) report(n, `Step title "${title}" names a location — name the action`);
    }

    if (/^<Note>/.test(trimmed)) inNote = true;
    if (/^<\/Note>/.test(trimmed)) inNote = false;
    if (/^<Warning>/.test(trimmed)) sawWarningSinceH2 = true;

    if (trimmed.startsWith('## ')) {
      if (pendingDeleteWarning && !sawWarningSinceH2) {
        report(pendingDeleteWarning, 'a Delete section needs a <Warning> before its steps');
      }
      const heading = trimmed.slice(3);
      pendingDeleteWarning = /^delete\b/i.test(heading) ? n : null;
      sawWarningSinceH2 = false;
      if (heading === 'Related') {
        relatedLine = n;
        afterRelated = true;
      }
      checkSentenceCase(heading, n, report);
      continue;
    }

    if (trimmed.startsWith('<') || trimmed === '') continue;

    // Prose line.
    if (afterRelated) {
      if (/^- \[/.test(trimmed)) {
        relatedLinks++;
        if (!/\]\(\/guides\//.test(trimmed)) report(n, 'Related link must be root-relative (/guides/...)');
      }
      continue;
    }

    proseWords.push(...trimmed.split(/\s+/).filter(Boolean));

    for (const [re, msg] of bannedPhrases) {
      if (re.test(trimmed)) report(n, msg);
    }
    for (const [re, msg] of softPhrases) {
      if (re.test(trimmed)) warn(n, msg);
    }
    for (const label of statusLabels) {
      if (trimmed.includes(`**${label}**`)) report(n, `bold status "${label}" — statuses stay out`);
    }
    if (inNote && /"[^"]{12,}"/.test(trimmed)) {
      report(n, 'quoted UI message inside <Note> — state the limit and what to do instead');
    }
    if (/\]\(\.\.?\//.test(trimmed)) report(n, 'relative link — use a root-relative path');
    if (/\]\(https?:\/\/[^)]*shootstack[^)]*\)/.test(trimmed)) warn(n, 'absolute Shootstack URL — internal pages use root-relative paths');
  }

  if (pendingDeleteWarning && !sawWarningSinceH2) {
    report(pendingDeleteWarning, 'a Delete section needs a <Warning> before its steps');
  }

  if (!shapeExempt.has(section)) {
    if (!relatedLine) warn(lines.length, 'no "## Related" section');
    else if (relatedLinks < 2 || relatedLinks > 4) report(relatedLine, `Related has ${relatedLinks} link(s) — use 2 to 4`);
  }

  const budget = isOverview ? budgets.overview : budgets.task;
  if (proseWords.length > budget) {
    warn(1, `${proseWords.length} words of prose — budget is about ${isOverview ? 500 : 350}`);
  }
}

function checkDescription(description, n, report) {
  const words = description.split(/\s+/).filter(Boolean).length;
  if (words > descriptionMaxWords) {
    report(n, `description is ${words} words — at most ${descriptionMaxWords}, say the outcome, not every section`);
  }
  if (description.includes('**')) report(n, 'bold in description — it is a plain search snippet');
  for (const [re, msg] of bannedPhrases) {
    if (re.test(description)) report(n, `description: ${msg}`);
  }
}

function checkPlaceholder(lines, start, section, slug, report) {
  const end = Math.min(lines.length, start + 6);
  const block = lines.slice(start, end).join('\n');
  const src = /src="([^"]+)"/.exec(block)?.[1];
  if (!/<Frame>/.test(block)) report(start + 1, 'screenshot placeholder without a <Frame>');
  if (!src) {
    report(start + 1, 'screenshot placeholder without an img src');
    return;
  }
  const expected = `/assets/images/guides/${section}/${slug}-`;
  if (!src.startsWith(expected)) report(start + 1, `screenshot path "${src}" should start with "${expected}"`);
  if (!/\.png$/.test(src)) report(start + 1, 'screenshot path should end in .png');
  if (!/alt="[^"]+"/.test(block)) report(start + 1, 'screenshot placeholder without alt text');
}

function checkSentenceCase(heading, n, report) {
  const words = heading.replace(/\*\*[^*]+\*\*/g, '').split(/\s+/).filter(Boolean);
  for (const word of words.slice(1)) {
    if (/^[A-Z][a-z]+$/.test(word) && !['Shootstack', 'Lightroom'].includes(word)) {
      report(n, `heading "${heading}" is not sentence case ("${word}")`);
      return;
    }
  }
}

function splitFrontmatter(lines) {
  if (lines[0] !== '---') return { frontmatter: null, bodyStart: 0 };
  const map = new Map();
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') return { frontmatter: map, bodyStart: i + 1 };
    const m = /^(\w+):\s*(.*)$/.exec(lines[i]);
    if (m) map.set(m[1], m[2].trim());
  }
  return { frontmatter: null, bodyStart: 0 };
}

function listMdx(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) out.push(...listMdx(full));
    else if (name.endsWith('.mdx')) out.push(full);
  }
  return out.sort();
}
