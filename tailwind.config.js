/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#1A8ACB',
      },
      backgroundImage: {
        'homepage': "url('../public/assets/HomepageBackground.png')",
      }
    },
    plugins: [],
  }
}