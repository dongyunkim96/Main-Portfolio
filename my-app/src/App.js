import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./theme.css";

const Projects = lazy(() => import("./components/Projects/Projects"));
const About = lazy(() => import("./components/About/About"));
const Resume = lazy(() => import("./components/Resume/Resume"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const titles = { "/": "Front-End Developer", "/project": "Projects", "/about": "About", "/resume": "Resume", "/contact": "Contact" };

function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => { document.title = (titles[pathname] || "Portfolio") + " — Dongyun Kim"; }, [pathname]);
  return null;
}

export default function App() {
  return <BrowserRouter>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar /><ScrollToTop /><PageTitle />
    <main id="main-content" tabIndex={-1}>
      <Suspense fallback={<div className="page-shell" role="status">Loading page…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/projects" element={<Navigate to="/project" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </BrowserRouter>;
}
