const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = env => {
    const plugins = [
        new MiniCssExtractPlugin({
            filename: './css/[name].min.css'
        }),
        new SpriteLoaderPlugin({plainSprite: true}),
        new ESLintPlugin(),
        new StylelintPlugin()
    ];

    if(env.sync) {
        plugins.push(
            new BrowserSyncPlugin({
                proxy: 'http://localhost:10008/',
                reloadDelay: 0,
                files: [{
                  match: [path.resolve(__dirname, 'dist') + '/**/*.{js,css}'],
                  fn: function(event, file) {
                    if (event === 'change') {
                      const bs = require('browser-sync').get('bs-webpack-plugin');
                      bs.reload();
                    }
                  },
                }],
            })
        )
    }

    plugins.push(
        new RemoveEmptyScriptsPlugin()
    )

    return {
        entry: {
            app: [
                './src/css/app.css',
                './src/js/app.js',
            ],
            editor: [
                './src/css/editor.css'
            ]
        },
        watchOptions: {
            poll: true,
            ignored: path.resolve(__dirname, 'dist')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: './js/[name].js'
        },
        optimization: {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
            ],
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    sideEffects: true,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                  test: /src\/svg\/.*\.svg$/,
                  exclude: /node_modules/,
                  loader: 'svg-sprite-loader',
                  options: {
                    extract: true,
                    spriteFilename: './svg/sprite.svg',
                  }
                }
            ]
        },
        plugins: plugins
    }
}