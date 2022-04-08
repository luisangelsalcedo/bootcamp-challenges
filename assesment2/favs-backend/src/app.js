import express from "express";
import userRoutes from "./routes/user.routes.js";
import favsRoutes from "./routes/favs.routes.js";
import templateRoutes from "./routes/template.routes.js";

import { authentication } from "./middlewares/index.js";

import "dotenv/config";
import "./dataBase.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.static("public"));

// template
app.set("view engine", "ejs");

// routes
app.all("/api/*", authentication);
app.use(userRoutes);
app.use(favsRoutes);
app.use(templateRoutes);

export default app;
