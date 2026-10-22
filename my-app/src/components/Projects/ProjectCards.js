import React from "react";
import "./ProjectActions.css";
import { FiArrowUpRight, FiGithub, FiCheck, FiSun, FiCloud, FiTrendingUp } from "react-icons/fi";

function ProductPreview({ type }) {
  return type === "weather" ? <div className="product-preview weather-preview" aria-label="WeatherWear interface illustration">
    <div className="preview-top"><strong>weatherwear<span>°</span></strong><span>THE EVERYDAY FORECAST</span></div>
    <div className="weather-content"><div><span className="preview-caption">DRESS FOR THE DAY</span><h3>A little forecast.<br />A better day.</h3><div className="weather-temp"><FiSun /> 68<span>°</span></div><span>Light layers. Endless possibilities.</span></div><div className="outfit-illustration"><div className="garment">✳</div><span>YOUR EVERYDAY LAYERS</span><strong>Ready for outside.</strong><div><FiCloud /> Forecast to outfit</div></div></div>
    <div className="preview-bottom"><span>Today</span><span>Week ahead</span><span>Saved places</span><span className="illustration-label">Interface illustration</span></div>
  </div> : <div className="product-preview crypto-preview" aria-label="CryptoPulse interface illustration">
    <div className="preview-top"><strong><FiTrendingUp /> CryptoPulse</strong><span>MARKET OVERVIEW</span></div>
    <div className="crypto-metrics"><div><span>Market insights</span><h3>A pulse on<br />the market.</h3></div><div className="coin-mark">₿</div></div>
    <svg className="chart-art" viewBox="0 0 500 110" aria-hidden="true"><defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7ee4b6" stopOpacity=".25"/><stop offset="100%" stopColor="#7ee4b6" stopOpacity="0"/></linearGradient></defs><path d="M0 95 L25 80 50 88 80 57 110 70 140 42 170 58 200 32 230 46 260 20 290 40 320 28 350 45 380 12 410 25 450 6 480 19 500 4 V110 H0Z" fill="url(#chart-fill)"/><path d="M0 95 L25 80 50 88 80 57 110 70 140 42 170 58 200 32 230 46 260 20 290 40 320 28 350 45 380 12 410 25 450 6 480 19 500 4" fill="none" stroke="#7ee4b6" strokeWidth="2.5"/></svg>
    <div className="preview-bottom"><span>Markets</span><span>Charts</span><span>Watchlist</span><span className="illustration-label">Interface illustration</span></div>
  </div>;
}

export default function ProjectCard({ project, index = 0, compact = false }) {
  return <article className={"work-card " + (compact ? "compact-card" : "")}>
    <div className={"work-visual visual-" + project.id}>
      {project.preview ? <ProductPreview type={project.preview} /> : <img src={project.image} alt={project.title + " application screenshot"} loading="lazy" decoding="async" width="900" height="560" />}
      <span className="work-index">{String(index + 1).padStart(2, "0")}</span>
    </div>
    <div className="work-content"><p className="eyebrow">{project.label}</p><h2>{project.title}</h2><p className="work-description">{project.description}</p>
      {project.highlights && !compact && <ul className="work-highlights">{project.highlights.map(item => <li key={item}><FiCheck />{item}</li>)}</ul>}
      <div className="tech-tags">{project.techStack.map(tech => <span key={tech}>{tech}</span>)}</div>
      <div className="project-actions">
        <div className="project-action-buttons">
          {project.demoLink && (
            <a className="project-action project-action-primary" href={project.demoLink} target="_blank" rel="noopener noreferrer" aria-label={(project.demoLabel || "View site") + " — " + project.title} aria-describedby={"external-note-" + project.id}>
              <span>{project.demoLabel || "View site"}</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          <a className={"project-action " + (project.demoLink ? "project-action-secondary" : "project-action-primary")} href={project.ghLink} target="_blank" rel="noopener noreferrer" aria-label={"Source code — " + project.title} aria-describedby={"external-note-" + project.id}>
            <FiGithub aria-hidden="true" />
            <span>View source</span>
          </a>
        </div>
        <p className="project-action-note" id={"external-note-" + project.id}>Opens in a new tab</p>
      </div>
    </div>
  </article>;
}
