/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textStroke: {
        '1px-black': '1px black',
        // Add more variations as needed
      },

    },
  },
   plugins: [
    function ({ addUtilities, theme, e }) {
      const newUtilities = {
        '.text-outline-1px-black': {
          '-webkit-text-stroke': theme('textStroke.1px-black'),
          'text-stroke': theme('textStroke.1px-black'),
        },
        // Add more utilities for different stroke styles
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

