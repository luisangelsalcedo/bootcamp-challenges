import express from "express";
import userRoutes from "./routes/user.routes.js";
import favsRoutes from "./routes/favs.routes.js";
import templateRoutes from "./routes/template.routes.js";

import { authentication } from "./middlewares/index.js";

import "dotenv/config";
import "./dataBase.js";
import cors from "cors";

const app = express();

// middleware
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.all("/api/*", authentication);

// template
app.set("view engine", "ejs");

// routes
app.use(userRoutes);
app.use(favsRoutes);
app.use(templateRoutes);

export default app;
