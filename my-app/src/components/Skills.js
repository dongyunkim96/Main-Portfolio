import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCode, FiLayout, FiLayers, FiDatabase, FiCheckCircle, FiGitBranch } from "react-icons/fi";
import { skillGroups } from "../data/skills";
import "./Skills.css";

const icons = [FiCode, FiLayout, FiLayers, FiDatabase, FiCheckCircle, FiGitBranch];

export default function Skills({ showAboutLink = false }) {
  return (
    <section className="skills-section" aria-labelledby="skills-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">TECHNICAL SKILLS</p>
          <h2 id="skills-heading">A toolkit built through projects<span className="accent">.</span></h2>
        </div>
        {showAboutLink && <Link className="text-link" to="/about">About my approach <FiArrowUpRight /></Link>}
      </div>
      <p className="skills-intro">From interface design to APIs, testing, and deployment—technologies I’ve used across my applications and experiments.</p>
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
              <p className="skill-projects"><span>PROJECT EXPERIENCE</span>{group.projects.join(" · ")}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
