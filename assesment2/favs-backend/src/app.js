import express from "express";
import userRoutes from "./routes/user.routes.js";
import "dotenv/config";
import "./dataBase.js";

const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>Favs App</h1>");
});

app.use(userRoutes);

export default app;
