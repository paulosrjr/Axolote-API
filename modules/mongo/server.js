var mongoose = require('mongoose');

var ServerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    address_type: String,
    description: String,
    environment: String,
    deleted: Boolean,
    createddBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    works: [{
        work_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'work'
    }
}]
}, { collection: 'servers' }
);

module.exports = mongoose.model("server", ServerSchema);
