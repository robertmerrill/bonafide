var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Create a database variable outside of the database connection callback to reuse the connection pool 


// Retrieve
var MongoClient = require('mongodb').MongoClient
, assert = require('assert');
var len;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/bonafide", function(err, db) {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	len = {"status": "10000"};
	var routes = require("./routes/routes.js")(app, db, assert, len);

	var server = app.listen(7550, function () {
		console.log("Listening on port %s...", server.address().port);
		//db.close();
	    });


  
    });


