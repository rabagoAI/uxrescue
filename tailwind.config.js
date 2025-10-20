/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#dc2626', 
        accent: '#f59e0b',
        dark: '#1e293b',
        light: '#f8fafc'
      }
    },
  },
  plugins: [],
}