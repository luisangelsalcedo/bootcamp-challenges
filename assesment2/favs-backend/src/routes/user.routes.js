import { Router } from "express";
import * as userCtrl from "../controllers/user.controller.js";

const router = Router();

// login
router.post("/auth/local/login", userCtrl.login);

// create a new user
router.post("/auth/local/register", userCtrl.createUser);

// validate user authentication token
router.get("/auth/local/validate", userCtrl.authToken);

//
export default router;
