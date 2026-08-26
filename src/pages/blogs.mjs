import { renderPageHeading } from "../components/page-heading.mjs";

export const blogsPage = {
  outputPath: "blogs/index.html",
  path: "/blogs/",
  title: "Blogs — Lawrence Wang",
  mainClass: "page-shell page-shell--listing",
  content: renderPageHeading({ title: "Blogs", lede: "Coming soon." }),
};
