const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js?[chunkhash]' 
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'eslint-loader'
            }
        ]
    }
}