import { Router } from "express";
import * as userCtrl from "../controllers/user.controller.js";

const router = Router();

// login
router.post("/auth/local/login", userCtrl.login);

// create a new user
router.post("/auth/local/register", userCtrl.createUser);

//
export default router;
