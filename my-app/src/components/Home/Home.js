import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight, FiGithub, FiDownload } from "react-icons/fi";
import ProjectCard from "../Projects/ProjectCards";
import Skills from "../Skills";
import { projects } from "../../data/projects";
import { caseStudies } from "../../data/caseStudies";

export default function Home() {
  const lead = projects[0];
  return <div className="page-shell home-page">
    <section className="career-hero" aria-labelledby="career-title">
      <div className="career-copy">
        <p className="career-byline">Dongyun Kim <span>Frontend developer · Northern Virginia</span></p>
        <h1 id="career-title">Considered interfaces.<br /><span>Reliable systems.</span></h1>
        <p className="career-intro">I build React and TypeScript applications, from the interaction you see to the data rules that make it work.</p>
        <p className="career-detail">My projects connect responsive design, shared state, APIs, and SQL—with particular attention to conflicts, recovery, and the details that make an application usable.</p>
        <div className="hero-actions"><a href="#selected-work" className="button button-primary">Explore selected work <FiArrowRight aria-hidden="true" /></a><Link to="/resume" className="text-link">View resume <FiArrowUpRight aria-hidden="true" /></Link></div>
        <div className="career-links"><a href="https://github.com/dongyunkim96" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub <span className="sr-only">(opens in a new tab)</span></a><a href="/Dongyun_Kim_Resume.pdf" download><FiDownload aria-hidden="true" /> Resume PDF</a><Link to="/contact">Let’s talk <FiArrowUpRight aria-hidden="true" /></Link></div>
      </div>
      <div className="hero-project">
        <div className="hero-project-top"><span>Inside the work</span><span>01 / HealthCareKim</span></div>
        <Link to="/project/healthcarekim" className="hero-project-image" aria-label="Read the HealthCareKim engineering case study"><img src={lead.image} alt="HealthCareKim clinic operations overview with workload, appointments, and activity" width="1440" height="900" decoding="async" /></Link>
        <div className="hero-project-caption"><div><strong>A workspace that handles the hard states.</strong><p>Role-based access · Conflict recovery · Transactional history</p></div><Link to="/project/healthcarekim" aria-label="Read HealthCareKim case study"><FiArrowUpRight aria-hidden="true" /></Link></div>
        <div className="hero-project-flow" aria-label="HealthCareKim architecture"><span>React UI</span><FiArrowRight aria-hidden="true" /><span>Typed API</span><FiArrowRight aria-hidden="true" /><span>SQL transactions</span></div>
      </div>
    </section>
    <dl className="capability-strip" aria-label="Core capabilities">
      <div><dt>Frontend craft</dt><dd>React · TypeScript · Responsive UI</dd></div>
      <div><dt>Application systems</dt><dd>Next.js · APIs · PostgreSQL</dd></div>
      <div><dt>Interaction design</dt><dd>SVG editors · State · Motion</dd></div>
      <div><dt>Verification</dt><dd>Vitest · Playwright · SQL tests</dd></div>
    </dl>
    <section id="selected-work" className="selected-section" aria-labelledby="selected-title">
      <div className="section-heading"><div><p className="section-kicker">Selected work / 01–08</p><h2 id="selected-title">The work behind the skills.</h2></div><Link className="text-link" to="/project">All {projects.length} projects <FiArrowUpRight aria-hidden="true" /></Link></div>
      <p className="section-deck">Full-stack workflows, interactive tools, and carefully built brand experiences. Open a live demo, inspect the source, or read the engineering decisions.</p>
      <div className="project-grid home-grid">{projects.filter(project => project.featured).map((project, index) => <ProjectCard key={project.id} project={project} index={index} compact />)}</div>
    </section>
    <section className="engineering-section" aria-labelledby="engineering-title">
      <div className="section-heading"><div><p className="section-kicker">Engineering decisions</p><h2 id="engineering-title">Beyond the happy path.</h2></div><p>Concrete problems. Deliberate boundaries.</p></div>
      <div className="engineering-rows">{["healthcarekim", "convene", "spacefit"].map((id, index) => <div className="engineering-row" key={id}><span className="decision-number">0{index + 1}</span><div><h3>{caseStudies[id].decisionTitle}</h3><p>{caseStudies[id].decisionSummary}</p></div><Link className="text-link" to={`/project/${id}`}>{projects.find(p => p.id === id).title}<FiArrowUpRight aria-hidden="true" /><span className="sr-only"> engineering case study</span></Link></div>)}</div>
    </section>
    <Skills showAboutLink />
    <section className="career-background" aria-labelledby="background-title"><div><p className="section-kicker">The person behind the work</p><h2 id="background-title">An engineering mindset.<br />A careful eye for the interface.</h2></div><div><p>My background brings together electrical engineering studies at Virginia Tech, software engineering training at Coding Temple and CodeStates, and communications and squad leadership in the Republic of Korea Army.</p><p>I bring that same systems thinking to product work: make the behavior understandable, consider the failure states, and keep improving the experience.</p><Link className="text-link" to="/about">Experience & approach <FiArrowUpRight aria-hidden="true" /></Link></div></section>
    <section className="career-contact"><div><p className="section-kicker">Let’s work together</p><h2>Have a role that needs<br />both craft and systems thinking?</h2><p>I’d welcome a conversation about your team and the problems you’re building for.</p></div><div><Link className="button button-primary" to="/contact">Start a conversation <FiArrowUpRight aria-hidden="true" /></Link><a href="mailto:dongyunkim96@gmail.com">dongyunkim96@gmail.com</a></div></section>
  </div>;
}
