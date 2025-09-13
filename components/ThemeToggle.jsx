/**
 * @fileoverview Theme toggle component for switching between dark and light modes
 * Provides a smooth animated toggle button with sun/moon icons
 */

"use client";

import { useTheme } from "@/lib/theme-context";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-secondary-light dark:bg-secondary rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        className="w-4 h-4 bg-primary-light dark:bg-primary rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === "dark" ? (
          <FiSun className="w-3 h-3 text-yellow-500" />
        ) : (
          <FiMoon className="w-3 h-3 text-text-light-primary" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
