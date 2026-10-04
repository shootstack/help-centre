import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
const navigationPath = path.join(root, 'config/navigation/index.json');
const overviewPath = path.join(root, 'academy/index.mdx');
const lessonsStart = '{/* academy-lessons:start */}';
const lessonsEnd = '{/* academy-lessons:end */}';

const placeholderBody = `This is a placeholder Academy lesson. Replace the video and the list below with a real walkthrough.

<div className="flex justify-center items-center bg-gray-100 dark:bg-white/5 rounded-xl w-full aspect-video text-gray-500 dark:text-gray-400 text-sm">
  Video placeholder
</div>

## What you will learn

- The topic this lesson covers
- The main idea to take away
- Where to go next in Academy
`;

const { academyLessons } = await import(pathToFileURL(path.join(root, 'snippets/academy-lessons.js')).href);

assertLessons(academyLessons);

const changes = [];

for (const lesson of academyLessons) {
    const filePath = path.join(root, 'academy', `${lesson.slug}.mdx`);
    const next = existsSync(filePath)
        ? withLessonFrontmatter(readFileSync(filePath, 'utf8'), lesson)
        : stubLesson(lesson);
    record(path.relative(root, filePath), next, existsSync(filePath) ? readFileSync(filePath, 'utf8') : null);
}

const overview = readFileSync(overviewPath, 'utf8');
record(path.relative(root, overviewPath), withOverviewLessons(overview, academyLessons), overview);

const navigation = readFileSync(navigationPath, 'utf8');
record(
    path.relative(root, navigationPath),
    withAcademyPages(
        navigation,
        academyLessons.map((lesson) => `academy/${lesson.slug}`),
    ),
    navigation,
);

if (check) {
    if (changes.length > 0) {
        console.error('Academy catalog is out of date. Run npm run sync-academy.');
        for (const file of changes) console.error(`- ${file}`);
        process.exit(1);
    }
    process.exit(0);
}

if (changes.length === 0) {
    console.log('Academy catalog is up to date.');
} else {
    for (const file of changes) console.log(`updated ${file}`);
}

function record(relativePath, next, current) {
    if (next === current) return;
    changes.push(relativePath);
    if (!check) writeFileSync(path.join(root, relativePath), next);
}

function assertLessons(lessons) {
    if (!Array.isArray(lessons)) {
        throw new Error('academyLessons must be an array');
    }

    const slugs = new Set();
    for (const lesson of lessons) {
        const { slug, title, description, duration } = lesson || {};
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`Invalid Academy slug: ${slug}`);
        if (slugs.has(slug)) throw new Error(`Duplicate Academy slug: ${slug}`);
        slugs.add(slug);
        if (typeof title !== 'string' || title.trim() === '') throw new Error(`Missing title for ${slug}`);
        if (typeof description !== 'string' || description.trim() === '') {
            throw new Error(`Missing description for ${slug}`);
        }
        if (!/^\d{1,2}:\d{2}$/.test(duration)) throw new Error(`Invalid duration for ${slug}: ${duration}`);
        for (const key of ['thumbnail', 'thumbnailDark']) {
            if (lesson[key] !== undefined && (typeof lesson[key] !== 'string' || !lesson[key].startsWith('/assets/'))) {
                throw new Error(`Invalid ${key} for ${slug}: ${lesson[key]}`);
            }
        }
        if (lesson.preview !== undefined && typeof lesson.preview !== 'boolean') {
            throw new Error(`Invalid preview flag for ${slug}`);
        }
    }
}

function stubLesson(lesson) {
    return `---
title: ${JSON.stringify(lesson.title)}
description: ${JSON.stringify(lesson.description)}
tag: ${JSON.stringify(lesson.duration)}
mode: wide
---

${placeholderBody}`;
}

function withLessonFrontmatter(source, lesson) {
    const start = source.startsWith('---\n') ? 4 : -1;
    const end = start === -1 ? -1 : source.indexOf('\n---\n', start);
    if (start === -1 || end === -1) {
        throw new Error(`Missing frontmatter in academy/${lesson.slug}.mdx`);
    }

    let frontmatter = source.slice(start, end);
    frontmatter = setField(frontmatter, 'title', lesson.title);
    frontmatter = setField(frontmatter, 'description', lesson.description);
    frontmatter = setField(frontmatter, 'tag', lesson.duration);

    return `---\n${frontmatter}\n---\n${source.slice(end + 5)}`;
}

function setField(frontmatter, key, value) {
    const line = `${key}: ${JSON.stringify(value)}`;
    const pattern = new RegExp(`^${key}:.*$`, 'm');
    if (pattern.test(frontmatter)) return frontmatter.replace(pattern, line);
    if (key === 'tag' && /^description:.*$/m.test(frontmatter)) {
        return frontmatter.replace(/^description:.*$/m, (match) => `${match}\n${line}`);
    }
    return `${frontmatter}\n${line}`;
}

function withOverviewLessons(source, lessons) {
    if (!source.includes(lessonsStart) || !source.includes(lessonsEnd)) {
        throw new Error('academy/index.mdx is missing the academy-lessons markers');
    }

    const block = `${lessonsStart}\n${lessonsExport(lessons)}\n\n${lessonsEnd}`;
    return source.replace(/\{\/\* academy-lessons:start \*\/\}[\s\S]*?\{\/\* academy-lessons:end \*\/\}/, block);
}

function lessonsExport(lessons) {
    if (lessons.length === 0) return 'export const academyLessons = [];';

    const entries = lessons
        .map(
            (lesson) => `  {
    slug: ${JSON.stringify(lesson.slug)},
    title: ${JSON.stringify(lesson.title)},
    description: ${JSON.stringify(lesson.description)},
    duration: ${JSON.stringify(lesson.duration)},${['thumbnail', 'thumbnailDark', 'preview']
        .filter((key) => lesson[key] !== undefined)
        .map((key) => `\n    ${key}: ${JSON.stringify(lesson[key])},`)
        .join('')}
  }`,
        )
        .join(',\n');

    return `export const academyLessons = [\n${entries},\n];`;
}

function withAcademyPages(jsonText, lessonPages) {
    const data = JSON.parse(jsonText);
    const academy = (data.tabs || []).find((tab) => tab.tab === 'Academy');
    if (!academy) throw new Error('Academy tab not found in config/navigation/index.json');

    const desired = ['academy/index', ...lessonPages];
    if (JSON.stringify(academy.pages) === JSON.stringify(desired)) return jsonText;

    const block = `[\n${desired.map((page) => `                "${page}"`).join(',\n')}\n            ]`;
    const pattern = /("tab": "Academy"[\s\S]*?"pages": )\[[\s\S]*?\]/;
    if (!pattern.test(jsonText)) {
        throw new Error('Could not find Academy pages in config/navigation/index.json');
    }
    return jsonText.replace(pattern, `$1${block}`);
}
