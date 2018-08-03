//Import the mongoose module
var mongoose = require('mongoose');

var mongoConnection = 'mongodb://axolote:axolote@127.0.0.1/axolote';
var mongoDebugConnection = 'mongodb://axolote:axolote@127.0.0.1/axolote_debug';

var connectionString = process.env.DEBUG_DATABASE === "true" ?
    mongoDebugConnection :
    mongoConnection;

mongoose.connect(connectionString);

mongoose.connection.on("connected", function () {
    console.log("Connected to " + connectionString);
});

mongoose.connection.on("error", function (error) {
    console.log("Connection to " + connectionString + " failed:" + error);
});

mongoose.connection.on("disconnected", function () {
    console.log("Disconnected from " + connectionString);
});

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log("Disconnected from " + connectionString + " through app termination");
        process.exit(0);
    });
});

module.exports = { 
    Mongoose: mongoose
};