// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0F172A',
        card: '#1E293B',
        accent: '#38BDF8',
        heading: '#F8FAFC',
        border: '#334155',
      },
    },
  },
  plugins: [],
}
