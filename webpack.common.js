const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    entry: {
        app: ['./src/scss/app.scss', './src/js/app.js']
        // editor: ["./src/scss/editor.scss"], USED ONLY IF CUSTOM WORDPRESS TEXT EDITOR CLASSES
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
                test: /\.scss$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
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
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['./src/scss/**/*.scss']
                            }
                        }
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
