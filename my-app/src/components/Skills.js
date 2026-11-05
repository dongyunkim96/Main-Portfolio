import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCode, FiLayout, FiLayers, FiDatabase, FiCheckCircle, FiGitBranch } from "react-icons/fi";
import { skillGroups } from "../data/skills";
import { projects } from "../data/projects";
import { caseStudies } from "../data/caseStudies";
import "./Skills.css";

const icons = [FiCode, FiLayout, FiLayers, FiDatabase, FiCheckCircle, FiGitBranch];

export default function Skills({ showAboutLink = false }) {
  return (
    <section className="skills-section" aria-labelledby="skills-heading">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Technical range</p>
          <h2 id="skills-heading">Skills, connected to the work.</h2>
        </div>
        {showAboutLink && <Link className="text-link" to="/about">About my approach <FiArrowUpRight /></Link>}
      </div>
      <p className="skills-intro">The stack changes with the problem. Each area below is grounded in projects you can open and inspect.</p>
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[index];
          return (
            <article className="skill-card skill-experience" key={group.title}>
              <Icon aria-hidden="true" />
              <h3>{group.title}</h3>
              <p className="skill-description">{group.description}</p>
              <ul className="tech-tags skill-tags" aria-label={group.title + " technologies"}>
                {group.skills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
              <p className="skill-projects"><span>PROJECT EXPERIENCE</span>{group.projects.map((title, index) => {
                const project = projects.find(item => item.title === title);
                return <React.Fragment key={title}>{index > 0 && " · "}{project && caseStudies[project.id] ? <Link to={`/project/${project.id}`}>{title}</Link> : title}</React.Fragment>;
              })}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
