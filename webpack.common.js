const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    entry: {
        app: ['./src/css/app.css', './src/js/app.js']
        // editor: ["./src/css/editor.css"], USED ONLY IF CUSTOM WORDPRESS TEXT EDITOR CLASSES
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js',
        clean: {
            dry: true
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                sideEffects: true,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /src\/svg\/.*\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    spriteFilename: './svg/sprite.svg'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),
        new SpriteLoaderPlugin({ plainSprite: true }),
        new ESLintPlugin(),
        new StylelintPlugin()
    ]
}
