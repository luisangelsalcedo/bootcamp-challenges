import express from "express";
import mongoose from "mongoose";

import { productCtlr } from "./api/controllers/index.js";

const { getAllProducts, getOneProduct, createProduct } = productCtlr;

/**
 * Mongoose
 */

// Connect to db
await mongoose.connect(
  "mongodb+srv://admin:4dm1n@products.bnrj3.mongodb.net/products"
  // "mongodb+srv://maria:Maria123@cluster0.0oz81.mongodb.net/product_db"
);

// Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("ERROR: ", e);
});

/**
 * Express
 */
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (request, response) => {
  response.send("API PRODUCTS");
});

app.get("/api/products", getAllProducts);
app.get("/api/products/:id", getOneProduct);
app.post("/api/products/create", createProduct);

// Launch server
app.listen(5000, () => {
  console.log("Iniatialized server!!");
});
