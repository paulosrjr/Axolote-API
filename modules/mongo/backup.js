var mongoose = require('mongoose');

var backupSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    work_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'work',
        required: true
    },
    time: String,
    data: String,
    date_and_time: Date,
    status: String,
    deleted: Boolean
}, { collection: 'backups' }
);

module.exports = mongoose.model("backup", backupSchema)
