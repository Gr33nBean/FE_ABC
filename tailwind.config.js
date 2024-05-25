/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': "#1DA1F2",
        'black': "#14171A",
        'dark-gray': "#657786",
        'light-gray': "#AAB8C2",
        'extra-light-gray': "#E1E8ED",
        'extra-extra-light-gray': "#F5F8FA",
        'purple': "#7659FF",
        'pink': "#EF257E",
        'orange': "#F77C00",
        'green': "#3BB97C",
        'yellow': "#FBD400",
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}