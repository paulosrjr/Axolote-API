var mongoose = require('mongoose');

var workSchema = new mongoose.Schema({
    origin_path: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    destination_path: {
        type: String,
        required: true,
        lowercase: true
    },
    user: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    authentication: {
        type: String,
        required: true,
        lowercase: true
    },
    authentication_type: {
        type: String,
        required: true,
        lowercase: true
    },
    command: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    retention: {
        type: Number,
        default: 7
    },
    schedule: {
        type: String,
        default: "* 23 * * * *",
        lowercase: true
    },
    parameters: String,
    server_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'server',
        required: true
    },
    deleted: Boolean
}, { collection: 'works' }
);

module.exports = mongoose.model("work", workSchema);
