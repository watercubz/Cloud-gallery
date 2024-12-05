/** @type {import('tailwindcss').Config} */

import flowbitePlugin from 'flowbite/plugin';

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
    flowbitePlugin({
      charts: true,
    }),
  ],
};
