import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

// Other Shootstack projects resolve by id through company-os/registry.json.
// SHOOTSTACK_ROOT overrides the search for the folder that contains it.
// Returns null outside the Shootstack workspace (for example in CI).
export function findProject(id, from) {
    let workspace = process.env.SHOOTSTACK_ROOT;
    for (let dir = from; !workspace; dir = path.dirname(dir)) {
        if (existsSync(path.join(dir, 'company-os/registry.json'))) workspace = dir;
        else if (path.dirname(dir) === dir) return null;
    }
    const file = path.join(workspace, 'company-os/registry.json');
    if (!existsSync(file)) return null;
    const entry = JSON.parse(readFileSync(file, 'utf8')).projects.find((project) => project.id === id);
    return entry ? path.join(workspace, entry.path) : null;
}
