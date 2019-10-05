const mongoose = require("mongoose");
const Sequence = require("./sequence");

let Schema = mongoose.Schema;

let orderSchema = new Schema({
  date: { type: String, required: [true, "Date is required"] },
  number: { type: Number },
  state: { type: Number },
  estimatedTimeEnd: { type: Date },
  shippingType: { type: Number },
  details: [
    {
      _id: false,
      subtotal: { type: Number, required: [true, "Article subtotal is required"] },
      article: {
        quantity: { type: Number, required: [true, "Article quantity is required"] },
        detail: { type: Schema.ObjectId, ref: "Article" }
      },
      manufacturedArticle: {
        quantity: { type: Number, required: [true, "Manufactured article quantity is required"] },
        detail: { type: Schema.ObjectId, ref: "manufacturedArticle" }
      }
    }
  ],
  client: { type: Schema.ObjectId, ref: "User" }
});

orderSchema.pre("save", function(next) {
  let order = this;

  Sequence.findByIdAndUpdate({ _id: "orderNumber" }, { $inc: { seq: 1 } }, { new: true, upsert: true })
    .then(sequence => {
      order.number = sequence.seq;
      next();
    })
    .catch(err => {
      console.error("counter error-> : " + err);
      throw err;
    });
});

module.exports = mongoose.model("Order", orderSchema);
