var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    user: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    token: String,
    time: String,
    data: String,
    date_and_time: Date,
    status: String,
    deleted: Boolean
}, { collection: 'user' }
);
module.exports = mongoose.model("user", userSchema)
