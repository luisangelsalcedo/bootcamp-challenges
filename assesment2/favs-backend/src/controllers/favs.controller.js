import Favs from "../models/favslist.model.js";

/**
 * * Creating a new favorites list
 * @param {Object} req - HTTPRequest Object
 * @param {String} req.body.name - Favorites list name
 * @return {HTTPResponse Object} - status 200 return {Favs} | status 500 return {message}
 */
export const createFavsList = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(500).json({ message: "Name is required" });

  const favs = new Favs({ name });

  try {
    const newFavs = await favs.save();
    res.status(201).json({ favs: newFavs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * * Get all favorites lists
 * @return {HTTPResponse Object} - status 200 return {Favs[]} | status 500 return {message} | status 204
 */
export const getAllFavsLists = async (req, res) => {
  try {
    const favs = await Favs.find();
    if (!favs.length) return res.status(204).send();
    res.status(200).json({ favs });
  } catch (error) {
    res.status(500).json({ message: "Lists not found" });
  }
};

/**
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

export const updateFavsListById = (req, res) => {
  res.send("Handler updateFavsListById");
};

export const deleteFavsListById = (req, res) => {
  res.send("Handler deleteFavsListById");
};
