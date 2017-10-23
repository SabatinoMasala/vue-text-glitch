var path = require('path')
var vueLoaderConfig = require('./vue-loader.conf')
var componentConfig = require('../config/component')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: componentConfig.entry,
    output: {
        filename: './dist/[name].js',
        library: componentConfig.library,
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
                exclude: /node_modules/
            }
        ]
    }
};
