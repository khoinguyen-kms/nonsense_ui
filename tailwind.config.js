/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['nord']
  },
  plugins: [
    require('daisyui'),
    require('autoprefixer')
  ],
}

