const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let articleManufacturedSchema = new Schema({
    denomination: { type: String, required: [true, 'Denomination is required'] },
    salePrice: { type: Number },
    estimatedTime: { type: Number },
    articles: [
        {
            quantity: { type: Number, required: [true, 'Quantity is required'] },
            article: { type: Schema.ObjectId, ref: 'Article' }
        }
    ],
    active: { type: Boolean, default: true }
});

articleManufacturedSchema.pre('save', function (next) {
    let articleManufactured = this;
    next();
})


module.exports = mongoose.model('ArticleManufactured', articleManufacturedSchema);