import { useEffect, useState } from "react";
import { Moon, Sun } from "./icons";

type Theme = "light" | "dark";
const storageKey = "portfolio-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(storageKey);
      } catch {
        /* Storage may be unavailable in private contexts. */
      }
      const next =
        saved === "light" || saved === "dark"
          ? saved
          : preference.matches
            ? "dark"
            : "light";
      document.documentElement.dataset.theme = next;
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", next === "dark" ? "#111a15" : "#28644a");
      setTheme(next);
    };
    syncTheme();
    preference.addEventListener("change", syncTheme);
    window.addEventListener("storage", syncTheme);
    return () => {
      preference.removeEventListener("change", syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#111a15" : "#28644a");
    setTheme(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      /* The toggle still works for this visit. */
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun size={21} aria-hidden />
      ) : (
        <Moon size={21} aria-hidden />
      )}
    </button>
  );
}
