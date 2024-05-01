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
          50: "#f1cab5",       
          100: "#ecb99d",
          200: "#e8a884",
          300: "#e3966c",
          400: "#de8553",
          500: "#da733a",
          600: "#d56222",
          700: "#d1510a",
          800: "#bc4809",
          900: "#a74008",
          950: "#923807",
        },
        darkgray:{
          950: "#1C1613"
        },

        syracuse_red_orange: { DEFAULT: '#d1510a', 100: '#2a1002', 200: '#542004', 300: '#7e3006', 400: '#a84008', 500: '#d1510a', 600: '#f56b21', 700: '#f79058', 800: '#fab590', 900: '#fcdac7' }, 
        'linen': { DEFAULT: '#f3e8e2', 100: '#42291c', 200: '#845237', 300: '#bc7f5e', 400: '#d7b3a0', 500: '#f3e8e2', 600: '#f5ede8', 700: '#f8f1ee', 800: '#faf6f3', 900: '#fdfaf9' }, 
        'eerie_black': { DEFAULT: '#191818', 100: '#050505', 200: '#0a0a0a', 300: '#100f0f', 400: '#151414', 500: '#191818', 600: '#494646', 700: '#787373', 800: '#a5a1a1', 900: '#d2d0d0' },
         'seasalt': { DEFAULT: '#fbfaf9', 100: '#3c3228', 200: '#786450', 300: '#ab9681', 400: '#d3c8bd', 500: '#fbfaf9', 600: '#fcfbfa', 700: '#fdfcfb', 800: '#fdfdfd', 900: '#fefefe' } 
    
      },
    },
  },
  plugins: [],
}
