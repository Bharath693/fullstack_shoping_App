const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
  },
  stock: {
    type: String,
  },
  category: {
    type: String,
  },
  color: [
    {
      color: String,
    },
  ],
  size: {
    type: Array,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);