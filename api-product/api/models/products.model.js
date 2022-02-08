// Schema products
const schemaProducts = {
  ref: String,
  name: String,
  description: String,
  created_at: Date,
  price: Number,
  discount: Number,
  active: Boolean,
};

// Product model
const Product = mongoose.model("Product", schemaProducts, "product");

export default Product;
