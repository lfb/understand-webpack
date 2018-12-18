const UgligyJS = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './app.js'
    },
    output: {
        filename: '[name].[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_componts)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new UgligyJS({
                uglifyOptions: {
                    keep_classname: true,
                    keep_fnames: true,
                    ecma: 6,
                    cache: true,
                    parallel: true
                }
            })
        ],
        runtimeChunk: true,
        splitChunks: {
            name: true,
            minSize: 0
        }
    }
}