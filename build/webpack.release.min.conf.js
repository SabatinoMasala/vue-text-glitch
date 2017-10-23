var config = require('./webpack.release.conf.js')
var webpack = require('webpack')

config.output.filename = config.output.filename.replace(/\.js$/, '.min.js')

config.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
]

module.exports = config