/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'myBlack': '#282932',
        'myGray': '#F2EFE6',
        'myYellow': '#F7B614',
        'myGray2': '#f5f4f0',
      },
    },
  },
  plugins: [],
}
