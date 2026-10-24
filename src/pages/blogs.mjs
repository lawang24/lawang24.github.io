import { renderPageHeading } from "../components/page-heading.mjs";
import { organismsPost } from "./organisms-as-artifacts.mjs";
import { escapeAttribute } from "../lib/html.mjs";

export const blogsPage = {
  outputPath: "blogs/index.html",
  path: "/blogs/",
  title: "Blogs — Lawrence Wang",
  description:
    "Technical writing by Lawrence Wang on software engineering, notebooks, computational tools, and machine learning systems.",
  mainClass: "page-shell page-shell--listing",
  content: `${renderPageHeading({ title: "Blogs", lede: "Thoughts on software and engineering." })}

<section aria-labelledby="posts-heading">
  <h2 id="posts-heading" class="visually-hidden">Latest posts</h2>
  <ol class="entry-list entry-list--linked">
    <li class="entry">
      <a class="entry-link" href="${organismsPost.path}">
        <article class="entry__body">
          <h3>${escapeAttribute(organismsPost.title)}</h3>
          <p>${escapeAttribute(organismsPost.description)}</p>
        </article>
      </a>
    </li>
  </ol>
</section>`,
};
