import React from "react";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact/Contact";
import { projects } from "./data/projects";
import CaseStudy from "./components/Projects/CaseStudy";
import { caseStudies } from "./data/caseStudies";

test("features HealthCareKim and preserves all existing projects", () => {
  render(<MemoryRouter><Projects /></MemoryRouter>);
  const cards = screen.getAllByRole("article");
  expect(cards).toHaveLength(16);
  expect(within(cards[0]).getByRole("link", { name: "View site — HealthCareKim" })).toHaveAttribute("href", "https://health-care-kim.vercel.app/");
  expect(within(cards[0]).getByRole("link", { name: "Source code — HealthCareKim" })).toHaveAttribute("href", "https://github.com/dongyunkim96/HealthCareKim");
  expect(cards.slice(0, 8).map(card => within(card).getByRole("heading", { level: 2 }).textContent)).toEqual(["HealthCareKim", "CONVENE", "SPACEFIT", "STILLROOM", "Shilla Bakery", "PALETTE", "WeatherWear", "CryptoPulse"]);
  expect(within(cards[1]).getByRole("link", { name: "View site — CONVENE" })).toHaveAttribute("href", "https://convene-coral-six.vercel.app");
  expect(within(cards[1]).getByRole("link", { name: "Source code — CONVENE" })).toHaveAttribute("href", "https://github.com/dongyunkim96/Convene");
  expect(within(cards[2]).getByRole("link", { name: "Source code — SPACEFIT" })).toHaveAttribute("href", "https://github.com/dongyunkim96/SpaceFit");
  expect(within(cards[3]).getByRole("link", { name: "View site — STILLROOM" })).toHaveAttribute("href", "https://still-room-five.vercel.app/");
  expect(within(cards[3]).getByRole("link", { name: "Source code — STILLROOM" })).toHaveAttribute("href", "https://github.com/dongyunkim96/StillRoom");
  expect(within(cards[5]).getByRole("link", { name: "View site — PALETTE" })).toHaveAttribute("href", "https://palette-cafe-chi.vercel.app/");
  expect(within(cards[5]).getByRole("link", { name: "Source code — PALETTE" })).toHaveAttribute("href", "https://github.com/dongyunkim96/PaletteCafe");
  projects.forEach(project => expect(project.ghLink).toMatch(/^https:\/\/github\.com\//));
});

test("filters projects and restores the complete ordered collection", () => {
  render(<MemoryRouter><Projects /></MemoryRouter>);
  fireEvent.click(screen.getByRole("button", { name: "Experiments" }));
  expect(screen.getAllByRole("article")).toHaveLength(3);
  expect(screen.queryByRole("heading", { name: "Shilla Bakery" })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Web experiences" }));
  expect(screen.getAllByRole("article")).toHaveLength(3);
  expect(screen.getByRole("heading", { name: "PALETTE" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "STILLROOM" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "All projects" }));
  expect(screen.getAllByRole("article")).toHaveLength(16);
});

test("mobile navigation reports its state and closes after choosing a page", () => {
  render(<MemoryRouter><Navbar /></MemoryRouter>);
  fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
  expect(screen.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true");
  fireEvent.click(screen.getByRole("link", { name: "Projects" }));
  expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
});

test("contact failure retains the message and provides a direct email fallback", async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: false });
  render(<Contact />);
  fireEvent.change(screen.getByLabelText("Your name"), { target: { value: "Visitor" } });
  fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "visitor@example.com" } });
  fireEvent.change(screen.getByLabelText("Subject"), { target: { value: "Hello" } });
  fireEvent.change(screen.getByLabelText("Message"), { target: { value: "A project idea" } });
  fireEvent.click(screen.getByRole("button", { name: "Send message" }));
  expect(await screen.findByRole("link", { name: "email me directly" })).toHaveAttribute("href", "mailto:dongyunkim96@gmail.com");
  expect(screen.getByLabelText("Message")).toHaveValue("A project idea");
  expect(global.fetch).toHaveBeenCalledWith("/api/contact", expect.objectContaining({ method: "POST" }));
  delete global.fetch;
});


