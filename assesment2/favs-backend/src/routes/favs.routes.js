import { Router } from "express";
import * as favsCtrl from "../controllers/favs.controller.js";

const router = Router();

// create a new list of favorite
router.post("/api/favs", favsCtrl.createFavsList);

// get all lists of favorites
router.get("/api/favs", favsCtrl.getAllFavsList);

// get a single list of favorite
router.get("/api/favs/:id", favsCtrl.getFavsListById);

// update a single list of favorite
router.put("/api/favs/:id", favsCtrl.updateFavsListById);

// delete a single list of favorite
router.delete("/api/favs/:id", favsCtrl.deleteFavsListById);

//
export default router;
