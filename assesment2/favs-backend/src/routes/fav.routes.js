import { Router } from "express";

const router = Router();

// get all favorites
router.get("api/fav", (req, res) => {});

// create a new favorite
router.post("api/fav", (req, res) => {});

// get a single favorite
router.get("api/fav/:id", (req, res) => {});

// update a single favorite
router.put("api/fav/:id", (req, res) => {});

// delete a single favorite
router.delete("api/fav/:id", (req, res) => {});

//
export default router;
