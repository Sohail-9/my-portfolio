/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#38bdf8",
          foreground: "#0f172a"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 30px 60px -35px rgba(15, 23, 42, 0.8)",
        glow: "0 0 45px rgba(56, 189, 248, 0.35)"
      }
    }
  },
  plugins: []
}
