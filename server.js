/**
 * Created by Dream on 2016/8/26.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(88, '0.0.0.0', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://0.0.0.0:88/')
});
