/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm : '480px',
      md : '768px',
      lg : '1024px',
      xl : '1280px',
  },
    extend: {
      colors: {
        color01 : "#ad9970",
        clifford: '#da373d',
      }
    },
  },
  plugins: [],
}
