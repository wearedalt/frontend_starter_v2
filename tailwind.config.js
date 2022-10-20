/** @type {import('tailwindcss').Config} */

const {
    generateSpacing,
    generateFontSizes,
    generateValues
} = require('./tailwind.config/functions')

const {
    spacings,
    colors,
    fontSizes,
    fontWeights
} = require('./tailwind.config/values')

module.exports = {
    // content: ['../**/*.php'],
    theme: {
        extend: {},
        spacing: generateSpacing(spacings),
        colors: colors,
        fontWeight: generateValues(fontWeights),
        fontSize: generateFontSizes(fontSizes)
    },
    plugins: []
}
