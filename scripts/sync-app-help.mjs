import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
const navigationPath = path.join(root, 'config/navigation/index.json');
const appRoot = path.resolve(root, '../diamond-app');
const outputPath = path.join(appRoot, 'src/integrations/help-centre/helpCentreArticles.json');

if (!existsSync(appRoot)) {
    console.warn(`Skipping app help sync: ${path.relative(root, appRoot)} is not checked out.`);
    process.exit(0);
}

const pages = collectNavigationPages(JSON.parse(readFileSync(navigationPath, 'utf8')));
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

    for (const tab of navigation.tabs || []) {
        walk(tab.pages);
        for (const group of tab.groups || []) walk(group.pages);
    }

    return pages;
}

function toArticle(page) {
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
