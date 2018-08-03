var mongoose = require('mongoose');

var parameterSchema = new mongoose.Schema({
    parameter: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    value: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    time: String,
    data: String,
    date_and_time: Date,
    status: String,
    deleted: Boolean
}, { collection: 'parameters' }
);

module.exports = mongoose.model("parameter", parameterSchema)
