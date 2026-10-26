import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiCode, FiLayers, FiGlobe } from "react-icons/fi";
import ProjectCard from "../Projects/ProjectCards";
import Skills from "../Skills";
import { projects } from "../../data/projects";

export default function Home() {
  return <div className="page-shell home-page">
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> FRONT-END DEVELOPER · NORTHERN VIRGINIA</p><h1>Thoughtful design.<br /><span className="accent">Purposeful code.</span></h1><p className="hero-intro">I’m Dongyun Kim. I build responsive web applications that turn complex ideas into clear, intuitive experiences.</p><div className="hero-actions"><Link to="/project" className="button button-primary">Explore my work <FiArrowUpRight /></Link><Link to="/about" className="text-link">A little about me <FiArrowRight /></Link></div><div className="hero-stack"><span>MY EVERYDAY TOOLKIT</span><div className="hero-toolkit">{["React", "TypeScript", "JavaScript", "Tailwind CSS", "TanStack Query", "Zustand", "Node.js", "Vitest"].map(skill => <span key={skill}>{skill}</span>)}</div><a className="text-link toolkit-link" href="#skills-heading">Explore my full toolkit <FiArrowRight /></a></div></div>
      <div className="engineering-card"><div className="editor-top"><span className="editor-dots"><i /><i /><i /></span><span>developer.tsx</span><FiCode /></div><div className="editor-content"><span className="code-comment">A little about how I build.</span><p><span className="code-purple">const</span> developer = {'{'}</p><p className="code-indent">name: <span className="code-green">"Dongyun Kim"</span>,<br />focus: <span className="code-green">"Front-end development"</span>,<br />approach: [<br /><span className="code-indent code-green">"Design with intention",<br />"Build for real people",<br />"Keep learning"</span><br />]</p><p>{'}'};</p><div className="editor-note"><span className="status-dot" /> Turning ideas into interfaces.</div></div><div className="editor-footer"><span>React + TypeScript</span><span>Always iterating ↗</span></div></div>
    </section>
    <div className="principles-strip"><span><FiCode /> Maintainable components</span><span><FiLayers /> Considered interfaces</span><span><FiGlobe /> Responsive by design</span></div>
    <Skills showAboutLink />
    <section className="selected-section"><div className="section-heading"><div><p className="eyebrow">FROM IDEA TO INTERFACE</p><h2>Selected work<span className="accent">.</span></h2></div><Link className="text-link" to="/project">All {projects.length} projects <FiArrowUpRight /></Link></div><div className="project-grid home-grid">{projects.filter(project => project.featured).map((project, index) => <ProjectCard key={project.id} project={project} index={index} compact />)}</div></section>
    <section className="about-teaser"><p className="eyebrow">THE PERSON BEHIND THE PIXELS</p><h2>I care about how it works.<br /><span>And how it feels to use.</span></h2><div><p>From a bakery’s digital storefront to a data-rich dashboard, I enjoy making useful things feel simple. My work combines reusable React components, thoughtful state management, and a close eye for the details.</p><Link to="/about" className="text-link">More about my approach <FiArrowUpRight /></Link></div></section>
    <section className="contact-banner"><div><p className="eyebrow">LET’S MAKE THE NEXT THING</p><h2>Good ideas deserve great interfaces.</h2></div><Link to="/contact" className="button button-light">Let’s talk <FiArrowUpRight /></Link></section>
  </div>;
}
