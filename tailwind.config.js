const { nextui } = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        waves: "url('/src/assets/waves.svg')",
        wavesLight: "url('/src/assets/waveswhite.svg')",
        waves2: "url('/src/assets/waves2.svg')",
        waves2Light: "url('/src/assets/waves2Light.svg')",
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              50: '#f2f9f9',
              100: '#ddeff0',
              200: '#bfe0e2',
              300: '#92cace',
              400: '#5faab1',
              500: '#438e96',
              600: '#3b757f',
              700: '#356169',
              800: '#325158',
              900: '#2d464c',
              950: '#1a2c32',
            },
          }, // light theme colors
        },
        dark: {
          colors: {
            primary: {
              50: '#f5f1ff',
              100: '#ece6ff',
              200: '#dcd0ff',
              300: '#c3aaff',
              400: '#a67aff',
              500: '#8d44ff',
              600: '#821eff',
              700: '#740df4',
              800: '#610acd',
              900: '#510aa8',
              950: '#220250',
            },
          }, // dark theme colors
        },
      },
    }),
  ],
};
