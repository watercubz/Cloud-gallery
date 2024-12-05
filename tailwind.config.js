/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { Poppins: ['Poppins', 'sans-serif'] },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
};
