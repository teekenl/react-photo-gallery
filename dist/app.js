
module.exports = {
    app : function(){
        const path = require('path');
        const bodyParser = require('body-parser');
        const express = require('express');
        const indexPath = path.join(__dirname, 'index.html');
        const publicPath = express.static(path.join(__dirname, '../dist'));
        const app = require('express')();
        const user = require('user');
        let session = require('express-session');

        app.use('/dist', publicPath);
        app.use(bodyParser.json());
        app.use(session({secret: 'my_secret'})); // setup express session
        app.use(bodyParser.urlencoded({ extended: true })); // handle URL-encoded data


        app.get('/', function(_,res){
          if(session && session.username && session.user_id) {
            res.redirect('/home');
          } else {
            res.redirect('/signin');
          }
        });

        // Home or dashboard page
        app.get('/home', function(_,res) {
            if(session && session.username && session.user_id) {
                res.sendFile(indexPath);
            } else{
                res.redirect('/signin');
            }
        });


        app.get(['/home/view','/home/view/:postId'],function(req,res){
          if(session && session.username && session.user_id) {
            if (req.params.postId === 'undefined')
              res.redirect('/home');
          } else{
            res.redirect('/signin');
          }
        });

        app.get('/signin', function(req,res) {
            if(session && session.username && session.user_id) {
              res.redirect('/home');
            } else{
              res.sendFile(indexPath);
            }
        });

        app.get('/signup', function(req, res) {
            res.sendFile(indexPath);
            if(session && session.username && session.user_id) {
              res.redirect('/home');
            } else{
              res.sendFile(indexPath);
            }
        });

        app.get('/logout', function(req, res) {
            session = null;
            res.redirect('/'); // logout
        });


        app.post('/verify', function(req,res) {
            let email = req.body.email;
            let password = req.body.password;

            if(username && email && password) {
              user.validateUser(email,password,function(err,result) {
                if(err) {
                  console.log(err);
                } else if(result) {
                  session = req.session;
                  session.user_id = JSON.stringify(result._id).replace(/"/g,"");
                  session.username = result.username;
                  res.send(result);
                }
              });
            } else{
              res.send("Error");
            }
        });

        app.post('/register',function(req, res) {
            let username = req.body.username;
            let email = req.body.email;
            let password = req.body.password;

            if(username && email && password) {
               user.registerUser(username,email,password,function(err,result) {
                    if(err) {
                      console.log(err);
                    } else if(result) {
                      session = req.session;
                      session.user_id = JSON.stringify(result._id).replace(/"/g,"");
                      session.username = result.username;
                      res.send(result);
                    }
               });
            } else{
               res.send("Error");
            }
        });

        // Error handling page.
        /*app.get('*',function(req, res) {
          console.log(req.url);
          //res.status(400).send("404 Page not found");
        });*/

        return app;
    }
};
