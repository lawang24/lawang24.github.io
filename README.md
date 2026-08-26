# Lawrence Wang's personal website

Source for [lawang24.github.io](https://lawang24.github.io), a dependency-free
static website featuring my background, writing, projects, and resume.

## Local development

No installation step is required. Start the local development server with:

```sh
npm run dev
```

Then open [http://localhost:4173](http://localhost:4173). The server watches the
source files and rebuilds the site automatically.

## Project structure

- `src/pages/` contains page content and metadata.
- `src/components/` and `src/layouts/` contain shared page structure.
- `assets/` contains the site styles and client-side JavaScript.
- `scripts/build.mjs` generates the deployable HTML files.

After making changes, regenerate and verify the site with:

```sh
npm run build
npm run check
```

Generated HTML is committed so GitHub Pages can serve the site directly from
the repository's default branch.
