/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#145A32', // deep green
            light: '#1E8449'
          },
          brown: {
            DEFAULT: '#784212', // earthy brown
            light: '#935116'
          },
          orange: {
            DEFAULT: '#D35400', // warm orange
            light: '#E67E22'
          },
          blue: {
            DEFAULT: '#21618C', // soft blue
            light: '#2874A6'
          },
          gold: {
            DEFAULT: '#F1C40F', // subtle gold
            light: '#F4D03F'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
