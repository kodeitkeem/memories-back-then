const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    uploadedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = mongoose.model('Memory', memorySchema);