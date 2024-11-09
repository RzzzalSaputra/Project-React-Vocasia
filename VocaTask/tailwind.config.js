/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Pastikan ini benar
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ]
}
