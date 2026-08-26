import { site } from "../site.mjs";

export const aboutPage = {
  outputPath: "index.html",
  path: "/",
  title: "Lawrence Wang — Software Engineer | Notebooks & ML Systems",
  mainClass: "page-shell page-shell--home",
  description:
    "Lawrence Wang is a New York City software engineer building notebooks, computational tools, and machine learning systems.",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${site.url}/`,
    mainEntity: {
      "@type": "Person",
      name: site.name,
      url: `${site.url}/`,
      jobTitle: "Software Engineer",
      sameAs: [site.github, site.linkedin],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Princeton University",
      },
    },
  },
  content: `<section class="intro" aria-labelledby="intro-heading">
  <h1 id="intro-heading" class="intro-statement">
    Software engineer working on computational notebooks at Datadog. Currently interested in formal verification, algorithms, and ML systems.
  </h1>
  <div class="section-body prose intro__body">
    <p>
      New York City, NY ·
      <a href="mailto:lawrence.wang24@gmail.com">email</a> ·
      <a href="${site.linkedin}">linkedin</a> ·
      <a href="${site.github}">github</a>
    </p>
  </div>
</section>`,
};
