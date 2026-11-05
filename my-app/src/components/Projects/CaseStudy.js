import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../../data/projects";
import { caseStudies } from "../../data/caseStudies";

export default function CaseStudy() {
  const { projectId } = useParams();
  const project = projects.find(item => item.id === projectId);
  const study = caseStudies[projectId];
  useEffect(() => { document.title = `${project && study ? project.title + " — Engineering case study" : "Case study not found"} — Dongyun Kim`; }, [project, study]);
  if (!project || !study) return <div className="page-shell study-page"><h1>Case study not found.</h1><p>Explore the archive for available demos and engineering notes.</p><Link className="text-link" to="/project">Back to projects <FiArrowRight /></Link></div>;
  return <div className="page-shell study-page">
    <Link to="/project" className="study-back"><FiArrowLeft aria-hidden="true" /> All projects</Link>
    <header className="study-header"><p className="section-kicker">Engineering case study / {study.focus}</p><h1>{project.title}</h1><p className="study-summary">{study.summary}</p><div className="hero-actions"><a className="button button-primary" href={project.demoLink} target="_blank" rel="noreferrer">Explore live project <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a><a className="text-link" href={project.ghLink} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> Inspect source<span className="sr-only"> (opens in a new tab)</span></a></div></header>
    <figure className={`study-visual visual-${project.id}`}><img src={project.image} alt={`${project.title} application interface`} width="1440" height="900" /><figcaption>Application screenshot · {project.title}</figcaption></figure>
    <div className="study-layout"><nav className="study-nav" aria-label="Case study sections"><span>On this page</span><a href="#context">Context & contribution</a><a href="#decisions">Engineering decisions</a><a href="#verification">Verification & scope</a><a href="#walkthrough">Try the workflow</a><div className="study-stack">{project.techStack.map(tech => <span key={tech}>{tech}</span>)}</div></nav><div className="study-body">
      <section id="context"><p className="section-kicker">01 / Context</p><h2>The problem behind the interface.</h2><p>{study.context}</p><div className="contribution-note"><h3>Implementation scope</h3><p>{study.contributions}</p><span>Project work · Portfolio demonstration</span></div><ol className="architecture-flow" aria-label="Application architecture">{study.flow.map((step, index) => <li key={step}><span>{step}</span>{index < study.flow.length - 1 && <FiArrowRight aria-hidden="true" />}</li>)}</ol></section>
      <section id="decisions"><p className="section-kicker">02 / Decisions</p><h2>The choices that shape the behavior.</h2><div className="study-decisions">{study.decisions.map((decision, index) => <div className="study-decision" key={decision.title}><span className="decision-number">0{index + 1}</span><h3>{decision.title}</h3><dl><div><dt>Problem</dt><dd>{decision.problem}</dd></div><div><dt>Approach</dt><dd>{decision.approach}</dd></div><div><dt>Tradeoff</dt><dd>{decision.tradeoff}</dd></div></dl></div>)}</div></section>
      <section id="verification"><p className="section-kicker">03 / Evidence</p><h2>Verification & boundaries.</h2><p>{study.verification}</p><a href={study.evidenceUrl} className="text-link" target="_blank" rel="noreferrer">{study.evidenceLabel} <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a><div className="scope-note"><h3>Scope & limitations</h3><p>{study.scope}</p></div></section>
      <section id="walkthrough"><p className="section-kicker">04 / Explore</p><h2>Try the workflow yourself.</h2><ol className="study-walkthrough">{study.walkthrough.map(step => <li key={step}>{step}</li>)}</ol><a className="text-link" href={project.demoLink} target="_blank" rel="noreferrer">Open {project.title} <FiArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></section>
    </div></div>
    <section className="career-contact"><div><p className="section-kicker">Continue the conversation</p><h2>Let’s talk through the decisions.</h2><p>I’d be glad to walk through the code, the tradeoffs, and what I would improve next.</p></div><Link className="button button-primary" to="/contact">Get in touch <FiArrowUpRight aria-hidden="true" /></Link></section>
  </div>;
}
