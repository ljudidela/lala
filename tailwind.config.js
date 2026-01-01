/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'la-dark': '#0f172a',
        'la-accent': '#3b82f6',
      }
    },
  },
  plugins: [],
}