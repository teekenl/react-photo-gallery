module.exports = {
    app : function(){
        const path = require('path');
        const bodyParser = require('body-parser');
        const express = require('express');
        const indexPath = path.join(__dirname, 'index.html');
        //const publicPath = express.static(path.join(__dirname, '../dist'));
        const app = require('express')();

        //app.use('/dist', publicPath);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true })); // handle URL-encoded data
        app.get('/', function(_,res){
            res.sendFile(indexPath);
        });

        return app;
    }
};
