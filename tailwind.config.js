/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.5)",
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        primary: "#0ea5e9",
        secondary: "#64748b",
        accent: "#a855f7",
      },
    },
    fontFamily: {
      signature: ["Great Vibes", "cursive"],
    },
  },

  // ✅ Add this at the bottom
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
