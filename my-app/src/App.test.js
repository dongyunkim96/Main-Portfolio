import React from "react";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact/Contact";
import { projects } from "./data/projects";

test("shows Shilla Bakery, WeatherWear, and CryptoPulse first and preserves the project archive", () => {
  render(<MemoryRouter><Projects /></MemoryRouter>);
  const cards = screen.getAllByRole("article");
  expect(cards).toHaveLength(11);
  expect(cards.slice(0, 3).map(card => within(card).getByRole("heading", { level: 2 }).textContent)).toEqual(["Shilla Bakery", "WeatherWear", "CryptoPulse"]);
  expect(within(cards[0]).getByRole("link", { name: "Source code — Shilla Bakery" })).toHaveAttribute("href", "https://github.com/dongyunkim96/Shilla-Bakery");
  projects.forEach(project => expect(project.ghLink).toMatch(/^https:\/\/github\.com\//));
});

test("filters projects and restores the complete ordered collection", () => {
  render(<MemoryRouter><Projects /></MemoryRouter>);
  fireEvent.click(screen.getByRole("button", { name: "Experiments" }));
  expect(screen.getAllByRole("article")).toHaveLength(3);
  expect(screen.queryByRole("heading", { name: "Shilla Bakery" })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "All projects" }));
  expect(screen.getAllByRole("article")).toHaveLength(11);
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
