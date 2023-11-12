/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        'navigation-bar': 226,
      },
      height: {
        'header-bar': 48,
      },
      padding: {
        'header-bar': 48,
        'navigation-bar': 226,
      },
    },
  },
  plugins: [],
}
