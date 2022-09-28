/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(255, 153, 0, 0.3);',
      },
    },
  },
  plugins: [require("daisyui")],
}
