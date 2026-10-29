import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiLayout,
  FiLayers,
  FiCheckCircle,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";
import Skills from "../Skills";
import { experience, projectEvidence, certifications } from "../../data/about";
import "./About.css";

const principles = [
  {
    icon: FiLayout,
    title: "Make the next step clear.",
    text: "Start with what someone needs to do. Build responsive layouts and useful feedback around that task, then refine the visual details.",
  },
  {
    icon: FiLayers,
    title: "Keep the system understandable.",
    text: "Use reusable components, explicit TypeScript models, and deliberate state boundaries so an interface stays easier to change as it grows.",
  },
  {
    icon: FiCheckCircle,
    title: "Consider the difficult states.",
    text: "Loading, empty results, stale data, and failed requests are part of the experience. I work to make those states visible and test the important paths.",
  },
];
export default function About() {
  return (
    <div className="page-shell about-page">
      <header className="page-heading about-heading">
        <p className="eyebrow">
          <span className="status-dot" /> A LITTLE ABOUT ME
        </p>
        <h1>
          Built on curiosity.
          <br />
          Grounded in <span className="accent">engineering.</span>
        </h1>
        <p>
          I’m Dongyun Kim, a front-end developer based in Northern Virginia. I
          build React and TypeScript applications that make complex tasks feel
          clear, considered, and manageable.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/resume">
            View my resume <FiArrowUpRight />
          </Link>
          <Link className="text-link" to="/project">
            Explore my work <FiArrowUpRight />
          </Link>
        </div>
      </header>
      <section className="about-story" aria-labelledby="about-approach">
        <div>
          <p className="eyebrow">THE WAY I WORK</p>
          <h2 id="about-approach">
            Clear interfaces.
            <br />
            Reliable behavior.
          </h2>
        </div>
        <div>
          <p>
            My background includes electrical engineering at Virginia Tech and
            project-based software engineering training at CodeStates and Coding
            Temple. That path brought together an interest in understanding
            systems with the satisfaction of building something people can
            actually use.
          </p>
          <p>
            React and TypeScript are at the center of my work. I focus on
            reusable components, responsive layouts, and clear behavior when
            data loads, changes, or fails. I’ve also worked with Python, Flask,
            SQL, and REST APIs, which helps me connect front-end decisions with
            the services behind them.
          </p>
          <p>
            I enjoy the space between engineering and design: deciding how a
            room editor should respond to a drag, how weather data becomes a
            useful clothing suggestion, or how a market dashboard explains an
            unavailable price. The goal is the same—make the underlying
            complexity easier to understand.
          </p>
        </div>
      </section>
      <section className="about-principles" aria-label="Development approach">
        {principles.map(({ icon: Icon, title, text }) => (
          <article className="about-principle" key={title}>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section
        className="about-section"
        aria-labelledby="about-project-thinking"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">FROM MY RESUME TO THE BROWSER</p>
            <h2 id="about-project-thinking">
              The thinking behind the work<span className="accent">.</span>
            </h2>
          </div>
        </div>
        <div className="about-evidence-grid">
          {projectEvidence.map((project) => (
            <article className="about-evidence" key={project.name}>
              <p className="eyebrow">{project.focus}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a
                className="text-link"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} (opens in a new tab)`}
              >
                Explore the project <FiArrowUpRight />
              </a>
            </article>
          ))}
        </div>
        <article className="about-freelance">
          <div>
            <p className="eyebrow">FREELANCE FRONT-END WORK</p>
            <h3>Shilla Bakery</h3>
          </div>
          <div>
            <p>
              Built a responsive bakery website with a JSON-driven catalog of
              about 60 products, search, category filters, price sorting, and
              individual product pages. It brings the same attention to reusable
              UI and product discovery into a brand-focused experience.
            </p>
            <a
              className="text-link"
              href="https://shilla-bakery.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Shilla Bakery <FiArrowUpRight />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </article>
      </section>
      <section className="about-section" aria-labelledby="about-experience">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPERIENCE & FOUNDATIONS</p>
            <h2 id="about-experience">
              A path built through practice<span className="accent">.</span>
            </h2>
          </div>
          <Link className="text-link" to="/resume">
            Read the full resume <FiArrowUpRight />
          </Link>
        </div>
        <ol className="experience-timeline">
          {experience.map((item) => (
            <li key={item.organization}>
              <div className="experience-period">
                <time dateTime={item.startDate}>{item.start}</time>
                <span aria-hidden="true"> — </span>
                <time dateTime={item.endDate}>{item.end}</time>
              </div>
              <div className="experience-detail">
                <p className="eyebrow">{item.setting}</p>
                <h3>{item.role}</h3>
                <p className="experience-organization">{item.organization}</p>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="about-background-grid">
          <article className="background-card">
            <FiBookOpen aria-hidden="true" />
            <p className="eyebrow">EDUCATION</p>
            <h3>Virginia Tech</h3>
            <p className="background-subtitle">
              Electrical Engineering · Blacksburg, VA
            </p>
            <p>
              A foundation for an analytical approach to technical problems and
              an interest in how individual parts work together as a system.
            </p>
          </article>
          <article className="background-card">
            <FiAward aria-hidden="true" />
            <p className="eyebrow">TRAINING & CERTIFICATIONS</p>
            <h3>Continuing to build.</h3>
            <ul className="certification-list">
              {certifications.map((item) => (
                <li key={item}>
                  <FiCheckCircle aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <Skills />
      <section className="about-personal" aria-labelledby="about-learning">
        <div>
          <p className="eyebrow">STILL CURIOUS</p>
          <h2 id="about-learning">
            Learning is part
            <br />
            of the process.
          </h2>
        </div>
        <div>
          <p>
            I use AI tools to explore alternatives, investigate bugs, and
            support development, while reviewing the resulting code and checking
            its behavior. I’m interested in tools that help me learn, and in
            understanding the tradeoffs behind the final implementation.
          </p>
          <p>
            Away from the screen, I enjoy soccer, traveling, and writing about
            technology. Writing is another way I work through ideas and make
            what I’m learning easier to explain.
          </p>
          <a
            className="text-link"
            href="https://medium.com/@dongyunkim96"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my writing <FiArrowUpRight />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
      <section className="contact-banner">
        <div>
          <p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p>
          <h2>Good work starts with a conversation.</h2>
        </div>
        <Link className="button button-light" to="/contact">
          Get in touch <FiArrowUpRight />
        </Link>
      </section>
    </div>
  );
}
