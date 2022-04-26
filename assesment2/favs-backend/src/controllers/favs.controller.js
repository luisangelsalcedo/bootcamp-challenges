import Favs from "../models/favs.model.js";

/**
 * ## createFavsList
 * * Creating a new favorites list
 * @param {Object} req - HTTPRequest Object
 * @param {String} req.auth.id - User auth id
 * @param {String} req.body.name - Favorites list name
 * @return {HTTPResponse Object} - status 200 return {Favs} | status 400,500 return {message}
 */
export const createFavsList = async (req, res) => {
  const { id: userID } = req.auth;
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });

  const favs = new Favs({ name, owner: userID });

  try {
    const newFavs = await favs.save();
    res.status(201).json({ favs: newFavs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * ## getAllFavsLists
 * * Get all favorites lists
 * @param {String} req.auth.id - User auth id
 * @return {HTTPResponse Object} - status 200 return {Favs[]} | status 500 return {message} | status 204
 */
export const getAllFavsLists = async (req, res) => {
  const { id: userID } = req.auth;
  try {
    const arrFavs = await Favs.find({ owner: userID });
    if (!arrFavs.length) return res.status(204).send();
    res.status(200).json({ arrFavs });
  } catch (error) {
    res.status(500).json({ message: "Lists not found" });
  }
};

/**
 * ## getFavsListById
 * * Get favorites list by ID
 * @param {Object} req - HTTPRequest Object
 * @param {ObjectId} req.params.id - Favorites list ID
 * @return {HTTPResponse Object} - status 200 return {Favs} | status 500 return {message}
 */
export const getFavsListById = async (req, res) => {
  const { id } = req.params;

  try {
    const favs = await Favs.findById(id);
    res.status(200).json({ favs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * ## updateFavsListById
 * * Update favorites list by ID
 * @param {Object} req - HTTPRequest Object
 * @param {ObjectId} req.params.id - Favorites list ID
 * @param {Object} req.body - Favorites list edited object
 * @return {HTTPResponse Object} - status 200 return {Favs} | status 400,404,500 return {message}
 */
export const updateFavsListById = async (req, res) => {
  const { favslist } = req.body;
  const numKeys = Object.keys(favslist).length;
  if (!numKeys) return res.status(400).json({ message: "Content is required" });

  const { id } = req.params;

  try {
    const favs = await Favs.findByIdAndUpdate(id, favslist, { new: true });
    if (!favs) return res.status(404).json({ message: "Lists not found" });
    res.status(200).json({ favs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * ## deleteFavsListById
 * * Delete favorites list by ID
 * @param {Object} req - HTTPRequest Object
 * @param {ObjectId} req.params.id - Favorites list ID
 * @return {HTTPResponse Object} - status 200 return {notice} | status 500 return {message}
 */
export const deleteFavsListById = async (req, res) => {
  const { id } = req.params;

  try {
    const favs = await Favs.findByIdAndDelete(id);
    if (!favs) return res.status(500).json({ message: "Lists not found" });
    res.status(200).json({ notice: `${favs?.name} has been removed` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
