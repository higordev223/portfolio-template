/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1c1c22",
          light: "#f8fafc",
        },
        secondary: {
          DEFAULT: "#2a2a2a",
          light: "#e2e8f0",
        },
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
        text: {
          primary: "#ffffff",
          secondary: "rgba(255, 255, 255, 0.8)",
          "light-primary": "#1e293b",
          "light-secondary": "rgba(30, 41, 59, 0.7)",
        },
        border: {
          DEFAULT: "#404040",
          light: "#cbd5e1",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
