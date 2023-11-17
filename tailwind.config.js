/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'display': ['Raleway', 'Raleway fallback', 'sans-serif'],
        'raleway': ['Raleway', 'Raleway fallback', 'sans-serif'],
      },
    },
  },
  plugins: [],
}