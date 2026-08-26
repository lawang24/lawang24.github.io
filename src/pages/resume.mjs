import { renderPageHeading } from "../components/page-heading.mjs";

export const resumePage = {
  outputPath: "resume/index.html",
  path: "/resume/",
  title: "Resume — Lawrence Wang",
  description:
    "Lawrence Wang's software engineering experience, education, and technical skills.",
  mainClass: "page-shell resume-page",
  content: `${renderPageHeading({
    title: "Resume",
    lede: "Where I've been.",
  })}

<section class="section-grid" aria-labelledby="experience-heading">
  <h2 id="experience-heading" class="section-label">experience</h2>
  <div class="resume-list">
    <article class="resume-item">
      <header class="resume-item__header">
        <div>
          <h3>Software Engineer, Notebooks</h3>
          <p class="resume-item__organization">Datadog</p>
        </div>
        <p class="resume-item__date meta">Jul 2025 – Present</p>
      </header>
      <p class="resume-item__summary">
        Improving notebooks and computational experiences for teams investigating production systems.
      </p>
    </article>

    <article class="resume-item">
      <header class="resume-item__header">
        <div>
          <h3>ML Research Intern, Recommendations</h3>
          <p class="resume-item__organization">Snapchat</p>
        </div>
        <p class="resume-item__date meta">Sep – Dec 2024</p>
      </header>
      <p class="resume-item__summary">
        Making large-scale recommendation model training faster and more flexible.
      </p>
    </article>

    <article class="resume-item">
      <header class="resume-item__header">
        <div>
          <h3>Software Engineering Intern, Notebooks</h3>
          <p class="resume-item__organization">Datadog</p>
        </div>
        <p class="resume-item__date meta">Jun – Aug 2024</p>
      </header>
      <p class="resume-item__summary">
        Building polished authoring and export workflows for collaborative notebooks.
      </p>
    </article>

    <article class="resume-item">
      <header class="resume-item__header">
        <div>
          <h3>Software Engineering Intern</h3>
          <p class="resume-item__organization">String</p>
        </div>
        <p class="resume-item__date meta">Jan – Apr 2024</p>
      </header>
      <p class="resume-item__summary">
        Turning unstructured filings and industry data into production research products.
      </p>
    </article>
  </div>
</section>

<section class="section-grid" aria-labelledby="education-heading">
  <h2 id="education-heading" class="section-label">education</h2>
  <article class="resume-item resume-item--single">
    <header class="resume-item__header">
      <div>
        <h3>BA, Economics &amp; Computer Science</h3>
        <p class="resume-item__organization">Princeton University · 3.8/4.0</p>
      </div>
      <p class="resume-item__date meta">2025</p>
    </header>
  </article>
</section>

<section class="section-grid" aria-labelledby="skills-heading">
  <h2 id="skills-heading" class="section-label">skills</h2>
  <dl class="coordinates skills-list">
    <div>
      <dt>languages</dt>
      <dd>Python, TypeScript, JavaScript, C++, Rust</dd>
    </div>
    <div>
      <dt>tools</dt>
      <dd>PyTorch, React, FastAPI, PostgreSQL, NumPy, Git</dd>
    </div>
    <div>
      <dt>focus</dt>
      <dd>ML systems, full-stack development, data engineering</dd>
    </div>
  </dl>
</section>`,
};
