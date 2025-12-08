/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Deep Blue
          light: '#1e293b',
          900: '#0B132B', // Navy Blue
        },
        accent: {
          DEFAULT: '#c0a062', // Gold
          light: '#d4b87e',
          500: '#C5A065', // Muted Gold
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Montserrat', 'sans-serif'],
        serif: ['"Playfair Display"', '"Palatino Linotype"', 'serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      }
    },
  },
  plugins: [],
}
