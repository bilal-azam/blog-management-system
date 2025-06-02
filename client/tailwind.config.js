export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0d6efd',
          dark: '#0047b3',
        },
        secondary: {
          light: '#f39e58',
          DEFAULT: '#ed7d2b',
          dark: '#b35900',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  important: '#root',
}