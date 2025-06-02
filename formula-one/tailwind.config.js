/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'f1-red': '#e10600',
        'f1-black': '#15151e',
        'f1-gray': '#38383f',
        'f1-light': '#f8f4f4',
        'mercedes': '#00d2be',
        'redbull': '#0600ef',
        'ferrari': '#dc0000',
        'mclaren': '#ff8700',
        'aston': '#006f62',
        'alpine': '#0090ff',
        'williams': '#005aff',
        'haas': '#ffffff',
        'sauber': '#900000',
        'rb': '#1e3d61'
      },
      fontFamily: {
        'titillium': ['Titillium Web', 'sans-serif'],
        'formula': ['Formula1', 'sans-serif'],
      },
    },
  },
  plugins: [],
}