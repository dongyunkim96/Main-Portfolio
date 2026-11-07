import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { ProductPreview } from "./ProjectCards";
import { projectOverviews } from "../../data/projectOverviews";

export default function ProjectOverview({ project }) {
  const overview = projectOverviews[project.id];
  return <div className="page-shell study-page overview-page">
    <Link to="/project" className="study-back"><FiArrowLeft aria-hidden="true" /> All projects</Link>
    <header className="study-header"><p className="section-kicker">Project overview / {project.category}</p><h1>{project.title}</h1><p className="study-summary">{project.description}</p><div className="hero-actions">
      {project.demoLink && <a className="button button-primary" href={project.demoLink} target="_blank" rel="noreferrer">{project.demoLabel || "Explore live project"} <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}
      <a className="text-link" href={project.ghLink} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> Inspect source<span className="sr-only"> (opens in a new tab)</span></a>
    </div></header>
    <figure className={`study-visual overview-visual visual-${project.id}`}>
      {project.preview ? <ProductPreview type={project.preview} /> : <img src={project.image} alt={`${project.title} ${project.visualLabel || "application interface"}`} width="900" height="560" />}
      <figcaption>{project.preview ? "Interface illustration" : project.visualLabel || "Application screenshot"} · {project.title}</figcaption>
    </figure>
    <div className="study-layout"><nav className="study-nav" aria-label="Project sections"><span>On this page</span><a href="#overview">Project focus</a><a href="#technology">Technology</a><a href="#explore">Explore the project</a></nav><div className="study-body">
      <section id="overview"><p className="section-kicker">01 / Project focus</p><h2>{project.label.split(" · ")[0].toLowerCase().replace(/^./, char => char.toUpperCase())}.</h2><p>{overview?.context || project.description}</p>
        {(overview?.focus || project.highlights) && <ul className="overview-highlights">{(overview?.focus || project.highlights).map(item => <li key={item}>{item}</li>)}</ul>}
        <div className="contribution-note"><h3>Project context</h3><p>{project.category === "Experiments" ? "A focused practice project exploring the browser and core programming concepts. The repository contains the implementation and exercises." : project.label.includes("TEAM PROJECT") ? "A collaborative project. The linked repository provides the implementation context and team project documentation." : "An application or web experience in my portfolio. Explore the running interface and repository to inspect its behavior and implementation."}</p></div>
      </section>
      <section id="technology"><p className="section-kicker">02 / Technology</p><h2>The tools behind the interface.</h2><ul className="overview-technologies">{project.techStack.map(tech => <li key={tech}>{tech}</li>)}</ul><p>These are the technologies recorded for this project. The repository is the reference for setup instructions, dependency versions, and implementation details.</p></section>
      <section id="explore"><p className="section-kicker">03 / Explore</p><h2>Take a closer look.</h2><p>{project.demoLink ? "Open the demo to explore the interface, or inspect the source to follow the component structure and application logic." : "Explore the source repository for the implementation, exercises, and available setup instructions. This project does not have a separate live demo linked here."}</p><div className="overview-links">{project.demoLink && <a className="text-link" href={project.demoLink} target="_blank" rel="noreferrer">{project.demoLabel || "View site"} <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}<a className="text-link" href={project.ghLink} target="_blank" rel="noreferrer">View source <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></div></section>
    </div></div>
    <section className="career-contact"><div><p className="section-kicker">Keep exploring</p><h2>More projects. More perspectives.</h2><p>Explore the archive for full-stack workflows, interactive tools, and brand experiences.</p></div><Link className="button button-primary" to="/project">Back to projects <FiArrowUpRight aria-hidden="true" /></Link></section>
  </div>;
}
