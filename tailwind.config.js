const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'waves': "url('/src/assets/waves.svg')",
        'wavesLight': "url('/src/assets/waveswhite.svg')",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}