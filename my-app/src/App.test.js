import React from "react";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact/Contact";
import { projects } from "./data/projects";

test("shows SPACEFIT first and preserves all existing projects", () => {
  render(<MemoryRouter><Projects /></MemoryRouter>);
  const cards = screen.getAllByRole("article");
  expect(cards).toHaveLength(12);
  expect(cards.slice(0, 4).map(card => within(card).getByRole("heading", { level: 2 }).textContent)).toEqual(["SPACEFIT", "Shilla Bakery", "WeatherWear", "CryptoPulse"]);
  expect(within(cards[0]).getByRole("link", { name: "Source code — SPACEFIT" })).toHaveAttribute("href", "https://github.com/dongyunkim96/SpaceFit");
  projects.forEach(project => expect(project.ghLink).toMatch(/^https:\/\/github\.com\//));
});

test("filters projects and restores the complete ordered collection", () => {
  render(<MemoryRouter><Projects /></MemoryRouter>);
  fireEvent.click(screen.getByRole("button", { name: "Experiments" }));
  expect(screen.getAllByRole("article")).toHaveLength(3);
  expect(screen.queryByRole("heading", { name: "Shilla Bakery" })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "All projects" }));
  expect(screen.getAllByRole("article")).toHaveLength(12);
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


test("homepage features SPACEFIT first and retains the existing featured projects", () => {
  render(<MemoryRouter><Home /></MemoryRouter>);
  const selectedWork = screen.getByRole("heading", { name: /Selected work/ }).closest("section");
  const cards = within(selectedWork).getAllByRole("article");
  expect(cards.map(card => within(card).getByRole("heading", { level: 2 }).textContent)).toEqual(["SPACEFIT", "Shilla Bakery", "WeatherWear", "CryptoPulse"]);
  expect(within(cards[0]).getByRole("link", { name: "View site — SPACEFIT" })).toHaveAttribute("href", "https://space-fit-six.vercel.app/");
  expect(within(cards[0]).getByRole("link", { name: "Source code — SPACEFIT" })).toHaveAttribute("href", "https://github.com/dongyunkim96/SpaceFit");
});