test("homepage features HealthCareKim and retains PALETTE after Shilla Bakery", () => {
  render(<MemoryRouter><Home /></MemoryRouter>);
  const selectedWork = screen.getByRole("heading", { name: /The work behind the skills/ }).closest("section");
  const cards = within(selectedWork).getAllByRole("article");
  expect(cards.map(card => within(card).getByRole("heading", { level: 2 }).textContent)).toEqual(["HealthCareKim", "CONVENE", "SPACEFIT", "STILLROOM", "Shilla Bakery", "PALETTE", "WeatherWear", "CryptoPulse"]);
  expect(within(cards[0]).getByRole("link", { name: "View site — HealthCareKim" })).toHaveAttribute("href", "https://health-care-kim.vercel.app/");
  expect(within(cards[0]).getByRole("link", { name: "Source code — HealthCareKim" })).toHaveAttribute("href", "https://github.com/dongyunkim96/HealthCareKim");
  expect(within(cards[2]).getByRole("link", { name: "View site — SPACEFIT" })).toHaveAttribute("href", "https://space-fit-six.vercel.app/");
  expect(within(cards[2]).getByRole("link", { name: "Source code — SPACEFIT" })).toHaveAttribute("href", "https://github.com/dongyunkim96/SpaceFit");
});

test.each(Object.keys(caseStudies))("renders %s engineering evidence with valid project actions", (id) => {
  const project = projects.find(item => item.id === id);
  render(<MemoryRouter initialEntries={[`/project/${id}`]}><Routes><Route path="/project/:projectId" element={<CaseStudy />} /></Routes></MemoryRouter>);
  expect(screen.getByRole("heading", { level: 1, name: project.title })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Explore live project/ })).toHaveAttribute("href", project.demoLink);
  expect(screen.getByRole("link", { name: /Inspect source/ })).toHaveAttribute("href", project.ghLink);
  expect(screen.getByRole("heading", { name: "Scope & limitations" })).toBeInTheDocument();
  expect(screen.getAllByText("Tradeoff")).toHaveLength(3);
});

test("unknown case study provides a route back instead of a broken detail", () => {
  render(<MemoryRouter initialEntries={["/project/unknown"]}><Routes><Route path="/project/:projectId" element={<CaseStudy />} /></Routes></MemoryRouter>);
  expect(screen.getByRole("heading", { name: "Case study not found." })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Back to projects/ })).toHaveAttribute("href", "/project");
});

test.each(projects.filter(project => !caseStudies[project.id]))("renders the $title overview and its available destinations", (project) => {
  render(<MemoryRouter initialEntries={[`/project/${project.id}`]}><Routes><Route path="/project/:projectId" element={<CaseStudy />} /></Routes></MemoryRouter>);
  expect(screen.getByRole("heading", { level: 1, name: project.title })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Inspect source/ })).toHaveAttribute("href", project.ghLink);
  expect(screen.getByRole("heading", { name: "The tools behind the interface." })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Back to projects/ })).toHaveAttribute("href", "/project");
  if (!project.demoLink) expect(screen.queryByRole("link", { name: /Explore live project/ })).not.toBeInTheDocument();
});

test("every project card has a native detail link and Shilla opens its overview", () => {
  render(<MemoryRouter initialEntries={["/project"]}><Routes><Route path="/project" element={<Projects />} /><Route path="/project/:projectId" element={<CaseStudy />} /></Routes></MemoryRouter>);
  projects.forEach(project => expect(screen.getByRole("link", { name: project.title, exact: true })).toHaveAttribute("href", `/project/${project.id}`));
  fireEvent.click(screen.getByRole("link", { name: "Shilla Bakery", exact: true }));
  expect(screen.getByRole("heading", { level: 1, name: "Shilla Bakery" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Inspect source/ })).toHaveAttribute("href", "https://github.com/dongyunkim96/Shilla-Bakery");
});
