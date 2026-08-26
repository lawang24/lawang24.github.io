import { renderPageHeading } from "../components/page-heading.mjs";

export const blogsPage = {
  outputPath: "blogs/index.html",
  path: "/blogs/",
  title: "Blogs — Lawrence Wang",
  indexable: false,
  description:
    "Technical writing by Lawrence Wang on software engineering, notebooks, computational tools, and machine learning systems.",
  mainClass: "page-shell page-shell--listing",
  content: renderPageHeading({ title: "Blogs", lede: "Coming soon." }),
};
