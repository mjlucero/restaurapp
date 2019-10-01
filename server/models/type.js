const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let typeSchema = new Schema({
    denomination: { type: String, required: [true, 'Denomination is required'] },
    active: { type: Boolean, default: true }
});

typeSchema.pre('save', function (next) {
    let type = this;

    next();
});

module.exports = mongoose.model('Type', typeSchema);