import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { findProject } from './find-project.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
const navigationPath = path.join(root, 'config/navigation/index.json');
const appRoot = findProject('diamond-app', root);

if (!appRoot || !existsSync(appRoot)) {
    console.warn('Skipping app help sync: diamond-app is not checked out in the Shootstack workspace (registry.json).');
    process.exit(0);
}

const outputPath = path.join(appRoot, 'src/integrations/help-centre/helpCentreArticles.json');

const navigation = JSON.parse(readFileSync(navigationPath, 'utf8'));
const englishNavigation = navigation.languages
    ? navigation.languages.find((entry) => entry.language === 'en')
    : navigation;
if (!englishNavigation) throw new Error('English navigation not found in config/navigation/index.json');
const pages = collectNavigationPages(englishNavigation);
const localizedPages = (navigation.languages || [])
    .filter(({ language }) => language !== 'en')
    .map((entry) => ({ language: entry.language, pages: new Set(collectNavigationPages(entry)) }));
const articles = Object.fromEntries(pages.map((page) => [page, toArticle(page)]));

const next = `${JSON.stringify(articles, null, 4)}\n`;
const current = existsSync(outputPath) ? readFileSync(outputPath, 'utf8') : null;
const relativeOutput = path.relative(root, outputPath);

if (next === current) {
    console.log('App help catalog is up to date.');
    process.exit(0);
}

if (check) {
    console.error(`App help catalog is out of date. Run npm run sync-app-help.\n- ${relativeOutput}`);
    process.exit(1);
}

mkdirSync(path.dirname(outputPath), { recursive: true });
writeFileSync(outputPath, next);
console.log(`updated ${relativeOutput}`);

function collectNavigationPages(navigation) {
    const pages = [];

    const walk = (entries) => {
        for (const entry of entries || []) {
            if (typeof entry === 'string') {
                if (!pages.includes(entry)) pages.push(entry);
            } else walk(entry.pages);
        }
    };

    walk(navigation.pages);
    for (const group of navigation.groups || []) walk(group.pages);
    for (const tab of navigation.tabs || []) {
        walk(tab.pages);
        for (const group of tab.groups || []) walk(group.pages);
    }

    return pages;
}

function toArticle(page) {
    const article = readArticle(page);
    const translations = {};

    for (const { language, pages } of localizedPages) {
        const localizedPage = `${language}/${page}`;
        if (pages.has(localizedPage)) translations[language] = readArticle(localizedPage);
    }

    return Object.keys(translations).length ? { ...article, translations } : article;
}

function readArticle(page) {
    const { title, description } = readFrontmatter(page);
    if (!title) throw new Error(`Missing title in ${page}.mdx`);

    return {
        title,
        description: description || '',
        href: `/${page.replace(/\/?index$/, '')}`,
    };
}

function readFrontmatter(page) {
    const filePath = path.join(root, `${page}.mdx`);
    if (!existsSync(filePath)) throw new Error(`Missing page file: ${page}.mdx`);

    const source = readFileSync(filePath, 'utf8');
    const end = source.startsWith('---\n') ? source.indexOf('\n---\n', 4) : -1;
    if (end === -1) throw new Error(`Missing frontmatter in ${page}.mdx`);

    const fields = {};
    for (const line of source.slice(4, end).split('\n')) {
        const match = /^([A-Za-z]+):\s*(.*)$/.exec(line);
        if (match) fields[match[1]] = parseValue(match[2].trim());
    }
    return fields;
}

function parseValue(value) {
    if (value.startsWith('"')) return JSON.parse(value);
    if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1).replace(/''/g, "'");
    return value;
}