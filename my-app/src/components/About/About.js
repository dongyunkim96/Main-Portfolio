import React from "react";
import { Link } from "react-router-dom";
import Skills from "../Skills";
import { FiArrowUpRight } from "react-icons/fi";


export default function About() {
  return <div className="page-shell about-page">
    <header className="page-heading"><p className="eyebrow">A LITTLE ABOUT ME</p><h1>A developer.<br />An attentive <span className="accent">builder.</span></h1><p>Hi, I’m Dongyun Kim, a front-end developer based in Northern Virginia, USA.</p></header>
    <section className="about-story"><div><p className="eyebrow">MY APPROACH</p><h2>Useful by purpose.<br />Thoughtful by design.</h2></div><div><p>I enjoy turning ideas into web applications that people can understand and use comfortably. React and TypeScript are at the center of my toolkit, with a focus on clean interfaces, reusable components, and responsive layouts.</p><p>My projects explore different kinds of problems: representing a local brand online, making weather forecasts actionable, and organizing complex market data. Each one is an opportunity to improve both the experience and the code behind it.</p><p>I use AI tools to explore solutions, debug, and support my development workflow, while reviewing the resulting implementation and checking its behavior. Away from the screen, I enjoy soccer, traveling, and writing about technology.</p><a className="text-link" href="https://medium.com/@dongyunkim96" target="_blank" rel="noreferrer">Read my writing <FiArrowUpRight /></a></div></section>
    <Skills />
    <section className="contact-banner"><div><p className="eyebrow">SEE THE THINKING IN PRACTICE</p><h2>The best introduction is the work.</h2></div><Link className="button button-light" to="/project">Explore projects <FiArrowUpRight /></Link></section>
  </div>;
}
