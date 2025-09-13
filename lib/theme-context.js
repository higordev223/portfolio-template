/**
 * @fileoverview Theme context and provider for managing dark/light mode state
 * Provides theme switching functionality with localStorage persistence
 */

"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
          setTheme(savedTheme);
        } else {
          // Check system preference
          const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;
          setTheme(prefersDark ? "dark" : "light");
        }
      } catch (error) {
        console.warn("Error accessing localStorage:", error);
        setTheme("dark");
      }
    }
    setMounted(true);
  }, []);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      try {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
      } catch (error) {
        console.warn("Error applying theme:", error);
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-primary text-white">{children}</div>;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
