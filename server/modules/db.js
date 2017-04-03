var mongoose = require("mongoose");
//replace username and password with your own info! Specific to your mLabs account.
//var mongoURI = "mongodb://localhost:27017/realestate";
var mongoURI = "mongodb://users:1234567@ds147480.mlab.com:47480/emily-testdb";
var MongoDB = mongoose.connect(mongoURI).connection;

//If there is an error connecting to the database, let us know!
MongoDB.on("error", function(err){
  console.log("Mongo Connection Error :" + err);
});

//If we successfully hooked up to the database, let us know!
MongoDB.once("open", function(){
  console.log("Connected to Mongo");
});

module.exports = MongoDB;
