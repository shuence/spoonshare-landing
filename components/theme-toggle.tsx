"use client";

import { Moon, Sun } from "@phosphor-icons/react";

export function ThemeToggle() {
  function toggle() {
    const current = document.documentElement.dataset.theme;
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Storage can be unavailable in private mode. */
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
    >
      <Sun size={18} className="theme-toggle__sun" aria-hidden="true" />
      <Moon size={18} className="theme-toggle__moon" aria-hidden="true" />
    </button>
  );
}
