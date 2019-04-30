const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let articleSchema = new Schema({
    denomination: { type: String, required: [true, 'Denomination is required'] },
    pucharasePrice: { type: Number },
    salePrice: { type: Number },
    stock: { type: Number },
    measure: { type: String },
    isInput: { type: Boolean },
    type: { type: Schema.ObjectId, ref: 'Type' }
});

articleSchema.pre('save', function (next) {
    let article = this;
    next();
})


module.exports = mongoose.model('Article', articleSchema);