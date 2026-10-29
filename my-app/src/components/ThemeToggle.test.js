import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ThemeToggle, { THEME_STORAGE_KEY } from "./ThemeToggle";
beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
  const meta = document.createElement("meta");
  meta.name = "theme-color";
  document.head.appendChild(meta);
});
afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
  document.documentElement.style.cssText = "";
  document.querySelector('meta[name="theme-color"]')?.remove();
});
test("switches both themes and updates browser chrome and saved preference", () => {
  render(<ThemeToggle />);
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  fireEvent.click(
    screen.getByRole("button", { name: "Switch to light theme" }),
  );
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
  expect(document.documentElement.style.colorScheme).toBe("light");
  expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
  expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute(
    "content",
    "#f6f8f5",
  );
  fireEvent.click(screen.getByRole("button", { name: "Switch to dark theme" }));
  expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
});
test("restores a saved light theme when the control mounts again", () => {
  const { unmount } = render(<ThemeToggle />);
  fireEvent.click(
    screen.getByRole("button", { name: "Switch to light theme" }),
  );
  unmount();
  render(<ThemeToggle />);
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
  expect(
    screen.getByRole("button", { name: "Switch to dark theme" }),
  ).toBeInTheDocument();
});
test("falls back to dark for an unsupported stored value", () => {
  localStorage.setItem(THEME_STORAGE_KEY, "invalid");
  render(<ThemeToggle />);
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
});
test("still switches themes when browser storage is blocked", () => {
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
    throw new Error("Blocked");
  });
  jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw new Error("Blocked");
  });
  render(<ThemeToggle />);
  fireEvent.click(
    screen.getByRole("button", { name: "Switch to light theme" }),
  );
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
});
test("keeps the preference in sync with changes from another tab", () => {
  render(<ThemeToggle />);
  fireEvent(
    window,
    new StorageEvent("storage", { key: THEME_STORAGE_KEY, newValue: "light" }),
  );
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
  fireEvent(
    window,
    new StorageEvent("storage", { key: THEME_STORAGE_KEY, newValue: null }),
  );
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
});
