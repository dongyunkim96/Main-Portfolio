import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectCard from "./ProjectCards";
import { projects } from "../../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All projects");
  const visible = filter === "All projects" ? projects : projects.filter(p => p.category === filter);
  return <div className="page-shell projects-page">
    <header className="page-heading"><p className="eyebrow"><span className="status-dot" /> SELECTED WORK & EXPLORATIONS</p><h1>Ideas, brought<br />to the <span className="accent">browser.</span></h1><p>A collection of applications, web experiences, and experiments.<br className="desktop-break" /> Built with curiosity. Refined through code.</p></header>
    <div className="project-toolbar"><div className="filter-list" role="group" aria-label="Filter projects">{["All projects", "Applications", "Web experiences", "Experiments"].map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="project-count" role="status">{String(visible.length).padStart(2, "0")} projects</span></div>
    <div className="project-grid">{visible.map(p => <ProjectCard key={p.id} project={p} index={projects.indexOf(p)} />)}</div>
    <section className="contact-banner"><div><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s build something useful.</h2></div><Link className="button button-light" to="/contact">Get in touch <FiArrowUpRight /></Link></section>
  </div>;
}
