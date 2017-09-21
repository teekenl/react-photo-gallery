const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./src/home.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,'dist'),
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders:[
            {
                test: /\.js$/, loader: 'babel-loader',
                include: [
                  path.resolve(__dirname, 'test'),
                  path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/, loader: 'babel-loader',
                include: [
                  path.resolve(__dirname, 'test'),
                  path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loader: 'style-loader!css-loader'
            }
        ]
    }
};



