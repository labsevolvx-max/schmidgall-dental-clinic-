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
        },
        accent: {
          DEFAULT: '#c0a062', // Gold
          light: '#d4b87e',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['"Palatino Linotype"', '"Book Antiqua"', 'Palatino', 'serif'],
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
