const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

const WebpackNotifierPlugin = require('webpack-notifier')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const OnlyIfChangedPlugin = require('only-if-changed-webpack-plugin')

var opts = {
    rootDir: process.cwd(),
    devBuild: true
}

console.log('MODE : development')

module.exports = (sync) => {
    const plugins = [
        // new OnlyIfChangedPlugin({
        //     cacheDirectory: path.join(opts.rootDir, 'tmp/cache'),
        //     cacheIdentifier: opts
        // }),
        new WebpackNotifierPlugin({
            alwaysNotify: true,
            title: 'Frontend Starter compile theme'
        })
    ]

    if (sync === true) {
        plugins.push(
            new BrowserSyncPlugin({
                proxy: 'http://localhost:10008/',
                reloadDelay: 0,
                files: [
                    {
                        match: [
                            path.resolve(__dirname, 'dist') + '/**/*.{js,css}'
                        ],
                        fn: function (event, file) {
                            if (event === 'change') {
                                const bs =
                                    require('browser-sync').get(
                                        'bs-webpack-plugin'
                                    )
                                bs.reload()
                            }
                        }
                    }
                ]
            })
        )
    }

    return merge(common, {
        mode: 'development',
        watch: true,
        plugins: plugins,
        cache: {
            type: 'memory'
        },
        watchOptions: {
            poll: true,
            ignored: path.resolve(__dirname, 'dist')
        }
    })
}
