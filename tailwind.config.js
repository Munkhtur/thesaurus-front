/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        templateprimary: {
          50: "#C0D8FF",
          100: "#ABCBFF",
          200: "#82B2FF",
          300: "#5A99FF",
          400: "#317FFF",
          500: "#0866FF",
          600: "#004FCF",
          700: "#003997",
          800: "#00245F",
          900: "#000F27",
          950: "#00040B",
        },
      },
    },
  },
  plugins: [],
}

