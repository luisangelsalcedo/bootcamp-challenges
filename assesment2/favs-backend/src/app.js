import express from "express";
import "dotenv/config";
import "./dataBase.js";

const app = express();

// middleware

// routes
app.get("/", (req, res) => {
  res.send("<h1>Favs App</h1>");
});

export default app;
