let path = require('path');

module.exports = {
    // 指定环境
    mode: 'production',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[chunkhash:5].min.js'
    }
}