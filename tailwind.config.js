/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        primary:'#00e600',
        secondary:'#009900'

      },
      animation: {
        'spin': 'spin 25s linear infinite',
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'3rem'

        }
      }
    },
  },
  plugins: [],
}

