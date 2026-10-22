import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <nav className="nav-shell" aria-label="Main navigation">
      <Link className="wordmark" to="/" onClick={() => setOpen(false)} aria-label="Dongyun Kim home">dk<span>.</span></Link>
      <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
      <div id="main-nav" className={"nav-links " + (open ? "is-open" : "")}>
        {[["/", "Home"], ["/project", "Projects"], ["/about", "About"], ["/resume", "Resume"]].map(([to, name]) => <NavLink key={to} to={to} end onClick={() => setOpen(false)}>{name}</NavLink>)}
        <NavLink to="/contact" className="nav-contact" onClick={() => setOpen(false)}>Let’s talk <FiArrowUpRight /></NavLink>
      </div>
    </nav>
  </header>;
}
