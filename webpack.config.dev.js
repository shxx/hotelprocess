/**
 * 
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin('css/m-dispatch.css')//,
        // new webpack.optimize.UglifyJsPlugin({
        //   output: {
        //     comments: false,  // remove all comments
        //   },
        //   compress: {
        //     warnings: false
        //   }
        // })
    ],
    resolve: {
      modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
      extensions: ['', '.web.js', '.js', '.json'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less?$/,
                loaders : [
                    'style-loader',
                    'css-loader',
                    'less-loader?{"sourceMap":true}'
                ],
                include: __dirname
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url',
                query: {limit: 10240}
            }
        ]
    }
};

