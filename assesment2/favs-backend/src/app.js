import express from "express";

const app = express();

// middleware

// routes
app.get("/", (req, res) => {
  res.send("<h1>Favs App</h1>");
});

export default app;
