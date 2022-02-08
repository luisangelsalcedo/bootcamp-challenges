import express from "express";
import mongoose from "mongoose";

/**
 * Mongoose
 */

// Connect to db
await mongoose.connect(
  "mongodb+srv://maria:Maria123@cluster0.0oz81.mongodb.net/product_db"
);

// Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("ERROR: ", e);
});

// Controller get all products
const getAllProducts = async (request, response) => {
  const products = await Product.find();
  response.json(products);
};

/**
 * Express
 */
const app = express();

// Routes
app.get("/", (request, response) => {
  response.send("API PRODUCTS");
});

app.get("/products", getAllProducts);

// Launch server
app.listen(5000, () => {
  console.log("Iniatialized server!!");
});
