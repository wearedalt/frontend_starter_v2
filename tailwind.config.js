/** @type {import('tailwindcss').Config} */

const { generateSpacing } = require('./tailwind.config/functions');
const { spacings } = require('./tailwind.config/values');

module.exports = {
  content: ['../**/*.php'],
  theme: {
    extend: {},
    spacing: generateSpacing(spacings)
  },
  plugins: [],
}
