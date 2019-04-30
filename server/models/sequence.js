const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let sequenceSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

module.exports = mongoose.model('Sequence', sequenceSchema);