const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/home.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname,'dist'),
        publicPath: '/dist/'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders:[
            {
                test: /\.js$/, loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                query: {
                    presets:['react','es2015','react-hmre']
                }
            },
            {
                test: /\.jsx$/, loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
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



