# Shootstack Help Center

Public Mintlify help center for Shootstack customers. Deployed from [github.com/shootstack/help-centre](https://github.com/shootstack/help-centre).

Created with the Mintlify CLI:

```bash
mint new . --name "Shootstack Help" --template help-center --theme maple
```

See the [CLI install docs](https://www.mintlify.com/docs/cli/install).

## Development

```bash
npm i -g mint
npm run dev
```

Open `http://localhost:3333`.

| Project | Port |
| --- | --- |
| diamond-app | 3000 |
| diamond-site | 3001 |
| help-centre (this repo) | 3333 |

## Validate

```bash
npm run validate
npm run broken-links
```

## Publishing

Changes pushed to the default branch deploy automatically via the Mintlify GitHub app.
