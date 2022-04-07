import { Router } from "express";

const router = Router();

// get all lists of favorites
router.get("api/favs", (req, res) => {});

// create a new list of favorite
router.post("api/favs", (req, res) => {});

// get a single list of favorite
router.get("api/favs/:id", (req, res) => {});

// update a single list of favorite
router.put("api/favs/:id", (req, res) => {});

// delete a single list of favorite
router.delete("api/favs/:id", (req, res) => {});

//
export default router;
