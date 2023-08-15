const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    vId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Product", productSchema, "products");