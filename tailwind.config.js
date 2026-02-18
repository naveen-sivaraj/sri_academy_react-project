/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Dark Blue
        secondary: "#fbbf24", // Gold/Amber
        accent: "#3b82f6", // Lighter Blue
        background: "#ffffff",
        text: "#1f2937", // Gray-800
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
