/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('src/assets/image-hero-desktop.png')",
      }
    },
  },
  plugins: [],
}

