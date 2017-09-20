const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: "./src/home.js",
        dashboard: "./src/dashboard.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname,'dist'),
        publicPath: '/dist/'
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders:[
            {
                test: /\.js$/, loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/, loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    }
};



