/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lm': '425px',
        'laptopL': '1440px',
      },
      width: {
        'customwidth75': '18.75rem',
      },
      height: {
        'customheight167': '10.438',
      },
    },
  },
  plugins: [],
}

