import { escapeAttribute, indent } from "../lib/html.mjs";
import { navigation, site } from "../site.mjs";

const moonIcon = `<svg class="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6 8.5 8.5 0 1 0 20.4 15.2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const sunIcon = `<svg class="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" aria-hidden="true">
  <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
</svg>`;

export const renderSiteHeader = (currentPath) => {
  const links = navigation
    .map(({ label, href }) => {
      const current = href === currentPath ? ' aria-current="page"' : "";
      return `<a class="tab" href="${escapeAttribute(href)}"${current}>${label}</a>`;
    })
    .join("\n");

  return `<header class="site-header">
  <div class="site-header__inner">
    <a class="wordmark" href="/">${site.name}</a>
    <nav class="tabs" aria-label="Primary navigation">
${indent(links, 6)}
    </nav>
    <button class="theme-toggle" type="button" aria-label="Switch to dark theme">
${indent(moonIcon, 6)}
${indent(sunIcon, 6)}
    </button>
  </div>
</header>`;
};
