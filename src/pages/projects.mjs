import { renderPageHeading } from "../components/page-heading.mjs";

export const projectsPage = {
  outputPath: "projects/index.html",
  path: "/projects/",
  title: "Projects — Lawrence Wang",
  description:
    "Selected systems engineering and machine learning infrastructure projects.",
  mainClass: "page-shell page-shell--listing",
  content: `${renderPageHeading({
    title: "Projects",
    lede: "A few things I've made.",
  })}

<section aria-labelledby="projects-heading">
  <h2 id="projects-heading" class="visually-hidden">Selected projects</h2>
  <ol class="entry-list project-list">
    <li class="entry">
      <a class="project-link" href="https://github.com/your-handle/lichess-woodpecker">
        <article class="entry__body">
          <h3>lichess-woodpecker</h3>
          <p>A full-stack chess training app for practicing puzzles through repeated cycles.</p>
          <div class="entry__meta meta"><span>FastAPI, React, PostgreSQL, NumPy</span></div>
        </article>
      </a>
    </li>
  </ol>
</section>`,
};
