import { renderPageHeading } from "../components/page-heading.mjs";

export const projectsPage = {
  outputPath: "projects/index.html",
  path: "/projects/",
  title: "Projects — Lawrence Wang",
  description:
    "Selected software engineering, notebooks, and machine learning systems projects by Lawrence Wang.",
  mainClass: "page-shell page-shell--listing",
  content: `${renderPageHeading({
    title: "projects",
    lede: "for fun",
  })}

<section aria-labelledby="projects-heading">
  <h2 id="projects-heading" class="visually-hidden">Selected projects</h2>
  <ol class="entry-list entry-list--linked">
    <li class="entry">
      <a class="entry-link" href="https://github.com/lawang24/lichess-woodpecker">
        <article class="entry__body entry__body--with-demo">
          <div>
            <div class="entry__title-row">
              <h3>lichess-woodpecker</h3>
              <span class="entry__stars" data-github-stars="lawang24/lichess-woodpecker" title="GitHub stars" hidden>
                <span aria-hidden="true">★</span>
                <span class="visually-hidden">GitHub stars</span>
                <span class="entry__star-count"></span>
              </span>
            </div>
            <p>Automatically assign and track the Woodpecker Method for structured chess puzzle drilling.</p>
            <div class="entry__meta meta">
              <span>FastAPI, React, PostgreSQL, NumPy</span>
            </div>
          </div>
          <img class="entry__demo" src="/assets/lichess-woodpecker.gif" width="960" height="496" alt="Playthrough of a chess puzzle in lichess-woodpecker">
        </article>
      </a>
    </li>
  </ol>
</section>`,
};
