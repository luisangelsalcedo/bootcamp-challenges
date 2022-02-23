import mongoose from "mongoose";

// Schema products
const schemaProducts = {
  ref: String,
  name: String,
  description: String,
  created_at: { type: Date, default: Date.now() },
  price: Number,
  discount: Number,
  active: Boolean,
};

// Product model
const Product = mongoose.model("Product", schemaProducts, "product");

export default Product;
