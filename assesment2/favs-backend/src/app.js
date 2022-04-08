import express from "express";
import userRoutes from "./routes/user.routes.js";
import favsRoutes from "./routes/favs.routes.js";

import { authentication } from "./middlewares/index.js";

import "dotenv/config";
import "./dataBase.js";

const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>Favs App</h1>");
});
app.all("/api/*", authentication);
app.use(userRoutes);
app.use(favsRoutes);

export default app;
