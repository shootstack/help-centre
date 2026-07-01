# Shootstack Help Center

Public Mintlify help center for Shootstack customers. Deployed from [github.com/shootstack/help-centre](https://github.com/shootstack/help-centre).

Internal API documentation lives in the private [shootstack/diamond-docs](https://github.com/shootstack/diamond-docs) repo (sibling [`diamond-docs/`](../diamond-docs/) folder locally, port 3334).

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mint):

```bash
npm i -g mint
```

Preview locally:

```bash
npm run dev
```

Open `http://localhost:3333`.

| Project | Port |
| --- | --- |
| diamond-app | 3000 |
| diamond-site | 3001 |
| help-centre (this repo) | 3333 |
| diamond-docs (API docs) | 3334 |

## Validate

```bash
npm run validate
npm run broken-links
```

## Publishing

Changes pushed to the default branch deploy automatically via the Mintlify GitHub app.

After renaming this repository, update the connected repo name in [Mintlify Git Settings](https://app.mintlify.com/settings/deployment/git-settings) to `help-centre`.
