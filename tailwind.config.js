/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1DA1F2',
        'black': '#14171A',
        'dark-gray': '#657786',
        'light-gray': '#AAB8C2',
        'extra-light-gray': '#E1E8ED',
        'extra-extra-light-gray': '#F5F8FA',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}