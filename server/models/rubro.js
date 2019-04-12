const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let rubroSchema = new Schema({
    denominacion: { type: String, required: [true, 'La denominacion es necesaria'] }
});

rubroSchema.pre('save', function (next) {
    let rubro = this;
})


module.exports = mongoose.model('Rubro', rubroSchema);