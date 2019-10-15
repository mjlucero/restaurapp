const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let manufacturedArticleSchema = new Schema({
    denomination: {type: String, required: [true, "Denomination is required"]},
    salePrice: {type: Number},
    estimatedTime: {type: Number},
    articles: [
        {
            _id: false,
            quantity: {type: Number, required: [true, "Quantity is required"]},
            article: {type: Schema.ObjectId, ref: "Article"}
        }
    ],
    active: {type: Boolean, default: true}
});

manufacturedArticleSchema.pre("save", function (next) {
    let manufacturedArticle = this;
    next();
});

module.exports = mongoose.model("ManufacturedArticle", manufacturedArticleSchema);
