/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './data/**/*.{js,ts}',
    './pages/**/*.vue',
    './server/**/*.{js,ts}',
    './error.vue'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
