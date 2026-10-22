import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return <footer className="site-footer"><div className="footer-inner">
    <div><Link className="wordmark" to="/" aria-label="Dongyun Kim home">dk<span>.</span></Link><p>Thoughtful interfaces. Purposeful code.</p></div>
    <div className="footer-right"><div className="footer-links">
      <a href="https://github.com/dongyunkim96" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a>
      <a href="https://linkedin.com/in/dongyun-kim-363487272/" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight /></a>
      <a href="mailto:dongyunkim96@gmail.com">Email <FiArrowUpRight /></a>
    </div><p>© {new Date().getFullYear()} Dongyun Kim</p></div>
  </div></footer>;
}
