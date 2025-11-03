/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // scan all Angular HTML & TS files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f472b6', // rose-400
          DEFAULT: '#ec4899', // rose-500
          dark: '#db2777', // rose-600
        },
        secondary: {
          light: '#a855f7', // purple tone
          dark: '#6b21a8',
        },
        darkbg: '#111827', // near black-gray
      },
    },
  },
  plugins: [],
}
