import defaultTheme from 'tailwindcss/defaultTheme'



/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', ...defaultTheme.fontFamily.sans],
        bebas: ['Bebas Neue', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [],
}

