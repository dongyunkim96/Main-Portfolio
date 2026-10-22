import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCode, FiLayout, FiGitBranch } from "react-icons/fi";

const skills = [
  ["Interface development", ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"]],
  ["Application architecture", ["React Router", "TanStack Query", "Zustand", "Redux Toolkit", "REST APIs", "Zod"]],
  ["Tools & delivery", ["Git", "GitHub", "Vite", "Vercel", "Vitest", "Firebase"]]
];
export default function About() {
  return <div className="page-shell about-page">
    <header className="page-heading"><p className="eyebrow">A LITTLE ABOUT ME</p><h1>A developer.<br />An attentive <span className="accent">builder.</span></h1><p>Hi, I’m Dongyun Kim, a front-end developer based in Northern Virginia, USA.</p></header>
    <section className="about-story"><div><p className="eyebrow">MY APPROACH</p><h2>Useful by purpose.<br />Thoughtful by design.</h2></div><div><p>I enjoy turning ideas into web applications that people can understand and use comfortably. React and TypeScript are at the center of my toolkit, with a focus on clean interfaces, reusable components, and responsive layouts.</p><p>My projects explore different kinds of problems: representing a local brand online, making weather forecasts actionable, and organizing complex market data. Each one is an opportunity to improve both the experience and the code behind it.</p><p>I use AI tools to explore solutions, debug, and support my development workflow, while reviewing the resulting implementation and checking its behavior. Away from the screen, I enjoy soccer, traveling, and writing about technology.</p><a className="text-link" href="https://medium.com/@dongyunkim96" target="_blank" rel="noreferrer">Read my writing <FiArrowUpRight /></a></div></section>
    <section className="skills-section"><div className="section-heading"><div><p className="eyebrow">THE TOOLKIT</p><h2>Tools with a purpose<span className="accent">.</span></h2></div></div><div className="skills-grid">{skills.map(([title, items], i) => <article className="skill-card" key={title}>{[<FiLayout key="layout" />, <FiCode key="code" />, <FiGitBranch key="git" />][i]}<h3>{title}</h3><div className="tech-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>
    <section className="contact-banner"><div><p className="eyebrow">SEE THE THINKING IN PRACTICE</p><h2>The best introduction is the work.</h2></div><Link className="button button-light" to="/project">Explore projects <FiArrowUpRight /></Link></section>
  </div>;
}
