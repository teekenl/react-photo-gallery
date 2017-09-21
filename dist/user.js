'use strict';
const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = "mongodb://kenlau95:noob950314@ds141514.mlab.com:41514/photo-user";
const assert = require('assert');


function registerUser(db,username,email,password,callback){
    db.collection("user_collection").insertOne({
      "name": username,
      "email": email,
      "password": password
    }, function(err, result) {
      if(err) {
        callback(err,null);
      } else if(result) {
        console.log("The user has registered successfully");
        callback(null, result);
      }
    });
}

function validateUser(db,email,password,callback) {
    db.collection("user_collection").find({
      $and: [{ "email": email }, { "password": password }]
    }).toArray(function(err, result) {
      if(err) {
        callback(err, null);
      } else if(result) {
        console.log("The");
        callback(null, result);
      }
    })
}


module.exports = {
  registerUser: function(username,email,password,callback) {
      mongodb.connect(url, function(err, db) {
          registerUser(db,username,email,password,callback);
      });
  },
  validateUser: function(email,password,callback) {
      mongodb.connect(url, function(err, db) {
         validateUser(db,email,password,callback);
      })
  }
};

