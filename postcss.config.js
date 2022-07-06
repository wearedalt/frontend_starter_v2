module.exports = {
    parser: 'postcss-scss',
    syntax: 'postcss-scss',
    plugins: {
        'postcss-import': {},
        'postcss-inline-comment': {},
        'postcss-nested': {},
        tailwindcss: {},
        autoprefixer: {},
        'postcss-easy-import': {
            prefix: '_',
            extensions: ['.css', '.scss']
        },
    }
}