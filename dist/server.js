const app = require('./app').app();
const port = (process.env.PORT || 3000);

// Using middle and hotware to reload the react , jsx component automatically.
// Only for development environment
if(process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const config = require('../webpack.config.dev');
    const compiler = webpack(config);
    const webpackDevMiddleWare = require("webpack-dev-middleware");
    const webpackHotMiddleWare = require("webpack-hot-middleware");

    app.use(webpackHotMiddleWare(compiler));
    app.use(webpackDevMiddleWare(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

}

const server = app.listen(port, function(err){
    let port = server.address().port;
    let host = server.address().address;
    if(err)
        console.log(err);
    console.log(`The server is listening at http://${host}:${port}`);
});
