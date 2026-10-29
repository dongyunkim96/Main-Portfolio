import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const THEME_STORAGE_KEY = "portfolio-theme";
function initialTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "light"
      ? "light"
      : "dark";
  } catch {
    return document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark";
  }
}
export default function ThemeToggle() {
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    const root = document.documentElement;
    const background = theme === "light" ? "#f6f8f5" : "#101419";
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    root.style.backgroundColor = background;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", background);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* Theme switching still works without storage. */
    }
  }, [theme]);
  useEffect(() => {
    function syncTheme(event) {
      if (event.key === THEME_STORAGE_KEY || event.key === null)
        setTheme(event.newValue === "light" ? "light" : "dark");
    }
    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);
  const label =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={() =>
        setTheme((current) => (current === "dark" ? "light" : "dark"))
      }
    >
      {theme === "dark" ? (
        <FiSun aria-hidden="true" />
      ) : (
        <FiMoon aria-hidden="true" />
      )}
      <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
