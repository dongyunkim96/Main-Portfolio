import React from "react";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";

const resumeUrl = "/Dongyun_Kim_Resume.pdf";
export default function Resume() {
  return <div className="page-shell resume-page"><header className="page-heading"><p className="eyebrow">BACKGROUND & EXPERIENCE</p><h1>A closer look<br />at my <span className="accent">experience.</span></h1><p>My background, technical skills, and project experience in one place.</p><div className="hero-actions"><a className="button button-primary" href={resumeUrl} download="Dongyun_Kim_Resume.pdf">Download resume <FiDownload /></a><a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">Open PDF <FiArrowUpRight /></a></div></header><div className="resume-frame"><object data={resumeUrl} type="application/pdf" aria-label="Dongyun Kim resume"><p>Your browser does not support an embedded PDF. <a href={resumeUrl}>View or download the resume.</a></p></object></div><p className="muted resume-hint">Having trouble with the preview? Use “Open PDF” or download a copy above.</p></div>;
}
