import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { renderPage } from "../src/layouts/default.mjs";
import { pages } from "../src/pages/index.mjs";
import { site } from "../src/site.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checkOnly = process.argv.includes("--check");
const stalePages = [];

for (const page of pages) {
  const outputPath = path.join(projectRoot, page.outputPath);
  const html = renderPage(page);

  if (checkOnly) {
    const currentHtml = await readFile(outputPath, "utf8").catch(() => null);
    if (currentHtml !== html) stalePages.push(page.outputPath);
    continue;
  }

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
  console.log(`Built ${page.outputPath}`);
}

const staticFiles = [
  {
    outputPath: "robots.txt",
    content: `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
  },
  {
    outputPath: "sitemap.xml",
    content: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter(({ indexable = true }) => indexable).map(({ path: pagePath }) => `  <url><loc>${new URL(pagePath, `${site.url}/`).href}</loc></url>`).join("\n")}
</urlset>
`,
  },
];

for (const file of staticFiles) {
  const outputPath = path.join(projectRoot, file.outputPath);

  if (checkOnly) {
    const currentContent = await readFile(outputPath, "utf8").catch(() => null);
    if (currentContent !== file.content) stalePages.push(file.outputPath);
    continue;
  }

  await writeFile(outputPath, file.content);
  console.log(`Built ${file.outputPath}`);
}

if (stalePages.length > 0) {
  console.error("Generated pages are out of date:");
  for (const outputPath of stalePages) console.error(`  - ${outputPath}`);
  console.error("Run `npm run build` to update them.");
  process.exitCode = 1;
}
