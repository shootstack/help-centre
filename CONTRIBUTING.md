# Contribute to the help center

Thank you for contributing to Shootstack's public help documentation.

## Local development

1. Clone [github.com/shootstack/help-centre](https://github.com/shootstack/help-centre)
2. Install the Mintlify CLI: `npm i -g mint`
3. Create a branch for your changes
4. Run `npm run dev` from the repo root
5. Preview at `http://localhost:3333`
6. Run `npm run validate` and `npm run broken-links`
7. Open a pull request

## Writing guidelines

- Use active voice and address the reader as "you"
- Keep sentences concise and lead with the goal
- Use Shootstack product terminology: Gallery, Media folder, Project, Workspace, Contact, Photo, Favorites
- Include examples where they help
- Guides articles live in `guides/<section>/` and are listed in that section's nested `group` under the Guides tab in `config/navigation/index.json`, Overview first. Troubleshooting articles go in that tab's `pages` list. Add or change an Academy lesson in `snippets/academy-lessons.js`, run `npm run sync-academy`, then write the lesson body. Do not hand-edit the Academy overview list, sidebar times, or Academy page order.
