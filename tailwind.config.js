module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.25)",
      },
      backgroundImage: {
        "grid-surface":
          "radial-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
