import { escapeAttribute } from "../lib/html.mjs";

export const organismsPost = {
  title: "Organisms as Artifacts of the /goal loop",
  path: "/blogs/organisms-as-artifacts-of-the-goal-loop/",
  description: "What are the limits of the current process of vibe-coded engineering?",
};

const paragraphs = [
  "What are the limits of the current process of vibe-coded engineering?",
  "Developers are mass producing enterprise software clones, game mashups, and entire companies with two simple ingredients at the core - a good agent and a verification loop. These can spin up hundreds of thousands of lines of code in the order of days, with little human supervision over the engineering process. And many of them have shown some pretty impressive results, but often the code quality itself can be questionable.",
  "Is that a problem if it works? Does the code even matter? What’s the value in simplicity and design principles if the end result works and implementation is abstracted away? What are the tradeoffs we make by directly using verification as a proxy, sidelining implementation / engineering practice as of now?",
  "We already have an interesting precedent of the ultimate “vibe-coded” engineering taken to the extreme that we are also quite familiar with: biological organisms.",
  "If you’ve ever tried to one-shot this type of coding project, a typical loop (“loop engineering”) for maximum speed can look like: Agent sees problem -> agent makes solution -> works? Yes: next ticket -> no? Try something else. It’s like whack-a-mole with each new bug/feature request, with each change made to pass the current test harness.",
  "Evolution optimizes not too differently than this verification loop. The mutations might be more random and concurrent than the changes in a codebase, but at the core it’s a similar optimization process, survival and reproduction being the “harness” that governs which mutations persist.",
  "What’s most similar in the biological evolution process is that each change is done in isolation with no implementation restraints. With each change, there is no concept of simplicity, modularity, decoupling, and obviously no refactoring. There is also no consideration about extensibility or future changes in the environment; mutations that achieve a new result persist, those that fail and are forgotten. Whatever works survives.",
  "Backing evidence in this analogy is the “evolutionary” trail you can often see in a vibe-coded codebase. Similar to the vestigial structures (i.e. tailbones) inherited by ancestors on our bodies, you can piece together the old versions of a vibe-coded codebase through leftover unit tests, completely inaccessible fallback mechanisms, or an extremely complicated system from tacking on one feature onto another.",
  "So let’s assume a vibe-coded code base, extrapolated into the token-maxed future, transforms and evolves like an evolutionary process, designed to excel in its current environment. What are the pros/cons? How would you rate the engineering behind our bodies?",
  "The obvious pro is that the engineering behind organisms is pretty effective all things considered. The systems in our bodies are extremely complex, and for the most part do an incredible job. We have separate organ systems for digestion, vision, movement, each handling pivotal duties for our survival. We have separate conscious / unconscious systems, processes so powerful and complicated we still don’t fully understand it to this day. If you compare cells as classes with factories, systems as microservices, there are many parallels that are quite interesting.",
  "However, it’s also incredibly difficult to extend, optimize, or even understand the biological systems to this day. The body’s systems are coupled in very mysterious ways and changing one aspect can lead to devastatingly unknown consequences. Internal mechanisms of how things work are also very confusing; we famously don’t know how drugs like Tylenol fully work. Medicine and surgeries need to have such lengthy trials and testing because there’s no telling what the body’s response might be to any change in the system. Any new feature or optimization becomes very complicated / confusing to reason about and inefficient to verify. From an engineering standpoint, it would be terrifying to work on such a project.",
  "Software engineering principles arise out of the wisdom that we need software to be easy to modify and extend for future evolving purposes. The current progression of programming repositories makes it similarly scary to contribute after a certain threshold of quality regression has been crossed.",
  "This is not to say that there isn’t a way to incorporate simplicity and engineering practice into the harnesses of the future. Perhaps part of the verification loop will be the testing of simplicity of changes and engineering principles, or we will have some quantifiable measurement for those principles we can optimize for.",
  "Using complex organisms as a glimpse of the future in the current verification based paradigm of engineering, it’s still clear that the current state of implementation is not one we should keep-long term, but also one that we can get quite far on.",
];

export const organismsPage = {
  outputPath: "blogs/organisms-as-artifacts-of-the-goal-loop/index.html",
  path: organismsPost.path,
  title: `${organismsPost.title} — Lawrence Wang`,
  description: organismsPost.description,
  mainClass: "page-shell page-shell--post",
  content: `<article aria-labelledby="post-title">
  <header class="post-heading">
    <p class="meta"><a href="/blogs/">← All posts</a></p>
    <h1 id="post-title">${escapeAttribute(organismsPost.title)}</h1>
  </header>
  <div class="prose post-body">
${paragraphs.map((paragraph) => `    <p>${escapeAttribute(paragraph)}</p>`).join("\n\n")}
  </div>
</article>`,
};
